/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MigratableMockV1,
  MigratableMockV1Interface,
} from "../../../../openzeppelin-contracts-4.6.0/mocks/SingleInheritanceInitializableMocks.sol/MigratableMockV1";

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
  "0x608060405234801561001057600080fd5b5061021f806100206000396000f3fe6080604052600436106100295760003560e01c80630c55699c1461002e578063fe4b84df14610056575b600080fd5b34801561003a57600080fd5b5061004460015481565b60405190815260200160405180910390f35b6100696100643660046101f9565b61006b565b005b600061007760016100de565b9050801561008f576000805461ff0019166101001790555b600182905580156100da576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b60008054610100900460ff1615610171578160ff1660011480156101015750303b155b6101695760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b506000919050565b60005460ff8084169116106101df5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610160565b506000805460ff191660ff92909216919091179055600190565b60006020828403121561020b57600080fd5b503591905056fea164736f6c634300080d000a";

type MigratableMockV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MigratableMockV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MigratableMockV1__factory extends ContractFactory {
  constructor(...args: MigratableMockV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MigratableMockV1> {
    return super.deploy(overrides || {}) as Promise<MigratableMockV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MigratableMockV1 {
    return super.attach(address) as MigratableMockV1;
  }
  override connect(signer: Signer): MigratableMockV1__factory {
    return super.connect(signer) as MigratableMockV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MigratableMockV1Interface {
    return new utils.Interface(_abi) as MigratableMockV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MigratableMockV1 {
    return new Contract(address, _abi, signerOrProvider) as MigratableMockV1;
  }
}
