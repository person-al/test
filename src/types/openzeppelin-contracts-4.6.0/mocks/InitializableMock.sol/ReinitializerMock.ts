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

export interface ReinitializerMockInterface extends utils.Interface {
  functions: {
    "chainReinitialize(uint8,uint8)": FunctionFragment;
    "counter()": FunctionFragment;
    "disableInitializers()": FunctionFragment;
    "doStuff()": FunctionFragment;
    "initialize()": FunctionFragment;
    "nestedReinitialize(uint8,uint8)": FunctionFragment;
    "reinitialize(uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "chainReinitialize"
      | "counter"
      | "disableInitializers"
      | "doStuff"
      | "initialize"
      | "nestedReinitialize"
      | "reinitialize"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "chainReinitialize",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "counter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "disableInitializers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "doStuff", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nestedReinitialize",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reinitialize",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "chainReinitialize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disableInitializers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "doStuff", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nestedReinitialize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reinitialize",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface ReinitializerMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReinitializerMockInterface;

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
    chainReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    counter(overrides?: CallOverrides): Promise<[BigNumber]>;

    disableInitializers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    doStuff(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nestedReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reinitialize(
      i: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  chainReinitialize(
    i: BigNumberish,
    j: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  counter(overrides?: CallOverrides): Promise<BigNumber>;

  disableInitializers(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  doStuff(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nestedReinitialize(
    i: BigNumberish,
    j: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reinitialize(
    i: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    chainReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    counter(overrides?: CallOverrides): Promise<BigNumber>;

    disableInitializers(overrides?: CallOverrides): Promise<void>;

    doStuff(overrides?: CallOverrides): Promise<void>;

    initialize(overrides?: CallOverrides): Promise<void>;

    nestedReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    reinitialize(i: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    chainReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    counter(overrides?: CallOverrides): Promise<BigNumber>;

    disableInitializers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    doStuff(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nestedReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reinitialize(
      i: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    chainReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disableInitializers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    doStuff(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nestedReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reinitialize(
      i: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}