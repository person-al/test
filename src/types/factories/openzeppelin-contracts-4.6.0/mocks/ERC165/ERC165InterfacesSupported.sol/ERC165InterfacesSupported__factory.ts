/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC165InterfacesSupported,
  ERC165InterfacesSupportedInterface,
} from "../../../../../openzeppelin-contracts-4.6.0/mocks/ERC165/ERC165InterfacesSupported.sol/ERC165InterfacesSupported";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4[]",
        name: "interfaceIds",
        type: "bytes4[]",
      },
    ],
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
  "0x608060405234801561001057600080fd5b5060405161034038038061034083398101604081905261002f9161015a565b61003f6301ffc9a760e01b61008c565b60005b8151811015610085576100738282815181106100605761006061021e565b602002602001015161008c60201b60201c565b8061007d81610234565b915050610042565b505061025b565b6001600160e01b031980821690036101025760405162461bcd60e51b815260206004820152602f60248201527f455243313635496e7465726661636573537570706f727465643a20696e76616c60448201526e1a59081a5b9d195c999858d9481a59608a1b606482015260840160405180910390fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b634e487b7160e01b600052604160045260246000fd5b80516001600160e01b03198116811461015557600080fd5b919050565b6000602080838503121561016d57600080fd5b82516001600160401b038082111561018457600080fd5b818501915085601f83011261019857600080fd5b8151818111156101aa576101aa610127565b8060051b604051601f19603f830116810181811085821117156101cf576101cf610127565b6040529182528482019250838101850191888311156101ed57600080fd5b938501935b82851015610212576102038561013d565b845293850193928501926101f2565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b60006001820161025457634e487b7160e01b600052601160045260246000fd5b5060010190565b60d7806102696000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806301ffc9a714603757806334d7006c146076575b600080fd5b60616042366004609b565b6001600160e01b03191660009081526020819052604090205460ff1690565b60405190151581526020015b60405180910390f35b60836301ffc9a760e01b81565b6040516001600160e01b03199091168152602001606d565b60006020828403121560ac57600080fd5b81356001600160e01b03198116811460c357600080fd5b939250505056fea164736f6c634300080d000a";

type ERC165InterfacesSupportedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC165InterfacesSupportedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC165InterfacesSupported__factory extends ContractFactory {
  constructor(...args: ERC165InterfacesSupportedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    interfaceIds: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC165InterfacesSupported> {
    return super.deploy(
      interfaceIds,
      overrides || {}
    ) as Promise<ERC165InterfacesSupported>;
  }
  override getDeployTransaction(
    interfaceIds: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(interfaceIds, overrides || {});
  }
  override attach(address: string): ERC165InterfacesSupported {
    return super.attach(address) as ERC165InterfacesSupported;
  }
  override connect(signer: Signer): ERC165InterfacesSupported__factory {
    return super.connect(signer) as ERC165InterfacesSupported__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC165InterfacesSupportedInterface {
    return new utils.Interface(_abi) as ERC165InterfacesSupportedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC165InterfacesSupported {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC165InterfacesSupported;
  }
}
