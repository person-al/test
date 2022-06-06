/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ArraysImpl,
  ArraysImplInterface,
} from "../../../openzeppelin-contracts-4.6.0/mocks/ArraysImpl";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "element",
        type: "uint256",
      },
    ],
    name: "findUpperBound",
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
  "0x608060405234801561001057600080fd5b5060405161037c38038061037c83398101604081905261002f916100bf565b8051610042906000906020840190610049565b505061017c565b828054828255906000526020600020908101928215610084579160200282015b82811115610084578251825591602001919060010190610069565b50610090929150610094565b5090565b5b808211156100905760008155600101610095565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156100d257600080fd5b82516001600160401b03808211156100e957600080fd5b818501915085601f8301126100fd57600080fd5b81518181111561010f5761010f6100a9565b8060051b604051601f19603f83011681018181108582111715610134576101346100a9565b60405291825284820192508381018501918883111561015257600080fd5b938501935b8285101561017057845184529385019392850192610157565b98975050505050505050565b6101f18061018b6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806333e3a58a14610030575b600080fd5b61004361003e36600461014e565b610055565b60405190815260200160405180910390f35b60006100618183610067565b92915050565b8154600090810361007a57506000610061565b82546000905b808210156100d6576000610094838361012c565b9050848682815481106100a9576100a9610167565b906000526020600020015411156100c2578091506100d0565b6100cd816001610193565b92505b50610080565b60008211801561010b575083856100ee6001856101ab565b815481106100fe576100fe610167565b9060005260206000200154145b156101245761011b6001836101ab565b92505050610061565b509392505050565b600061013b60028484186101c2565b61014790848416610193565b9392505050565b60006020828403121561016057600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156101a6576101a661017d565b500190565b6000828210156101bd576101bd61017d565b500390565b6000826101df57634e487b7160e01b600052601260045260246000fd5b50049056fea164736f6c634300080d000a";

type ArraysImplConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArraysImplConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArraysImpl__factory extends ContractFactory {
  constructor(...args: ArraysImplConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    array: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ArraysImpl> {
    return super.deploy(array, overrides || {}) as Promise<ArraysImpl>;
  }
  override getDeployTransaction(
    array: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(array, overrides || {});
  }
  override attach(address: string): ArraysImpl {
    return super.attach(address) as ArraysImpl;
  }
  override connect(signer: Signer): ArraysImpl__factory {
    return super.connect(signer) as ArraysImpl__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArraysImplInterface {
    return new utils.Interface(_abi) as ArraysImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArraysImpl {
    return new Contract(address, _abi, signerOrProvider) as ArraysImpl;
  }
}
