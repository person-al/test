/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20ReturnTrueMock,
  ERC20ReturnTrueMockInterface,
} from "../../../../openzeppelin-contracts-4.6.0/mocks/SafeERC20Helper.sol/ERC20ReturnTrueMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "allowance_",
        type: "uint256",
      },
    ],
    name: "setAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610206806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80633ba93f26116100505780633ba93f26146100b7578063a9059cbb1461006c578063dd62ed3e146100d957600080fd5b8063095ea7b31461006c57806323b872dd1461009b575b600080fd5b61008661007a366004610147565b50506000600190815590565b60405190151581526020015b60405180910390f35b6100866100a9366004610171565b600060019081559392505050565b6100d76100c53660046101ad565b33600090815260208190526040902055565b005b6101106100e73660046101c6565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b604051908152602001610092565b803573ffffffffffffffffffffffffffffffffffffffff8116811461014257600080fd5b919050565b6000806040838503121561015a57600080fd5b6101638361011e565b946020939093013593505050565b60008060006060848603121561018657600080fd5b61018f8461011e565b925061019d6020850161011e565b9150604084013590509250925092565b6000602082840312156101bf57600080fd5b5035919050565b600080604083850312156101d957600080fd5b6101e28361011e565b91506101f06020840161011e565b9050925092905056fea164736f6c634300080d000a";

type ERC20ReturnTrueMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ReturnTrueMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20ReturnTrueMock__factory extends ContractFactory {
  constructor(...args: ERC20ReturnTrueMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20ReturnTrueMock> {
    return super.deploy(overrides || {}) as Promise<ERC20ReturnTrueMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20ReturnTrueMock {
    return super.attach(address) as ERC20ReturnTrueMock;
  }
  override connect(signer: Signer): ERC20ReturnTrueMock__factory {
    return super.connect(signer) as ERC20ReturnTrueMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20ReturnTrueMockInterface {
    return new utils.Interface(_abi) as ERC20ReturnTrueMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20ReturnTrueMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20ReturnTrueMock;
  }
}
