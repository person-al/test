/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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
} from "../../common";

export interface TimersBlockNumberImplInterface extends utils.Interface {
  functions: {
    "getDeadline()": FunctionFragment;
    "isExpired()": FunctionFragment;
    "isPending()": FunctionFragment;
    "isStarted()": FunctionFragment;
    "isUnset()": FunctionFragment;
    "reset()": FunctionFragment;
    "setDeadline(uint64)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getDeadline"
      | "isExpired"
      | "isPending"
      | "isStarted"
      | "isUnset"
      | "reset"
      | "setDeadline"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getDeadline",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isExpired", values?: undefined): string;
  encodeFunctionData(functionFragment: "isPending", values?: undefined): string;
  encodeFunctionData(functionFragment: "isStarted", values?: undefined): string;
  encodeFunctionData(functionFragment: "isUnset", values?: undefined): string;
  encodeFunctionData(functionFragment: "reset", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setDeadline",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getDeadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isExpired", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPending", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isStarted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isUnset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDeadline",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TimersBlockNumberImpl extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TimersBlockNumberImplInterface;

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
    getDeadline(overrides?: CallOverrides): Promise<[BigNumber]>;

    isExpired(overrides?: CallOverrides): Promise<[boolean]>;

    isPending(overrides?: CallOverrides): Promise<[boolean]>;

    isStarted(overrides?: CallOverrides): Promise<[boolean]>;

    isUnset(overrides?: CallOverrides): Promise<[boolean]>;

    reset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDeadline(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getDeadline(overrides?: CallOverrides): Promise<BigNumber>;

  isExpired(overrides?: CallOverrides): Promise<boolean>;

  isPending(overrides?: CallOverrides): Promise<boolean>;

  isStarted(overrides?: CallOverrides): Promise<boolean>;

  isUnset(overrides?: CallOverrides): Promise<boolean>;

  reset(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDeadline(
    timestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getDeadline(overrides?: CallOverrides): Promise<BigNumber>;

    isExpired(overrides?: CallOverrides): Promise<boolean>;

    isPending(overrides?: CallOverrides): Promise<boolean>;

    isStarted(overrides?: CallOverrides): Promise<boolean>;

    isUnset(overrides?: CallOverrides): Promise<boolean>;

    reset(overrides?: CallOverrides): Promise<void>;

    setDeadline(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getDeadline(overrides?: CallOverrides): Promise<BigNumber>;

    isExpired(overrides?: CallOverrides): Promise<BigNumber>;

    isPending(overrides?: CallOverrides): Promise<BigNumber>;

    isStarted(overrides?: CallOverrides): Promise<BigNumber>;

    isUnset(overrides?: CallOverrides): Promise<BigNumber>;

    reset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDeadline(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getDeadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isExpired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPending(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isStarted(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isUnset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDeadline(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
