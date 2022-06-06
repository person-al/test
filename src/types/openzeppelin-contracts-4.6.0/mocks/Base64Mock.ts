/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface Base64MockInterface extends utils.Interface {
  functions: {
    "encode(bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "encode"): FunctionFragment;

  encodeFunctionData(functionFragment: "encode", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "encode", data: BytesLike): Result;

  events: {};
}

export interface Base64Mock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Base64MockInterface;

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
    encode(value: BytesLike, overrides?: CallOverrides): Promise<[string]>;
  };

  encode(value: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    encode(value: BytesLike, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    encode(value: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    encode(
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
