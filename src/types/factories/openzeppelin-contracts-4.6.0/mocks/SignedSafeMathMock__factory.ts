/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SignedSafeMathMock,
  SignedSafeMathMockInterface,
} from "../../../openzeppelin-contracts-4.6.0/mocks/SignedSafeMathMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "b",
        type: "int256",
      },
    ],
    name: "add",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "b",
        type: "int256",
      },
    ],
    name: "div",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "b",
        type: "int256",
      },
    ],
    name: "mul",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "b",
        type: "int256",
      },
    ],
    name: "sub",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061029d806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634350913814610051578063a5f3c23b14610076578063adefc37b14610089578063bbe93d911461009c575b600080fd5b61006461005f366004610116565b6100af565b60405190815260200160405180910390f35b610064610084366004610116565b6100c2565b610064610097366004610116565b6100ce565b6100646100aa366004610116565b6100da565b60006100bb83836100e6565b9392505050565b60006100bb83836100f2565b60006100bb83836100fe565b60006100bb838361010a565b60006100bb828461014e565b60006100bb828461018a565b60006100bb82846101ca565b60006100bb8284610209565b6000806040838503121561012957600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b60008261016b57634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561018557610185610138565b500590565b6000808212826001600160ff1b03038413811516156101ab576101ab610138565b600160ff1b83900384128116156101c4576101c4610138565b50500190565b60008083128015600160ff1b8501841216156101e8576101e8610138565b836001600160ff1b0301831381161561020357610203610138565b50500390565b60006001600160ff1b0360008413600084138583048511828216161561023157610231610138565b600160ff1b600087128281168783058912161561025057610250610138565b6000871292508782058712848416161561026c5761026c610138565b8785058712818416161561028257610282610138565b50505092909302939250505056fea164736f6c634300080d000a";

type SignedSafeMathMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SignedSafeMathMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SignedSafeMathMock__factory extends ContractFactory {
  constructor(...args: SignedSafeMathMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SignedSafeMathMock> {
    return super.deploy(overrides || {}) as Promise<SignedSafeMathMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SignedSafeMathMock {
    return super.attach(address) as SignedSafeMathMock;
  }
  override connect(signer: Signer): SignedSafeMathMock__factory {
    return super.connect(signer) as SignedSafeMathMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignedSafeMathMockInterface {
    return new utils.Interface(_abi) as SignedSafeMathMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignedSafeMathMock {
    return new Contract(address, _abi, signerOrProvider) as SignedSafeMathMock;
  }
}
