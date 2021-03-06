/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CrossChainEnabledPolygonChildMock,
  CrossChainEnabledPolygonChildMockInterface,
} from "../../../../../openzeppelin-contracts-4.6.0/mocks/crosschain/receivers.sol/CrossChainEnabledPolygonChildMock";

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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rootMessageSender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405233608052600180546001600160a01b03191661dead17905534801561002857600080fd5b506040516106863803806106868339810160408190526100479161005d565b60016000556001600160a01b031660a05261008d565b60006020828403121561006f57600080fd5b81516001600160a01b038116811461008657600080fd5b9392505050565b60805160a0516105c16100c56000396000818160bb0152818161016b0152610410015260008181606001526102a201526105c16000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634b074af5146100515780638da5cb5b1461005b5780639a7c4b711461009e578063f97f5189146100b1575b600080fd5b6100596100b9565b005b6100827f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6100596100ac3660046104a0565b610104565b6100596102a0565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633146101025760405163253a6fc960e11b815260040160405180910390fd5b565b60026000540361015b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600055336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101d85760405162461bcd60e51b815260206004820152601e60248201527f756e617574686f72697a65642063726f73732d636861696e2072656c617900006044820152606401610152565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038516179055604080516020601f84018190048102820181019092528281526102759130919085908590819084018382808284376000920191909152505060408051808201909152601c81527f63726f7373636861696e20657865637574696f6e206661696c6c656400000000602082015291506103169050565b50506001805473ffffffffffffffffffffffffffffffffffffffff191661dead178155600055505050565b7f000000000000000000000000000000000000000000000000000000000000000060006102cb61040c565b9050806001600160a01b0316826001600160a01b0316146103125760405163ef25d32b60e01b81526001600160a01b03808316600483015283166024820152604401610152565b5050565b60606001600160a01b0384163b6103955760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610152565b600080856001600160a01b0316856040516103b09190610565565b600060405180830381855af49150503d80600081146103eb576040519150601f19603f3d011682016040523d82523d6000602084013e6103f0565b606091505b5091509150610400828286610467565b925050505b9392505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633146104575760405163253a6fc960e11b815260040160405180910390fd5b506001546001600160a01b031690565b60608315610476575081610405565b8251156104865782518084602001fd5b8160405162461bcd60e51b81526004016101529190610581565b600080600080606085870312156104b657600080fd5b8435935060208501356001600160a01b03811681146104d457600080fd5b9250604085013567ffffffffffffffff808211156104f157600080fd5b818701915087601f83011261050557600080fd5b81358181111561051457600080fd5b88602082850101111561052657600080fd5b95989497505060200194505050565b60005b83811015610550578181015183820152602001610538565b8381111561055f576000848401525b50505050565b60008251610577818460208701610535565b9190910192915050565b60208152600082518060208401526105a0816040850160208701610535565b601f01601f1916919091016040019291505056fea164736f6c634300080d000a";

type CrossChainEnabledPolygonChildMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrossChainEnabledPolygonChildMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrossChainEnabledPolygonChildMock__factory extends ContractFactory {
  constructor(...args: CrossChainEnabledPolygonChildMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CrossChainEnabledPolygonChildMock> {
    return super.deploy(
      bridge,
      overrides || {}
    ) as Promise<CrossChainEnabledPolygonChildMock>;
  }
  override getDeployTransaction(
    bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(bridge, overrides || {});
  }
  override attach(address: string): CrossChainEnabledPolygonChildMock {
    return super.attach(address) as CrossChainEnabledPolygonChildMock;
  }
  override connect(signer: Signer): CrossChainEnabledPolygonChildMock__factory {
    return super.connect(signer) as CrossChainEnabledPolygonChildMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainEnabledPolygonChildMockInterface {
    return new utils.Interface(
      _abi
    ) as CrossChainEnabledPolygonChildMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainEnabledPolygonChildMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainEnabledPolygonChildMock;
  }
}
