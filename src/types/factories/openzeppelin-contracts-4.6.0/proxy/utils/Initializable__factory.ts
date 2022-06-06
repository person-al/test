/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Initializable,
  InitializableInterface,
} from "../../../../openzeppelin-contracts-4.6.0/proxy/utils/Initializable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
];

export class Initializable__factory {
  static readonly abi = _abi;
  static createInterface(): InitializableInterface {
    return new utils.Interface(_abi) as InitializableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Initializable {
    return new Contract(address, _abi, signerOrProvider) as Initializable;
  }
}
