/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721VotesMock,
  ERC721VotesMockInterface,
} from "../../../openzeppelin-contracts-4.6.0/mocks/ERC721VotesMock";

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
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
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
    ],
    name: "delegates",
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
    inputs: [],
    name: "getChainId",
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
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
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
    name: "getTotalSupply",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
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
        name: "account",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
  "0x6101406040523480156200001257600080fd5b506040516200279838038062002798833981016040819052620000359162000290565b81604051806040016040528060018152602001603160f81b815250838381600090805190602001906200006a9291906200011d565b508051620000809060019060208401906200011d565b5050825160208085019190912083518483012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c0019052805194019390932091935091906080523060c052610120525062000336945050505050565b8280546200012b90620002fa565b90600052602060002090601f0160209004810192826200014f57600085556200019a565b82601f106200016a57805160ff19168380011785556200019a565b828001600101855582156200019a579182015b828111156200019a5782518255916020019190600101906200017d565b50620001a8929150620001ac565b5090565b5b80821115620001a85760008155600101620001ad565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001eb57600080fd5b81516001600160401b0380821115620002085762000208620001c3565b604051601f8301601f19908116603f01168101908282118183101715620002335762000233620001c3565b816040528381526020925086838588010111156200025057600080fd5b600091505b8382101562000274578582018301518183018401529082019062000255565b83821115620002865760008385830101525b9695505050505050565b60008060408385031215620002a457600080fd5b82516001600160401b0380821115620002bc57600080fd5b620002ca86838701620001d9565b93506020850151915080821115620002e157600080fd5b50620002f085828601620001d9565b9150509250929050565b600181811c908216806200030f57607f821691505b6020821081036200033057634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e0516101005161012051612412620003866000396000610faa01526000610ff901526000610fd401526000610f2d01526000610f5701526000610f8101526124126000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c80635c19a95c116100ee5780639ab24eb011610097578063c3cda52011610071578063c3cda52014610368578063c4e41b221461037b578063c87b56dd14610383578063e985e9c51461039657600080fd5b80639ab24eb01461032f578063a22cb46514610342578063b88d4fde1461035557600080fd5b80637ecebe00116100c85780637ecebe00146103015780638e539e8c1461031457806395d89b411461032757600080fd5b80635c19a95c146102c85780636352211e146102db57806370a08231146102ee57600080fd5b80633644e5151161015057806342842e0e1161012a57806342842e0e1461027657806342966c6814610289578063587cde1e1461029c57600080fd5b80633644e515146102485780633a46b1a81461025057806340c10f191461026357600080fd5b8063095ea7b311610181578063095ea7b31461021057806323b872dd146102255780633408e4701461023857600080fd5b806301ffc9a7146101a857806306fdde03146101d0578063081812fc146101e5575b600080fd5b6101bb6101b6366004611f82565b6103d2565b60405190151581526020015b60405180910390f35b6101d8610424565b6040516101c79190611ff7565b6101f86101f336600461200a565b6104b6565b6040516001600160a01b0390911681526020016101c7565b61022361021e36600461203f565b610550565b005b610223610233366004612069565b610665565b465b6040519081526020016101c7565b61023a6106ec565b61023a61025e36600461203f565b6106fb565b61022361027136600461203f565b610724565b610223610284366004612069565b610732565b61022361029736600461200a565b61074d565b6101f86102aa3660046120a5565b6001600160a01b039081166000908152600660205260409020541690565b6102236102d63660046120a5565b610759565b6101f86102e936600461200a565b610764565b61023a6102fc3660046120a5565b6107ef565b61023a61030f3660046120a5565b610889565b61023a61032236600461200a565b6108a7565b6101d8610903565b61023a61033d3660046120a5565b610912565b6102236103503660046120c0565b610933565b610223610363366004612112565b61093e565b6102236103763660046121ee565b6109cc565b61023a610b02565b6101d861039136600461200a565b610b0c565b6101bb6103a436600461224e565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061040357506001600160e01b03198216635b5e139f60e01b145b8061041e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461043390612281565b80601f016020809104026020016040519081016040528092919081815260200182805461045f90612281565b80156104ac5780601f10610481576101008083540402835291602001916104ac565b820191906000526020600020905b81548152906001019060200180831161048f57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105345760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061055b82610764565b9050806001600160a01b0316836001600160a01b0316036105c85760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161052b565b336001600160a01b03821614806105e457506105e481336103a4565b6106565760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161052b565b6106608383610c01565b505050565b61066f3382610c6f565b6106e15760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161052b565b610660838383610d66565b60006106f6610f20565b905090565b6001600160a01b038216600090815260076020526040812061071d9083611047565b9392505050565b61072e8282611156565b5050565b6106608383836040518060200160405280600081525061093e565b610756816112a0565b50565b3361072e8183611343565b6000818152600260205260408120546001600160a01b03168061041e5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161052b565b60006001600160a01b03821661086d5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161052b565b506001600160a01b031660009081526003602052604090205490565b6001600160a01b03811660009081526009602052604081205461041e565b60004382106108f85760405162461bcd60e51b815260206004820152601a60248201527f566f7465733a20626c6f636b206e6f7420796574206d696e6564000000000000604482015260640161052b565b61041e600883611047565b60606001805461043390612281565b6001600160a01b038116600090815260076020526040812061041e906113b5565b61072e338383611411565b6109483383610c6f565b6109ba5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161052b565b6109c6848484846114df565b50505050565b83421115610a1c5760405162461bcd60e51b815260206004820152601860248201527f566f7465733a207369676e617475726520657870697265640000000000000000604482015260640161052b565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610a9690610a8e9060a00160405160208183030381529060405280519060200120611568565b8585856115b6565b9050610aa1816115de565b8614610aef5760405162461bcd60e51b815260206004820152601460248201527f566f7465733a20696e76616c6964206e6f6e6365000000000000000000000000604482015260640161052b565b610af98188611343565b50505050505050565b60006106f6611606565b6000818152600260205260409020546060906001600160a01b0316610b995760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161052b565b6000610bb060408051602081019091526000815290565b90506000815111610bd0576040518060200160405280600081525061071d565b80610bda84611612565b604051602001610beb9291906122b5565b6040516020818303038152906040529392505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610c3682610764565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610ce85760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161052b565b6000610cf383610764565b9050806001600160a01b0316846001600160a01b03161480610d3a57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610d5e5750836001600160a01b0316610d53846104b6565b6001600160a01b0316145b949350505050565b826001600160a01b0316610d7982610764565b6001600160a01b031614610df55760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e6572000000000000000000000000000000000000000000000000000000606482015260840161052b565b6001600160a01b038216610e575760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161052b565b610e62600082610c01565b6001600160a01b0383166000908152600360205260408120805460019290610e8b9084906122fa565b90915550506001600160a01b0382166000908152600360205260408120805460019290610eb9908490612311565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a461066083838361172b565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610f7957507f000000000000000000000000000000000000000000000000000000000000000046145b15610fa357507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b60004382106110985760405162461bcd60e51b815260206004820181905260248201527f436865636b706f696e74733a20626c6f636b206e6f7420796574206d696e6564604482015260640161052b565b825460005b818110156110fd5760006110b18284611737565b9050848660000182815481106110c9576110c9612329565b60009182526020909120015463ffffffff1611156110e9578092506110f7565b6110f4816001612311565b91505b5061109d565b8115611141578461110f6001846122fa565b8154811061111f5761111f612329565b60009182526020909120015464010000000090046001600160e01b0316611144565b60005b6001600160e01b031695945050505050565b6001600160a01b0382166111ac5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161052b565b6000818152600260205260409020546001600160a01b0316156112115760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161052b565b6001600160a01b038216600090815260036020526040812080546001929061123a908490612311565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a461072e6000838361172b565b60006112ab82610764565b90506112b8600083610c01565b6001600160a01b03811660009081526003602052604081208054600192906112e19084906122fa565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a461072e8160008461172b565b6001600160a01b0382811660008181526006602052604080822080548686166001600160a01b0319821681179092559151919094169392849290917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a461066081836113b086611752565b61175d565b805460009080156113fe57826113cc6001836122fa565b815481106113dc576113dc612329565b60009182526020909120015464010000000090046001600160e01b0316611401565b60005b6001600160e01b03169392505050565b816001600160a01b0316836001600160a01b0316036114725760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161052b565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6114ea848484610d66565b6114f68484848461189a565b6109c65760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161052b565b600061041e611575610f20565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006115c7878787876119ee565b915091506115d481611adb565b5095945050505050565b6001600160a01b03811660009081526009602052604090208054600181018255905b50919050565b60006106f660086113b5565b6060816000036116395750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611663578061164d8161233f565b915061165c9050600a8361236e565b915061163d565b60008167ffffffffffffffff81111561167e5761167e6120fc565b6040519080825280601f01601f1916602001820160405280156116a8576020820181803683370190505b5090505b8415610d5e576116bd6001836122fa565b91506116ca600a86612382565b6116d5906030612311565b60f81b8183815181106116ea576116ea612329565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611724600a8661236e565b94506116ac565b61066083836001611c91565b6000611746600284841861236e565b61071d90848416612311565b600061041e826107ef565b816001600160a01b0316836001600160a01b03161415801561177f5750600081115b15610660576001600160a01b0383161561180d576001600160a01b038316600090815260076020526040812081906117ba90611d0185611d0d565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611802929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610660576001600160a01b0382166000908152600760205260408120819061184390611d3b85611d0d565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161188b929190918252602082015260400190565b60405180910390a25050505050565b60006001600160a01b0384163b156119e657604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906118de903390899088908890600401612396565b6020604051808303816000875af1925050508015611919575060408051601f3d908101601f19168201909252611916918101906123d2565b60015b6119cc573d808015611947576040519150601f19603f3d011682016040523d82523d6000602084013e61194c565b606091505b5080516000036119c45760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161052b565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610d5e565b506001610d5e565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611a255750600090506003611ad2565b8460ff16601b14158015611a3d57508460ff16601c14155b15611a4e5750600090506004611ad2565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611aa2573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611acb57600060019250925050611ad2565b9150600090505b94509492505050565b6000816004811115611aef57611aef6123ef565b03611af75750565b6001816004811115611b0b57611b0b6123ef565b03611b585760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161052b565b6002816004811115611b6c57611b6c6123ef565b03611bb95760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161052b565b6003816004811115611bcd57611bcd6123ef565b03611c255760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161052b565b6004816004811115611c3957611c396123ef565b036107565760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161052b565b6001600160a01b038316611cb057611cad6008611d3b83611d0d565b50505b6001600160a01b038216611ccf57611ccc6008611d0183611d0d565b50505b6001600160a01b038381166000908152600660205260408082205485841683529120546106609291821691168361175d565b600061071d82846122fa565b600080611d2f85611d2a611d20886113b5565b868863ffffffff16565b611d47565b91509150935093915050565b600061071d8284612311565b8154600090819081611d58866113b5565b9050600082118015611d9657504386611d726001856122fa565b81548110611d8257611d82612329565b60009182526020909120015463ffffffff16145b15611df657611da485611e6d565b86611db06001856122fa565b81548110611dc057611dc0612329565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550611e64565b856000016040518060400160405280611e0e43611ef0565b63ffffffff168152602001611e2288611e6d565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b95939450505050565b60006001600160e01b03821115611eec5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203260448201527f3234206269747300000000000000000000000000000000000000000000000000606482015260840161052b565b5090565b600063ffffffff821115611eec5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201527f3220626974730000000000000000000000000000000000000000000000000000606482015260840161052b565b6001600160e01b03198116811461075657600080fd5b600060208284031215611f9457600080fd5b813561071d81611f6c565b60005b83811015611fba578181015183820152602001611fa2565b838111156109c65750506000910152565b60008151808452611fe3816020860160208601611f9f565b601f01601f19169290920160200192915050565b60208152600061071d6020830184611fcb565b60006020828403121561201c57600080fd5b5035919050565b80356001600160a01b038116811461203a57600080fd5b919050565b6000806040838503121561205257600080fd5b61205b83612023565b946020939093013593505050565b60008060006060848603121561207e57600080fd5b61208784612023565b925061209560208501612023565b9150604084013590509250925092565b6000602082840312156120b757600080fd5b61071d82612023565b600080604083850312156120d357600080fd5b6120dc83612023565b9150602083013580151581146120f157600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561212857600080fd5b61213185612023565b935061213f60208601612023565b925060408501359150606085013567ffffffffffffffff8082111561216357600080fd5b818701915087601f83011261217757600080fd5b813581811115612189576121896120fc565b604051601f8201601f19908116603f011681019083821181831017156121b1576121b16120fc565b816040528281528a60208487010111156121ca57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060008060008060c0878903121561220757600080fd5b61221087612023565b95506020870135945060408701359350606087013560ff8116811461223457600080fd5b9598949750929560808101359460a0909101359350915050565b6000806040838503121561226157600080fd5b61226a83612023565b915061227860208401612023565b90509250929050565b600181811c9082168061229557607f821691505b60208210810361160057634e487b7160e01b600052602260045260246000fd5b600083516122c7818460208801611f9f565b8351908301906122db818360208801611f9f565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561230c5761230c6122e4565b500390565b60008219821115612324576123246122e4565b500190565b634e487b7160e01b600052603260045260246000fd5b600060018201612351576123516122e4565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261237d5761237d612358565b500490565b60008261239157612391612358565b500690565b60006001600160a01b038087168352808616602084015250836040830152608060608301526123c86080830184611fcb565b9695505050505050565b6000602082840312156123e457600080fd5b815161071d81611f6c565b634e487b7160e01b600052602160045260246000fdfea164736f6c634300080d000a";

type ERC721VotesMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721VotesMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721VotesMock__factory extends ContractFactory {
  constructor(...args: ERC721VotesMockConstructorParams) {
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
  ): Promise<ERC721VotesMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721VotesMock>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC721VotesMock {
    return super.attach(address) as ERC721VotesMock;
  }
  override connect(signer: Signer): ERC721VotesMock__factory {
    return super.connect(signer) as ERC721VotesMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721VotesMockInterface {
    return new utils.Interface(_abi) as ERC721VotesMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721VotesMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721VotesMock;
  }
}
