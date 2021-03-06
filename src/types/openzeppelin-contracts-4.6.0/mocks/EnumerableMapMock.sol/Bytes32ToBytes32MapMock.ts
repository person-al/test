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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface Bytes32ToBytes32MapMockInterface extends utils.Interface {
  functions: {
    "at(uint256)": FunctionFragment;
    "contains(bytes32)": FunctionFragment;
    "get(bytes32)": FunctionFragment;
    "getWithMessage(bytes32,string)": FunctionFragment;
    "length()": FunctionFragment;
    "remove(bytes32)": FunctionFragment;
    "set(bytes32,bytes32)": FunctionFragment;
    "tryGet(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "at"
      | "contains"
      | "get"
      | "getWithMessage"
      | "length"
      | "remove"
      | "set"
      | "tryGet"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "at", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "contains", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "get", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getWithMessage",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "length", values?: undefined): string;
  encodeFunctionData(functionFragment: "remove", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "tryGet", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWithMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tryGet", data: BytesLike): Result;

  events: {
    "OperationResult(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OperationResult"): EventFragment;
}

export interface OperationResultEventObject {
  result: boolean;
}
export type OperationResultEvent = TypedEvent<
  [boolean],
  OperationResultEventObject
>;

export type OperationResultEventFilter = TypedEventFilter<OperationResultEvent>;

export interface Bytes32ToBytes32MapMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Bytes32ToBytes32MapMockInterface;

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
    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { key: string; value: string }>;

    contains(key: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    get(key: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getWithMessage(
      key: BytesLike,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    length(overrides?: CallOverrides): Promise<[BigNumber]>;

    remove(
      key: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    set(
      key: BytesLike,
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tryGet(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;
  };

  at(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string] & { key: string; value: string }>;

  contains(key: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  get(key: BytesLike, overrides?: CallOverrides): Promise<string>;

  getWithMessage(
    key: BytesLike,
    errorMessage: string,
    overrides?: CallOverrides
  ): Promise<string>;

  length(overrides?: CallOverrides): Promise<BigNumber>;

  remove(
    key: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  set(
    key: BytesLike,
    value: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tryGet(key: BytesLike, overrides?: CallOverrides): Promise<[boolean, string]>;

  callStatic: {
    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { key: string; value: string }>;

    contains(key: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    get(key: BytesLike, overrides?: CallOverrides): Promise<string>;

    getWithMessage(
      key: BytesLike,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<string>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    remove(key: BytesLike, overrides?: CallOverrides): Promise<void>;

    set(
      key: BytesLike,
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    tryGet(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;
  };

  filters: {
    "OperationResult(bool)"(result?: null): OperationResultEventFilter;
    OperationResult(result?: null): OperationResultEventFilter;
  };

  estimateGas: {
    at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    contains(key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    get(key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getWithMessage(
      key: BytesLike,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    remove(
      key: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    set(
      key: BytesLike,
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tryGet(key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contains(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWithMessage(
      key: BytesLike,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    length(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(
      key: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    set(
      key: BytesLike,
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tryGet(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
