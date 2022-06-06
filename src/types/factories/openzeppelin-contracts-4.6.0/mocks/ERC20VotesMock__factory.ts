/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20VotesMock,
  ERC20VotesMockInterface,
} from "../../../openzeppelin-contracts-4.6.0/mocks/ERC20VotesMock";

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
        internalType: "uint32",
        name: "pos",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromBlock",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "votes",
            type: "uint224",
          },
        ],
        internalType: "struct ERC20Votes.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
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
        name: "account",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
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
    name: "permit",
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
  "0x6101406040523480156200001257600080fd5b506040516200221838038062002218833981016040819052620000359162000292565b8180604051806040016040528060018152602001603160f81b815250848481600390805190602001906200006b9291906200011f565b508051620000819060049060208401906200011f565b5050825160208085019190912083518483012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c0019052805194019390932091935091906080523060c05261012052506200033895505050505050565b8280546200012d90620002fc565b90600052602060002090601f0160209004810192826200015157600085556200019c565b82601f106200016c57805160ff19168380011785556200019c565b828001600101855582156200019c579182015b828111156200019c5782518255916020019190600101906200017f565b50620001aa929150620001ae565b5090565b5b80821115620001aa5760008155600101620001af565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001ed57600080fd5b81516001600160401b03808211156200020a576200020a620001c5565b604051601f8301601f19908116603f01168101908282118183101715620002355762000235620001c5565b816040528381526020925086838588010111156200025257600080fd5b600091505b8382101562000276578582018301518183018401529082019062000257565b83821115620002885760008385830101525b9695505050505050565b60008060408385031215620002a657600080fd5b82516001600160401b0380821115620002be57600080fd5b620002cc86838701620001db565b93506020850151915080821115620002e357600080fd5b50620002f285828601620001db565b9150509250929050565b600181811c908216806200031157607f821691505b6020821081036200033257634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e0516101005161012051611e90620003886000396000610f3501526000610f8401526000610f5f01526000610eb801526000610ee201526000610f0c0152611e906000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c80636fcfff45116100ee5780639dc29fac11610097578063c3cda52011610071578063c3cda52014610388578063d505accf1461039b578063dd62ed3e146103ae578063f1127ed8146103e757600080fd5b80639dc29fac1461034f578063a457c2d714610362578063a9059cbb1461037557600080fd5b80638e539e8c116100c85780638e539e8c1461032157806395d89b41146103345780639ab24eb01461033c57600080fd5b80636fcfff45146102bd57806370a08231146102e55780637ecebe001461030e57600080fd5b80633644e5151161015057806340c10f191161012a57806340c10f1914610251578063587cde1e146102665780635c19a95c146102aa57600080fd5b80633644e51514610223578063395093511461022b5780633a46b1a81461023e57600080fd5b806323b872dd1161018157806323b872dd146101fb578063313ce5671461020e5780633408e4701461021d57600080fd5b806306fdde03146101a8578063095ea7b3146101c657806318160ddd146101e9575b600080fd5b6101b0610424565b6040516101bd9190611b6b565b60405180910390f35b6101d96101d4366004611bdc565b6104b6565b60405190151581526020016101bd565b6002545b6040519081526020016101bd565b6101d9610209366004611c06565b6104ce565b604051601281526020016101bd565b466101ed565b6101ed6104f2565b6101d9610239366004611bdc565b610501565b6101ed61024c366004611bdc565b610540565b61026461025f366004611bdc565b6105bf565b005b610292610274366004611c42565b6001600160a01b039081166000908152600760205260409020541690565b6040516001600160a01b0390911681526020016101bd565b6102646102b8366004611c42565b6105cd565b6102d06102cb366004611c42565b6105da565b60405163ffffffff90911681526020016101bd565b6101ed6102f3366004611c42565b6001600160a01b031660009081526020819052604090205490565b6101ed61031c366004611c42565b610602565b6101ed61032f366004611c5d565b610620565b6101b061067c565b6101ed61034a366004611c42565b61068b565b61026461035d366004611bdc565b610712565b6101d9610370366004611bdc565b61071c565b6101d9610383366004611bdc565b6107c6565b610264610396366004611c87565b6107d4565b6102646103a9366004611cdf565b61090a565b6101ed6103bc366004611d49565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6103fa6103f5366004611d7c565b610a6e565b60408051825163ffffffff1681526020928301516001600160e01b031692810192909252016101bd565b60606003805461043390611dbc565b80601f016020809104026020016040519081016040528092919081815260200182805461045f90611dbc565b80156104ac5780601f10610481576101008083540402835291602001916104ac565b820191906000526020600020905b81548152906001019060200180831161048f57829003601f168201915b5050505050905090565b6000336104c4818585610af2565b5060019392505050565b6000336104dc858285610c16565b6104e7858585610ca8565b506001949350505050565b60006104fc610eab565b905090565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906104c4908290869061053b908790611e06565b610af2565b60004382106105965760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064015b60405180910390fd5b6001600160a01b03831660009081526008602052604090206105b89083610fd2565b9392505050565b6105c9828261108f565b5050565b6105d73382611126565b50565b6001600160a01b0381166000908152600860205260408120546105fc906111b7565b92915050565b6001600160a01b0381166000908152600560205260408120546105fc565b60004382106106715760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604482015260640161058d565b6105fc600983610fd2565b60606004805461043390611dbc565b6001600160a01b03811660009081526008602052604081205480156106ff576001600160a01b03831660009081526008602052604090206106cd600183611e1e565b815481106106dd576106dd611e35565b60009182526020909120015464010000000090046001600160e01b0316610702565b60005b6001600160e01b03169392505050565b6105c98282611237565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156107b95760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161058d565b6104e78286868403610af2565b6000336104c4818585610ca8565b834211156108245760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e61747572652065787069726564000000604482015260640161058d565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b03881691810191909152606081018690526080810185905260009061089e906108969060a0016040516020818303038152906040528051906020012061124f565b85858561129d565b90506108a9816112c5565b86146108f75760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000604482015260640161058d565b6109018188611126565b50505050505050565b8342111561095a5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161058d565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886109898c6112c5565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006109e48261124f565b905060006109f48287878761129d565b9050896001600160a01b0316816001600160a01b031614610a575760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161058d565b610a628a8a8a610af2565b50505050505050505050565b60408051808201909152600080825260208201526001600160a01b0383166000908152600860205260409020805463ffffffff8416908110610ab257610ab2611e35565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b6001600160a01b038316610b545760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161058d565b6001600160a01b038216610bb55760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161058d565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610ca25781811015610c955760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161058d565b610ca28484848403610af2565b50505050565b6001600160a01b038316610d245760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161058d565b6001600160a01b038216610d865760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161058d565b6001600160a01b03831660009081526020819052604090205481811015610e155760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161058d565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610e4c908490611e06565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e9891815260200190565b60405180910390a3610ca28484846112f2565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610f0457507f000000000000000000000000000000000000000000000000000000000000000046145b15610f2e57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b8154600090815b81811015611036576000610fed8284611324565b90508486828154811061100257611002611e35565b60009182526020909120015463ffffffff16111561102257809250611030565b61102d816001611e06565b91505b50610fd9565b811561107a5784611048600184611e1e565b8154811061105857611058611e35565b60009182526020909120015464010000000090046001600160e01b031661107d565b60005b6001600160e01b031695945050505050565b611099828261133f565b6002546001600160e01b0310156111185760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201527f766572666c6f77696e6720766f74657300000000000000000000000000000000606482015260840161058d565b610ca2600961142683611432565b6001600160a01b038281166000818152600760208181526040808420805485845282862054949093528787167fffffffffffffffffffffffff00000000000000000000000000000000000000008416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610ca28284836115ab565b600063ffffffff8211156112335760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201527f3220626974730000000000000000000000000000000000000000000000000000606482015260840161058d565b5090565b61124182826116e8565b610ca2600961183d83611432565b60006105fc61125c610eab565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006112ae87878787611849565b915091506112bb81611936565b5095945050505050565b6001600160a01b03811660009081526005602052604090208054600181018255905b50919050565b505050565b6001600160a01b038381166000908152600760205260408082205485841683529120546112ed929182169116836115ab565b60006113336002848418611e4b565b6105b890848416611e06565b6001600160a01b0382166113955760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161058d565b80600260008282546113a79190611e06565b90915550506001600160a01b038216600090815260208190526040812080548392906113d4908490611e06565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36105c9600083836112f2565b60006105b88284611e06565b82546000908190801561147d578561144b600183611e1e565b8154811061145b5761145b611e35565b60009182526020909120015464010000000090046001600160e01b0316611480565b60005b6001600160e01b0316925061149983858763ffffffff16565b91506000811180156114d7575043866114b3600184611e1e565b815481106114c3576114c3611e35565b60009182526020909120015463ffffffff16145b15611537576114e582611aec565b866114f1600184611e1e565b8154811061150157611501611e35565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b031602179055506115a2565b85604051806040016040528061154c436111b7565b63ffffffff16815260200161156085611aec565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b816001600160a01b0316836001600160a01b0316141580156115cd5750600081115b156112ed576001600160a01b0383161561165b576001600160a01b038316600090815260086020526040812081906116089061183d85611432565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611650929190918252602082015260400190565b60405180910390a250505b6001600160a01b038216156112ed576001600160a01b038216600090815260086020526040812081906116919061142685611432565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516116d9929190918252602082015260400190565b60405180910390a25050505050565b6001600160a01b0382166117485760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161058d565b6001600160a01b038216600090815260208190526040902054818110156117bc5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161058d565b6001600160a01b03831660009081526020819052604081208383039055600280548492906117eb908490611e1e565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36112ed836000846112f2565b60006105b88284611e1e565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611880575060009050600361192d565b8460ff16601b1415801561189857508460ff16601c14155b156118a9575060009050600461192d565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156118fd573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166119265760006001925092505061192d565b9150600090505b94509492505050565b600081600481111561194a5761194a611e6d565b036119525750565b600181600481111561196657611966611e6d565b036119b35760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161058d565b60028160048111156119c7576119c7611e6d565b03611a145760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161058d565b6003816004811115611a2857611a28611e6d565b03611a805760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161058d565b6004816004811115611a9457611a94611e6d565b036105d75760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161058d565b60006001600160e01b038211156112335760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203260448201527f3234206269747300000000000000000000000000000000000000000000000000606482015260840161058d565b600060208083528351808285015260005b81811015611b9857858101830151858201604001528201611b7c565b81811115611baa576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114611bd757600080fd5b919050565b60008060408385031215611bef57600080fd5b611bf883611bc0565b946020939093013593505050565b600080600060608486031215611c1b57600080fd5b611c2484611bc0565b9250611c3260208501611bc0565b9150604084013590509250925092565b600060208284031215611c5457600080fd5b6105b882611bc0565b600060208284031215611c6f57600080fd5b5035919050565b803560ff81168114611bd757600080fd5b60008060008060008060c08789031215611ca057600080fd5b611ca987611bc0565b95506020870135945060408701359350611cc560608801611c76565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a031215611cfa57600080fd5b611d0388611bc0565b9650611d1160208901611bc0565b95506040880135945060608801359350611d2d60808901611c76565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611d5c57600080fd5b611d6583611bc0565b9150611d7360208401611bc0565b90509250929050565b60008060408385031215611d8f57600080fd5b611d9883611bc0565b9150602083013563ffffffff81168114611db157600080fd5b809150509250929050565b600181811c90821680611dd057607f821691505b6020821081036112e757634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611e1957611e19611df0565b500190565b600082821015611e3057611e30611df0565b500390565b634e487b7160e01b600052603260045260246000fd5b600082611e6857634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fdfea164736f6c634300080d000a";

type ERC20VotesMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20VotesMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20VotesMock__factory extends ContractFactory {
  constructor(...args: ERC20VotesMockConstructorParams) {
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
  ): Promise<ERC20VotesMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC20VotesMock>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC20VotesMock {
    return super.attach(address) as ERC20VotesMock;
  }
  override connect(signer: Signer): ERC20VotesMock__factory {
    return super.connect(signer) as ERC20VotesMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20VotesMockInterface {
    return new utils.Interface(_abi) as ERC20VotesMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20VotesMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20VotesMock;
  }
}