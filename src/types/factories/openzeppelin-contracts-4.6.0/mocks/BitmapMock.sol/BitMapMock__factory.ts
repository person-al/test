/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BitMapMock,
  BitMapMockInterface,
} from "../../../../openzeppelin-contracts-4.6.0/mocks/BitmapMock.sol/BitMapMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "get",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "setTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "unset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101c2806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063088d22551461005157806360fe47b1146100845780639507d39a146100b4578063dcc9d43c146100fa575b600080fd5b61008261005f366004610167565b600881901c60009081526020819052604090208054600160ff84161b1916905550565b005b610082610092366004610167565b600881901c60009081526020819052604090208054600160ff84161b17905550565b6100e66100c2366004610167565b600881901c600090815260208190526040812054600160ff84161b16151592915050565b604051901515815260200160405180910390f35b610082610108366004610180565b61011460008383610118565b5050565b801561014257600882901c60009081526020849052604090208054600160ff85161b179055505050565b600882901c60009081526020849052604090208054600160ff85161b19169055505050565b60006020828403121561017957600080fd5b5035919050565b6000806040838503121561019357600080fd5b82359150602083013580151581146101aa57600080fd5b80915050925092905056fea164736f6c634300080d000a";

type BitMapMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BitMapMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BitMapMock__factory extends ContractFactory {
  constructor(...args: BitMapMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BitMapMock> {
    return super.deploy(overrides || {}) as Promise<BitMapMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BitMapMock {
    return super.attach(address) as BitMapMock;
  }
  override connect(signer: Signer): BitMapMock__factory {
    return super.connect(signer) as BitMapMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BitMapMockInterface {
    return new utils.Interface(_abi) as BitMapMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BitMapMock {
    return new Contract(address, _abi, signerOrProvider) as BitMapMock;
  }
}
