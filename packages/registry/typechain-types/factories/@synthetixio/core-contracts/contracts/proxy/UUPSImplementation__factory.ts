/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  UUPSImplementation,
  UUPSImplementationInterface,
} from '../../../../../@synthetixio/core-contracts/contracts/proxy/UUPSImplementation';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'ImplementationIsSterile',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UpgradeSimulationFailed',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'getImplementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'simulateUpgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class UUPSImplementation__factory {
  static readonly abi = _abi;
  static createInterface(): UUPSImplementationInterface {
    return new utils.Interface(_abi) as UUPSImplementationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UUPSImplementation {
    return new Contract(address, _abi, signerOrProvider) as UUPSImplementation;
  }
}
