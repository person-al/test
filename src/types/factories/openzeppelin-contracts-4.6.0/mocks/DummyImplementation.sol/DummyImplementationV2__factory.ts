/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DummyImplementationV2,
  DummyImplementationV2Interface,
} from "../../../../openzeppelin-contracts-4.6.0/mocks/DummyImplementation.sol/DummyImplementationV2";

const _abi = [
  {
    inputs: [],
    name: "get",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initializeNonPayable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "initializeNonPayableWithValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initializePayable",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "initializePayableWithValue",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newVal",
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
    name: "reverts",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "text",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "values",
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
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610644806100206000396000f3fe6080604052600436106100c75760003560e01c80635e383d21116100745780639fba1f9a1161004e5780639fba1f9a146101de578063d31f8b6b146101e8578063e79f5bee1461014957600080fd5b80635e383d21146101875780636d4ce63c146101a7578063763e2831146101c357600080fd5b80633fa4f245116100a55780633fa4f24514610125578063454b06081461014957806354fd4d501461015c57600080fd5b80631f1bd692146100cc578063227367d5146100f75780633bccbbc914610110575b600080fd5b3480156100d857600080fd5b506100e1610208565b6040516100ee9190610408565b60405180910390f35b34801561010357600080fd5b5061010e600a600055565b005b34801561011c57600080fd5b5061010e610296565b34801561013157600080fd5b5061013b60005481565b6040519081526020016100ee565b61010e61015736600461045d565b600055565b34801561016857600080fd5b506040805180820190915260028152612b1960f11b60208201526100e1565b34801561019357600080fd5b5061013b6101a236600461045d565b6102e2565b3480156101b357600080fd5b50604051600181526020016100ee565b3480156101cf57600080fd5b5061010e61015736600461045d565b61010e6064600055565b3480156101f457600080fd5b5061010e61020336600461053d565b610303565b60018054610215906105fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610241906105fd565b801561028e5780601f106102635761010080835404028352916020019161028e565b820191906000526020600020905b81548152906001019060200180831161027157829003601f168201915b505050505081565b60405162461bcd60e51b815260206004820152601c60248201527f44756d6d79496d706c656d656e746174696f6e20726576657274656400000000604482015260640160405180910390fd5b600281815481106102f257600080fd5b600091825260209091200154905081565b6000839055815161031b906001906020850190610335565b50805161032f9060029060208401906103b9565b50505050565b828054610341906105fd565b90600052602060002090601f01602090048101928261036357600085556103a9565b82601f1061037c57805160ff19168380011785556103a9565b828001600101855582156103a9579182015b828111156103a957825182559160200191906001019061038e565b506103b59291506103f3565b5090565b8280548282559060005260206000209081019282156103a957916020028201828111156103a957825182559160200191906001019061038e565b5b808211156103b557600081556001016103f4565b600060208083528351808285015260005b8181101561043557858101830151858201604001528201610419565b81811115610447576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561046f57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156104b5576104b5610476565b604052919050565b600082601f8301126104ce57600080fd5b8135602067ffffffffffffffff8211156104ea576104ea610476565b8160051b6104f982820161048c565b928352848101820192828101908785111561051357600080fd5b83870192505b8483101561053257823582529183019190830190610519565b979650505050505050565b60008060006060848603121561055257600080fd5b8335925060208085013567ffffffffffffffff8082111561057257600080fd5b818701915087601f83011261058657600080fd5b81358181111561059857610598610476565b6105aa601f8201601f1916850161048c565b81815289858386010111156105be57600080fd5b8185850186830137600091810190940152919350604086013591808311156105e557600080fd5b50506105f3868287016104bd565b9150509250925092565b600181811c9082168061061157607f821691505b60208210810361063157634e487b7160e01b600052602260045260246000fd5b5091905056fea164736f6c634300080d000a";

type DummyImplementationV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DummyImplementationV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DummyImplementationV2__factory extends ContractFactory {
  constructor(...args: DummyImplementationV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DummyImplementationV2> {
    return super.deploy(overrides || {}) as Promise<DummyImplementationV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DummyImplementationV2 {
    return super.attach(address) as DummyImplementationV2;
  }
  override connect(signer: Signer): DummyImplementationV2__factory {
    return super.connect(signer) as DummyImplementationV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DummyImplementationV2Interface {
    return new utils.Interface(_abi) as DummyImplementationV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyImplementationV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DummyImplementationV2;
  }
}
