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
  PayableOverrides,
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

export interface IInboxInterface extends utils.Interface {
  functions: {
    "bridge()": FunctionFragment;
    "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
    "createRetryableTicketNoRefundAliasRewrite(address,uint256,uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
    "depositEth(uint256)": FunctionFragment;
    "pauseCreateRetryables()": FunctionFragment;
    "sendContractTransaction(uint256,uint256,address,uint256,bytes)": FunctionFragment;
    "sendL1FundedContractTransaction(uint256,uint256,address,bytes)": FunctionFragment;
    "sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)": FunctionFragment;
    "sendL2Message(bytes)": FunctionFragment;
    "sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)": FunctionFragment;
    "startRewriteAddress()": FunctionFragment;
    "stopRewriteAddress()": FunctionFragment;
    "unpauseCreateRetryables()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bridge"
      | "createRetryableTicket"
      | "createRetryableTicketNoRefundAliasRewrite"
      | "depositEth"
      | "pauseCreateRetryables"
      | "sendContractTransaction"
      | "sendL1FundedContractTransaction"
      | "sendL1FundedUnsignedTransaction"
      | "sendL2Message"
      | "sendUnsignedTransaction"
      | "startRewriteAddress"
      | "stopRewriteAddress"
      | "unpauseCreateRetryables"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createRetryableTicket",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createRetryableTicketNoRefundAliasRewrite",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositEth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pauseCreateRetryables",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendContractTransaction",
    values: [BigNumberish, BigNumberish, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendL1FundedContractTransaction",
    values: [BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendL1FundedUnsignedTransaction",
    values: [BigNumberish, BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendL2Message",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendUnsignedTransaction",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "startRewriteAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stopRewriteAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unpauseCreateRetryables",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createRetryableTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createRetryableTicketNoRefundAliasRewrite",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pauseCreateRetryables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendContractTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendL1FundedContractTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendL1FundedUnsignedTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendL2Message",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendUnsignedTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startRewriteAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stopRewriteAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unpauseCreateRetryables",
    data: BytesLike
  ): Result;

  events: {
    "InboxMessageDelivered(uint256,bytes)": EventFragment;
    "InboxMessageDeliveredFromOrigin(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InboxMessageDelivered"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "InboxMessageDeliveredFromOrigin"
  ): EventFragment;
}

export interface InboxMessageDeliveredEventObject {
  messageNum: BigNumber;
  data: string;
}
export type InboxMessageDeliveredEvent = TypedEvent<
  [BigNumber, string],
  InboxMessageDeliveredEventObject
>;

export type InboxMessageDeliveredEventFilter =
  TypedEventFilter<InboxMessageDeliveredEvent>;

export interface InboxMessageDeliveredFromOriginEventObject {
  messageNum: BigNumber;
}
export type InboxMessageDeliveredFromOriginEvent = TypedEvent<
  [BigNumber],
  InboxMessageDeliveredFromOriginEventObject
>;

export type InboxMessageDeliveredFromOriginEventFilter =
  TypedEventFilter<InboxMessageDeliveredFromOriginEvent>;

export interface IInbox extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IInboxInterface;

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
    bridge(overrides?: CallOverrides): Promise<[string]>;

    createRetryableTicket(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createRetryableTicketNoRefundAliasRewrite(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositEth(
      maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pauseCreateRetryables(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startRewriteAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stopRewriteAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpauseCreateRetryables(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bridge(overrides?: CallOverrides): Promise<string>;

  createRetryableTicket(
    destAddr: string,
    arbTxCallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    submissionRefundAddress: string,
    valueRefundAddress: string,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createRetryableTicketNoRefundAliasRewrite(
    destAddr: string,
    arbTxCallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    submissionRefundAddress: string,
    valueRefundAddress: string,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositEth(
    maxSubmissionCost: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pauseCreateRetryables(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendContractTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendL1FundedContractTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    destAddr: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendL1FundedUnsignedTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    nonce: BigNumberish,
    destAddr: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendL2Message(
    messageData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendUnsignedTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    nonce: BigNumberish,
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startRewriteAddress(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stopRewriteAddress(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpauseCreateRetryables(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bridge(overrides?: CallOverrides): Promise<string>;

    createRetryableTicket(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createRetryableTicketNoRefundAliasRewrite(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositEth(
      maxSubmissionCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pauseCreateRetryables(overrides?: CallOverrides): Promise<void>;

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendL2Message(
      messageData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startRewriteAddress(overrides?: CallOverrides): Promise<void>;

    stopRewriteAddress(overrides?: CallOverrides): Promise<void>;

    unpauseCreateRetryables(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "InboxMessageDelivered(uint256,bytes)"(
      messageNum?: BigNumberish | null,
      data?: null
    ): InboxMessageDeliveredEventFilter;
    InboxMessageDelivered(
      messageNum?: BigNumberish | null,
      data?: null
    ): InboxMessageDeliveredEventFilter;

    "InboxMessageDeliveredFromOrigin(uint256)"(
      messageNum?: BigNumberish | null
    ): InboxMessageDeliveredFromOriginEventFilter;
    InboxMessageDeliveredFromOrigin(
      messageNum?: BigNumberish | null
    ): InboxMessageDeliveredFromOriginEventFilter;
  };

  estimateGas: {
    bridge(overrides?: CallOverrides): Promise<BigNumber>;

    createRetryableTicket(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createRetryableTicketNoRefundAliasRewrite(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositEth(
      maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pauseCreateRetryables(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startRewriteAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stopRewriteAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpauseCreateRetryables(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createRetryableTicket(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createRetryableTicketNoRefundAliasRewrite(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositEth(
      maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pauseCreateRetryables(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startRewriteAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stopRewriteAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpauseCreateRetryables(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
