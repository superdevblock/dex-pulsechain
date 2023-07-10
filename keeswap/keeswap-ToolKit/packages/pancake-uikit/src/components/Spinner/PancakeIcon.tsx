import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <defs>
        <image  width="128" height="102" id="img2" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABmCAYAAAADI5lUAAAAAXNSR0IB2cksfwAAIC5JREFUeJztfQl4k9eV9id5kVcZbbYsy7a8SLIl7/u+r3gDg2xDDAaMWbwAtllM2IyBkAUbTHDYHCDNsMQNEJImmAkzbmaKMw+TtM1klJm2dEnJDBM609btM//P9G9z/3tkbPQt2iXLZDjP8z4h8Ol+937n3HPPOffccwniGTmVJic/LR99/VK5s/vxjJxALS2tfV5eXsjV1RXl5ORrOzo2RTi7T89ojsjPz08tEvkj/MdZREertLt37ZE6uWvPyNHU2dmlFgqF9wg95s+gsnLh5IcffihyagedRXjgERjqH//ox0Jn98VRdPrMOWlWVs59goH5M1izpk3rxC7OHf3spz8Ttra27c3KytJ6eXlrg4KCHoWGhiI+n/91RESktra29oPRs6MFzu6nPUkWGnqD0GO2r68vKi+vmND/Ozc3d9TSsuqwM/vpUMKznLt4cX27QqH8C2FkJgB8fHxQaUnp5MDAgNp5PbadPvvsC05j4/JRgsRoN9TRvnnk1KmzXKwVxtlsl9l/EwhFqLtnW4Ez++wQam5ezc3JyRvncDhGGU+FQCB8eOHCG5ud1G2bSR6pLAdhJvTGVFJSeuPKWzc48O91i1q40dExJLsgIT5p0nk9dgBhdc6NiYkjqTtLAFbzoUMvtDuj77bQ1q19BUKhmDSW7Oy8hw+/+spD/zlY7hbweCQNsW3r9mondNkx1NjYNERYyfwZCIWi+2Aozn3vraONGzuk6pi4KUJvDO7uHNTVtaWf6fn8gpJJ/Wejo9Xjc9ZZR1J5eXlEYGAg6UNYi7zc/LE5H4CVFBoqY9R4+O8f3rp5iybIw8OvtQYGSmafE4sDHx05MvT0RwoLC4tGCBOMZbFYiHB3NW0P8AVT+/v3z+uACTb6uIsXLTG63GHD79bt2xMc6m/xZJnVAvBN8vKLjs5h1x1D0dEqw0x1c0XuywuQ3/cPI/4XI8jzZDtiB/CMCgq2BYadMxLzKCY2oVvf0HVzYaM1ZcHIxeWJpe/j44t2Pn9AQ/3t0NCxfkJvvEpl1CQWFO5c9t+udO3qdRikQYZ67FuG/P90jYQFX5xEbInA4G8iIyLn7TLQ2rq2nc/nk/q7ujIYTX1QgPa1hJP+PjYmljHog5eI2WckEgmqral7auweGi2pX2pYAMQ8JPjDWzQBAHgeXGlQAOLj4+87ZzTGqbt3RyYEswh9i1/NQ/9xPRf98WYB0l7IQGFiz9l/8/T0ROfOX6QxNzMzi2QMtqxqa53LcdiV8vIKDAoAKzeGkfkAvw8PGDYE8/KQc0ZjmHq6e9QSifQhodfPhEg+uv/daebPYGBVBFlAsouGqG3t3XdwTP+ZKKWqf+5GYmeqqKgyLAAysUEB8B7dZFAACgsL/+Kc0TATNvrUKSkppBh/wAIOunsqjcR8wPWBROTh/sQWyM8vpC0D6zd0kL5ZdVX1nbkcj11pcPC44SUAG3Q+l7bRmC/83WXkEh9uUABksrCbzhkNM6WmpJJmrAfHDV3ZG09jPuCfz2eiQP4TAzEyUkETAJUqRq1vRC5/bsW803gWkb9/gEFmsoVc5HOmCwn+4ztI8NvLyO+Hw4hdGG/Ya8DYsKFzxCkDYaC2tW1DJIvflYUG25WMzAc8fCcXRQZ56gmLB00Adu3aqxYJRbPPlJaWP90CsHTp0s8IIwwlsJsEBiER4o9YXh5Gmc/nC9Dmzd3zwioePHK8HbJ6CL3+bawJRr/7Xr5BAfjte/lIIX3ymwULBDQBuHXzFketerI30NTY9HRvEe/cuVNDdY2sRUJCwrzYJGlbuy5TLA4kGX1laYEGGT+DX13JRqEBT4RcHilnZC6EvEuKy8bWresYvX174ulOErl79xNudnYOaZ20BkKsFmuqqpw++0+fOpsZo44hGX1x4b7oZxezTArAxNFU5OftNvu74uKSz506mLmi8+cvRGdkZFjNfA8PD7RwYXWfM/pOpbS0zAlCr28+3h7o09PpJpkPGNyonA57z3gBefmDTh2MPm3fsbu8uXm1BlC3qEVTW1OvwTPObmHIEydOZObm5n2pHxI1BwEBYlRUVOr0YAhem7mlpaXjhF7fvDgu6NaRZLOY/+VbOSghkrzl+9rJUVo4GOinP/3l3O93VFRWa/38FiCAry+AC2lLdlW5AwMHpM3NK254eXmbZDzMFFmoTNvR3sX4keaaVq9qHXF3dyf18ZX1Cl2Y1xwBONwmR2w2e/a34WGRjOt/V9fmcWzs3g8ODp6c0yUPzzItQWeEQzowOjqa2dq69nZgoORroVCIvL29dTOCy+UisVj8KCM9XZudlT1vtkLXta1vpQrtxsXhZjEe8PGJVF18YOa3IEiNDcsYBVvfrUxLy7DLvsfDX3/pafKh4pLyOROAGbrzgzvCHdt3qAsLitShITK1RtOo/s4b35lXhySOD59olUgkjwi971KRKkD/9naOWcz/bDQDxcjIKWHYKL7X3z9A2w4G0j8zUF5eccWWvuOlhIvfswe7lT9fvnyl8WW0pKSCJgDRUVHJtnTgaaeGhmURWEuRvkuSgofu/VW2Scb//v18dHswBYWLybECiSQIYaYYnFgNDctblcpobWXlwjujZ0etmoCwhfzc8pWatNS03828Nzk57fPvfe99w2n3TctWDIWGysbCwsLHIiMVY0qFYqx5+XKlNR34NhA2+qSpqamknTlAZXog+mg4BU29zxzwgWDP3w+nozULQ5CPJzkBViAQoo6OTbQNIHtST09vbHp6xnU/Pz/SuyENfelSzbcnz9DRVFe7eJTDYY5M8nzdUF6cAG2slaIDbSp0vDsBHd4Qg7rqQ1Cmmod4Pu6033C5fqitrX1oJhvYEdTZtXm5WBz4C31XUx+FBYUTjnr3t4rq65f0meOpmAOdNyMLm1q9ep1Bo3Zg4GDrli29Y3v3HbJK5Z87f5Hb0rJqnJp+TgUY2seGT2Va847/NXRu9EI3qEtC78OpVWptY+Oy8aAgqUXMhxB4VVX1xKZNWw369V5eXq2urq46IzM6WvXQ0v5+9+KV6ISExE8NzXoqsI3xTAsYohXNLWp//wBSjD8uLn6qt3ebzjOBGD12T1+VyxVacFdhxrFZ7NmZ7unpBUz/Y3BwqLaosHT07bG3w4y9T6WKa4co58y74Lg4fofZ7m97+6baSLnCbIGELCRs1/wDHM2z9NvMazp+fKS8p2erZsmSZk1iQroGu5Sa+PhEi6KYkKqtVCpJ6evYYp/CFjsjQ0ZH34goK1uozs7MSj/+6qnTgWJxfGZ6nvrosRMhDx48YBl718OvvnLJL6jaSrUxKhfWmL3zFxcX14o1Fck9NQQXF1eUkJB8f9eu/nZ4t7nveGqorm4xyVWDYIpQ6G/RelpWSnaD3d05UykpubX27uvA/gMRlZU1WmCK/vuiolSTnZ1dJnf+IO28vn7pGY676SN2oJWCpcFTTU0rn7pTVRZRS8taWgyjtLg4x5I2sPoltYHX5vt4veyf+P5du8TlIRrXvWXL+qSkZNohGQh5l5fXmHwPBHY2dW0Zd3E1fYYC9lwSE1PGh48Of/uNvt6t22kC8MILLz9vSRsikYi2ZQ0h6qys7Ps7d+6xSRPs2fuKJis75ycLFiz4E/UdWCDMLhFTXVm93hzvBI8FrVy5agS7nM45U7C2tS2ip6f3ilqtvpOamgbWLV6DEpFcLp9cvWbd2MqVLSpsiNjNH27QNBwhKB+hp2dbv6XtlJRW3GDy/cFQS0pMmqqprhuLiopRX7x42ehsvXzlesSqVesKMGPHZLJwrTuDuoZlqvm5NX+DmWSWhunr21lL9U6YEBYW9vXIiZHVlo7dLnT27OvqzIysMR6PZ9Q4wTMBVVfX/mT3rj122WvAMzVTKgkZS0rOGquqqhtbv37j2IkTpy3eRXz76gecvfsOjEREyA32HRgnEAin+HyRtrKySrtoUf1IR0fX2IYNndqKioVaSPQMDJQ8MhREAmB3cqq3p7ff3H6dOX02PDo6+v8aam8GUVFR9xfVLXJO0kxmZnZBeHiE0Q5SIZFIvtm1a9cro2dHHRYds4ZeemlQpFnacC1IEvRHc/1rU4CtYIFQNFVYWDp29+4nFjGpurruc2NtQx8LCovuvXPjtnOYn5GWXu7t7WPVCWCsLVBHR6dD4+PW0vGho6W5ObnnY2Jip1xd3axiPPj22CVFhYXFo729Oy02yOoWLdEwLSH6yMnJu2+pUNmNDr9wuAAbHTYd/4ZNEvyB5q21euTIUMTq1eta8/LyR1XRai0kbEilwbosZUicAcMMAPkMcJ6Pz+N9hZmulcsVQ5s293YPDr5qFXMO7D8k9PcP+DFhdM0P1w4MvOi8XEmJJIiUJmUt4CQstgmeipOw2BeXXrx0TbN50xZNTW2DBo7AAerrNZrRs69rvvjsn2T2eE9RUVk3xO8Jg98sGmG7I8Qe77KKsrOyI7CFbFY0yhQgTLl48ZJ5kf7lCMJCI3rnxnh/U1NzPxYWHWprNf1vvHGxH6tvWgDo4a+/9E1KSIJjYYzfCzTO8uUrnBvgKSstNZruHSQLRz0nj6LDf/ce6r74GlImJSJjRlVt7aKn+xAEhXbv2h3R17d7LCEh6T4IOGFg3BDVS0pKvt/S0toOlcPgt7DD91zzqv6goOB/0d8vmEFOTu4t7Er7Omdkjwn7+AbX/jBlFDr1y0/QpW++nMW5qS9QfHmBkfUsDDlnJPYlsMZra5eMBfgHWKQdQd3L5apPjw+/OmsPPXjwwKX5uRUFcXHxY0qF8rHNJPjTwYEDNXM9LhqBIUQYGMzu8csk5s/g2L/+wKgWeJoKQVHpzTeviBoalg+FhobZtBxCJC8vr4gx+tjTs6O9pmbJEYcPxhyCjhIGBnHuJ58wCgCAy11gTADmrR3w0Ucflx88cFhz8tTrmuvX3tPcmfzRbBQPij2XlJRpPTwMq3oAxAPYHhzE8jX+HPYmpg4cODRvv4WOjAnAqz+aYGT+uT//HBmLks0nAQDD7cUXj2GDrXBSwBdppVLpI39/fwTVvIKDQyDN6354eLi2pqZOGxkRabgOsIc7IsqSEbHnOcQ6swWxzm9FxBvbEPFaF2LtbEJEJnMdJZVKrV2zZv38PRuoVqsNMnLxlo3oIoMArHqx3+ga6JyRkOmllwY5mzdv6w8Pj7StvJ03FvTmYkRc7EPEXx82ClZ3PSK4XrQ2WlpWz5vj8DQKDg42GANww2pu7flBdPEvv5pm/v/8Am298Bry5RmuAlZcXOJ0AQAfX7O08Z4pVW4K7JwYRMBMN8F4EgZaEEvv9BAgOlqNsJs4P0vjNWgaNKbO+vn4+qHwCKUuambsOUBRUfE+a/px84PbfPCbbR3P7dsTCRXlC22a9Sw/b8Ta0WgZ4/VRnU5rc+PGLfNmWSTRX9/6MEgmC/s9YYuafAyoID40eCzdnPdCVszJk2c1He1dw3CkDbtFD86cOWfz6eFFdUvuMHooXthoS5Yj1voqRDy/DBH9KxCxeTFiNeYjVkIEYvlMawt2MLaJhtYj4tYLxpl8ahMiQOVfoGsInY3AIUf/Fi6s7bd1bHajm+N/K9qyuUctmk65Uqempo7YY8ds4cKqfnP7oFLF91N/Hx0dZ9OG0sYNHbXUgAswglWeYtYaTlzvN/3MzUOI2FiDWK6PtaYnNg4HVpKfeW9gumKKXj8ep7w5j9648GZCY+OyIYVCNQYZsRho5hAjLAG2CkBiYpLWknWurW1DK5uyViYkJNn0kWJj42hZReyleYj44KD16lwf44cQu2sRYnmQD42wqtLpWkBFrjeYk5PnHAE4MXKuoLS0fBy7Pf/pakYemjVIiE/QbtjQbtGB0NWr1qjx0kNqB7ukD60NIq1Ysabcz28BKWrHisHtv73HPObuwstCehQiKgxrC/ZWDWJ5MWzrriyhP6skB9ji4lPmVgDOnn1dpGlcNhogDnQI0wGwdZqGlw/MNIst3Inv3+WGR8j/Hv/xG9A+PB4fKRXRD1tbuwzm1O96fq/0hRdeal+zpm0sSqG8DQUnZ6BSUfxwWINhnTeD+awj68gasDRpWtXPPIPtAda+FU/Uvr6GiZAg4tJOcpvfO4CIQHJNpfT0zH+29BtZTWvWrJdmZWU/pKYt2wshIaGorKz8Tl9fX4Et/ZTLlYlJSakvvvzy4PC6dRvVELRheg779FLsXYxgLTblau6YoGD12G7zBGBVGfm3sgBEfPfJb1kvtSKWL92/h6LYrO9sp7f51i5aPIDL9fs7/F83W76XWRQXl6wOFItJJ2P04ePphpKVPNRUKEYH1kbpDkUCjm6KQ5uXhqC6rACkkvkiL47hD+3j4zthz9IzhgiuYEtNSemzqkJZqsLstd21tZL82yAhZuLzeOYfnvYIfOjxBLZUhFjne5kF6ng7YrFpNtUxR38v4spbN9QBAYGM4cyIIG+0tSEM3Xw5Bf3eSB08wG9u5KH3DiWituoQxPdjDvliY3K8s7PLYULQ3LwaZv2k1VrsuSKzBcBlQzVde1zGan0QM1/IpbXNgpl/cpPhNpfkMPVpp6O+lY6AGWlpmZ9SX8zzdUcdi0N1JU7NLYcyA6id8/FraaixMBB5uJEtdvAcFi3WXapgd3rlyNEklSpmkilApVurBZgpsdjAy1FPr9cL03SxeDZY3qC+azIQ8c4+swWAvWkR+T3QPsT3BXTmE6G4/eF2w+0xqH+MbzA6HPGtZqmwsHiIWgDJz9sVnd+utpjxVPzXu/lo7wp67V84dHHw4BG7Rbji4+OFAoHwNer5Ph0w41nYsma31yAC1l1TgRpLsE1DfhdUO2VQ+wQEiV7rMt7W0lym2Q9FKoLt9Z1oNHjkWK1QKCR9NE93F3S8M0pX5sRWAZgRgk31IbTBFRaW2LPypwDjLvUdOtRmmm3UWQyIDJpaUng+iDi7xbgmOboBsbi0Uz+/wCjAMHrY1CZqalpGC4Csqwo2m7l/wKr+wyNJ6Mh6BfrkdBr6g4HnoHZ+chQ5wiWVBk99/PGn9soG5mP8A3UsRG2GeYwEo+36PrILZw76VxhnPiwFYAwaawOCTXHkuAZerv7C4wl2KBQKtp2+D53gWJJQSN7T9/N2Rz+/ZLoI0gxe74lD7q7Ta7zQl4PeO5Bk8Nl9LeSDIwKBCG3duttey0A4xr/pt09EYj/7nX7TTBx/YTrqJ/RDBNgC55gtdEYcWmVcANKUiKhKmwa2L1iddfTo4tpK2u98fLhfl5Qsdmx2lEbT1E598f4Ww+XOmVCURBag1oVSg8+e3RZNehYyWx/fKmIPasb4f/rts7BaNYuJfY2I0AvUsOC+gnEz7YS9z5leAqioz5nWOPj3LPAWvMneEhiwMfGZjs/4bWxaTj4S7eGKfnjWvLq3M6hI8yd1fnGuyOCzp3ujSM+6ubn/WSGP2mCHocDRMlJZehbfdzqqZg4TqcEccwNBf7Vj2nOwVADgUqz3H/dtbQXt37l+vFE7fBPTxOPxSQKQoODrypxZIgAvryMfpOxtCDP47P5VtLODf8bYYoehQDj5v0lt12WZr8ZbKUwQ4aXgkokdwKt7EVthOCnWKJLlTzyRrUupaz9y43g4PjH20sXLaqmUXPRoV7Nh5hnz93c1y1GCko92NsrRg6u5jM99fT0PFSYIqR8DfNzdto4lNb0ANpP+R79tFrh85grAxhq64QY5e4aev7wTuahkdMbCZg/4+gbADhMjVkkSeZMJsoZ45GPfsbGpjr8ar75eo4YNGf0Xn+6Jsovbx4R3DsTrLlGkfDQomLDG1rFoGjuVBJUZvUvMFwBqMGcBdsdGuxmfZWG1z47GLi2L8j4//JuRTss8CABoAooH4O7m7ngB8Pb2UVP31K8fopc+hytQru2PRwMrotDV/XG6mWwp8yEOkK5gTAn7JYbM1rFgASintb1dYz4TeslqWBeNO7WZ/tyV53WzmPauBdjPP9FhOfNnkB9Lai8oaA4OyPB4PDU1XPrui6k05g11KHWXIc08U5Hsj3168wolz7qK22KZmA94k7BfkIO8lq4pN58BELrV/70PtspfpTAUq212FD2YpVP7xzZaz3wAhKP12gwICHa8AERGKNXU8C9VAH6HDcKKNPrMHd0ebTbz/2YoWXePHu3DTWOFvcYDoWVS28WJZjOABfn6+nv6wFR9FxI8gliG0z7gvr3YahvzAXBmQK9dgSjQ8QKQmpqlhsKG+i++SgniQFRvQy1Z6iHoc2lPjFnM/+KNbBQV4meI+bD+Z9hrPCEySlkXSKowM+bPhnRsfW0IaVtH2h4bfM9PB3Oo/YdnIH5gj30FSCHXa5sv8Hf89bg7+3apqVFA2LShMfFCJlpWGDh7+3VTSbBuy9cU8389lotSFDSrXweRSIwk0rDhrOzKQHuNR8AX0a+pN2bJ6+PltdNZQDPLh7srYh1unbbWIdWLkvMI2T0s8BzswfwPDiJWODnzysXN1fFGIKRWi8Xk/f/SFLEuts/E0AfXctFXZl6ScO9SNlLJDB8A8fHxmQqRypLsOZ745NxuanIqq6PWPCaAutcr7Q7agL1rOSLy6LYLy80VsSE9fNzCPQNDAOORkjEUGhk1N6eBamvJFTaFfhz0i8uWGXhUfDScjCKlxqtWAzgcztQCUYDdAh4ZWWVqgYASlYOQrjmbO8AEvS1cECTdFfb0zBzEWllq+YaRIUA7FAMQ6gHJFeq5OSG9tXcHTW2e6lZZxXi4QOHi7jgk5NJr5UMKOfWWTQB2Q3/lzvGIX9LUaRdPQOgvIResgPj+K22mGXFmy7Qfb0xoIYaxrNA+jAfABhTWJNRkUR7DbaIOo7feejuTWnwwPnzB7J335uLfr+aivmXhpIuRZgCVMXbv2IpGBl9C1MAToRMCl08EQnGMPcYTG5fR7eZGEUA4eWuKGRCN45sowtiQb78zAtirYK0ooTEf4jLJKflze0VewfQtEqSObFgUZvQOXH038cbBeBTsz/zx+HwhOn/mJJr68gsdrl28gCSBjKnmX4eEytsyMoptrhfI9eORljVdsIvq01MBmzpCg94KIpRSRHTVTR/nmgFkAm1vmAYkhQBgZxCyfqj2Afz/iU7EgogjuHwMtQFg2QmVyW/YOn6LqbOzqxXuCtTvDFyICBs3v3mH2doHdf+D4+loZWkw4rjRwrs6KBUKdPPqlVnmz+DW9TEUHBJKex6vfd/ExqXZfJOmQhE/SutPYiQi3t1vWADe3MGYwGkVsC3B2k8+7sUCIfGgL436EAj8JyViydxXScvMzI7GqvlLaoeAsXW5gbOZwP/1bp7uitQDbVGoKsMfCbiGizzk5uahH//gNo35M/jHiZsoPEzGYCt4oOjYFJvuC0xNy4fKZeQsJ3DbINzLxHw4iwfJGmxmQbYK2eon7cOWdKrS6POQKp9fUO20OolggMF26gmCklBhLZY3NqHf/lJrUAAA9344iWLV9MoYAqH/PVuXghCZvJtW2ROseupBDLDC4TiXvRg/A0ju1BeAZObawz4+3EcxsaljRaX186I+Ipw82UPYQQggH//KhbNGBQDwL3c/QumpqaTfAuPE4iCb3KC6RS1cvsB/gtY32HWDGT/D/HrGHPzp3UA9sLw9EZvjToKLuxuCuv3sx4djdcBuIwt2CikBKDakn+u1z2KzpyKVcf15+ZXz6pJMILhitIuYzq79P4RJRrsgHl90TxmVMEHdWJIEStDnkxMmheDDd6/q6gXr/1auiLE5ElZW3lSAlxRaijgbTuPiWcnGVj3tVDP4/RbsIZiNpgLqt5vf9RDxh+G5urltdHV1/TXBMLuFQjFcyTIOqja9uJoLKiw4OIJ2qqiqstKkAAAKcskz0Z3DsUsoVI5nGe2ACPbnISmDWopFh6IERNwwYixaC+rpofkuAEAFpUtc5PLYmLi4zH6pJLQ/JCSsX6VK6vfy8lbn5FSqNY2dpHU6N7+6wMvTmyYsx14+ZFIAFpaTc/ICJbIpe4whOTmHExYefY+gMpoJEC+4bv6JIItASTnz8fF7hL/fvFP/NlNcfMYQ1fjy9xeh8evfNcj839z7HMXFkHfD7KUBgPBSIOXxhEwXY89qBKIy1XHMBzTmk97J8fC8jwVgXhh+dqWysgZRcEgk7WPnZGcbFIDRE0cRtY5ufEKWXXfDQkNkEVhzMQsB7PNf2+s45o8fQqz8ONI7RSL/+b8EWEtRcrXU09ObZg80NTSgf/3kzizj//Pnn6PhIy8j6nWnHp5eKCEp2+6bISHBMqm3tw9dCEADFMRPH8x0hAC8uZ12UFQdl/7tFQCgiHAlrYYPWNwQBl5SU42alzWizPQ07PLRT/AGBATdoNoX9iIsBCI+T8Rc0RMyd21N7WJCXxPtXeGRqm/3PX5AIWHKCaoQmIKXp9fDjIxih26FYo9FJJHImJcDEMjqDMRiKN9mFa48T5v9vr5+CAv4U1sQ22zCjOSGhMrNvk3E29v3fohUNifh0LpFLVKhf+C4IQGFIg4EnCswt0gUEyACCEsLpe2ISJXjs33mC4GlKxD4t/v4GN9ogVh4QkL2nMbC8XLACQ4Oo28c6dkGLFgWoNYvzGQLZz4LNqAoAubLXYAN3Mx5ezeSwwirXakiOnFELJZq8azTenn5TmFVeE8ZkzKhTkhz6gdJTMxs53J5xsvDerhjhkZMp5pD8ghohvf1zh1CnsDVvdMVwypSp0PIlDbwuB9JAqVzu9c/XwlrBqmjDD1rSK1OkYaGKibMuhoOvAYo+CAR6M4JsOPCpwtD8X2ZijvNIiwsatwZY3tGFlBRUa1GJBJPGrvPwFK4uLg+ipDHPmP+00RJyTkFeMZOmrJdTAEsflV04jO1/7QS9hZE8fGp/dh2mXRzc79n6gZPiHV4enojPz/+PbUqaRR+78TuPyN7Eux4RkZEacSBIf2igMAxV1fd4Y0xbNyNeXh6jfmLxGMyWVQ/dn8138o4v6OpsXHTvDEKbaW0tDyBRCyNYbHZxalpxaXJycmOq/L1LSPHVcRyDrkQ83RM/x8bEx9E9Hd8ggAAAABJRU5ErkJggg=="/>
      </defs>
      <use id="Background" href="#img2" x="0" y="13"/>
    </Svg>
  );
};

export default Icon;
