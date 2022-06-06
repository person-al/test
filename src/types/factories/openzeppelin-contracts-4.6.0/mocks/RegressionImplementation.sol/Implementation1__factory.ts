/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Implementation1,
  Implementation1Interface,
} from "../../../../openzeppelin-contracts-4.6.0/mocks/RegressionImplementation.sol/Implementation1";

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
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610201806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063552410771461003b5780638129fc1c14610050575b600080fd5b61004e6100493660046101db565b600155565b005b61004e600061005f60016100c0565b90508015610077576000805461ff0019166101001790555b80156100bd576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b60008054610100900460ff1615610153578160ff1660011480156100e35750303b155b61014b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b506000919050565b60005460ff8084169116106101c15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610142565b506000805460ff191660ff92909216919091179055600190565b6000602082840312156101ed57600080fd5b503591905056fea164736f6c634300080d000a";

type Implementation1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Implementation1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Implementation1__factory extends ContractFactory {
  constructor(...args: Implementation1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Implementation1> {
    return super.deploy(overrides || {}) as Promise<Implementation1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Implementation1 {
    return super.attach(address) as Implementation1;
  }
  override connect(signer: Signer): Implementation1__factory {
    return super.connect(signer) as Implementation1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Implementation1Interface {
    return new utils.Interface(_abi) as Implementation1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Implementation1 {
    return new Contract(address, _abi, signerOrProvider) as Implementation1;
  }
}