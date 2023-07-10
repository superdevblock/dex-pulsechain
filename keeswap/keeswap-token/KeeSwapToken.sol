// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../ERC20.sol";
import "../SafeMath.sol";
import "../Ownable.sol";
import "../Address.sol";

contract KeeSwapToken is Context, ERC20, Ownable {
  using SafeMath for uint256;
  using Address for address;

  // 'taxEnabled' will be true after token is launched. It will be also managed by voting.  
  bool public taxEnabled;
  
  // All fees will be processed manually by owner.
  uint256 public devFee = 500;
  uint256 public marketingFee = 400;
  uint256 public liquidityFee = 200;
  address public devFeeAddress;
  address public marketingFeeAddress;
  address public liquidityFeeAddress;
  
  // The contract addresses for extra function like staking contract has to be excluded from the tax fee.
  mapping (address => bool) private _isExcludedFromFee;

  constructor() ERC20("KeeSwap Token", "KEE") {
        _isExcludedFromFee[owner()] = true;

        _mint(address(this), 100 * (10 ** 6) * (10 ** uint256(decimals())));
        _approve(address(this), _msgSender(), totalSupply());
        _transfer(address(this), _msgSender(), totalSupply());
  }
  
  function isExcludedFromFee(address _account) public view returns (bool) {
        return _isExcludedFromFee[_account];
  }

  function setExcludeFromFee(address _account, bool _enable) external onlyOwner() {
        require(_isExcludedFromFee[_account] != _enable, "KEE: Duplicate Process of excludeFromFee.");
        _isExcludedFromFee[_account] = _enable;
  }

  function setTaxEnable(bool _enable) external onlyOwner() {
        require(taxEnabled != _enable, "KEE: Duplicate Process of setTaxEnable.");
        taxEnabled = _enable;
  }
  
  function setDevFee(uint256 _amount) external onlyOwner() {
        require(_amount <= 500, "KEE: devFee cannot exceed 5%.");
        devFee = _amount;
  }
  
  function setMarketingFee(uint256 _amount) external onlyOwner() {
        require(_amount <= 500, "KEE: marketingFee cannot exceed 5%.");
        marketingFee = _amount;
  }

  function setLiquidityFee(uint256 _amount) external onlyOwner() {
        require(_amount <= 500, "KEE: liquidityFee cannot exceed 5%.");
        liquidityFee = _amount;
  }
  
  function setDevFeeAddress(address _newAddress) external onlyOwner() {
        require(devFeeAddress != _newAddress, "KEE: Duplicate Process of devFeeAddress.");
        devFeeAddress = _newAddress;
  }

  function setMarketingFeeAddress(address _newAddress) external onlyOwner() {
        require(marketingFeeAddress != _newAddress, "KEE: Duplicate Process of marketingFeeAddress.");
        marketingFeeAddress = _newAddress;
  }
  
  function setLiquidityFeeAddress(address _newAddress) external onlyOwner() {
        require(liquidityFeeAddress != _newAddress, "KEE: Duplicate Process of liquidityFeeAddress.");
        liquidityFeeAddress = _newAddress;
  }

  function recoverContractBalance(address _account) external onlyOwner() {
        uint256 recoverBalance = address(this).balance;
        payable(_account).transfer(recoverBalance);
  }

  function recoverERC20(IERC20 recoverToken, uint256 tokenAmount, address _recoveryAddress) external onlyOwner() {
        recoverToken.transfer(_recoveryAddress, tokenAmount);
  }

  function _transfer(address from, address to, uint256 amount ) internal virtual override {
        require(from != address(0), "KEE: transfer from the zero address");
        require(to != address(0), "KEE: transfer to the zero address");
        require(amount > 0, "KEE: Transfer amount must be greater than zero");

        bool _isTax = taxEnabled;
        if (_isTax && (_isExcludedFromFee[from] || _isExcludedFromFee[to]))
            _isTax = false;
        
        if (_isTax){
            uint256 devAmount = amount.mul(devFee).div(10000);
            uint256 marketingAmount = amount.mul(marketingFee).div(10000);
            uint256 liquidityAmount = amount.mul(liquidityFee).div(10000);

            uint256 sendAmount = amount.sub(devAmount).sub(marketingAmount).sub(liquidityAmount);
            super._transfer(from, to, sendAmount);
            super._transfer(from, devFeeAddress, devAmount);
            super._transfer(from, marketingFeeAddress, marketingAmount);
            super._transfer(from, liquidityFeeAddress, liquidityAmount);

        // on buy transaction
        } else {
            super._transfer(from, to, amount); 
        }
  }
}