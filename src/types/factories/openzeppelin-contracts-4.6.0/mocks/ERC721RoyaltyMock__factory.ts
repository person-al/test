/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721RoyaltyMock,
  ERC721RoyaltyMockInterface,
} from "../../../openzeppelin-contracts-4.6.0/mocks/ERC721RoyaltyMock";

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
    inputs: [],
    name: "deleteDefaultRoyalty",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "fraction",
        type: "uint96",
      },
    ],
    name: "setDefaultRoyalty",
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
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "fraction",
        type: "uint96",
      },
    ],
    name: "setTokenRoyalty",
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
  "0x60806040523480156200001157600080fd5b5060405162001cd738038062001cd78339810160408190526200003491620001e1565b8151829082906200004d9060029060208501906200006e565b508051620000639060039060208401906200006e565b505050505062000287565b8280546200007c906200024b565b90600052602060002090601f016020900481019282620000a05760008555620000eb565b82601f10620000bb57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000eb578251825591602001919060010190620000ce565b50620000f9929150620000fd565b5090565b5b80821115620000f95760008155600101620000fe565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013c57600080fd5b81516001600160401b038082111562000159576200015962000114565b604051601f8301601f19908116603f0116810190828211818310171562000184576200018462000114565b81604052838152602092508683858801011115620001a157600080fd5b600091505b83821015620001c55785820183015181830184015290820190620001a6565b83821115620001d75760008385830101525b9695505050505050565b60008060408385031215620001f557600080fd5b82516001600160401b03808211156200020d57600080fd5b6200021b868387016200012a565b935060208501519150808211156200023257600080fd5b5062000241858286016200012a565b9150509250929050565b600181811c908216806200026057607f821691505b6020821081036200028157634e487b7160e01b600052602260045260246000fd5b50919050565b611a4080620002976000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c806342966c68116100cd578063a22cb46511610081578063b88d4fde11610066578063b88d4fde146102ce578063c87b56dd146102e1578063e985e9c5146102f457600080fd5b8063a22cb465146102b3578063aa1b103f146102c657600080fd5b80636352211e116100b25780636352211e1461027757806370a082311461028a57806395d89b41146102ab57600080fd5b806342966c68146102515780635944c7531461026457600080fd5b8063095ea7b3116101245780632a55205a116101095780632a55205a146101f957806340c10f191461022b57806342842e0e1461023e57600080fd5b8063095ea7b3146101d357806323b872dd146101e657600080fd5b806301ffc9a71461015657806304634d8d1461017e57806306fdde0314610193578063081812fc146101a8575b600080fd5b61016961016436600461155d565b610330565b60405190151581526020015b60405180910390f35b61019161018c3660046115b2565b610341565b005b61019b61034f565b604051610175919061163d565b6101bb6101b6366004611650565b6103e1565b6040516001600160a01b039091168152602001610175565b6101916101e1366004611669565b61047b565b6101916101f4366004611693565b610590565b61020c6102073660046116cf565b610617565b604080516001600160a01b039093168352602083019190915201610175565b610191610239366004611669565b6106d2565b61019161024c366004611693565b6106dc565b61019161025f366004611650565b6106f7565b6101916102723660046116f1565b610703565b6101bb610285366004611650565b61070e565b61029d61029836600461172d565b610799565b604051908152602001610175565b61019b610833565b6101916102c1366004611748565b610842565b61019161084d565b6101916102dc36600461179a565b610858565b61019b6102ef366004611650565b6108e6565b610169610302366004611876565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b600061033b826109dc565b92915050565b61034b8282610a1c565b5050565b60606002805461035e906118a0565b80601f016020809104026020016040519081016040528092919081815260200182805461038a906118a0565b80156103d75780601f106103ac576101008083540402835291602001916103d7565b820191906000526020600020905b8154815290600101906020018083116103ba57829003601f168201915b5050505050905090565b6000818152600460205260408120546001600160a01b031661045f5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006104868261070e565b9050806001600160a01b0316836001600160a01b0316036104f35760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610456565b336001600160a01b038216148061050f575061050f8133610302565b6105815760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610456565b61058b8383610b23565b505050565b61059a3382610b91565b61060c5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610456565b61058b838383610c88565b60008281526001602090815260408083208151808301909252546001600160a01b038116808352600160a01b9091046bffffffffffffffffffffffff169282019290925282916106965750604080518082019091526000546001600160a01b0381168252600160a01b90046bffffffffffffffffffffffff1660208201525b6020810151600090612710906106ba906bffffffffffffffffffffffff16876118f0565b6106c49190611925565b915196919550909350505050565b61034b8282610e3c565b61058b83838360405180602001604052806000815250610858565b61070081610f7e565b50565b61058b838383610f98565b6000818152600460205260408120546001600160a01b03168061033b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e00000000000000000000000000000000000000000000006064820152608401610456565b60006001600160a01b0382166108175760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610456565b506001600160a01b031660009081526005602052604090205490565b60606003805461035e906118a0565b61034b3383836110b0565b61085660008055565b565b6108623383610b91565b6108d45760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610456565b6108e08484848461117e565b50505050565b6000818152600460205260409020546060906001600160a01b03166109735760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006064820152608401610456565b600061098a60408051602081019091526000815290565b905060008151116109aa57604051806020016040528060008152506109d5565b806109b484611207565b6040516020016109c5929190611939565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982166380ac58cd60e01b1480610a0d57506001600160e01b03198216635b5e139f60e01b145b8061033b575061033b82611320565b6127106bffffffffffffffffffffffff82161115610a8f5760405162461bcd60e51b815260206004820152602a60248201527f455243323938313a20726f79616c7479206665652077696c6c206578636565646044820152692073616c65507269636560b01b6064820152608401610456565b6001600160a01b038216610ae55760405162461bcd60e51b815260206004820152601960248201527f455243323938313a20696e76616c6964207265636569766572000000000000006044820152606401610456565b604080518082019091526001600160a01b039092168083526bffffffffffffffffffffffff9091166020909201829052600160a01b90910217600055565b600081815260066020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b588261070e565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600460205260408120546001600160a01b0316610c0a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610456565b6000610c158361070e565b9050806001600160a01b0316846001600160a01b03161480610c5c57506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff165b80610c805750836001600160a01b0316610c75846103e1565b6001600160a01b0316145b949350505050565b826001600160a01b0316610c9b8261070e565b6001600160a01b031614610d175760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610456565b6001600160a01b038216610d795760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610456565b610d84600082610b23565b6001600160a01b0383166000908152600560205260408120805460019290610dad908490611968565b90915550506001600160a01b0382166000908152600560205260408120805460019290610ddb90849061197f565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216610e925760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610456565b6000818152600460205260409020546001600160a01b031615610ef75760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610456565b6001600160a01b0382166000908152600560205260408120805460019290610f2090849061197f565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b610f8781611355565b600090815260016020526040812055565b6127106bffffffffffffffffffffffff8216111561100b5760405162461bcd60e51b815260206004820152602a60248201527f455243323938313a20726f79616c7479206665652077696c6c206578636565646044820152692073616c65507269636560b01b6064820152608401610456565b6001600160a01b0382166110615760405162461bcd60e51b815260206004820152601b60248201527f455243323938313a20496e76616c696420706172616d657465727300000000006044820152606401610456565b6040805180820182526001600160a01b0393841681526bffffffffffffffffffffffff92831660208083019182526000968752600190529190942093519051909116600160a01b029116179055565b816001600160a01b0316836001600160a01b0316036111115760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610456565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611189848484610c88565b611195848484846113f0565b6108e05760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610456565b60608160000361122e5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611258578061124281611997565b91506112519050600a83611925565b9150611232565b60008167ffffffffffffffff81111561127357611273611784565b6040519080825280601f01601f19166020018201604052801561129d576020820181803683370190505b5090505b8415610c80576112b2600183611968565b91506112bf600a866119b0565b6112ca90603061197f565b60f81b8183815181106112df576112df6119c4565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611319600a86611925565b94506112a1565b60006001600160e01b0319821663152a902d60e11b148061033b57506301ffc9a760e01b6001600160e01b031983161461033b565b60006113608261070e565b905061136d600083610b23565b6001600160a01b0381166000908152600560205260408120805460019290611396908490611968565b909155505060008281526004602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60006001600160a01b0384163b1561153c57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906114349033908990889088906004016119da565b6020604051808303816000875af192505050801561146f575060408051601f3d908101601f1916820190925261146c91810190611a16565b60015b611522573d80801561149d576040519150601f19603f3d011682016040523d82523d6000602084013e6114a2565b606091505b50805160000361151a5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610456565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c80565b506001949350505050565b6001600160e01b03198116811461070057600080fd5b60006020828403121561156f57600080fd5b81356109d581611547565b80356001600160a01b038116811461159157600080fd5b919050565b80356bffffffffffffffffffffffff8116811461159157600080fd5b600080604083850312156115c557600080fd5b6115ce8361157a565b91506115dc60208401611596565b90509250929050565b60005b838110156116005781810151838201526020016115e8565b838111156108e05750506000910152565b600081518084526116298160208601602086016115e5565b601f01601f19169290920160200192915050565b6020815260006109d56020830184611611565b60006020828403121561166257600080fd5b5035919050565b6000806040838503121561167c57600080fd5b6116858361157a565b946020939093013593505050565b6000806000606084860312156116a857600080fd5b6116b18461157a565b92506116bf6020850161157a565b9150604084013590509250925092565b600080604083850312156116e257600080fd5b50508035926020909101359150565b60008060006060848603121561170657600080fd5b833592506117166020850161157a565b915061172460408501611596565b90509250925092565b60006020828403121561173f57600080fd5b6109d58261157a565b6000806040838503121561175b57600080fd5b6117648361157a565b91506020830135801515811461177957600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156117b057600080fd5b6117b98561157a565b93506117c76020860161157a565b925060408501359150606085013567ffffffffffffffff808211156117eb57600080fd5b818701915087601f8301126117ff57600080fd5b81358181111561181157611811611784565b604051601f8201601f19908116603f0116810190838211818310171561183957611839611784565b816040528281528a602084870101111561185257600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561188957600080fd5b6118928361157a565b91506115dc6020840161157a565b600181811c908216806118b457607f821691505b6020821081036118d457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561190a5761190a6118da565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826119345761193461190f565b500490565b6000835161194b8184602088016115e5565b83519083019061195f8183602088016115e5565b01949350505050565b60008282101561197a5761197a6118da565b500390565b60008219821115611992576119926118da565b500190565b6000600182016119a9576119a96118da565b5060010190565b6000826119bf576119bf61190f565b500690565b634e487b7160e01b600052603260045260246000fd5b60006001600160a01b03808716835280861660208401525083604083015260806060830152611a0c6080830184611611565b9695505050505050565b600060208284031215611a2857600080fd5b81516109d58161154756fea164736f6c634300080d000a";

type ERC721RoyaltyMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721RoyaltyMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721RoyaltyMock__factory extends ContractFactory {
  constructor(...args: ERC721RoyaltyMockConstructorParams) {
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
  ): Promise<ERC721RoyaltyMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721RoyaltyMock>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC721RoyaltyMock {
    return super.attach(address) as ERC721RoyaltyMock;
  }
  override connect(signer: Signer): ERC721RoyaltyMock__factory {
    return super.connect(signer) as ERC721RoyaltyMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721RoyaltyMockInterface {
    return new utils.Interface(_abi) as ERC721RoyaltyMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721RoyaltyMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721RoyaltyMock;
  }
}
