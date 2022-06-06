/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155ReceiverMock,
  ERC1155ReceiverMockInterface,
} from "../../../openzeppelin-contracts-4.6.0/mocks/ERC1155ReceiverMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "recRetval",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "recReverts",
        type: "bool",
      },
      {
        internalType: "bytes4",
        name: "batRetval",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "batReverts",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "BatchReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161071638038061071683398101604081905261002f916100bd565b6000805491151569010000000000000000000260ff60481b1960e094851c65010000000000021664ffffffffff60281b199515156401000000000264ffffffffff199094169690941c95909517919091179290921617919091179055610111565b80516001600160e01b0319811681146100a857600080fd5b919050565b805180151581146100a857600080fd5b600080600080608085870312156100d357600080fd5b6100dc85610090565b93506100ea602086016100ad565b92506100f860408601610090565b9150610106606086016100ad565b905092959194509250565b6105f6806101206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063bc197c811461007f578063f23a6e61146100ab575b600080fd5b61006a610054366004610283565b6001600160e01b0319166301ffc9a760e01b1490565b60405190151581526020015b60405180910390f35b61009261008d36600461036b565b6100be565b6040516001600160e01b03199091168152602001610076565b6100926100b9366004610426565b6101ad565b600080546901000000000000000000900460ff161561014a5760405162461bcd60e51b815260206004820152602f60248201527f4552433131353552656365697665724d6f636b3a20726576657274696e67206f60448201527f6e2062617463682072656365697665000000000000000000000000000000000060648201526084015b60405180910390fd5b7f0bcad9224ba33b574e9c85298de2f44b4c80015a21aa5df474896444909863d889898989898989895a60405161018999989796959493929190610516565b60405180910390a15060005465010000000000900460e01b98975050505050505050565b60008054640100000000900460ff161561022f5760405162461bcd60e51b815260206004820152602960248201527f4552433131353552656365697665724d6f636b3a20726576657274696e67206f60448201527f6e207265636569766500000000000000000000000000000000000000000000006064820152608401610141565b7f20dfa9f79060c8c4d7fe892c97c71bcf6e3b63d1dcf66fea7aefc0211628cf298787878787875a60405161026a979695949392919061058f565b60405180910390a15060005460e01b9695505050505050565b60006020828403121561029557600080fd5b81356001600160e01b0319811681146102ad57600080fd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146102d857600080fd5b919050565b60008083601f8401126102ef57600080fd5b50813567ffffffffffffffff81111561030757600080fd5b6020830191508360208260051b850101111561032257600080fd5b9250929050565b60008083601f84011261033b57600080fd5b50813567ffffffffffffffff81111561035357600080fd5b60208301915083602082850101111561032257600080fd5b60008060008060008060008060a0898b03121561038757600080fd5b610390896102b4565b975061039e60208a016102b4565b9650604089013567ffffffffffffffff808211156103bb57600080fd5b6103c78c838d016102dd565b909850965060608b01359150808211156103e057600080fd5b6103ec8c838d016102dd565b909650945060808b013591508082111561040557600080fd5b506104128b828c01610329565b999c989b5096995094979396929594505050565b60008060008060008060a0878903121561043f57600080fd5b610448876102b4565b9550610456602088016102b4565b94506040870135935060608701359250608087013567ffffffffffffffff81111561048057600080fd5b61048c89828a01610329565b979a9699509497509295939492505050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8311156104d057600080fd5b8260051b8083602087013760009401602001938452509192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600073ffffffffffffffffffffffffffffffffffffffff808c168352808b1660208401525060c0604083015261055060c08301898b61049e565b828103606084015261056381888a61049e565b905082810360808401526105788186886104ed565b9150508260a08301529a9950505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff808a16835280891660208401525086604083015285606083015260c060808301526105d560c0830185876104ed565b90508260a08301529897505050505050505056fea164736f6c634300080d000a";

type ERC1155ReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155ReceiverMock__factory extends ContractFactory {
  constructor(...args: ERC1155ReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    recRetval: BytesLike,
    recReverts: boolean,
    batRetval: BytesLike,
    batReverts: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155ReceiverMock> {
    return super.deploy(
      recRetval,
      recReverts,
      batRetval,
      batReverts,
      overrides || {}
    ) as Promise<ERC1155ReceiverMock>;
  }
  override getDeployTransaction(
    recRetval: BytesLike,
    recReverts: boolean,
    batRetval: BytesLike,
    batReverts: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      recRetval,
      recReverts,
      batRetval,
      batReverts,
      overrides || {}
    );
  }
  override attach(address: string): ERC1155ReceiverMock {
    return super.attach(address) as ERC1155ReceiverMock;
  }
  override connect(signer: Signer): ERC1155ReceiverMock__factory {
    return super.connect(signer) as ERC1155ReceiverMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155ReceiverMockInterface {
    return new utils.Interface(_abi) as ERC1155ReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155ReceiverMock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155ReceiverMock;
  }
}
