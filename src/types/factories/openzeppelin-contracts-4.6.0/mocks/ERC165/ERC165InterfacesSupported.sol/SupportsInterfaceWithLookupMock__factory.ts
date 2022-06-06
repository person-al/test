/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SupportsInterfaceWithLookupMock,
  SupportsInterfaceWithLookupMockInterface,
} from "../../../../../openzeppelin-contracts-4.6.0/mocks/ERC165/ERC165InterfacesSupported.sol/SupportsInterfaceWithLookupMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "INTERFACE_ID_ERC165",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100216301ffc9a760e01b610026565b6100c1565b6001600160e01b0319808216900361009c5760405162461bcd60e51b815260206004820152602f60248201527f455243313635496e7465726661636573537570706f727465643a20696e76616c60448201526e1a59081a5b9d195c999858d9481a59608a1b606482015260840160405180910390fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b60d7806100cf6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806301ffc9a714603757806334d7006c146076575b600080fd5b60616042366004609b565b6001600160e01b03191660009081526020819052604090205460ff1690565b60405190151581526020015b60405180910390f35b60836301ffc9a760e01b81565b6040516001600160e01b03199091168152602001606d565b60006020828403121560ac57600080fd5b81356001600160e01b03198116811460c357600080fd5b939250505056fea164736f6c634300080d000a";

type SupportsInterfaceWithLookupMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SupportsInterfaceWithLookupMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SupportsInterfaceWithLookupMock__factory extends ContractFactory {
  constructor(...args: SupportsInterfaceWithLookupMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SupportsInterfaceWithLookupMock> {
    return super.deploy(
      overrides || {}
    ) as Promise<SupportsInterfaceWithLookupMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SupportsInterfaceWithLookupMock {
    return super.attach(address) as SupportsInterfaceWithLookupMock;
  }
  override connect(signer: Signer): SupportsInterfaceWithLookupMock__factory {
    return super.connect(signer) as SupportsInterfaceWithLookupMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SupportsInterfaceWithLookupMockInterface {
    return new utils.Interface(
      _abi
    ) as SupportsInterfaceWithLookupMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SupportsInterfaceWithLookupMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SupportsInterfaceWithLookupMock;
  }
}
