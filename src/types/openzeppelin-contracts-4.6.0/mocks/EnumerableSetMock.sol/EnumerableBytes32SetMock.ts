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

export interface EnumerableBytes32SetMockInterface extends utils.Interface {
  functions: {
    "add(bytes32)": FunctionFragment;
    "at(uint256)": FunctionFragment;
    "contains(bytes32)": FunctionFragment;
    "length()": FunctionFragment;
    "remove(bytes32)": FunctionFragment;
    "values()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "add"
      | "at"
      | "contains"
      | "length"
      | "remove"
      | "values"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "add", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "at", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "contains", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "length", values?: undefined): string;
  encodeFunctionData(functionFragment: "remove", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "values", values?: undefined): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "values", data: BytesLike): Result;

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

export interface EnumerableBytes32SetMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EnumerableBytes32SetMockInterface;

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
    add(
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    at(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    contains(value: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    length(overrides?: CallOverrides): Promise<[BigNumber]>;

    remove(
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    values(overrides?: CallOverrides): Promise<[string[]]>;
  };

  add(
    value: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  at(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  contains(value: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  length(overrides?: CallOverrides): Promise<BigNumber>;

  remove(
    value: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  values(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    add(value: BytesLike, overrides?: CallOverrides): Promise<void>;

    at(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    contains(value: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    remove(value: BytesLike, overrides?: CallOverrides): Promise<void>;

    values(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    "OperationResult(bool)"(result?: null): OperationResultEventFilter;
    OperationResult(result?: null): OperationResultEventFilter;
  };

  estimateGas: {
    add(
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    contains(value: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    remove(
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    values(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contains(
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    length(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    values(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
