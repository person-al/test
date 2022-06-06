/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MigratableMockV2,
  MigratableMockV2Interface,
} from "../../../../openzeppelin-contracts-4.6.0/mocks/SingleInheritanceInitializableMocks.sol/MigratableMockV2";

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
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "anotherValue",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "payable",
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
  {
    inputs: [],
    name: "y",
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
  "0x608060405234801561001057600080fd5b506102a7806100206000396000f3fe60806040526004361061003f5760003560e01c80630c55699c146100445780633e54bacb1461006c578063a56dfe4a14610081578063fe4b84df14610097575b600080fd5b34801561005057600080fd5b5061005a60015481565b60405190815260200160405180910390f35b61007f61007a36600461025f565b6100aa565b005b34801561008d57600080fd5b5061005a60035481565b61007f6100a5366004610281565b6100d1565b60025460ff16156100ba57600080fd5b60019182556003556002805460ff19169091179055565b60006100dd6001610144565b905080156100f5576000805461ff0019166101001790555b60018290558015610140576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b60008054610100900460ff16156101d7578160ff1660011480156101675750303b155b6101cf5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b506000919050565b60005460ff8084169116106102455760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016101c6565b506000805460ff191660ff92909216919091179055600190565b6000806040838503121561027257600080fd5b50508035926020909101359150565b60006020828403121561029357600080fd5b503591905056fea164736f6c634300080d000a";

type MigratableMockV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MigratableMockV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MigratableMockV2__factory extends ContractFactory {
  constructor(...args: MigratableMockV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MigratableMockV2> {
    return super.deploy(overrides || {}) as Promise<MigratableMockV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MigratableMockV2 {
    return super.attach(address) as MigratableMockV2;
  }
  override connect(signer: Signer): MigratableMockV2__factory {
    return super.connect(signer) as MigratableMockV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MigratableMockV2Interface {
    return new utils.Interface(_abi) as MigratableMockV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MigratableMockV2 {
    return new Contract(address, _abi, signerOrProvider) as MigratableMockV2;
  }
}