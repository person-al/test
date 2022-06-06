/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PausableMock,
  PausableMockInterface,
} from "../../../openzeppelin-contracts-4.6.0/mocks/PausableMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "count",
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
  {
    inputs: [],
    name: "drasticMeasure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "drasticMeasureTaken",
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
    name: "normalProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506000805461ffff191681556001556103188061002e6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806376657b8e1161005b57806376657b8e146100bf5780638456cb59146100d15780639958f045146100d9578063e7651d7a146100e157600080fd5b806306661abd146100825780633f4ba83a1461009e5780635c975abb146100a8575b600080fd5b61008b60015481565b6040519081526020015b60405180910390f35b6100a66100e9565b005b60005460ff165b6040519015158152602001610095565b6000546100af90610100900460ff1681565b6100a66100f3565b6100a66100fb565b6100a6610163565b6100f16101c0565b565b6100f1610269565b60005460ff166101525760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064015b60405180910390fd5b6000805461ff001916610100179055565b60005460ff16156101a95760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610149565b600180549060006101b9836102e4565b9190505550565b60005460ff166102125760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610149565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60005460ff16156102af5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610149565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861023f3390565b60006001820161030457634e487b7160e01b600052601160045260246000fd5b506001019056fea164736f6c634300080d000a";

type PausableMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PausableMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PausableMock__factory extends ContractFactory {
  constructor(...args: PausableMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PausableMock> {
    return super.deploy(overrides || {}) as Promise<PausableMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PausableMock {
    return super.attach(address) as PausableMock;
  }
  override connect(signer: Signer): PausableMock__factory {
    return super.connect(signer) as PausableMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PausableMockInterface {
    return new utils.Interface(_abi) as PausableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PausableMock {
    return new Contract(address, _abi, signerOrProvider) as PausableMock;
  }
}