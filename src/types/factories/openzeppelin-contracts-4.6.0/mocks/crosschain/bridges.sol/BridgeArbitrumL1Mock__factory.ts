/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BridgeArbitrumL1Mock,
  BridgeArbitrumL1MockInterface,
} from "../../../../../openzeppelin-contracts-4.6.0/mocks/crosschain/bridges.sol/BridgeArbitrumL1Mock";

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
    name: "activeOutbox",
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
    inputs: [],
    name: "currentSender",
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
    inputs: [],
    name: "inbox",
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
    inputs: [],
    name: "outbox",
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
];

const _bytecode =
  "0x60c060405260405161001090610080565b604051809103906000f08015801561002c573d6000803e3d6000fd5b506001600160a01b03166080526040516100459061008c565b604051809103906000f080158015610061573d6000803e3d6000fd5b506001600160a01b031660a05234801561007a57600080fd5b50610099565b60b58061044d83390190565b6101a88061050283390190565b60805160a05161038b6100c2600039600081816097015260c00152600060e7015261038b6000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063ce11e6ab11610050578063ce11e6ab146100bb578063fb0e722b146100e2578063fb417a5b1461010957600080fd5b806370348f3e1461006c578063ab5d894314610095575b600080fd5b6000546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b7f0000000000000000000000000000000000000000000000000000000000000000610079565b6100797f000000000000000000000000000000000000000000000000000000000000000081565b6100797f000000000000000000000000000000000000000000000000000000000000000081565b61011c610117366004610285565b61011e565b005b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff198316178355604051918116929182918816906101629088908890610319565b6000604051808303816000865af19150503d806000811461019f576040519150601f19603f3d011682016040523d82523d6000602084013e6101a4565b606091505b50915091506101e982826040518060400160405280601781526020017f6c6f772d6c6576656c2063616c6c207265766572746564000000000000000000815250610220565b50506000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0393909316929092179091555050505050565b6060831561022f575081610262565b82511561023f5782518084602001fd5b8160405162461bcd60e51b81526004016102599190610329565b60405180910390fd5b9392505050565b80356001600160a01b038116811461028057600080fd5b919050565b6000806000806060858703121561029b57600080fd5b6102a485610269565b9350602085013567ffffffffffffffff808211156102c157600080fd5b818701915087601f8301126102d557600080fd5b8135818111156102e457600080fd5b8860208285010111156102f657600080fd5b60208301955080945050505061030e60408601610269565b905092959194509250565b8183823760009101908152919050565b600060208083528351808285015260005b818110156103565785810183015185820160400152820161033a565b81811115610368576000604083870101525b50601f01601f191692909201604001939250505056fea164736f6c634300080d000a60a060405233608052348015601357600080fd5b50608051608961002c60003960006031015260896000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063e78cea9214602d575b600080fd5b60537f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f3fea164736f6c634300080d000a60a06040523360805234801561001457600080fd5b506080516101736100356000396000818160710152609701526101736000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806380648b021461003b578063e78cea921461006c575b600080fd5b610043610093565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100437f000000000000000000000000000000000000000000000000000000000000000081565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370348f3e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610100573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101249190610129565b905090565b60006020828403121561013b57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461015f57600080fd5b939250505056fea164736f6c634300080d000a";

type BridgeArbitrumL1MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeArbitrumL1MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BridgeArbitrumL1Mock__factory extends ContractFactory {
  constructor(...args: BridgeArbitrumL1MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BridgeArbitrumL1Mock> {
    return super.deploy(overrides || {}) as Promise<BridgeArbitrumL1Mock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BridgeArbitrumL1Mock {
    return super.attach(address) as BridgeArbitrumL1Mock;
  }
  override connect(signer: Signer): BridgeArbitrumL1Mock__factory {
    return super.connect(signer) as BridgeArbitrumL1Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeArbitrumL1MockInterface {
    return new utils.Interface(_abi) as BridgeArbitrumL1MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeArbitrumL1Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BridgeArbitrumL1Mock;
  }
}