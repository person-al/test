/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BridgeArbitrumL2Mock,
  BridgeArbitrumL2MockInterface,
} from "../../../../../openzeppelin-contracts-4.6.0/mocks/crosschain/bridges.sol/BridgeArbitrumL2Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "expected",
        type: "address",
      },
    ],
    name: "InvalidCrossChainSender",
    type: "error",
  },
  {
    inputs: [],
    name: "NotCrossChainCall",
    type: "error",
  },
  {
    inputs: [],
    name: "isTopLevelCall",
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
    name: "myCallersAddressWithoutAliasing",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "relayAs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wasMyCallersAddressAliased",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610319806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806308bd624c14610051578063175a260b14610075578063d74523b31461007c578063fb417a5b14610097575b600080fd5b6000546001600160a01b031615155b60405190151581526020015b60405180910390f35b6001610060565b6000546040516001600160a01b03909116815260200161006c565b6100aa6100a5366004610213565b6100ac565b005b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff198316178355604051918116929182918816906100f090889088906102a7565b6000604051808303816000865af19150503d806000811461012d576040519150601f19603f3d011682016040523d82523d6000602084013e610132565b606091505b509150915061017782826040518060400160405280601781526020017f6c6f772d6c6576656c2063616c6c2072657665727465640000000000000000008152506101ae565b50506000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0393909316929092179091555050505050565b606083156101bd5750816101f0565b8251156101cd5782518084602001fd5b8160405162461bcd60e51b81526004016101e791906102b7565b60405180910390fd5b9392505050565b80356001600160a01b038116811461020e57600080fd5b919050565b6000806000806060858703121561022957600080fd5b610232856101f7565b9350602085013567ffffffffffffffff8082111561024f57600080fd5b818701915087601f83011261026357600080fd5b81358181111561027257600080fd5b88602082850101111561028457600080fd5b60208301955080945050505061029c604086016101f7565b905092959194509250565b8183823760009101908152919050565b600060208083528351808285015260005b818110156102e4578581018301518582016040015282016102c8565b818111156102f6576000604083870101525b50601f01601f191692909201604001939250505056fea164736f6c634300080d000a";

type BridgeArbitrumL2MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeArbitrumL2MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BridgeArbitrumL2Mock__factory extends ContractFactory {
  constructor(...args: BridgeArbitrumL2MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BridgeArbitrumL2Mock> {
    return super.deploy(overrides || {}) as Promise<BridgeArbitrumL2Mock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BridgeArbitrumL2Mock {
    return super.attach(address) as BridgeArbitrumL2Mock;
  }
  override connect(signer: Signer): BridgeArbitrumL2Mock__factory {
    return super.connect(signer) as BridgeArbitrumL2Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeArbitrumL2MockInterface {
    return new utils.Interface(_abi) as BridgeArbitrumL2MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeArbitrumL2Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BridgeArbitrumL2Mock;
  }
}