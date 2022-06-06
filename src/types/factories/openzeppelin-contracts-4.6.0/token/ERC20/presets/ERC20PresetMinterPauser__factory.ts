/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20PresetMinterPauser,
  ERC20PresetMinterPauserInterface,
} from "../../../../../openzeppelin-contracts-4.6.0/token/ERC20/presets/ERC20PresetMinterPauser";

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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "MINTER_ROLE",
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
    name: "PAUSER_ROLE",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    name: "mint",
    outputs: [],
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
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
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001e5938038062001e598339810160408190526200003491620003b5565b8151829082906200004d90600590602085019062000242565b5080516200006390600690602084019062000242565b50506007805460ff19169055506200007d600033620000dd565b620000a97f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000dd565b620000d57f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000dd565b50506200045b565b620000e98282620000ed565b5050565b6200010482826200013060201b620009941760201c565b60008281526001602090815260409091206200012b91839062000a32620001d0821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000e9576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200018c3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001e7836001600160a01b038416620001f0565b90505b92915050565b60008181526001830160205260408120546200023957508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001ea565b506000620001ea565b82805462000250906200041f565b90600052602060002090601f016020900481019282620002745760008555620002bf565b82601f106200028f57805160ff1916838001178555620002bf565b82800160010185558215620002bf579182015b82811115620002bf578251825591602001919060010190620002a2565b50620002cd929150620002d1565b5090565b5b80821115620002cd5760008155600101620002d2565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200031057600080fd5b81516001600160401b03808211156200032d576200032d620002e8565b604051601f8301601f19908116603f01168101908282118183101715620003585762000358620002e8565b816040528381526020925086838588010111156200037557600080fd5b600091505b838210156200039957858201830151818301840152908201906200037a565b83821115620003ab5760008385830101525b9695505050505050565b60008060408385031215620003c957600080fd5b82516001600160401b0380821115620003e157600080fd5b620003ef86838701620002fe565b935060208501519150808211156200040657600080fd5b506200041585828601620002fe565b9150509250929050565b600181811c908216806200043457607f821691505b6020821081036200045557634e487b7160e01b600052602260045260246000fd5b50919050565b6119ee806200046b6000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d5391393146103d3578063d547741f146103fa578063dd62ed3e1461040d578063e63ab1e91461044657600080fd5b8063a457c2d71461039a578063a9059cbb146103ad578063ca15c873146103c057600080fd5b80639010d07c116100d35780639010d07c1461032857806391d148541461035357806395d89b411461038a578063a217fddf1461039257600080fd5b806370a08231146102e457806379cc67901461030d5780638456cb591461032057600080fd5b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102ab57806340c10f19146102b357806342966c68146102c65780635c975abb146102d957600080fd5b8063313ce5671461027657806336568abe14610285578063395093511461029857600080fd5b806318160ddd116101a257806318160ddd1461021957806323b872dd1461022b578063248a9ca31461023e5780632f2ff15d1461026157600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063095ea7b314610206575b600080fd5b6101dc6101d73660046116b2565b61046d565b60405190151581526020015b60405180910390f35b6101f9610498565b6040516101e89190611708565b6101dc610214366004611757565b61052a565b6004545b6040519081526020016101e8565b6101dc610239366004611781565b610542565b61021d61024c3660046117bd565b60009081526020819052604090206001015490565b61027461026f3660046117d6565b610566565b005b604051601281526020016101e8565b6102746102933660046117d6565b610590565b6101dc6102a6366004611757565b610621565b610274610660565b6102746102c1366004611757565b610706565b6102746102d43660046117bd565b6107ac565b60075460ff166101dc565b61021d6102f2366004611802565b6001600160a01b031660009081526002602052604090205490565b61027461031b366004611757565b6107b9565b6102746107ce565b61033b61033636600461181d565b610872565b6040516001600160a01b0390911681526020016101e8565b6101dc6103613660046117d6565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6101f9610891565b61021d600081565b6101dc6103a8366004611757565b6108a0565b6101dc6103bb366004611757565b61094a565b61021d6103ce3660046117bd565b610958565b61021d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102746104083660046117d6565b61096f565b61021d61041b36600461183f565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61021d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b03198216635a05180f60e01b1480610492575061049282610a47565b92915050565b6060600580546104a790611869565b80601f01602080910402602001604051908101604052809291908181526020018280546104d390611869565b80156105205780601f106104f557610100808354040283529160200191610520565b820191906000526020600020905b81548152906001019060200180831161050357829003601f168201915b5050505050905090565b600033610538818585610a7c565b5060019392505050565b600033610550858285610ba0565b61055b858585610c32565b506001949350505050565b60008281526020819052604090206001015461058181610e3a565b61058b8383610e44565b505050565b6001600160a01b03811633146106135760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b61061d8282610e66565b5050565b3360008181526003602090815260408083206001600160a01b0387168452909152812054909190610538908290869061065b9087906118b9565b610a7c565b61068a7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610361565b6106fc5760405162461bcd60e51b815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e706175736500000000000000606482015260840161060a565b610704610e88565b565b6107307f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610361565b6107a25760405162461bcd60e51b815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e7400000000000000000000606482015260840161060a565b61061d8282610f24565b6107b6338261100f565b50565b6107c4823383610ba0565b61061d828261100f565b6107f87f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610361565b61086a5760405162461bcd60e51b815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f207061757365000000000000000000606482015260840161060a565b610704611169565b600082815260016020526040812061088a90836111f1565b9392505050565b6060600680546104a790611869565b3360008181526003602090815260408083206001600160a01b03871684529091528120549091908381101561093d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161060a565b61055b8286868403610a7c565b600033610538818585610c32565b6000818152600160205260408120610492906111fd565b60008281526020819052604090206001015461098a81610e3a565b61058b8383610e66565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661061d576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556109ee3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600061088a836001600160a01b038416611207565b60006001600160e01b03198216637965db0b60e01b148061049257506301ffc9a760e01b6001600160e01b0319831614610492565b6001600160a01b038316610ade5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161060a565b6001600160a01b038216610b3f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161060a565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600360209081526040808320938616835292905220546000198114610c2c5781811015610c1f5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161060a565b610c2c8484848403610a7c565b50505050565b6001600160a01b038316610cae5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161060a565b6001600160a01b038216610d105760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161060a565b610d1b838383611256565b6001600160a01b03831660009081526002602052604090205481811015610daa5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161060a565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290610de19084906118b9565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e2d91815260200190565b60405180910390a3610c2c565b6107b68133611261565b610e4e8282610994565b600082815260016020526040902061058b9082610a32565b610e7082826112df565b600082815260016020526040902061058b908261135e565b60075460ff16610eda5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161060a565b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610f7a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161060a565b610f8660008383611256565b8060046000828254610f9891906118b9565b90915550506001600160a01b03821660009081526002602052604081208054839290610fc59084906118b9565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b03821661106f5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161060a565b61107b82600083611256565b6001600160a01b038216600090815260026020526040902054818110156110ef5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161060a565b6001600160a01b038316600090815260026020526040812083830390556004805484929061111e9084906118d1565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff16156111bc5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161060a565b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610f073390565b600061088a8383611373565b6000610492825490565b600081815260018301602052604081205461124e57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610492565b506000610492565b61058b83838361139d565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661061d5761129d816001600160a01b03166014611416565b6112a8836020611416565b6040516020016112b99291906118e8565b60408051601f198184030181529082905262461bcd60e51b825261060a91600401611708565b6000828152602081815260408083206001600160a01b038516845290915290205460ff161561061d576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600061088a836001600160a01b0384166115bf565b600082600001828154811061138a5761138a611969565b9060005260206000200154905092915050565b60075460ff161561058b5760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c652070617573656400000000000000000000000000000000000000000000606482015260840161060a565b6060600061142583600261197f565b6114309060026118b9565b67ffffffffffffffff8111156114485761144861199e565b6040519080825280601f01601f191660200182016040528015611472576020820181803683370190505b509050600360fc1b8160008151811061148d5761148d611969565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106114bc576114bc611969565b60200101906001600160f81b031916908160001a90535060006114e084600261197f565b6114eb9060016118b9565b90505b6001811115611570577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061152c5761152c611969565b1a60f81b82828151811061154257611542611969565b60200101906001600160f81b031916908160001a90535060049490941c93611569816119b4565b90506114ee565b50831561088a5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161060a565b600081815260018301602052604081205480156116a85760006115e36001836118d1565b85549091506000906115f7906001906118d1565b905081811461165c57600086600001828154811061161757611617611969565b906000526020600020015490508087600001848154811061163a5761163a611969565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061166d5761166d6119cb565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610492565b6000915050610492565b6000602082840312156116c457600080fd5b81356001600160e01b03198116811461088a57600080fd5b60005b838110156116f75781810151838201526020016116df565b83811115610c2c5750506000910152565b60208152600082518060208401526117278160408501602087016116dc565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461175257600080fd5b919050565b6000806040838503121561176a57600080fd5b6117738361173b565b946020939093013593505050565b60008060006060848603121561179657600080fd5b61179f8461173b565b92506117ad6020850161173b565b9150604084013590509250925092565b6000602082840312156117cf57600080fd5b5035919050565b600080604083850312156117e957600080fd5b823591506117f96020840161173b565b90509250929050565b60006020828403121561181457600080fd5b61088a8261173b565b6000806040838503121561183057600080fd5b50508035926020909101359150565b6000806040838503121561185257600080fd5b61185b8361173b565b91506117f96020840161173b565b600181811c9082168061187d57607f821691505b60208210810361189d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156118cc576118cc6118a3565b500190565b6000828210156118e3576118e36118a3565b500390565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516119208160178501602088016116dc565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161195d8160288401602088016116dc565b01602801949350505050565b634e487b7160e01b600052603260045260246000fd5b6000816000190483118215151615611999576119996118a3565b500290565b634e487b7160e01b600052604160045260246000fd5b6000816119c3576119c36118a3565b506000190190565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080d000a";

type ERC20PresetMinterPauserConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20PresetMinterPauserConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20PresetMinterPauser__factory extends ContractFactory {
  constructor(...args: ERC20PresetMinterPauserConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20PresetMinterPauser> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC20PresetMinterPauser>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC20PresetMinterPauser {
    return super.attach(address) as ERC20PresetMinterPauser;
  }
  override connect(signer: Signer): ERC20PresetMinterPauser__factory {
    return super.connect(signer) as ERC20PresetMinterPauser__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20PresetMinterPauserInterface {
    return new utils.Interface(_abi) as ERC20PresetMinterPauserInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20PresetMinterPauser {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20PresetMinterPauser;
  }
}