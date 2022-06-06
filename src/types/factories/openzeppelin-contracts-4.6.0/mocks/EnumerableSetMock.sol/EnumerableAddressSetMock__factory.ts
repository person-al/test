/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EnumerableAddressSetMock,
  EnumerableAddressSetMockInterface,
} from "../../../../openzeppelin-contracts-4.6.0/mocks/EnumerableSetMock.sol/EnumerableAddressSetMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "OperationResult",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "add",
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
    name: "at",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "contains",
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
    name: "length",
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
        name: "value",
        type: "address",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "values",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506104dc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80635dbe47e8116100505780635dbe47e8146100ba578063971217b7146100dd578063e0886f90146100f257600080fd5b80630a3b0a4f146100775780631f7b6d321461008c57806329092d0e146100a7575b600080fd5b61008a6100853660046103ef565b61011d565b005b61009461016a565b6040519081526020015b60405180910390f35b61008a6100b53660046103ef565b61017b565b6100cd6100c83660046103ef565b610187565b604051901515815260200161009e565b6100e5610199565b60405161009e9190610418565b610105610100366004610465565b6101a5565b6040516001600160a01b03909116815260200161009e565b600061012981836101b1565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e338160405161015e911515815260200190565b60405180910390a15050565b600061017660006101cd565b905090565b600061012981836101d7565b600061019381836101ec565b92915050565b6060610176600061020e565b6000610193818361021b565b60006101c6836001600160a01b038416610227565b9392505050565b6000610193825490565b60006101c6836001600160a01b038416610276565b6001600160a01b038116600090815260018301602052604081205415156101c6565b606060006101c683610369565b60006101c683836103c5565b600081815260018301602052604081205461026e57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610193565b506000610193565b6000818152600183016020526040812054801561035f57600061029a60018361047e565b85549091506000906102ae9060019061047e565b90508181146103135760008660000182815481106102ce576102ce6104a3565b90600052602060002001549050808760000184815481106102f1576102f16104a3565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610324576103246104b9565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610193565b6000915050610193565b6060816000018054806020026020016040519081016040528092919081815260200182805480156103b957602002820191906000526020600020905b8154815260200190600101908083116103a5575b50505050509050919050565b60008260000182815481106103dc576103dc6104a3565b9060005260206000200154905092915050565b60006020828403121561040157600080fd5b81356001600160a01b03811681146101c657600080fd5b6020808252825182820181905260009190848201906040850190845b818110156104595783516001600160a01b031683529284019291840191600101610434565b50909695505050505050565b60006020828403121561047757600080fd5b5035919050565b60008282101561049e57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080d000a";

type EnumerableAddressSetMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnumerableAddressSetMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnumerableAddressSetMock__factory extends ContractFactory {
  constructor(...args: EnumerableAddressSetMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EnumerableAddressSetMock> {
    return super.deploy(overrides || {}) as Promise<EnumerableAddressSetMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EnumerableAddressSetMock {
    return super.attach(address) as EnumerableAddressSetMock;
  }
  override connect(signer: Signer): EnumerableAddressSetMock__factory {
    return super.connect(signer) as EnumerableAddressSetMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnumerableAddressSetMockInterface {
    return new utils.Interface(_abi) as EnumerableAddressSetMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnumerableAddressSetMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EnumerableAddressSetMock;
  }
}