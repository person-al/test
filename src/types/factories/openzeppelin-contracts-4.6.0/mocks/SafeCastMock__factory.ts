/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SafeCastMock,
  SafeCastMockInterface,
} from "../../../openzeppelin-contracts-4.6.0/mocks/SafeCastMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "toInt128",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "toInt16",
    outputs: [
      {
        internalType: "int16",
        name: "",
        type: "int16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "toInt256",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "toInt32",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "toInt64",
    outputs: [
      {
        internalType: "int64",
        name: "",
        type: "int64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "toInt8",
    outputs: [
      {
        internalType: "int8",
        name: "",
        type: "int8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "toUint128",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "toUint16",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "toUint224",
    outputs: [
      {
        internalType: "uint224",
        name: "",
        type: "uint224",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
    ],
    name: "toUint256",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "toUint32",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "toUint64",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "toUint8",
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
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "toUint96",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a4b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063c81932551161008c578063dd2a031611610066578063dd2a0316146102a9578063dfbe873b146102cf578063f136dc02146102f0578063fdcf791b1461031657600080fd5b8063c819325514610235578063cf65b4d31461025d578063d6bd32aa1461028357600080fd5b80635bb79860116100c85780635bb7986014610175578063809fdd33146101b55780639374068f146101e95780639c6f59be1461020f57600080fd5b80630cc4681e146100ef5780631cf887fc146101195780632665fad014610149575b600080fd5b6101026100fd366004610a25565b610329565b60405160ff90911681526020015b60405180910390f35b61012c610127366004610a25565b61033a565b6040516bffffffffffffffffffffffff9091168152602001610110565b61015c610157366004610a25565b610345565b60405167ffffffffffffffff9091168152602001610110565b610188610183366004610a25565b610350565b6040517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091168152602001610110565b6101c86101c3366004610a25565b61035b565b6040516fffffffffffffffffffffffffffffffff9091168152602001610110565b6101fc6101f7366004610a25565b610366565b60405161ffff9091168152602001610110565b61022261021d366004610a25565b610371565b60405160039190910b8152602001610110565b610248610243366004610a25565b61037c565b60405163ffffffff9091168152602001610110565b61027061026b366004610a25565b610387565b60405160019190910b8152602001610110565b610296610291366004610a25565b610392565b60405160079190910b8152602001610110565b6102bc6102b7366004610a25565b61039d565b604051600f9190910b8152602001610110565b6102e26102dd366004610a25565b6103a8565b604051908152602001610110565b6103036102fe366004610a25565b6103b3565b60405160009190910b8152602001610110565b6102e2610324366004610a25565b6103be565b6000610334826103c9565b92915050565b600061033482610433565b6000610334826104a0565b600061033482610509565b60006103348261059d565b60006103348261060f565b600061033482610672565b6000610334826106e8565b60006103348261074d565b6000610334826107bf565b60006103348261083d565b6000610334826108cc565b600061033482610964565b6000610334826109d3565b600060ff82111561042f5760405162461bcd60e51b815260206004820152602560248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2038604482015264206269747360d81b60648201526084015b60405180910390fd5b5090565b60006bffffffffffffffffffffffff82111561042f5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201526536206269747360d01b6064820152608401610426565b600067ffffffffffffffff82111561042f5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201526534206269747360d01b6064820152608401610426565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff82111561042f5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203260448201527f32342062697473000000000000000000000000000000000000000000000000006064820152608401610426565b60006fffffffffffffffffffffffffffffffff82111561042f5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316044820152663238206269747360c81b6064820152608401610426565b600061ffff82111561042f5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201526536206269747360d01b6064820152608401610426565b6000637fffffff19821280159061068d5750637fffffff8213155b61042f5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b6064820152608401610426565b600063ffffffff82111561042f5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b6064820152608401610426565b6000617fff1982128015906107645750617fff8213155b61042f5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201526536206269747360d01b6064820152608401610426565b6000677fffffffffffffff1982128015906107e25750677fffffffffffffff8213155b61042f5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201526534206269747360d01b6064820152608401610426565b60006f7fffffffffffffffffffffffffffffff19821280159061087057506f7fffffffffffffffffffffffffffffff8213155b61042f5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316044820152663238206269747360c81b6064820152608401610426565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82111561042f5760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e206160448201527f6e20696e743235360000000000000000000000000000000000000000000000006064820152608401610426565b6000607f1982128015906109795750607f8213155b61042f5760405162461bcd60e51b815260206004820152602560248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2038604482015264206269747360d81b6064820152608401610426565b60008082121561042f5760405162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f7369746976656044820152606401610426565b600060208284031215610a3757600080fd5b503591905056fea164736f6c634300080d000a";

type SafeCastMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeCastMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeCastMock__factory extends ContractFactory {
  constructor(...args: SafeCastMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SafeCastMock> {
    return super.deploy(overrides || {}) as Promise<SafeCastMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SafeCastMock {
    return super.attach(address) as SafeCastMock;
  }
  override connect(signer: Signer): SafeCastMock__factory {
    return super.connect(signer) as SafeCastMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeCastMockInterface {
    return new utils.Interface(_abi) as SafeCastMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeCastMock {
    return new Contract(address, _abi, signerOrProvider) as SafeCastMock;
  }
}
