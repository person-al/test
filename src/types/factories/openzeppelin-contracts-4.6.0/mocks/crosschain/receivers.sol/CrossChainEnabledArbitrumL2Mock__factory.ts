/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CrossChainEnabledArbitrumL2Mock,
  CrossChainEnabledArbitrumL2MockInterface,
} from "../../../../../openzeppelin-contracts-4.6.0/mocks/crosschain/receivers.sol/CrossChainEnabledArbitrumL2Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "actual",
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
    name: "crossChainOwnerRestricted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "crossChainRestricted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
];

const _bytecode =
  "0x60a06040523360805234801561001457600080fd5b5060805161033d610035600039600081816055015260c4015261033d6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634b074af5146100465780638da5cb5b14610050578063f97f518914610093575b600080fd5b61004e61009b565b005b6100777f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61004e6100c2565b6100a361013c565b6100c05760405163253a6fc960e11b815260040160405180910390fd5b565b7f000000000000000000000000000000000000000000000000000000000000000060006100ed61014d565b9050806001600160a01b0316826001600160a01b0316146101385760405163ef25d32b60e01b81526001600160a01b0380831660048301528316602482015260440160405180910390fd5b5050565b6000610148606461017e565b905090565b600061015761013c565b6101745760405163253a6fc960e11b815260040160405180910390fd5b61014860646101e8565b6000816001600160a01b03166308bd624c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e291906102de565b92915050565b60006101f38261017e565b6102105760405163253a6fc960e11b815260040160405180910390fd5b816001600160a01b031663175a260b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561024e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027291906102de565b61027c57336101e2565b816001600160a01b031663d74523b36040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e29190610307565b6000602082840312156102f057600080fd5b8151801515811461030057600080fd5b9392505050565b60006020828403121561031957600080fd5b81516001600160a01b038116811461030057600080fdfea164736f6c634300080d000a";

type CrossChainEnabledArbitrumL2MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrossChainEnabledArbitrumL2MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrossChainEnabledArbitrumL2Mock__factory extends ContractFactory {
  constructor(...args: CrossChainEnabledArbitrumL2MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CrossChainEnabledArbitrumL2Mock> {
    return super.deploy(
      overrides || {}
    ) as Promise<CrossChainEnabledArbitrumL2Mock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CrossChainEnabledArbitrumL2Mock {
    return super.attach(address) as CrossChainEnabledArbitrumL2Mock;
  }
  override connect(signer: Signer): CrossChainEnabledArbitrumL2Mock__factory {
    return super.connect(signer) as CrossChainEnabledArbitrumL2Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainEnabledArbitrumL2MockInterface {
    return new utils.Interface(
      _abi
    ) as CrossChainEnabledArbitrumL2MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainEnabledArbitrumL2Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainEnabledArbitrumL2Mock;
  }
}
