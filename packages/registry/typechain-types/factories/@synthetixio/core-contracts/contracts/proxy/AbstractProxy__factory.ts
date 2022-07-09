/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  AbstractProxy,
  AbstractProxyInterface,
} from "../../../../../@synthetixio/core-contracts/contracts/proxy/AbstractProxy";

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

export class AbstractProxy__factory {
  static readonly abi = _abi;
  static createInterface(): AbstractProxyInterface {
    return new utils.Interface(_abi) as AbstractProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AbstractProxy {
    return new Contract(address, _abi, signerOrProvider) as AbstractProxy;
  }
}
