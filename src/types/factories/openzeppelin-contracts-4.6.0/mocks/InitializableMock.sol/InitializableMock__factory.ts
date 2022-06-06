/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  InitializableMock,
  InitializableMockInterface,
} from "../../../../openzeppelin-contracts-4.6.0/mocks/InitializableMock.sol/InitializableMock";

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
    name: "fail",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initializeOnlyInitializing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_x",
        type: "uint256",
      },
    ],
    name: "initializeWithX",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "initializerNested",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initializerRan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_x",
        type: "uint256",
      },
    ],
    name: "nonInitializable",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "onlyInitializingNested",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "onlyInitializingRan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "x",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610563806100206000396000f3fe6080604052600436106100b05760003560e01c80637cffe97a11610069578063a9cc47181161004e578063a9cc471814610178578063c3b8ef2a1461018d578063e955c9ec146101ad57600080fd5b80637cffe97a146101325780638129fc1c1461016357600080fd5b806310065ed21161009a57806310065ed2146100f357806368449d1b1461010857806376268ae81461011d57600080fd5b806218eaa8146100b55780630c55699c146100ca575b600080fd5b6100c86100c336600461053d565b6101c0565b005b3480156100d657600080fd5b506100e060015481565b6040519081526020015b60405180910390f35b3480156100ff57600080fd5b506100c8610233565b34801561011457600080fd5b506100c86102ca565b34801561012957600080fd5b506100c8610340565b34801561013e57600080fd5b50600054610153906301000000900460ff1681565b60405190151581526020016100ea565b34801561016f57600080fd5b506100c8610368565b34801561018457600080fd5b506100c86103df565b34801561019957600080fd5b506000546101539062010000900460ff1681565b6100c86101bb36600461053d565b600155565b60006101cc6001610427565b905080156101e4576000805461ff0019166101001790555b6001829055801561022f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b600054610100900460ff166102b55760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000805463ff00000019166301000000179055565b60006102d66001610427565b905080156102ee576000805461ff0019166101001790555b6102f6610233565b801561033d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a15b50565b600061034c6001610427565b90508015610364576000805461ff0019166101001790555b6102f65b60006103746001610427565b9050801561038c576000805461ff0019166101001790555b6000805462ff0000191662010000179055801561033d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602001610334565b60405162461bcd60e51b815260206004820181905260248201527f496e697469616c697a61626c654d6f636b20666f72636564206661696c75726560448201526064016102ac565b60008054610100900460ff16156104b5578160ff16600114801561044a5750303b155b6104ad5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016102ac565b506000919050565b60005460ff8084169116106105235760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016102ac565b506000805460ff191660ff92909216919091179055600190565b60006020828403121561054f57600080fd5b503591905056fea164736f6c634300080d000a";

type InitializableMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InitializableMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InitializableMock__factory extends ContractFactory {
  constructor(...args: InitializableMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InitializableMock> {
    return super.deploy(overrides || {}) as Promise<InitializableMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InitializableMock {
    return super.attach(address) as InitializableMock;
  }
  override connect(signer: Signer): InitializableMock__factory {
    return super.connect(signer) as InitializableMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InitializableMockInterface {
    return new utils.Interface(_abi) as InitializableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InitializableMock {
    return new Contract(address, _abi, signerOrProvider) as InitializableMock;
  }
}
