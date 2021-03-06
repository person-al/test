/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1820ImplementerMock,
  ERC1820ImplementerMockInterface,
} from "../../../openzeppelin-contracts-4.6.0/mocks/ERC1820ImplementerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "interfaceHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "canImplementInterfaceForAddress",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "interfaceHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "registerInterfaceForAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610167806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063249cb3fa1461003b5780635536e45d14610060575b600080fd5b61004e610049366004610111565b6100ac565b60405190815260200160405180910390f35b6100aa61006e366004610111565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff9390931684529190529020805460ff19166001179055565b005b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205460ff166100e857600061010a565b7fa2ef4600d742022d532d4747cb3547474667d6f13804902513b2ec01c848f4b45b9392505050565b6000806040838503121561012457600080fd5b82359150602083013573ffffffffffffffffffffffffffffffffffffffff8116811461014f57600080fd5b80915050925092905056fea164736f6c634300080d000a";

type ERC1820ImplementerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1820ImplementerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1820ImplementerMock__factory extends ContractFactory {
  constructor(...args: ERC1820ImplementerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1820ImplementerMock> {
    return super.deploy(overrides || {}) as Promise<ERC1820ImplementerMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC1820ImplementerMock {
    return super.attach(address) as ERC1820ImplementerMock;
  }
  override connect(signer: Signer): ERC1820ImplementerMock__factory {
    return super.connect(signer) as ERC1820ImplementerMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1820ImplementerMockInterface {
    return new utils.Interface(_abi) as ERC1820ImplementerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1820ImplementerMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1820ImplementerMock;
  }
}
