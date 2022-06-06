/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";

export interface CrossChainEnabledAMBMockInterface extends utils.Interface {
  functions: {
    "crossChainOwnerRestricted()": FunctionFragment;
    "crossChainRestricted()": FunctionFragment;
    "owner()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "crossChainOwnerRestricted"
      | "crossChainRestricted"
      | "owner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "crossChainOwnerRestricted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "crossChainRestricted",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "crossChainOwnerRestricted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "crossChainRestricted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;

  events: {};
}

export interface CrossChainEnabledAMBMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CrossChainEnabledAMBMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    crossChainOwnerRestricted(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    crossChainRestricted(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;
  };

  crossChainOwnerRestricted(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  crossChainRestricted(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    crossChainOwnerRestricted(overrides?: CallOverrides): Promise<void>;

    crossChainRestricted(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    crossChainOwnerRestricted(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    crossChainRestricted(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    crossChainOwnerRestricted(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    crossChainRestricted(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
