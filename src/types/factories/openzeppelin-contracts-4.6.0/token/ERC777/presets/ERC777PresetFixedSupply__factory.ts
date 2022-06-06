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
  ERC777PresetFixedSupply,
  ERC777PresetFixedSupplyInterface,
} from "../../../../../openzeppelin-contracts-4.6.0/token/ERC777/presets/ERC777PresetFixedSupply";

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
        internalType: "address[]",
        name: "defaultOperators",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
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
  "0x60806040523480156200001157600080fd5b5060405162002122380380620021228339810160408190526200003491620007b9565b84848482600290805190602001906200004f929190620005b2565b50815162000065906003906020850190620005b2565b5080516200007b90600490602084019062000641565b5060005b8151811015620000eb57600160056000848481518110620000a457620000a4620008dc565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620000e28162000908565b9150506200007f565b506040516329965a1d60e01b815230600482018190527fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce217705460248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad24906329965a1d90606401600060405180830381600087803b1580156200016657600080fd5b505af11580156200017b573d6000803e3d6000fd5b50506040516329965a1d60e01b815230600482018190527faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a60248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d9150606401600060405180830381600087803b158015620001f957600080fd5b505af11580156200020e573d6000803e3d6000fd5b5050505050505062000247818360405180602001604052806000815250604051806020016040528060008152506200025260201b60201c565b505050505062000a65565b6200026284848484600162000268565b50505050565b6001600160a01b038516620002c45760405162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f206164647265737360448201526064015b60405180910390fd5b60003390508460016000828254620002dd919062000924565b90915550506001600160a01b038616600090815260208190526040812080548792906200030c90849062000924565b909155506200032490508160008888888888620003be565b856001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d8787876040516200036d939291906200096d565b60405180910390a36040518581526001600160a01b038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa15801562000440573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004669190620009a6565b90506001600160a01b03811615620004e8576040516223de2960e01b81526001600160a01b038216906223de2990620004ae908b908b908b908b908b908b90600401620009cb565b600060405180830381600087803b158015620004c957600080fd5b505af1158015620004de573d6000803e3d6000fd5b5050505062000599565b811562000599576200050e866001600160a01b0316620005a360201b6200087f1760201c565b15620005995760405162461bcd60e51b815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201526c1ad95b9cd49958da5c1a595b9d609a1b608482015260a401620002bb565b5050505050505050565b6001600160a01b03163b151590565b828054620005c09062000a29565b90600052602060002090601f016020900481019282620005e457600085556200062f565b82601f10620005ff57805160ff19168380011785556200062f565b828001600101855582156200062f579182015b828111156200062f57825182559160200191906001019062000612565b506200063d92915062000699565b5090565b8280548282559060005260206000209081019282156200062f579160200282015b828111156200062f57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000662565b5b808211156200063d57600081556001016200069a565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715620006f157620006f1620006b0565b604052919050565b60005b8381101562000716578181015183820152602001620006fc565b83811115620002625750506000910152565b600082601f8301126200073a57600080fd5b81516001600160401b03811115620007565762000756620006b0565b6200076b601f8201601f1916602001620006c6565b8181528460208386010111156200078157600080fd5b62000794826020830160208701620006f9565b949350505050565b80516001600160a01b0381168114620007b457600080fd5b919050565b600080600080600060a08688031215620007d257600080fd5b85516001600160401b0380821115620007ea57600080fd5b620007f889838a0162000728565b96506020915081880151818111156200081057600080fd5b6200081e8a828b0162000728565b9650506040880151818111156200083457600080fd5b8801601f81018a136200084657600080fd5b8051828111156200085b576200085b620006b0565b8060051b92506200086e848401620006c6565b818152928201840192848101908c8511156200088957600080fd5b928501925b84841015620008b257620008a2846200079c565b825292850192908501906200088e565b80985050505050505060608601519150620008d0608087016200079c565b90509295509295909350565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016200091d576200091d620008f2565b5060010190565b600082198211156200093a576200093a620008f2565b500190565b6000815180845262000959816020860160208601620006f9565b601f01601f19169290920160200192915050565b8381526060602082015260006200098860608301856200093f565b82810360408401526200099c81856200093f565b9695505050505050565b600060208284031215620009b957600080fd5b620009c4826200079c565b9392505050565b6001600160a01b0387811682528681166020830152851660408201526060810184905260c06080820181905260009062000a08908301856200093f565b82810360a084015262000a1c81856200093f565b9998505050505050505050565b600181811c9082168062000a3e57607f821691505b60208210810362000a5f57634e487b7160e01b600052602260045260246000fd5b50919050565b6116ad8062000a756000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063959b8c3f116100b2578063d95b637111610081578063fad8b32a11610066578063fad8b32a14610297578063fc673c4f146102aa578063fe9d9303146102bd57600080fd5b8063d95b63711461024b578063dd62ed3e1461025e57600080fd5b8063959b8c3f1461020a57806395d89b411461021d5780639bd9bbc614610225578063a9059cbb1461023857600080fd5b806323b872dd11610109578063556f0dc7116100ee578063556f0dc7146101c557806362ad1b83146101cc57806370a08231146101e157600080fd5b806323b872dd146101a3578063313ce567146101b657600080fd5b806306e485381461013b57806306fdde0314610159578063095ea7b31461016e57806318160ddd14610191575b600080fd5b6101436102d0565b6040516101509190611198565b60405180910390f35b610161610332565b6040516101509190611232565b61018161017c36600461125d565b6103bb565b6040519015158152602001610150565b6001545b604051908152602001610150565b6101816101b1366004611289565b6103d3565b60405160128152602001610150565b6001610195565b6101df6101da36600461136d565b610419565b005b6101956101ef366004611400565b6001600160a01b031660009081526020819052604090205490565b6101df610218366004611400565b61049f565b6101616105bc565b6101df61023336600461141d565b6105cb565b61018161024636600461125d565b6105ee565b610181610259366004611476565b610626565b61019561026c366004611476565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205490565b6101df6102a5366004611400565b6106c8565b6101df6102b83660046114af565b6107e3565b6101df6102cb36600461152f565b610860565b6060600480548060200260200160405190810160405280929190818152602001828054801561032857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161030a575b5050505050905090565b60606002805461034190611576565b80601f016020809104026020016040519081016040528092919081815260200182805461036d90611576565b80156103285780601f1061038f57610100808354040283529160200191610328565b820191906000526020600020905b81548152906001019060200180831161039d57509395945050505050565b6000336103c981858561088e565b5060019392505050565b6000336103e18582856109cd565b61040e85858560405180602001604052806000815250604051806020016040528060008152506000610a59565b506001949350505050565b6104233386610626565b6104895760405162461bcd60e51b815260206004820152602c60248201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60448201526b39103337b9103437b63232b960a11b60648201526084015b60405180910390fd5b61049885858585856001610a59565b5050505050565b6001600160a01b03811633036105035760405162461bcd60e51b8152602060048201526024808201527f4552433737373a20617574686f72697a696e672073656c66206173206f70657260448201526330ba37b960e11b6064820152608401610480565b6001600160a01b03811660009081526005602052604090205460ff1615610554573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff19169055610583565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191660011790555b60405133906001600160a01b038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b60606003805461034190611576565b6105e933848484604051806020016040528060008152506001610a59565b505050565b600061061d33848460405180602001604052806000815250604051806020016040528060008152506000610a59565b50600192915050565b6000816001600160a01b0316836001600160a01b0316148061069157506001600160a01b03831660009081526005602052604090205460ff16801561069157506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff16155b806106c157506001600160a01b0380831660009081526006602090815260408083209387168352929052205460ff165b9392505050565b336001600160a01b0382160361072a5760405162461bcd60e51b815260206004820152602160248201527f4552433737373a207265766f6b696e672073656c66206173206f70657261746f6044820152603960f91b6064820152608401610480565b6001600160a01b03811660009081526005602052604090205460ff161561077e573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff191660011790556107aa565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191690555b60405133906001600160a01b038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b6107ed3385610626565b61084e5760405162461bcd60e51b815260206004820152602c60248201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60448201526b39103337b9103437b63232b960a11b6064820152608401610480565b61085a84848484610b6c565b50505050565b61087b33838360405180602001604052806000815250610b6c565b5050565b6001600160a01b03163b151590565b6001600160a01b03831661090a5760405162461bcd60e51b815260206004820152602560248201527f4552433737373a20617070726f76652066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610480565b6001600160a01b03821661096c5760405162461bcd60e51b815260206004820152602360248201527f4552433737373a20617070726f766520746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610480565b6001600160a01b0383811660008181526008602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03838116600090815260086020908152604080832093861683529290522054600019811461085a5781811015610a4c5760405162461bcd60e51b815260206004820152601e60248201527f4552433737373a20696e73756666696369656e7420616c6c6f77616e636500006044820152606401610480565b61085a848484840361088e565b6001600160a01b038616610ad55760405162461bcd60e51b815260206004820152602660248201527f4552433737373a207472616e736665722066726f6d20746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610480565b6001600160a01b038516610b375760405162461bcd60e51b8152602060048201526024808201527f4552433737373a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610480565b33610b46818888888888610d20565b610b54818888888888610e47565b610b6381888888888888610fc3565b50505050505050565b6001600160a01b038416610bcd5760405162461bcd60e51b815260206004820152602260248201527f4552433737373a206275726e2066726f6d20746865207a65726f206164647265604482015261737360f01b6064820152608401610480565b33610bdd81866000878787610d20565b6001600160a01b03851660009081526020819052604090205484811015610c525760405162461bcd60e51b815260206004820152602360248201527f4552433737373a206275726e20616d6f756e7420657863656564732062616c616044820152626e636560e81b6064820152608401610480565b6001600160a01b0386166000908152602081905260408120868303905560018054879290610c819084906115c6565b92505081905550856001600160a01b0316826001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098878787604051610ccf939291906115dd565b60405180910390a36040518581526000906001600160a01b038816907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa158015610da1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc59190611612565b90506001600160a01b03811615610b6357604051633ad5cbc160e11b81526001600160a01b038216906375ab978290610e0c908a908a908a908a908a908a9060040161162f565b600060405180830381600087803b158015610e2657600080fd5b505af1158015610e3a573d6000803e3d6000fd5b5050505050505050505050565b6001600160a01b03851660009081526020819052604090205483811015610ed65760405162461bcd60e51b815260206004820152602760248201527f4552433737373a207472616e7366657220616d6f756e7420657863656564732060448201527f62616c616e6365000000000000000000000000000000000000000000000000006064820152608401610480565b6001600160a01b03808716600090815260208190526040808220878503905591871681529081208054869290610f0d908490611688565b92505081905550846001600160a01b0316866001600160a01b0316886001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987878787604051610f65939291906115dd565b60405180910390a4846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef86604051610fb291815260200190565b60405180910390a350505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa158015611044573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110689190611612565b90506001600160a01b038116156110e4576040516223de2960e01b81526001600160a01b038216906223de29906110ad908b908b908b908b908b908b9060040161162f565b600060405180830381600087803b1580156110c757600080fd5b505af11580156110db573d6000803e3d6000fd5b5050505061118e565b811561118e576001600160a01b0386163b1561118e5760405162461bcd60e51b815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201527f6b656e73526563697069656e7400000000000000000000000000000000000000608482015260a401610480565b5050505050505050565b6020808252825182820181905260009190848201906040850190845b818110156111d95783516001600160a01b0316835292840192918401916001016111b4565b50909695505050505050565b6000815180845260005b8181101561120b576020818501810151868301820152016111ef565b8181111561121d576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006106c160208301846111e5565b6001600160a01b038116811461125a57600080fd5b50565b6000806040838503121561127057600080fd5b823561127b81611245565b946020939093013593505050565b60008060006060848603121561129e57600080fd5b83356112a981611245565b925060208401356112b981611245565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126112f157600080fd5b813567ffffffffffffffff8082111561130c5761130c6112ca565b604051601f8301601f19908116603f01168101908282118183101715611334576113346112ca565b8160405283815286602085880101111561134d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a0868803121561138557600080fd5b853561139081611245565b945060208601356113a081611245565b935060408601359250606086013567ffffffffffffffff808211156113c457600080fd5b6113d089838a016112e0565b935060808801359150808211156113e657600080fd5b506113f3888289016112e0565b9150509295509295909350565b60006020828403121561141257600080fd5b81356106c181611245565b60008060006060848603121561143257600080fd5b833561143d81611245565b925060208401359150604084013567ffffffffffffffff81111561146057600080fd5b61146c868287016112e0565b9150509250925092565b6000806040838503121561148957600080fd5b823561149481611245565b915060208301356114a481611245565b809150509250929050565b600080600080608085870312156114c557600080fd5b84356114d081611245565b935060208501359250604085013567ffffffffffffffff808211156114f457600080fd5b611500888389016112e0565b9350606087013591508082111561151657600080fd5b50611523878288016112e0565b91505092959194509250565b6000806040838503121561154257600080fd5b82359150602083013567ffffffffffffffff81111561156057600080fd5b61156c858286016112e0565b9150509250929050565b600181811c9082168061158a57607f821691505b6020821081036115aa57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156115d8576115d86115b0565b500390565b8381526060602082015260006115f660608301856111e5565b828103604084015261160881856111e5565b9695505050505050565b60006020828403121561162457600080fd5b81516106c181611245565b60006001600160a01b038089168352808816602084015280871660408401525084606083015260c0608083015261166960c08301856111e5565b82810360a084015261167b81856111e5565b9998505050505050505050565b6000821982111561169b5761169b6115b0565b50019056fea164736f6c634300080d000a";

type ERC777PresetFixedSupplyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC777PresetFixedSupplyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC777PresetFixedSupply__factory extends ContractFactory {
  constructor(...args: ERC777PresetFixedSupplyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    defaultOperators: string[],
    initialSupply: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC777PresetFixedSupply> {
    return super.deploy(
      name,
      symbol,
      defaultOperators,
      initialSupply,
      owner,
      overrides || {}
    ) as Promise<ERC777PresetFixedSupply>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    defaultOperators: string[],
    initialSupply: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      defaultOperators,
      initialSupply,
      owner,
      overrides || {}
    );
  }
  override attach(address: string): ERC777PresetFixedSupply {
    return super.attach(address) as ERC777PresetFixedSupply;
  }
  override connect(signer: Signer): ERC777PresetFixedSupply__factory {
    return super.connect(signer) as ERC777PresetFixedSupply__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC777PresetFixedSupplyInterface {
    return new utils.Interface(_abi) as ERC777PresetFixedSupplyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC777PresetFixedSupply {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC777PresetFixedSupply;
  }
}