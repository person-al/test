/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721PausableMock,
  ERC721PausableMockInterface,
} from "../../../openzeppelin-contracts-4.6.0/mocks/ERC721PausableMock";

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
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001be938038062001be98339810160408190526200003491620001ec565b8151829082906200004d90600090602085019062000079565b5080516200006390600190602084019062000079565b50506006805460ff191690555062000292915050565b828054620000879062000256565b90600052602060002090601f016020900481019282620000ab5760008555620000f6565b82601f10620000c657805160ff1916838001178555620000f6565b82800160010185558215620000f6579182015b82811115620000f6578251825591602001919060010190620000d9565b506200010492915062000108565b5090565b5b8082111562000104576000815560010162000109565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014757600080fd5b81516001600160401b03808211156200016457620001646200011f565b604051601f8301601f19908116603f011681019082821181831017156200018f576200018f6200011f565b81604052838152602092508683858801011115620001ac57600080fd5b600091505b83821015620001d05785820183015181830184015290820190620001b1565b83821115620001e25760008385830101525b9695505050505050565b600080604083850312156200020057600080fd5b82516001600160401b03808211156200021857600080fd5b620002268683870162000135565b935060208501519150808211156200023d57600080fd5b506200024c8582860162000135565b9150509250929050565b600181811c908216806200026b57607f821691505b6020821081036200028c57634e487b7160e01b600052602260045260246000fd5b50919050565b61194780620002a26000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c80635c975abb116100d857806395d89b411161008c578063b88d4fde11610066578063b88d4fde146102e8578063c87b56dd146102fb578063e985e9c51461030e57600080fd5b806395d89b41146102ba578063a1448194146102c2578063a22cb465146102d557600080fd5b806370a08231116100bd57806370a082311461027e5780638456cb591461029f5780638832e6e3146102a757600080fd5b80635c975abb146102605780636352211e1461026b57600080fd5b80633f4ba83a1161012f57806342842e0e1161011457806342842e0e1461022757806342966c681461023a5780634f558e791461024d57600080fd5b80633f4ba83a1461020c57806340c10f191461021457600080fd5b8063081812fc11610160578063081812fc146101b9578063095ea7b3146101e457806323b872dd146101f957600080fd5b806301ffc9a71461017c57806306fdde03146101a4575b600080fd5b61018f61018a3660046114b7565b61034a565b60405190151581526020015b60405180910390f35b6101ac61039c565b60405161019b919061152c565b6101cc6101c736600461153f565b61042e565b6040516001600160a01b03909116815260200161019b565b6101f76101f2366004611574565b6104c8565b005b6101f761020736600461159e565b6105dd565b6101f7610664565b6101f7610222366004611574565b61066e565b6101f761023536600461159e565b61067c565b6101f761024836600461153f565b610697565b61018f61025b36600461153f565b6106a3565b60065460ff1661018f565b6101cc61027936600461153f565b6106c2565b61029161028c3660046115da565b61074d565b60405190815260200161019b565b6101f76107e7565b6101f76102b5366004611698565b6107ef565b6101ac6107fa565b6101f76102d0366004611574565b610809565b6101f76102e33660046116ef565b610813565b6101f76102f636600461172b565b61081e565b6101ac61030936600461153f565b6108ac565b61018f61031c366004611793565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061037b57506001600160e01b03198216635b5e139f60e01b145b8061039657506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546103ab906117c6565b80601f01602080910402602001604051908101604052809291908181526020018280546103d7906117c6565b80156104245780601f106103f957610100808354040283529160200191610424565b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104ac5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006104d3826106c2565b9050806001600160a01b0316836001600160a01b0316036105405760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016104a3565b336001600160a01b038216148061055c575061055c813361031c565b6105ce5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016104a3565b6105d883836109a2565b505050565b6105e73382610a10565b6106595760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016104a3565b6105d8838383610b07565b61066c610cc6565b565b6106788282610d62565b5050565b6105d88383836040518060200160405280600081525061081e565b6106a081610eb0565b50565b6000818152600260205260408120546001600160a01b03161515610396565b6000818152600260205260408120546001600160a01b0316806103965760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016104a3565b60006001600160a01b0382166107cb5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016104a3565b506001600160a01b031660009081526003602052604090205490565b61066c610f57565b6105d8838383610fdf565b6060600180546103ab906117c6565b610678828261105d565b610678338383611077565b6108283383610a10565b61089a5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016104a3565b6108a684848484611145565b50505050565b6000818152600260205260409020546060906001600160a01b03166109395760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016104a3565b600061095060408051602081019091526000815290565b90506000815111610970576040518060200160405280600081525061099b565b8061097a846111c3565b60405160200161098b929190611800565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906109d7826106c2565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610a895760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016104a3565b6000610a94836106c2565b9050806001600160a01b0316846001600160a01b03161480610adb57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610aff5750836001600160a01b0316610af48461042e565b6001600160a01b0316145b949350505050565b826001600160a01b0316610b1a826106c2565b6001600160a01b031614610b965760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016104a3565b6001600160a01b038216610bf85760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104a3565b610c038383836112dc565b610c0e6000826109a2565b6001600160a01b0383166000908152600360205260408120805460019290610c37908490611845565b90915550506001600160a01b0382166000908152600360205260408120805460019290610c6590849061185c565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60065460ff16610d185760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104a3565b6006805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610db85760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104a3565b6000818152600260205260409020546001600160a01b031615610e1d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104a3565b610e29600083836112dc565b6001600160a01b0382166000908152600360205260408120805460019290610e5290849061185c565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000610ebb826106c2565b9050610ec9816000846112dc565b610ed46000836109a2565b6001600160a01b0381166000908152600360205260408120805460019290610efd908490611845565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60065460ff1615610faa5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016104a3565b6006805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610d453390565b610fe98383610d62565b610ff66000848484611355565b6105d85760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016104a3565b610678828260405180602001604052806000815250610fdf565b816001600160a01b0316836001600160a01b0316036110d85760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104a3565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611150848484610b07565b61115c84848484611355565b6108a65760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016104a3565b6060816000036111ea5750506040805180820190915260018152600360fc1b602082015290565b8160005b811561121457806111fe81611874565b915061120d9050600a836118a3565b91506111ee565b60008167ffffffffffffffff81111561122f5761122f6115f5565b6040519080825280601f01601f191660200182016040528015611259576020820181803683370190505b5090505b8415610aff5761126e600183611845565b915061127b600a866118b7565b61128690603061185c565b60f81b81838151811061129b5761129b6118cb565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506112d5600a866118a3565b945061125d565b60065460ff16156105d85760405162461bcd60e51b815260206004820152602b60248201527f4552433732315061757361626c653a20746f6b656e207472616e73666572207760448201527f68696c652070617573656400000000000000000000000000000000000000000060648201526084016104a3565b60006001600160a01b0384163b1561149657604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906113999033908990889088906004016118e1565b6020604051808303816000875af19250505080156113d4575060408051601f3d908101601f191682019092526113d19181019061191d565b60015b61147c573d808015611402576040519150601f19603f3d011682016040523d82523d6000602084013e611407565b606091505b5080516000036114745760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016104a3565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610aff565b506001949350505050565b6001600160e01b0319811681146106a057600080fd5b6000602082840312156114c957600080fd5b813561099b816114a1565b60005b838110156114ef5781810151838201526020016114d7565b838111156108a65750506000910152565b600081518084526115188160208601602086016114d4565b601f01601f19169290920160200192915050565b60208152600061099b6020830184611500565b60006020828403121561155157600080fd5b5035919050565b80356001600160a01b038116811461156f57600080fd5b919050565b6000806040838503121561158757600080fd5b61159083611558565b946020939093013593505050565b6000806000606084860312156115b357600080fd5b6115bc84611558565b92506115ca60208501611558565b9150604084013590509250925092565b6000602082840312156115ec57600080fd5b61099b82611558565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261161c57600080fd5b813567ffffffffffffffff80821115611637576116376115f5565b604051601f8301601f19908116603f0116810190828211818310171561165f5761165f6115f5565b8160405283815286602085880101111561167857600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156116ad57600080fd5b6116b684611558565b925060208401359150604084013567ffffffffffffffff8111156116d957600080fd5b6116e58682870161160b565b9150509250925092565b6000806040838503121561170257600080fd5b61170b83611558565b91506020830135801515811461172057600080fd5b809150509250929050565b6000806000806080858703121561174157600080fd5b61174a85611558565b935061175860208601611558565b925060408501359150606085013567ffffffffffffffff81111561177b57600080fd5b6117878782880161160b565b91505092959194509250565b600080604083850312156117a657600080fd5b6117af83611558565b91506117bd60208401611558565b90509250929050565b600181811c908216806117da57607f821691505b6020821081036117fa57634e487b7160e01b600052602260045260246000fd5b50919050565b600083516118128184602088016114d4565b8351908301906118268183602088016114d4565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156118575761185761182f565b500390565b6000821982111561186f5761186f61182f565b500190565b6000600182016118865761188661182f565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826118b2576118b261188d565b500490565b6000826118c6576118c661188d565b500690565b634e487b7160e01b600052603260045260246000fd5b60006001600160a01b038087168352808616602084015250836040830152608060608301526119136080830184611500565b9695505050505050565b60006020828403121561192f57600080fd5b815161099b816114a156fea164736f6c634300080d000a";

type ERC721PausableMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721PausableMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721PausableMock__factory extends ContractFactory {
  constructor(...args: ERC721PausableMockConstructorParams) {
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
  ): Promise<ERC721PausableMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721PausableMock>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC721PausableMock {
    return super.attach(address) as ERC721PausableMock;
  }
  override connect(signer: Signer): ERC721PausableMock__factory {
    return super.connect(signer) as ERC721PausableMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721PausableMockInterface {
    return new utils.Interface(_abi) as ERC721PausableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721PausableMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721PausableMock;
  }
}
