/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721BurnableMock,
  ERC721BurnableMockInterface,
} from "../../../openzeppelin-contracts-4.6.0/mocks/ERC721BurnableMock";

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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "tokenId",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeMint",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
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
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a2c38038062001a2c8339810160408190526200003491620001e1565b8151829082906200004d9060009060208501906200006e565b508051620000639060019060208401906200006e565b505050505062000287565b8280546200007c906200024b565b90600052602060002090601f016020900481019282620000a05760008555620000eb565b82601f10620000bb57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000eb578251825591602001919060010190620000ce565b50620000f9929150620000fd565b5090565b5b80821115620000f95760008155600101620000fe565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013c57600080fd5b81516001600160401b038082111562000159576200015962000114565b604051601f8301601f19908116603f0116810190828211818310171562000184576200018462000114565b81604052838152602092508683858801011115620001a157600080fd5b600091505b83821015620001c55785820183015181830184015290820190620001a6565b83821115620001d75760008385830101525b9695505050505050565b60008060408385031215620001f557600080fd5b82516001600160401b03808211156200020d57600080fd5b6200021b868387016200012a565b935060208501519150808211156200023257600080fd5b5062000241858286016200012a565b9150509250929050565b600181811c908216806200026057607f821691505b6020821081036200028157634e487b7160e01b600052602260045260246000fd5b50919050565b61179580620002976000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80636352211e116100b2578063a144819411610081578063b88d4fde11610066578063b88d4fde1461028c578063c87b56dd1461029f578063e985e9c5146102b257600080fd5b8063a144819414610266578063a22cb4651461027957600080fd5b80636352211e1461021757806370a082311461022a5780638832e6e31461024b57806395d89b411461025e57600080fd5b806323b872dd1161010957806342842e0e116100ee57806342842e0e146101de57806342966c68146101f15780634f558e791461020457600080fd5b806323b872dd146101b857806340c10f19146101cb57600080fd5b806301ffc9a71461013b57806306fdde0314610163578063081812fc14610178578063095ea7b3146101a3575b600080fd5b61014e610149366004611305565b6102ee565b60405190151581526020015b60405180910390f35b61016b610340565b60405161015a919061137a565b61018b61018636600461138d565b6103d2565b6040516001600160a01b03909116815260200161015a565b6101b66101b13660046113c2565b61046c565b005b6101b66101c63660046113ec565b610581565b6101b66101d93660046113c2565b610609565b6101b66101ec3660046113ec565b610617565b6101b66101ff36600461138d565b610632565b61014e61021236600461138d565b6106b9565b61018b61022536600461138d565b6106d8565b61023d610238366004611428565b610763565b60405190815260200161015a565b6101b66102593660046114e6565b6107fd565b61016b610808565b6101b66102743660046113c2565b610817565b6101b661028736600461153d565b610821565b6101b661029a366004611579565b61082c565b61016b6102ad36600461138d565b6108ba565b61014e6102c03660046115e1565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061031f57506001600160e01b03198216635b5e139f60e01b145b8061033a57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461034f90611614565b80601f016020809104026020016040519081016040528092919081815260200182805461037b90611614565b80156103c85780601f1061039d576101008083540402835291602001916103c8565b820191906000526020600020905b8154815290600101906020018083116103ab57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104505760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b6000610477826106d8565b9050806001600160a01b0316836001600160a01b0316036104e45760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610447565b336001600160a01b0382161480610500575061050081336102c0565b6105725760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610447565b61057c83836109b0565b505050565b61058c335b82610a1e565b6105fe5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610447565b61057c838383610b15565b6106138282610cc9565b5050565b61057c8383836040518060200160405280600081525061082c565b61063b33610586565b6106ad5760405162461bcd60e51b815260206004820152603060248201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f766564000000000000000000000000000000006064820152608401610447565b6106b681610e0b565b50565b6000818152600260205260408120546001600160a01b0316151561033a565b6000818152600260205260408120546001600160a01b03168061033a5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e00000000000000000000000000000000000000000000006064820152608401610447565b60006001600160a01b0382166107e15760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610447565b506001600160a01b031660009081526003602052604090205490565b61057c838383610ea6565b60606001805461034f90611614565b6106138282610f24565b610613338383610f3e565b6108363383610a1e565b6108a85760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610447565b6108b48484848461100c565b50505050565b6000818152600260205260409020546060906001600160a01b03166109475760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006064820152608401610447565b600061095e60408051602081019091526000815290565b9050600081511161097e57604051806020016040528060008152506109a9565b806109888461108a565b60405160200161099992919061164e565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906109e5826106d8565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610a975760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610447565b6000610aa2836106d8565b9050806001600160a01b0316846001600160a01b03161480610ae957506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610b0d5750836001600160a01b0316610b02846103d2565b6001600160a01b0316145b949350505050565b826001600160a01b0316610b28826106d8565b6001600160a01b031614610ba45760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610447565b6001600160a01b038216610c065760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610447565b610c116000826109b0565b6001600160a01b0383166000908152600360205260408120805460019290610c3a908490611693565b90915550506001600160a01b0382166000908152600360205260408120805460019290610c689084906116aa565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216610d1f5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610447565b6000818152600260205260409020546001600160a01b031615610d845760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610447565b6001600160a01b0382166000908152600360205260408120805460019290610dad9084906116aa565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000610e16826106d8565b9050610e236000836109b0565b6001600160a01b0381166000908152600360205260408120805460019290610e4c908490611693565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b610eb08383610cc9565b610ebd60008484846111a3565b61057c5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610447565b610613828260405180602001604052806000815250610ea6565b816001600160a01b0316836001600160a01b031603610f9f5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610447565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611017848484610b15565b611023848484846111a3565b6108b45760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610447565b6060816000036110b15750506040805180820190915260018152600360fc1b602082015290565b8160005b81156110db57806110c5816116c2565b91506110d49050600a836116f1565b91506110b5565b60008167ffffffffffffffff8111156110f6576110f6611443565b6040519080825280601f01601f191660200182016040528015611120576020820181803683370190505b5090505b8415610b0d57611135600183611693565b9150611142600a86611705565b61114d9060306116aa565b60f81b81838151811061116257611162611719565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061119c600a866116f1565b9450611124565b60006001600160a01b0384163b156112e457604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906111e790339089908890889060040161172f565b6020604051808303816000875af1925050508015611222575060408051601f3d908101601f1916820190925261121f9181019061176b565b60015b6112ca573d808015611250576040519150601f19603f3d011682016040523d82523d6000602084013e611255565b606091505b5080516000036112c25760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610447565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b0d565b506001949350505050565b6001600160e01b0319811681146106b657600080fd5b60006020828403121561131757600080fd5b81356109a9816112ef565b60005b8381101561133d578181015183820152602001611325565b838111156108b45750506000910152565b60008151808452611366816020860160208601611322565b601f01601f19169290920160200192915050565b6020815260006109a9602083018461134e565b60006020828403121561139f57600080fd5b5035919050565b80356001600160a01b03811681146113bd57600080fd5b919050565b600080604083850312156113d557600080fd5b6113de836113a6565b946020939093013593505050565b60008060006060848603121561140157600080fd5b61140a846113a6565b9250611418602085016113a6565b9150604084013590509250925092565b60006020828403121561143a57600080fd5b6109a9826113a6565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261146a57600080fd5b813567ffffffffffffffff8082111561148557611485611443565b604051601f8301601f19908116603f011681019082821181831017156114ad576114ad611443565b816040528381528660208588010111156114c657600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156114fb57600080fd5b611504846113a6565b925060208401359150604084013567ffffffffffffffff81111561152757600080fd5b61153386828701611459565b9150509250925092565b6000806040838503121561155057600080fd5b611559836113a6565b91506020830135801515811461156e57600080fd5b809150509250929050565b6000806000806080858703121561158f57600080fd5b611598856113a6565b93506115a6602086016113a6565b925060408501359150606085013567ffffffffffffffff8111156115c957600080fd5b6115d587828801611459565b91505092959194509250565b600080604083850312156115f457600080fd5b6115fd836113a6565b915061160b602084016113a6565b90509250929050565b600181811c9082168061162857607f821691505b60208210810361164857634e487b7160e01b600052602260045260246000fd5b50919050565b60008351611660818460208801611322565b835190830190611674818360208801611322565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156116a5576116a561167d565b500390565b600082198211156116bd576116bd61167d565b500190565b6000600182016116d4576116d461167d565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611700576117006116db565b500490565b600082611714576117146116db565b500690565b634e487b7160e01b600052603260045260246000fd5b60006001600160a01b03808716835280861660208401525083604083015260806060830152611761608083018461134e565b9695505050505050565b60006020828403121561177d57600080fd5b81516109a9816112ef56fea164736f6c634300080d000a";

type ERC721BurnableMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721BurnableMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721BurnableMock__factory extends ContractFactory {
  constructor(...args: ERC721BurnableMockConstructorParams) {
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
  ): Promise<ERC721BurnableMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721BurnableMock>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC721BurnableMock {
    return super.attach(address) as ERC721BurnableMock;
  }
  override connect(signer: Signer): ERC721BurnableMock__factory {
    return super.connect(signer) as ERC721BurnableMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721BurnableMockInterface {
    return new utils.Interface(_abi) as ERC721BurnableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721BurnableMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721BurnableMock;
  }
}