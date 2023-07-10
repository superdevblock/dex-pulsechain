pragma solidity >=0.5.0;

interface IKeeCallee {
    function KeeCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
