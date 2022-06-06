/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MinimalForwarder,
  MinimalForwarderInterface,
} from "../../../openzeppelin-contracts-4.6.0/metatx/MinimalForwarder";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
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
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MinimalForwarder.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
    ],
    name: "getNonce",
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
        components: [
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
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MinimalForwarder.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verify",
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
];

const _bytecode =
  "0x61014060405234801561001157600080fd5b50604080518082018252601081526f26b4b734b6b0b62337b93bb0b93232b960811b602080830191825283518085019094526005845264302e302e3160d81b908401528151902060e08190527fae209a0b48f21c054280f2455d32cf309387644879d9acbd8ffc1991638118856101008190524660a0529192917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6100fb8184846040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b6080523060c052610120525061011092505050565b60805160a05160c05160e0516101005161012051610b3961015f60003960006104f701526000610546015260006105210152600061047a015260006104a4015260006104ce0152610b396000f3fe6080604052600436106100345760003560e01c80632d0335ab1461003957806347153f8214610082578063bf5d3bdb146100a3575b600080fd5b34801561004557600080fd5b5061006f6100543660046108fa565b6001600160a01b031660009081526020819052604090205490565b6040519081526020015b60405180910390f35b61009561009036600461092a565b6100d3565b6040516100799291906109f9565b3480156100af57600080fd5b506100c36100be36600461092a565b610277565b6040519015158152602001610079565b600060606100e2858585610277565b6101595760405162461bcd60e51b815260206004820152603260248201527f4d696e696d616c466f727761726465723a207369676e617475726520646f657360448201527f206e6f74206d617463682072657175657374000000000000000000000000000060648201526084015b60405180910390fd5b61016860808601356001610a35565b60008061017860208901896108fa565b6001600160a01b03166001600160a01b03168152602001908152602001600020819055506000808660200160208101906101b291906108fa565b6001600160a01b0316606088013560408901356101d260a08b018b610a5b565b6101df60208d018d6108fa565b6040516020016101f193929190610aa2565b60408051601f198184030181529082905261020b91610ac8565b600060405180830381858888f193505050503d8060008114610249576040519150601f19603f3d011682016040523d82523d6000602084013e61024e565b606091505b509092509050610263603f6060890135610ae4565b5a1161026b57fe5b90969095509350505050565b60008061038a84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061038492507fdd8f4b70b0f4393e889bd39128a30628a78b61816a9eb8199759e7a349657e4891506102e7905060208a018a6108fa565b6102f760408b0160208c016108fa565b60408b013560608c013560808d013561031360a08f018f610a5b565b604051610321929190610b06565b6040805191829003822060208301989098526001600160a01b0396871690820152949093166060850152608084019190915260a083015260c082015260e081019190915261010001604051602081830303815290604052805190602001206103f5565b90610449565b905060808501356000806103a160208901896108fa565b6001600160a01b03166001600160a01b03168152602001908152602001600020541480156103ec57506103d760208601866108fa565b6001600160a01b0316816001600160a01b0316145b95945050505050565b600061044361040261046d565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b92915050565b60008060006104588585610594565b9150915061046581610602565b509392505050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156104c657507f000000000000000000000000000000000000000000000000000000000000000046145b156104f057507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b60008082516041036105ca5760208301516040840151606085015160001a6105be878285856107bb565b945094505050506105fb565b82516040036105f357602083015160408401516105e88683836108a8565b9350935050506105fb565b506000905060025b9250929050565b600081600481111561061657610616610b16565b0361061e5750565b600181600481111561063257610632610b16565b0361067f5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610150565b600281600481111561069357610693610b16565b036106e05760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610150565b60038160048111156106f4576106f4610b16565b0361074c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610150565b600481600481111561076057610760610b16565b036107b85760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610150565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156107f2575060009050600361089f565b8460ff16601b1415801561080a57508460ff16601c14155b1561081b575060009050600461089f565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561086f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166108985760006001925092505061089f565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8316816108de60ff86901c601b610a35565b90506108ec878288856107bb565b935093505050935093915050565b60006020828403121561090c57600080fd5b81356001600160a01b038116811461092357600080fd5b9392505050565b60008060006040848603121561093f57600080fd5b833567ffffffffffffffff8082111561095757600080fd5b9085019060c0828803121561096b57600080fd5b9093506020850135908082111561098157600080fd5b818601915086601f83011261099557600080fd5b8135818111156109a457600080fd5b8760208285010111156109b657600080fd5b6020830194508093505050509250925092565b60005b838110156109e45781810151838201526020016109cc565b838111156109f3576000848401525b50505050565b82151581526040602082015260008251806040840152610a208160608501602087016109c9565b601f01601f1916919091016060019392505050565b60008219821115610a5657634e487b7160e01b600052601160045260246000fd5b500190565b6000808335601e19843603018112610a7257600080fd5b83018035915067ffffffffffffffff821115610a8d57600080fd5b6020019150368190038213156105fb57600080fd5b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b60008251610ada8184602087016109c9565b9190910192915050565b600082610b0157634e487b7160e01b600052601260045260246000fd5b500490565b8183823760009101908152919050565b634e487b7160e01b600052602160045260246000fdfea164736f6c634300080d000a";

type MinimalForwarderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MinimalForwarderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MinimalForwarder__factory extends ContractFactory {
  constructor(...args: MinimalForwarderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MinimalForwarder> {
    return super.deploy(overrides || {}) as Promise<MinimalForwarder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MinimalForwarder {
    return super.attach(address) as MinimalForwarder;
  }
  override connect(signer: Signer): MinimalForwarder__factory {
    return super.connect(signer) as MinimalForwarder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MinimalForwarderInterface {
    return new utils.Interface(_abi) as MinimalForwarderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MinimalForwarder {
    return new Contract(address, _abi, signerOrProvider) as MinimalForwarder;
  }
}