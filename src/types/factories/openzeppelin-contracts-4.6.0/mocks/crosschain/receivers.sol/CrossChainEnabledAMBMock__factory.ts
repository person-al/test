/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CrossChainEnabledAMBMock,
  CrossChainEnabledAMBMockInterface,
} from "../../../../../openzeppelin-contracts-4.6.0/mocks/crosschain/receivers.sol/CrossChainEnabledAMBMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
  "0x60c06040523360805234801561001457600080fd5b5060405161034f38038061034f83398101604081905261003391610044565b6001600160a01b031660a052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160a0516102a46100ab6000396000818160a50152818161017101526101b50152600081816055015260e801526102a46000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634b074af5146100465780638da5cb5b14610050578063f97f518914610093575b600080fd5b61004e61009b565b005b6100777f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61004e6100e6565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633146100e45760405163253a6fc960e11b815260040160405180910390fd5b565b7f00000000000000000000000000000000000000000000000000000000000000006000610111610165565b9050806001600160a01b0316826001600160a01b03161461015c5760405163ef25d32b60e01b81526001600160a01b0380831660048301528316602482015260440160405180910390fd5b5050565b905090565b60006001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633146101b05760405163253a6fc960e11b815260040160405180910390fd5b6101607f000000000000000000000000000000000000000000000000000000000000000060006001600160a01b03821633146101ff5760405163253a6fc960e11b815260040160405180910390fd5b816001600160a01b031663d67bdd256040518163ffffffff1660e01b8152600401602060405180830381865afa15801561023d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102619190610267565b92915050565b60006020828403121561027957600080fd5b81516001600160a01b038116811461029057600080fd5b939250505056fea164736f6c634300080d000a";

type CrossChainEnabledAMBMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrossChainEnabledAMBMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrossChainEnabledAMBMock__factory extends ContractFactory {
  constructor(...args: CrossChainEnabledAMBMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CrossChainEnabledAMBMock> {
    return super.deploy(
      bridge,
      overrides || {}
    ) as Promise<CrossChainEnabledAMBMock>;
  }
  override getDeployTransaction(
    bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(bridge, overrides || {});
  }
  override attach(address: string): CrossChainEnabledAMBMock {
    return super.attach(address) as CrossChainEnabledAMBMock;
  }
  override connect(signer: Signer): CrossChainEnabledAMBMock__factory {
    return super.connect(signer) as CrossChainEnabledAMBMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainEnabledAMBMockInterface {
    return new utils.Interface(_abi) as CrossChainEnabledAMBMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainEnabledAMBMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainEnabledAMBMock;
  }
}