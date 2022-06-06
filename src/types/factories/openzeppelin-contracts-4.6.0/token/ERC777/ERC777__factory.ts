/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC777,
  ERC777Interface,
} from "../../../../openzeppelin-contracts-4.6.0/token/ERC777/ERC777";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "defaultOperators_",
        type: "address[]",
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
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "AuthorizedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
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
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
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
        name: "amount",
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
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "RevokedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "amount",
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
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Sent",
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
        name: "holder",
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
        name: "value",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "authorizeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenHolder",
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
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "burn",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultOperators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "granularity",
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
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "isOperatorFor",
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
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorSend",
    outputs: [],
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
    ],
    name: "revokeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "recipient",
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
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
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
  "0x60806040523480156200001157600080fd5b5060405162001c3038038062001c308339810160408190526200003491620003f1565b82516200004990600290602086019062000215565b5081516200005f90600390602085019062000215565b50805162000075906004906020840190620002a4565b5060005b8151811015620000e5576001600560008484815181106200009e576200009e62000508565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620000dc816200051e565b91505062000079565b506040516329965a1d60e01b815230600482018190527fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce217705460248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad24906329965a1d90606401600060405180830381600087803b1580156200016057600080fd5b505af115801562000175573d6000803e3d6000fd5b50506040516329965a1d60e01b815230600482018190527faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a60248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d9150606401600060405180830381600087803b158015620001f357600080fd5b505af115801562000208573d6000803e3d6000fd5b5050505050505062000582565b828054620002239062000546565b90600052602060002090601f01602090048101928262000247576000855562000292565b82601f106200026257805160ff191683800117855562000292565b8280016001018555821562000292579182015b828111156200029257825182559160200191906001019062000275565b50620002a0929150620002fc565b5090565b82805482825590600052602060002090810192821562000292579160200282015b828111156200029257825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620002c5565b5b80821115620002a05760008155600101620002fd565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171562000354576200035462000313565b604052919050565b600082601f8301126200036e57600080fd5b81516001600160401b038111156200038a576200038a62000313565b6020620003a0601f8301601f1916820162000329565b8281528582848701011115620003b557600080fd5b60005b83811015620003d5578581018301518282018401528201620003b8565b83811115620003e75760008385840101525b5095945050505050565b6000806000606084860312156200040757600080fd5b83516001600160401b03808211156200041f57600080fd5b6200042d878388016200035c565b94506020915081860151818111156200044557600080fd5b62000453888289016200035c565b9450506040860151818111156200046957600080fd5b8601601f810188136200047b57600080fd5b80518281111562000490576200049062000313565b8060051b9250620004a384840162000329565b818152928201840192848101908a851115620004be57600080fd5b928501925b84841015620004f857835192506001600160a01b0383168314620004e75760008081fd5b8282529285019290850190620004c3565b8096505050505050509250925092565b634e487b7160e01b600052603260045260246000fd5b6000600182016200053f57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200055b57607f821691505b6020821081036200057c57634e487b7160e01b600052602260045260246000fd5b50919050565b61169e80620005926000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063959b8c3f116100b2578063d95b637111610081578063fad8b32a11610066578063fad8b32a14610297578063fc673c4f146102aa578063fe9d9303146102bd57600080fd5b8063d95b63711461024b578063dd62ed3e1461025e57600080fd5b8063959b8c3f1461020a57806395d89b411461021d5780639bd9bbc614610225578063a9059cbb1461023857600080fd5b806323b872dd11610109578063556f0dc7116100ee578063556f0dc7146101c557806362ad1b83146101cc57806370a08231146101e157600080fd5b806323b872dd146101a3578063313ce567146101b657600080fd5b806306e485381461013b57806306fdde0314610159578063095ea7b31461016e57806318160ddd14610191575b600080fd5b6101436102d0565b6040516101509190611189565b60405180910390f35b610161610332565b6040516101509190611223565b61018161017c36600461124e565b6103bb565b6040519015158152602001610150565b6001545b604051908152602001610150565b6101816101b136600461127a565b6103d3565b60405160128152602001610150565b6001610195565b6101df6101da36600461135e565b610419565b005b6101956101ef3660046113f1565b6001600160a01b031660009081526020819052604090205490565b6101df6102183660046113f1565b61049f565b6101616105bc565b6101df61023336600461140e565b6105cb565b61018161024636600461124e565b6105ee565b610181610259366004611467565b610626565b61019561026c366004611467565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205490565b6101df6102a53660046113f1565b6106c8565b6101df6102b83660046114a0565b6107e3565b6101df6102cb366004611520565b610860565b6060600480548060200260200160405190810160405280929190818152602001828054801561032857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161030a575b5050505050905090565b60606002805461034190611567565b80601f016020809104026020016040519081016040528092919081815260200182805461036d90611567565b80156103285780601f1061038f57610100808354040283529160200191610328565b820191906000526020600020905b81548152906001019060200180831161039d57509395945050505050565b6000336103c981858561087f565b5060019392505050565b6000336103e18582856109be565b61040e85858560405180602001604052806000815250604051806020016040528060008152506000610a4a565b506001949350505050565b6104233386610626565b6104895760405162461bcd60e51b815260206004820152602c60248201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60448201526b39103337b9103437b63232b960a11b60648201526084015b60405180910390fd5b61049885858585856001610a4a565b5050505050565b6001600160a01b03811633036105035760405162461bcd60e51b8152602060048201526024808201527f4552433737373a20617574686f72697a696e672073656c66206173206f70657260448201526330ba37b960e11b6064820152608401610480565b6001600160a01b03811660009081526005602052604090205460ff1615610554573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff19169055610583565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191660011790555b60405133906001600160a01b038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b60606003805461034190611567565b6105e933848484604051806020016040528060008152506001610a4a565b505050565b600061061d33848460405180602001604052806000815250604051806020016040528060008152506000610a4a565b50600192915050565b6000816001600160a01b0316836001600160a01b0316148061069157506001600160a01b03831660009081526005602052604090205460ff16801561069157506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff16155b806106c157506001600160a01b0380831660009081526006602090815260408083209387168352929052205460ff165b9392505050565b336001600160a01b0382160361072a5760405162461bcd60e51b815260206004820152602160248201527f4552433737373a207265766f6b696e672073656c66206173206f70657261746f6044820152603960f91b6064820152608401610480565b6001600160a01b03811660009081526005602052604090205460ff161561077e573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff191660011790556107aa565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191690555b60405133906001600160a01b038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b6107ed3385610626565b61084e5760405162461bcd60e51b815260206004820152602c60248201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60448201526b39103337b9103437b63232b960a11b6064820152608401610480565b61085a84848484610b5d565b50505050565b61087b33838360405180602001604052806000815250610b5d565b5050565b6001600160a01b0383166108fb5760405162461bcd60e51b815260206004820152602560248201527f4552433737373a20617070726f76652066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610480565b6001600160a01b03821661095d5760405162461bcd60e51b815260206004820152602360248201527f4552433737373a20617070726f766520746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610480565b6001600160a01b0383811660008181526008602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03838116600090815260086020908152604080832093861683529290522054600019811461085a5781811015610a3d5760405162461bcd60e51b815260206004820152601e60248201527f4552433737373a20696e73756666696369656e7420616c6c6f77616e636500006044820152606401610480565b61085a848484840361087f565b6001600160a01b038616610ac65760405162461bcd60e51b815260206004820152602660248201527f4552433737373a207472616e736665722066726f6d20746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610480565b6001600160a01b038516610b285760405162461bcd60e51b8152602060048201526024808201527f4552433737373a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610480565b33610b37818888888888610d11565b610b45818888888888610e38565b610b5481888888888888610fb4565b50505050505050565b6001600160a01b038416610bbe5760405162461bcd60e51b815260206004820152602260248201527f4552433737373a206275726e2066726f6d20746865207a65726f206164647265604482015261737360f01b6064820152608401610480565b33610bce81866000878787610d11565b6001600160a01b03851660009081526020819052604090205484811015610c435760405162461bcd60e51b815260206004820152602360248201527f4552433737373a206275726e20616d6f756e7420657863656564732062616c616044820152626e636560e81b6064820152608401610480565b6001600160a01b0386166000908152602081905260408120868303905560018054879290610c729084906115b7565b92505081905550856001600160a01b0316826001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098878787604051610cc0939291906115ce565b60405180910390a36040518581526000906001600160a01b038816907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa158015610d92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db69190611603565b90506001600160a01b03811615610b5457604051633ad5cbc160e11b81526001600160a01b038216906375ab978290610dfd908a908a908a908a908a908a90600401611620565b600060405180830381600087803b158015610e1757600080fd5b505af1158015610e2b573d6000803e3d6000fd5b5050505050505050505050565b6001600160a01b03851660009081526020819052604090205483811015610ec75760405162461bcd60e51b815260206004820152602760248201527f4552433737373a207472616e7366657220616d6f756e7420657863656564732060448201527f62616c616e6365000000000000000000000000000000000000000000000000006064820152608401610480565b6001600160a01b03808716600090815260208190526040808220878503905591871681529081208054869290610efe908490611679565b92505081905550846001600160a01b0316866001600160a01b0316886001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987878787604051610f56939291906115ce565b60405180910390a4846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef86604051610fa391815260200190565b60405180910390a350505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa158015611035573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110599190611603565b90506001600160a01b038116156110d5576040516223de2960e01b81526001600160a01b038216906223de299061109e908b908b908b908b908b908b90600401611620565b600060405180830381600087803b1580156110b857600080fd5b505af11580156110cc573d6000803e3d6000fd5b5050505061117f565b811561117f576001600160a01b0386163b1561117f5760405162461bcd60e51b815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201527f6b656e73526563697069656e7400000000000000000000000000000000000000608482015260a401610480565b5050505050505050565b6020808252825182820181905260009190848201906040850190845b818110156111ca5783516001600160a01b0316835292840192918401916001016111a5565b50909695505050505050565b6000815180845260005b818110156111fc576020818501810151868301820152016111e0565b8181111561120e576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006106c160208301846111d6565b6001600160a01b038116811461124b57600080fd5b50565b6000806040838503121561126157600080fd5b823561126c81611236565b946020939093013593505050565b60008060006060848603121561128f57600080fd5b833561129a81611236565b925060208401356112aa81611236565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126112e257600080fd5b813567ffffffffffffffff808211156112fd576112fd6112bb565b604051601f8301601f19908116603f01168101908282118183101715611325576113256112bb565b8160405283815286602085880101111561133e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a0868803121561137657600080fd5b853561138181611236565b9450602086013561139181611236565b935060408601359250606086013567ffffffffffffffff808211156113b557600080fd5b6113c189838a016112d1565b935060808801359150808211156113d757600080fd5b506113e4888289016112d1565b9150509295509295909350565b60006020828403121561140357600080fd5b81356106c181611236565b60008060006060848603121561142357600080fd5b833561142e81611236565b925060208401359150604084013567ffffffffffffffff81111561145157600080fd5b61145d868287016112d1565b9150509250925092565b6000806040838503121561147a57600080fd5b823561148581611236565b9150602083013561149581611236565b809150509250929050565b600080600080608085870312156114b657600080fd5b84356114c181611236565b935060208501359250604085013567ffffffffffffffff808211156114e557600080fd5b6114f1888389016112d1565b9350606087013591508082111561150757600080fd5b50611514878288016112d1565b91505092959194509250565b6000806040838503121561153357600080fd5b82359150602083013567ffffffffffffffff81111561155157600080fd5b61155d858286016112d1565b9150509250929050565b600181811c9082168061157b57607f821691505b60208210810361159b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156115c9576115c96115a1565b500390565b8381526060602082015260006115e760608301856111d6565b82810360408401526115f981856111d6565b9695505050505050565b60006020828403121561161557600080fd5b81516106c181611236565b60006001600160a01b038089168352808816602084015280871660408401525084606083015260c0608083015261165a60c08301856111d6565b82810360a084015261166c81856111d6565b9998505050505050505050565b6000821982111561168c5761168c6115a1565b50019056fea164736f6c634300080d000a";

type ERC777ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC777ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC777__factory extends ContractFactory {
  constructor(...args: ERC777ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: string,
    symbol_: string,
    defaultOperators_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC777> {
    return super.deploy(
      name_,
      symbol_,
      defaultOperators_,
      overrides || {}
    ) as Promise<ERC777>;
  }
  override getDeployTransaction(
    name_: string,
    symbol_: string,
    defaultOperators_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      defaultOperators_,
      overrides || {}
    );
  }
  override attach(address: string): ERC777 {
    return super.attach(address) as ERC777;
  }
  override connect(signer: Signer): ERC777__factory {
    return super.connect(signer) as ERC777__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC777Interface {
    return new utils.Interface(_abi) as ERC777Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC777 {
    return new Contract(address, _abi, signerOrProvider) as ERC777;
  }
}
