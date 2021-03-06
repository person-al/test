/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UUPSUpgradeableUnsafeMock,
  UUPSUpgradeableUnsafeMockInterface,
} from "../../../../../openzeppelin-contracts-4.6.0/mocks/UUPS/UUPSUpgradeableMock.sol/UUPSUpgradeableUnsafeMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "current",
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
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b506080516106f0610030600039600061016c01526106f06000f3fe6080604052600436106100705760003560e01c806352d1902d1161004e57806352d1902d146100bf5780639fa6a6e3146100e6578063d09de08a146100fb578063d826f88f1461011057600080fd5b80632baeceb7146100755780633659cfe61461008c5780634f1ef286146100ac575b600080fd5b34801561008157600080fd5b5061008a610125565b005b34801561009857600080fd5b5061008a6100a736600461054e565b610131565b61008a6100ba36600461057f565b61014f565b3480156100cb57600080fd5b506100d461015f565b60405190815260200160405180910390f35b3480156100f257600080fd5b506000546100d4565b34801561010757600080fd5b5061008a610229565b34801561011c57600080fd5b5061008a610237565b61012f6000610240565b565b61014c81604051806020016040528060008152506000610297565b50565b61015b82826000610297565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102045760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084015b60405180910390fd5b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b61012f600080546001019055565b61012f60008055565b80548061028f5760405162461bcd60e51b815260206004820152601b60248201527f436f756e7465723a2064656372656d656e74206f766572666c6f77000000000060448201526064016101fb565b600019019055565b6102a0836102c3565b6000825111806102ad5750805b156102be576102bc8383610303565b505b505050565b6102cc8161032f565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061032883836040518060600160405280602781526020016106bd60279139610405565b9392505050565b6001600160a01b0381163b6103ac5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016101fb565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b60606001600160a01b0384163b6104845760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084016101fb565b600080856001600160a01b03168560405161049f919061066d565b600060405180830381855af49150503d80600081146104da576040519150601f19603f3d011682016040523d82523d6000602084013e6104df565b606091505b50915091506104ef8282866104f9565b9695505050505050565b60608315610508575081610328565b8251156105185782518084602001fd5b8160405162461bcd60e51b81526004016101fb9190610689565b80356001600160a01b038116811461054957600080fd5b919050565b60006020828403121561056057600080fd5b61032882610532565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561059257600080fd5b61059b83610532565b9150602083013567ffffffffffffffff808211156105b857600080fd5b818501915085601f8301126105cc57600080fd5b8135818111156105de576105de610569565b604051601f8201601f19908116603f0116810190838211818310171561060657610606610569565b8160405282815288602084870101111561061f57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b8381101561065c578181015183820152602001610644565b838111156102bc5750506000910152565b6000825161067f818460208701610641565b9190910192915050565b60208152600082518060208401526106a8816040850160208701610641565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c634300080d000a";

type UUPSUpgradeableUnsafeMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UUPSUpgradeableUnsafeMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UUPSUpgradeableUnsafeMock__factory extends ContractFactory {
  constructor(...args: UUPSUpgradeableUnsafeMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UUPSUpgradeableUnsafeMock> {
    return super.deploy(overrides || {}) as Promise<UUPSUpgradeableUnsafeMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UUPSUpgradeableUnsafeMock {
    return super.attach(address) as UUPSUpgradeableUnsafeMock;
  }
  override connect(signer: Signer): UUPSUpgradeableUnsafeMock__factory {
    return super.connect(signer) as UUPSUpgradeableUnsafeMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UUPSUpgradeableUnsafeMockInterface {
    return new utils.Interface(_abi) as UUPSUpgradeableUnsafeMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UUPSUpgradeableUnsafeMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UUPSUpgradeableUnsafeMock;
  }
}
