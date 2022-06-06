/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20BurnableMock,
  ERC20BurnableMockInterface,
} from "../../../openzeppelin-contracts-4.6.0/mocks/ERC20BurnableMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "initialAccount",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    name: "symbol",
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
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000ed138038062000ed18339810160408190526200003491620002dd565b8351849084906200004d9060039060208501906200016a565b508051620000639060049060208401906200016a565b5050506200007882826200008260201b60201c565b50505050620003d3565b6001600160a01b038216620000dd5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000f1919062000370565b90915550506001600160a01b038216600090815260208190526040812080548392906200012090849062000370565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001789062000397565b90600052602060002090601f0160209004810192826200019c5760008555620001e7565b82601f10620001b757805160ff1916838001178555620001e7565b82800160010185558215620001e7579182015b82811115620001e7578251825591602001919060010190620001ca565b50620001f5929150620001f9565b5090565b5b80821115620001f55760008155600101620001fa565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200023857600080fd5b81516001600160401b038082111562000255576200025562000210565b604051601f8301601f19908116603f0116810190828211818310171562000280576200028062000210565b816040528381526020925086838588010111156200029d57600080fd5b600091505b83821015620002c15785820183015181830184015290820190620002a2565b83821115620002d35760008385830101525b9695505050505050565b60008060008060808587031215620002f457600080fd5b84516001600160401b03808211156200030c57600080fd5b6200031a8883890162000226565b955060208701519150808211156200033157600080fd5b50620003408782880162000226565b604087015190945090506001600160a01b03811681146200036057600080fd5b6060959095015193969295505050565b600082198211156200039257634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003ac57607f821691505b602082108103620003cd57634e487b7160e01b600052602260045260246000fd5b50919050565b610aee80620003e36000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806342966c681161008c57806395d89b411161006657806395d89b41146101bd578063a457c2d7146101c5578063a9059cbb146101d8578063dd62ed3e146101eb57600080fd5b806342966c681461016c57806370a082311461018157806379cc6790146101aa57600080fd5b806323b872dd116100bd57806323b872dd14610137578063313ce5671461014a578063395093511461015957600080fd5b806306fdde03146100e4578063095ea7b31461010257806318160ddd14610125575b600080fd5b6100ec610224565b6040516100f9919061091d565b60405180910390f35b61011561011036600461098e565b6102b6565b60405190151581526020016100f9565b6002545b6040519081526020016100f9565b6101156101453660046109b8565b6102ce565b604051601281526020016100f9565b61011561016736600461098e565b6102f2565b61017f61017a3660046109f4565b610331565b005b61012961018f366004610a0d565b6001600160a01b031660009081526020819052604090205490565b61017f6101b836600461098e565b61033e565b6100ec610357565b6101156101d336600461098e565b610366565b6101156101e636600461098e565b610415565b6101296101f9366004610a2f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461023390610a62565b80601f016020809104026020016040519081016040528092919081815260200182805461025f90610a62565b80156102ac5780601f10610281576101008083540402835291602001916102ac565b820191906000526020600020905b81548152906001019060200180831161028f57829003601f168201915b5050505050905090565b6000336102c4818585610423565b5060019392505050565b6000336102dc858285610548565b6102e78585856105da565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102c4908290869061032c908790610ab2565b610423565b61033b33826107d7565b50565b610349823383610548565b61035382826107d7565b5050565b60606004805461023390610a62565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104085760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102e78286868403610423565b6000336102c48185856105da565b6001600160a01b0383166104855760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103ff565b6001600160a01b0382166104e65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103ff565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146105d457818110156105c75760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103ff565b6105d48484848403610423565b50505050565b6001600160a01b0383166106565760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103ff565b6001600160a01b0382166106b85760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103ff565b6001600160a01b038316600090815260208190526040902054818110156107475760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103ff565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061077e908490610ab2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107ca91815260200190565b60405180910390a36105d4565b6001600160a01b0382166108375760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103ff565b6001600160a01b038216600090815260208190526040902054818110156108ab5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103ff565b6001600160a01b03831660009081526020819052604081208383039055600280548492906108da908490610aca565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161053b565b600060208083528351808285015260005b8181101561094a5785810183015185820160400152820161092e565b8181111561095c576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461098957600080fd5b919050565b600080604083850312156109a157600080fd5b6109aa83610972565b946020939093013593505050565b6000806000606084860312156109cd57600080fd5b6109d684610972565b92506109e460208501610972565b9150604084013590509250925092565b600060208284031215610a0657600080fd5b5035919050565b600060208284031215610a1f57600080fd5b610a2882610972565b9392505050565b60008060408385031215610a4257600080fd5b610a4b83610972565b9150610a5960208401610972565b90509250929050565b600181811c90821680610a7657607f821691505b602082108103610a9657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610ac557610ac5610a9c565b500190565b600082821015610adc57610adc610a9c565b50039056fea164736f6c634300080d000a";

type ERC20BurnableMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20BurnableMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20BurnableMock__factory extends ContractFactory {
  constructor(...args: ERC20BurnableMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20BurnableMock> {
    return super.deploy(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    ) as Promise<ERC20BurnableMock>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    );
  }
  override attach(address: string): ERC20BurnableMock {
    return super.attach(address) as ERC20BurnableMock;
  }
  override connect(signer: Signer): ERC20BurnableMock__factory {
    return super.connect(signer) as ERC20BurnableMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20BurnableMockInterface {
    return new utils.Interface(_abi) as ERC20BurnableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20BurnableMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20BurnableMock;
  }
}
