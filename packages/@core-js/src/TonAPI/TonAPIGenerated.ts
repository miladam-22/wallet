/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  /** @example "error description" */
  error: string;
}

export interface AccountAddress {
  /** @example "0:10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365" */
  address: string;
  /**
   * Display name. Data collected from different sources like moderation lists, dns, collections names and over.
   * @example "Ton foundation"
   */
  name?: string;
  /**
   * Is this account was marked as part of scammers activity
   * @example true
   */
  is_scam: boolean;
  /** @example "https://ton.org/logo.png" */
  icon?: string;
}

export interface BlockchainBlock {
  /**
   * @format int32
   * @example 0
   */
  workchain_id: number;
  /** @example 8000000000000000 */
  shard: string;
  /**
   * @format int32
   * @example 21734019
   */
  seqno: number;
  /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
  root_hash: string;
  /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
  file_hash: string;
  /**
   * @format int32
   * @example -239
   */
  global_id: number;
  /**
   * @format int32
   * @example 0
   */
  version: number;
  /** @example true */
  after_merge: boolean;
  /** @example true */
  before_split: boolean;
  /** @example true */
  after_split: boolean;
  /** @example true */
  want_split: boolean;
  /** @example true */
  want_merge: boolean;
  /** @example true */
  key_block: boolean;
  /**
   * @format int64
   * @example 1674826775
   */
  gen_utime: number;
  /**
   * @format int64
   * @example 23814011000000
   */
  start_lt: number;
  /**
   * @format int64
   * @example 23814011000001
   */
  end_lt: number;
  /**
   * @format int32
   * @example 0
   */
  vert_seqno: number;
  /**
   * @format int32
   * @example 0
   */
  gen_catchain_seqno: number;
  /**
   * @format int32
   * @example 0
   */
  min_ref_mc_seqno: number;
  /**
   * @format int32
   * @example 0
   */
  prev_key_block_seqno: number;
  /**
   * @format int32
   * @example 0
   */
  gen_software_version?: number;
  /**
   * @format int64
   * @example 0
   */
  gen_software_capabilities?: number;
  /** @example "(-1,4234234,8000000000000000)" */
  master_ref?: string;
  prev_refs: string[];
  /**
   * @format int64
   * @example 0
   */
  in_msg_descr_length: number;
  /**
   * @format int64
   * @example 0
   */
  out_msg_descr_length: number;
  /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
  rand_seed: string;
  /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
  created_by: string;
}

/** @example "active" */
export enum AccountStatus {
  Nonexist = 'nonexist',
  Uninit = 'uninit',
  Active = 'active',
  Frozen = 'frozen',
}

export interface StateInit {
  /** @example "te6ccgEBBgEARAABFP8A9KQT9LzyyAsBAgEgAgMCAUgEBQAE8jAAONBsIdMfMO1E0NM/MAHAAZekyMs/ye1UkzDyBuIAEaE0MdqJoaZ+YQ==" */
  boc: string;
}

export interface Message {
  /**
   * @format int64
   * @example 25713146000001
   */
  created_lt: number;
  /** @example true */
  ihr_disabled: boolean;
  /** @example true */
  bounce: boolean;
  /** @example true */
  bounced: boolean;
  /**
   * @format int64
   * @example 60000000
   */
  value: number;
  /**
   * @format int64
   * @example 5681002
   */
  fwd_fee: number;
  /**
   * @format int64
   * @example 5681002
   */
  ihr_fee: number;
  destination?: AccountAddress;
  source?: AccountAddress;
  /**
   * @format int64
   * @example 5681002
   */
  import_fee: number;
  /**
   * @format int64
   * @example 5681002
   */
  created_at: number;
  /** @example "0xdeadbeaf" */
  op_code?: string;
  init?: StateInit;
  /**
   * hex-encoded BoC with raw message body
   * @example "B5EE9C7201010101001100001D00048656C6C6F2C20776F726C64218"
   */
  raw_body?: string;
  /** @example "nft_transfer" */
  decoded_op_name?: string;
  decoded_body?: any;
}

/** @example "TransOrd" */
export enum TransactionType {
  TransOrd = 'TransOrd',
  TransTickTock = 'TransTickTock',
  TransSplitPrepare = 'TransSplitPrepare',
  TransSplitInstall = 'TransSplitInstall',
  TransMergePrepare = 'TransMergePrepare',
  TransMergeInstall = 'TransMergeInstall',
  TransStorage = 'TransStorage',
}

/** @example "acst_unchanged" */
export enum AccStatusChange {
  AcstUnchanged = 'acst_unchanged',
  AcstFrozen = 'acst_frozen',
  AcstDeleted = 'acst_deleted',
}

/** @example "cskip_no_state" */
export enum ComputeSkipReason {
  CskipNoState = 'cskip_no_state',
  CskipBadState = 'cskip_bad_state',
  CskipNoGas = 'cskip_no_gas',
}

/** @example "cskip_no_state" */
export enum BouncePhaseType {
  TrPhaseBounceNegfunds = 'TrPhaseBounceNegfunds',
  TrPhaseBounceNofunds = 'TrPhaseBounceNofunds',
  TrPhaseBounceOk = 'TrPhaseBounceOk',
}

export interface ComputePhase {
  /** @example true */
  skipped: boolean;
  skip_reason?: ComputeSkipReason;
  /** @example true */
  success?: boolean;
  /**
   * @format int64
   * @example 1000
   */
  gas_fees?: number;
  /**
   * @format int64
   * @example 10000
   */
  gas_used?: number;
  /**
   * @format uint32
   * @example 5
   */
  vm_steps?: number;
  /**
   * @format int32
   * @example 0
   */
  exit_code?: number;
}

export interface StoragePhase {
  /**
   * @format int64
   * @example 25713146000001
   */
  fees_collected: number;
  /**
   * @format int64
   * @example 25713146000001
   */
  fees_due?: number;
  status_change: AccStatusChange;
}

export interface CreditPhase {
  /**
   * @format int64
   * @example 100
   */
  fees_collected: number;
  /**
   * @format int64
   * @example 1000
   */
  credit: number;
}

export interface ActionPhase {
  /** @example true */
  success: boolean;
  /**
   * @format int32
   * @example 5
   */
  total_actions: number;
  /**
   * @format int32
   * @example 5
   */
  skipped_actions: number;
  /**
   * @format int64
   * @example 1000
   */
  fwd_fees: number;
  /**
   * @format int64
   * @example 1000
   */
  total_fees: number;
}

export interface Transaction {
  /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
  hash: string;
  /**
   * @format int64
   * @example 25713146000001
   */
  lt: number;
  account: AccountAddress;
  /** @example true */
  success: boolean;
  /**
   * @format int64
   * @example 1645544908
   */
  utime: number;
  orig_status: AccountStatus;
  end_status: AccountStatus;
  /**
   * @format int64
   * @example 25713146000001
   */
  total_fees: number;
  transaction_type: TransactionType;
  /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
  state_update_old: string;
  /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
  state_update_new: string;
  in_msg?: Message;
  out_msgs: Message[];
  /** @example "(-1,4234234,8000000000000000)" */
  block: string;
  /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
  prev_trans_hash?: string;
  /**
   * @format int64
   * @example 25713146000001
   */
  prev_trans_lt?: number;
  compute_phase?: ComputePhase;
  storage_phase?: StoragePhase;
  credit_phase?: CreditPhase;
  action_phase?: ActionPhase;
  bounce_phase?: BouncePhaseType;
  /** @example true */
  aborted: boolean;
  /** @example true */
  destroyed: boolean;
}

export interface Transactions {
  transactions: Transaction[];
}

export interface ValidatorsSet {
  utime_since: number;
  utime_until: number;
  total: number;
  main: number;
  total_weight?: number;
  list: {
    public_key: string;
  }[];
}

export interface Validator {
  /** @example "0:55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
  address: string;
}

export interface Validators {
  validators: Validator[];
}

export interface AccountStorageInfo {
  /**
   * @format int64
   * @example 567
   */
  used_cells: number;
  /**
   * @format int64
   * @example 567
   */
  used_bits: number;
  /**
   * @format int64
   * @example 567
   */
  used_public_cells: number;
  /**
   * @format int64
   * @example 567
   */
  last_paid: number;
  /**
   * @format int64
   * @example 567
   */
  due_payment: number;
}

export interface BlockchainRawAccount {
  /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
  address: string;
  /**
   * @format int64
   * @example 123456789
   */
  balance: number;
  extra_balance?: Record<string, string>;
  /** @example "b5ee9c72410104010087000114ff00f4a413f4a0f2c80b0102012002030002d200dfa5ffff76a268698fe9ffe8e42c5267858f90e785ffe4f6aa6467c444ffb365ffc10802faf0807d014035e7a064b87d804077e7857fc10803dfd2407d014035e7a064b86467cd8903a32b9ba4410803ade68afd014035e7a045ea432b6363796103bb7b9363210c678b64b87d807d8040c249b3e4" */
  code?: string;
  /** @example "b5ee9c7241010101002600004811fd096c0000000000000000000000000000000000000000000000000000000000000000cb78264d" */
  data?: string;
  /**
   * @format int64
   * @example 123456789
   */
  last_transaction_lt: number;
  /** @example "active" */
  status: string;
  storage: AccountStorageInfo;
}

export interface Account {
  /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
  address: string;
  /**
   * @format int64
   * @example 123456789
   */
  balance: number;
  /**
   * unix timestamp
   * @format int64
   * @example 123456789
   */
  last_activity: number;
  /** @example "active" */
  status: string;
  interfaces?: string[];
  /** @example "Ton foundation" */
  name?: string;
  /** @example true */
  is_scam?: boolean;
  /** @example "https://ton.org/logo.png" */
  icon?: string;
  /** @example true */
  memo_required?: boolean;
  /** @example ["get_item_data"] */
  get_methods: string[];
}

export interface Accounts {
  accounts: Account[];
}

export interface MethodExecutionResult {
  /** @example true */
  success: boolean;
  /**
   * tvm exit code
   * @example 0
   */
  exit_code: number;
  stack: TvmStackRecord[];
  decoded?: any;
}

export interface TvmStackRecord {
  /** @example "cell" */
  type: TvmStackRecordTypeEnum;
  /** @example "te6cckEBAQEAJAAAQ4ARPeUceMlv4l12d6jdLpIzzbAV6amYXNZeZK2aicQdC/Apj8aJ" */
  cell?: string;
  /** @example "" */
  slice?: string;
  /** @example "" */
  num?: string;
  /** @example [] */
  tuple?: TvmStackRecord[];
}

export interface BlockchainConfig {
  /** config address */
  '0': string;
  /** elector address */
  '1': string;
  /** minter address */
  '2': string;
  /** dns root address */
  '4': string;
  '32'?: ValidatorsSet;
  '33'?: ValidatorsSet;
  '34'?: ValidatorsSet;
  '35'?: ValidatorsSet;
  '36'?: ValidatorsSet;
  '37'?: ValidatorsSet;
  /**
   * config boc in base64 format
   * @example "te6ccgEBBgEARAABFP8A9KQT9LzyyAsBAgEgAgMCAUgEBQAE8jAAONBsIdMfMO1E0NM/MAHAAZekyMs/ye1UkzDyBuIAEaE0MdqJoaZ+YQ=="
   */
  raw: string;
}

export interface DomainNames {
  domains: string[];
}

export interface DomainBid {
  /**
   * @default false
   * @example true
   */
  success: boolean;
  /**
   * @format int64
   * @example 1660050553
   */
  value: number;
  /**
   * @format int64
   * @example 1660050553
   */
  txTime: number;
  /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
  txHash: string;
  bidder: AccountAddress;
}

export interface DomainBids {
  data: DomainBid[];
}

export enum JettonVerificationType {
  Whitelist = 'whitelist',
  Blacklist = 'blacklist',
  None = 'none',
}

export interface JettonPreview {
  /** @example "0:0BB5A9F69043EEBDDA5AD2E946EB953242BD8F603FE795D90698CEEC6BFC60A0" */
  address: string;
  /** @example "Wrapped TON" */
  name: string;
  /** @example "WTON" */
  symbol: string;
  /** @example 9 */
  decimals: number;
  /** @example "https://cache.tonapi.io/images/jetton.jpg" */
  image: string;
  verification: JettonVerificationType;
}

export interface JettonBalance {
  /** @example 597968399 */
  balance: string;
  wallet_address: AccountAddress;
  jetton: JettonPreview;
}

export interface JettonsBalances {
  balances: JettonBalance[];
}

export interface Price {
  /** @example 123000000000 */
  value: string;
  /** @example "TON" */
  token_name: string;
}

export interface ImagePreview {
  /** @example "100x100" */
  resolution: string;
  /** @example "https://site.com/pic1.jpg" */
  url: string;
}

export interface Sale {
  /** @example "0:10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365" */
  address: string;
  market: AccountAddress;
  owner?: AccountAddress;
  price: Price;
}

export interface NftItem {
  /** @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B" */
  address: string;
  /**
   * @format int64
   * @example 58
   */
  index: number;
  owner?: AccountAddress;
  collection?: {
    /** @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B" */
    address: string;
    /** @example "TON Diamonds" */
    name: string;
    /** @example "Best collection in TON network" */
    description: string;
  };
  /** @example true */
  verified: boolean;
  /** @example {} */
  metadata: Record<string, any>;
  sale?: Sale;
  previews?: ImagePreview[];
  /** @example "crypto.ton" */
  dns?: string;
  approved_by: NftItemApprovedByEnum[];
}

export interface NftItems {
  nft_items: NftItem[];
}

export interface Refund {
  /** @example "DNS.ton" */
  type: RefundTypeEnum;
  /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
  origin: string;
}

export interface ValueFlow {
  account: AccountAddress;
  /**
   * @format int64
   * @example 80
   */
  ton: number;
  /**
   * @format int64
   * @example 10
   */
  fees: number;
  jettons?: {
    account: AccountAddress;
    /**
     * @format int64
     * @example 10
     */
    quantity: number;
  }[];
}

export interface Action {
  /** @example "TonTransfer" */
  type: ActionTypeEnum;
  /** @example "ok" */
  status: ActionStatusEnum;
  TonTransfer?: TonTransferAction;
  ContractDeploy?: ContractDeployAction;
  JettonTransfer?: JettonTransferAction;
  NftItemTransfer?: NftItemTransferAction;
  Subscribe?: SubscriptionAction;
  UnSubscribe?: UnSubscriptionAction;
  AuctionBid?: AuctionBidAction;
  NftPurchase?: NftPurchaseAction;
  DepositStake?: DepositStakeAction;
  RecoverStake?: RecoverStakeAction;
  JettonSwap?: JettonSwapAction;
  SmartContractExec?: SmartContractAction;
  /** shortly describes what this action is about. */
  simple_preview: ActionSimplePreview;
}

export interface TonTransferAction {
  sender: AccountAddress;
  recipient: AccountAddress;
  /**
   * amount in nanotons
   * @format int64
   * @example 123456789
   */
  amount: number;
  /**
   * @example "Hi! This is your salary.
   * From accounting with love."
   */
  comment?: string;
  encrypted_comment?: EncryptedComment;
  refund?: Refund;
}

export interface SmartContractAction {
  executor: AccountAddress;
  contract: AccountAddress;
  /**
   * amount in nanotons
   * @format int64
   * @example 123456789
   */
  ton_attached: number;
  /** @example "NftTransfer or 0x35d95a12" */
  operation: string;
  payload?: string;
  refund?: Refund;
}

export interface NftItemTransferAction {
  sender?: AccountAddress;
  recipient?: AccountAddress;
  /** @example "" */
  nft: string;
  /**
   * @example "Hi! This is your salary.
   * From accounting with love."
   */
  comment?: string;
  encrypted_comment?: EncryptedComment;
  /**
   * raw hex encoded payload
   * @example "0234de3e21d21b3ee21f3"
   */
  payload?: string;
  refund?: Refund;
}

export interface JettonTransferAction {
  sender?: AccountAddress;
  recipient?: AccountAddress;
  /** @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B" */
  senders_wallet: string;
  /** @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B" */
  recipients_wallet: string;
  /**
   * amount in quanta of tokens
   * @example 1000000000
   */
  amount: string;
  /**
   * @example "Hi! This is your salary.
   * From accounting with love."
   */
  comment?: string;
  encrypted_comment?: EncryptedComment;
  refund?: Refund;
  jetton: JettonPreview;
}

export interface ContractDeployAction {
  /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
  address: string;
  /** @example ["nft_item","nft_royalty"] */
  interfaces: string[];
}

export interface SubscriptionAction {
  subscriber: AccountAddress;
  /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
  subscription: string;
  beneficiary: AccountAddress;
  /**
   * @format int64
   * @example 1000000000
   */
  amount: number;
  /** @example false */
  initial: boolean;
}

export interface UnSubscriptionAction {
  subscriber: AccountAddress;
  /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
  subscription: string;
  beneficiary: AccountAddress;
}

export interface AuctionBidAction {
  auction_type: AuctionBidActionAuctionTypeEnum;
  amount: Price;
  nft?: NftItem;
  bidder: AccountAddress;
  auction: AccountAddress;
}

export interface DepositStakeAction {
  /**
   * @format int64
   * @example 1660050553
   */
  amount: number;
  staker: AccountAddress;
}

export interface RecoverStakeAction {
  /**
   * @format int64
   * @example 1660050553
   */
  amount: number;
  staker: AccountAddress;
}

export interface JettonSwapAction {
  dex: JettonSwapActionDexEnum;
  /** @example "1660050553" */
  amount_in: string;
  /** @example "1660050553" */
  amount_out: string;
  user_wallet: AccountAddress;
  router: AccountAddress;
  /** @example "0:dea8f638b789172ce36d10a20318125e52c649aa84893cd77858224fe2b9b0ee" */
  jetton_wallet_in: string;
  jetton_master_in: JettonPreview;
  /** @example "0:dea8f638b789172ce36d10a20318125e52c649aa84893cd77858224fe2b9b0ee" */
  jetton_wallet_out: string;
  jetton_master_out: JettonPreview;
}

export interface NftPurchaseAction {
  auction_type: NftPurchaseActionAuctionTypeEnum;
  amount: Price;
  nft: NftItem;
  seller: AccountAddress;
  buyer: AccountAddress;
}

/** shortly describes what this action is about. */
export interface ActionSimplePreview {
  /** @example "Ton Transfer" */
  name: string;
  /** @example "Transferring 5 Ton" */
  description: string;
  /** a link to an image for this particular action. */
  action_image?: string;
  /** @example "5 Ton" */
  value?: string;
  /** a link to an image that depicts this action's asset. */
  value_image?: string;
  accounts: AccountAddress[];
}

/** An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time. */
export interface AccountEvent {
  /** @example "e8b0e3fee4a26bd2317ac1f9952fcdc87dc08fdb617656b5202416323337372e" */
  event_id: string;
  account: AccountAddress;
  /**
   * @format int64
   * @example 1234567890
   */
  timestamp: number;
  actions: Action[];
  /**
   * scam
   * @example false
   */
  is_scam: boolean;
  /**
   * @format int64
   * @example 25713146000001
   */
  lt: number;
  /**
   * Event is not finished yet. Transactions still happening
   * @example false
   */
  in_progress: boolean;
  /**
   * TODO
   * @format int64
   * @example 3
   */
  extra: number;
}

export interface AccountEvents {
  events: AccountEvent[];
  /**
   * @format int64
   * @example 25713146000001
   */
  next_from: number;
}

export interface TraceID {
  /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
  id: string;
  /**
   * @format uint64
   * @example 1645544908
   */
  utime: number;
}

export interface TraceIDs {
  traces: TraceID[];
}

export interface ApyHistory {
  apy: number;
  time: number;
}

export interface Subscription {
  /** @example "0:dea8f638b789172ce36d10a20318125e52c649aa84893cd77858224fe2b9b0ee" */
  address: string;
  /** @example "0:567DE86AF2B6A557D7085807CF7C26338124987A5179344F0D0FA2657EB710F1" */
  wallet_address: string;
  /** @example "0:c704dadfabac88eab58e340de03080df81ff76636431f48624ad6e26fb2da0a4" */
  beneficiary_address: string;
  /**
   * @format int64
   * @example 1000000000
   */
  amount: number;
  /**
   * @format int64
   * @example 2592000
   */
  period: number;
  /**
   * @format int64
   * @example 1653996832
   */
  start_time: number;
  /**
   * @format int64
   * @example 10800
   */
  timeout: number;
  /**
   * @format int64
   * @example 1653996834
   */
  last_payment_time: number;
  /**
   * @format int64
   * @example 0
   */
  last_request_time: number;
  /**
   * @format int64
   * @example 217477
   */
  subscription_id: number;
  /**
   * @format int32
   * @example 0
   */
  failed_attempts: number;
}

export interface Subscriptions {
  subscriptions: Subscription[];
}

export interface Auction {
  /** @example "wallet.ton" */
  domain: string;
  /** @example "owner" */
  owner: string;
  /**
   * @format int64
   * @example 1660050553
   */
  price: number;
  /**
   * @format int64
   * @example 1660050553
   */
  bids: number;
  /**
   * @format int64
   * @example 1660050553
   */
  date: number;
}

export interface Auctions {
  data: Auction[];
  /**
   * @format int64
   * @example 1660050553
   */
  total: number;
}

export interface WalletDNS {
  /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
  address: string;
  /** @example true */
  is_wallet: boolean;
  /** @example true */
  has_method_pubkey: boolean;
  /** @example true */
  has_method_seqno: boolean;
  names: string[];
}

export interface DomainInfo {
  name: string;
  /**
   * date of expiring. optional. not all domain in ton has expiration date
   * @format int64
   */
  expiring_at?: number;
  item?: NftItem;
}

export interface DnsRecord {
  wallet?: WalletDNS;
  /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
  next_resolver?: string;
  sites: string[];
  /**
   * tonstorage bag id
   * @example "da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
   */
  storage?: string;
}

export interface NftCollection {
  /** @example "0:FD595F36B4C1535BEC8461490D38EBB9AE3C38DD6ACE17CA63ABE2C6608BE159" */
  address: string;
  /**
   * @format int64
   * @example 1
   */
  next_item_index: number;
  owner?: AccountAddress;
  /** @example "697066733a2f2f516d596e437861746f5178433571584b79773971656768415853626f3544644e6a32387631487669437a47355359" */
  raw_collection_content: string;
  /** @example {} */
  metadata?: Record<string, any>;
}

export interface NftCollections {
  nft_collections: NftCollection[];
}

export interface Trace {
  transaction: Transaction;
  /** @example ["wallet","tep62_item"] */
  interfaces: string[];
  children?: Trace[];
}

export interface MessageConsequences {
  trace: Trace;
  /** Risk specifies assets that could be lost if a message would be sent to a malicious smart contract. It makes sense to understand the risk BEFORE sending a message to the blockchain. */
  risk: Risk;
  /** An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time. */
  event: AccountEvent;
}

/** Risk specifies assets that could be lost if a message would be sent to a malicious smart contract. It makes sense to understand the risk BEFORE sending a message to the blockchain. */
export interface Risk {
  /**
   * transfer all the remaining balance of the wallet.
   * @example true
   */
  transfer_all_remaining_balance: boolean;
  /**
   * @format int64
   * @example 500
   */
  ton: number;
  jettons: JettonQuantity[];
  nfts: NftItem[];
}

export interface JettonQuantity {
  /** @example 597968399 */
  quantity: string;
  wallet_address: AccountAddress;
  jetton: JettonPreview;
}

export interface Event {
  /** @example "e8b0e3fee4a26bd2317ac1f9952fcdc87dc08fdb617656b5202416323337372e" */
  event_id: string;
  /**
   * @format int64
   * @example 1234567890
   */
  timestamp: number;
  actions: Action[];
  value_flow: ValueFlow[];
  /**
   * scam
   * @example false
   */
  is_scam: boolean;
  /**
   * @format int64
   * @example 25713146000001
   */
  lt: number;
  /**
   * Event is not finished yet. Transactions still happening
   * @example false
   */
  in_progress: boolean;
}

export interface JettonMetadata {
  /** @example "0:0BB5A9F69043EEBDDA5AD2E946EB953242BD8F603FE795D90698CEEC6BFC60A0" */
  address: string;
  /** @example "Wrapped TON" */
  name: string;
  /** @example "WTON" */
  symbol: string;
  /** @example "9" */
  decimals: string;
  /** @example "https://cache.tonapi.io/images/jetton.jpg" */
  image?: string;
  /** @example "Wrapped Toncoin" */
  description?: string;
  social?: string[];
  websites?: string[];
  catalogs?: string[];
}

export interface Jettons {
  jettons: JettonInfo[];
}

export interface JettonInfo {
  /** @example true */
  mintable: boolean;
  /** @example 311500000000000 */
  total_supply: string;
  metadata: JettonMetadata;
  verification: JettonVerificationType;
}

export interface AccountStaking {
  pools: AccountStakingInfo[];
}

export interface AccountStakingInfo {
  /** @example "EQBI-wGVp_x0VFEjd7m9cEUD3tJ_bnxMSp0Tb9qz757ATEAM" */
  pool: string;
  /**
   * @format int64
   * @example 10050000000000
   */
  amount: number;
  /**
   * @format int64
   * @example 500000000000
   */
  pending_deposit: number;
  /**
   * @format int64
   * @example 500000000000
   */
  pending_withdraw: number;
  /**
   * @format int64
   * @example 500000000000
   */
  ready_withdraw: number;
}

export interface PoolInfo {
  /** @example "0:48fb0195a7fc7454512377b9bd704503ded27f6e7c4c4a9d136fdab3ef9ec04c" */
  address: string;
  /** @example "Tonkeeper pool" */
  name: string;
  /** @format int64 */
  total_amount: number;
  implementation: PoolInfoImplementationEnum;
  /**
   * APY in percent
   * @example 5.31
   */
  apy: number;
  /**
   * @format int64
   * @example 5000000000
   */
  min_stake: number;
  /**
   * current nomination cycle beginning timestamp
   * @format int64
   * @example 1678223064
   */
  cycle_start: number;
  /**
   * current nomination cycle ending timestamp
   * @format int64
   * @example 1678223064
   */
  cycle_end: number;
  /**
   * this pool has verified source code or managed by trusted company
   * @example true
   */
  verified: boolean;
  /**
   * current number of nominators
   * @example 10
   */
  current_nominators: number;
  /**
   * maximum number of nominators
   * @example 100
   */
  max_nominators: number;
  /**
   * for liquid staking master account of jetton
   * @example "0:4a91d32d0289bda9813ae00ff7640e6c38fdce76e4583dd6afc463b70c7d767c"
   */
  liquid_jetton_master?: string;
  /**
   * total stake of all nominators
   * @format int64
   * @example 5000000000
   */
  nominators_stake: number;
  /**
   * stake of validator
   * @format int64
   * @example 5000000000
   */
  validator_stake: number;
}

export interface PoolImplementation {
  /** @example "TON Whales" */
  name: string;
  /** @example "Oldest pool with minimal staking amount 50 TON" */
  description: string;
  /** @example "https://tonvalidators.org/" */
  url: string;
}

export interface StorageProvider {
  /** @example "0:FD595F36B4C1535BEC8461490D38EBB9AE3C38DD6ACE17CA63ABE2C6608BE159" */
  address: string;
  /** @example true */
  accept_new_contracts: boolean;
  /**
   * @format int64
   * @example 50000000
   */
  rate_per_mb_day: number;
  /**
   * @format int64
   * @example 604800
   */
  max_span: number;
  /**
   * @format int64
   * @example 64
   */
  minimal_file_size: number;
  /**
   * @format int64
   * @example 10485760
   */
  maximal_file_size: number;
}

export interface FoundAccounts {
  addresses: {
    /** @example "0:010cеeac44fad23417a5c55e4071796868771082с9a61e8c195a8d57508b8471" */
    address: string;
    /** @example "blah_blah.ton" */
    name: string;
  }[];
}

export interface DnsExpiring {
  items: {
    /**
     * @format int64
     * @example "1678275313"
     */
    expiring_at: number;
    /** @example "blah_blah.ton" */
    name: string;
    dns_item?: NftItem;
  }[];
}

export interface AccountInfoByStateInit {
  /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
  public_key: string;
  /** @example "0:97146a46acc2654y27947f14c4a4b14273e954f78bc017790b41208b0043200b" */
  address: string;
}

export interface Seqno {
  /** @format uint32 */
  seqno: number;
}

export interface BlockRaw {
  /**
   * @format uint32
   * @example 4294967295
   */
  workchain: number;
  /**
   * @format uint64
   * @example 9223372036854776000
   */
  shard: number;
  /**
   * @format uint32
   * @example 30699640
   */
  seqno: number;
  /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
  root_hash: string;
  /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
  file_hash: string;
}

export interface InitStateRaw {
  /**
   * @format uint32
   * @example 4294967295
   */
  workchain: number;
  /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
  root_hash: string;
  /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
  file_hash: string;
}

export interface EncryptedComment {
  /** @example "simple" */
  encryption_type: string;
  /** @example "A6A0BD6608672B...CE3AF8DB" */
  cipher_text: string;
}

/** @example "cell" */
export enum TvmStackRecordTypeEnum {
  Cell = 'cell',
  Num = 'num',
  Nan = 'nan',
  Null = 'null',
  Tuple = 'tuple',
}

/** @example "getgems" */
export enum NftItemApprovedByEnum {
  Getgems = 'getgems',
  Tonkeeper = 'tonkeeper',
}

/** @example "DNS.ton" */
export enum RefundTypeEnum {
  DNSTon = 'DNS.ton',
  DNSTg = 'DNS.tg',
  GetGems = 'GetGems',
}

/** @example "TonTransfer" */
export enum ActionTypeEnum {
  TonTransfer = 'TonTransfer',
  JettonTransfer = 'JettonTransfer',
  NftItemTransfer = 'NftItemTransfer',
  ContractDeploy = 'ContractDeploy',
  Subscribe = 'Subscribe',
  UnSubscribe = 'UnSubscribe',
  AuctionBid = 'AuctionBid',
  NftPurchase = 'NftPurchase',
  DepositStake = 'DepositStake',
  RecoverStake = 'RecoverStake',
  JettonSwap = 'JettonSwap',
  SmartContractExec = 'SmartContractExec',
  Unknown = 'Unknown',
}

/** @example "ok" */
export enum ActionStatusEnum {
  Ok = 'ok',
  Failed = 'failed',
}

export enum AuctionBidActionAuctionTypeEnum {
  DNSTon = 'DNS.ton',
  DNSTg = 'DNS.tg',
  NUMBERTg = 'NUMBER.tg',
  Getgems = 'getgems',
}

export enum JettonSwapActionDexEnum {
  Stonfi = 'stonfi',
  Dedust = 'dedust',
}

export enum NftPurchaseActionAuctionTypeEnum {
  DNSTg = 'DNS.tg',
  Getgems = 'getgems',
  Basic = 'basic',
}

export enum PoolInfoImplementationEnum {
  Whales = 'whales',
  Tf = 'tf',
  LiquidTF = 'liquidTF',
}

export interface GetBlockchainAccountTransactionsParams {
  /**
   * omit this parameter to get last transactions
   * @format int64
   * @example 39787624000003
   */
  after_lt?: number;
  /**
   * omit this parameter to get last transactions
   * @format int64
   * @example 39787624000003
   */
  before_lt?: number;
  /**
   * @format int32
   * @max 1000
   * @default 100
   * @example 100
   */
  limit?: number;
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  accountId: string;
}

export interface ExecGetMethodForBlockchainAccountParams {
  /**
   * Supported values: NaN, Null, 10-base digits for tiny int, 0x-prefixed hex digits for int257, all forms of addresses for slice, single-root base64-encoded BOC for cell
   * @example ["0:9a33970f617bcd71acf2cd28357c067aa31859c02820d8f01d74c88063a8f4d8"]
   */
  args?: string[];
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  accountId: string;
  /**
   * contract get method name
   * @example "get_wallet_address"
   */
  methodName: string;
}

export interface GetAccountJettonsHistoryParams {
  /**
   * omit this parameter to get last events
   * @format int64
   * @example 25758317000002
   */
  before_lt?: number;
  /**
   * @max 1000
   * @example 100
   */
  limit: number;
  /**
   * @format int64
   * @example 1668436763
   */
  start_date?: number;
  /**
   * @format int64
   * @example 1668436763
   */
  end_date?: number;
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  accountId: string;
}

export interface GetAccountJettonHistoryByIdParams {
  /**
   * omit this parameter to get last events
   * @format int64
   * @example 25758317000002
   */
  before_lt?: number;
  /**
   * @max 1000
   * @example 100
   */
  limit: number;
  /**
   * @format int64
   * @example 1668436763
   */
  start_date?: number;
  /**
   * @format int64
   * @example 1668436763
   */
  end_date?: number;
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  accountId: string;
  /**
   * jetton ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  jettonId: string;
}

export interface GetAccountNftItemsParams {
  /**
   * nft collection
   * @example "0:06d811f426598591b32b2c49f29f66c821368e4acb1de16762b04e0174532465"
   */
  collection?: string;
  /**
   * @max 1000
   * @default 1000
   */
  limit?: number;
  /** @default 0 */
  offset?: number;
  /**
   * Selling nft items in ton implemented usually via transfer items to special selling account. This option enables including items which owned not directly.
   * @default false
   */
  indirect_ownership?: boolean;
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  accountId: string;
}

export interface GetAccountEventsParams {
  /**
   * filter actions where requested account is not real subject (for example sender or receiver jettons)
   * @default false
   */
  subject_only?: boolean;
  /**
   * omit this parameter to get last events
   * @format int64
   * @example 25758317000002
   */
  before_lt?: number;
  /**
   * @max 1000
   * @example 100
   */
  limit: number;
  /**
   * @format int64
   * @example 1668436763
   */
  start_date?: number;
  /**
   * @format int64
   * @example 1668436763
   */
  end_date?: number;
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  accountId: string;
}

export interface GetAccountEventParams {
  /**
   * filter actions where requested account is not real subject (for example sender or receiver jettons)
   * @default false
   */
  subject_only?: boolean;
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  accountId: string;
  /**
   * event ID or transaction hash in hex (without 0x) or base64url format
   * @example "97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  eventId: string;
}

export interface GetAccountTracesParams {
  /**
   * @max 1000
   * @default 100
   * @example 100
   */
  limit?: number;
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  accountId: string;
}

export interface SearchAccountsParams {
  /**
   * @minLength 3
   * @maxLength 15
   */
  name: string;
}

export interface GetAccountDnsExpiringParams {
  /**
   * number of days before expiration
   * @min 1
   * @max 3660
   */
  period?: number;
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  accountId: string;
}

export interface GetAllAuctionsParams {
  /**
   * domain filter for current auctions "ton" or "t.me"
   * @example "ton"
   */
  tld?: string;
}

export interface GetNftCollectionsParams {
  /**
   * @format int32
   * @max 1000
   * @default 100
   * @example 15
   */
  limit?: number;
  /**
   * @format int32
   * @default 0
   * @example 10
   */
  offset?: number;
}

export interface GetItemsFromCollectionParams {
  /**
   * @max 1000
   * @default 1000
   */
  limit?: number;
  /** @default 0 */
  offset?: number;
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  accountId: string;
}

export interface GetJettonsParams {
  /**
   * @format int32
   * @max 1000
   * @default 100
   * @example 15
   */
  limit?: number;
  /**
   * @format int32
   * @default 0
   * @example 10
   */
  offset?: number;
}

export interface GetStakingPoolsParams {
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  available_for?: string;
  /**
   * return also pools not from white list - just compatible by interfaces (maybe dangerous!)
   * @example false
   */
  include_unverified?: boolean;
}

export interface GetRatesParams {
  /**
   * accept ton and jetton master addresses, separated by commas
   * @example "ton"
   */
  tokens: string;
  /**
   * accept ton and all possible fiat currencies, separated by commas
   * @example "ton,usd,rub"
   */
  currencies: string;
}

export interface GetChartRatesParams {
  /** accept jetton master address */
  token: string;
  /** @example "usd" */
  currency?: string;
}

export interface GetRawMasterchainInfoExtParams {
  /**
   * mode
   * @format uint32
   * @example 0
   */
  mode: number;
}

export interface GetRawBlockchainBlockHeaderParams {
  /**
   * mode
   * @format uint32
   * @example 0
   */
  mode: number;
  /**
   * block ID: (workchain,shard,seqno,root_hash,file_hash)
   * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
   */
  blockId: string;
}

export interface GetRawShardInfoParams {
  /**
   * workchain
   * @format uint32
   * @example 1
   */
  workchain: number;
  /**
   * shard
   * @format uint64
   * @example 1
   */
  shard: number;
  /**
   * exact
   * @example false
   */
  exact: boolean;
  /**
   * block ID: (workchain,shard,seqno,root_hash,file_hash)
   * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
   */
  blockId: string;
}

export interface GetRawTransactionsParams {
  /**
   * count
   * @format uint32
   * @example 100
   */
  count: number;
  /**
   * lt
   * @format uint64
   * @example 23814011000000
   */
  lt: number;
  /**
   * hash
   * @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85"
   */
  hash: string;
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  accountId: string;
}

export interface GetRawListBlockTransactionsParams {
  /**
   * mode
   * @format uint32
   * @example 0
   */
  mode: number;
  /**
   * count
   * @format uint32
   * @example 100
   */
  count: number;
  /**
   * account ID
   * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
   */
  account_id?: string;
  /**
   * lt
   * @format uint64
   * @example 23814011000000
   */
  lt?: number;
  /**
   * block ID: (workchain,shard,seqno,root_hash,file_hash)
   * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
   */
  blockId: string;
}

export interface GetRawBlockProofParams {
  /**
   * known block: (workchain,shard,seqno,root_hash,file_hash)
   * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
   */
  known_block: string;
  /**
   * target block: (workchain,shard,seqno,root_hash,file_hash)
   * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
   */
  target_block?: string;
  /**
   * mode
   * @format uint32
   * @example 0
   */
  mode: number;
}

export interface GetRawConfigParams {
  /**
   * mode
   * @format uint32
   * @example 0
   */
  mode: number;
  /**
   * block ID: (workchain,shard,seqno,root_hash,file_hash)
   * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
   */
  blockId: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://tonapi.io';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`,
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal:
          (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) ||
          null,
        body:
          typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title REST api to TON blockchain explorer
 * @version 2.0.0
 * @baseUrl https://tonapi.io
 * @contact Support <support@tonkeeper.com>
 *
 * Provide access to indexed TON blockchain
 */
export class TonAPIGenerated<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  blockchain = {
    /**
     * @description Get blockchain block data
     *
     * @tags Blockchain
     * @name GetBlockchainBlock
     * @request GET:/v2/blockchain/blocks/{block_id}
     */
    getBlockchainBlock: (blockId: string, params: RequestParams = {}) =>
      this.request<BlockchainBlock, Error>({
        path: `/v2/blockchain/blocks/${blockId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get transactions from block
     *
     * @tags Blockchain
     * @name GetBlockchainBlockTransactions
     * @request GET:/v2/blockchain/blocks/{block_id}/transactions
     */
    getBlockchainBlockTransactions: (blockId: string, params: RequestParams = {}) =>
      this.request<Transactions, Error>({
        path: `/v2/blockchain/blocks/${blockId}/transactions`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get transaction data
     *
     * @tags Blockchain
     * @name GetBlockchainTransaction
     * @request GET:/v2/blockchain/transactions/{transaction_id}
     */
    getBlockchainTransaction: (transactionId: string, params: RequestParams = {}) =>
      this.request<Transaction, Error>({
        path: `/v2/blockchain/transactions/${transactionId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get transaction data by message hash
     *
     * @tags Blockchain
     * @name GetBlockchainTransactionByMessageHash
     * @request GET:/v2/blockchain/messages/{msg_id}/transaction
     */
    getBlockchainTransactionByMessageHash: (msgId: string, params: RequestParams = {}) =>
      this.request<Transaction, Error>({
        path: `/v2/blockchain/messages/${msgId}/transaction`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get blockchain validators
     *
     * @tags Blockchain
     * @name GetBlockchainValidators
     * @request GET:/v2/blockchain/validators
     */
    getBlockchainValidators: (params: RequestParams = {}) =>
      this.request<Validators, Error>({
        path: `/v2/blockchain/validators`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get last known masterchain block
     *
     * @tags Blockchain
     * @name GetBlockchainMasterchainHead
     * @request GET:/v2/blockchain/masterchain-head
     */
    getBlockchainMasterchainHead: (params: RequestParams = {}) =>
      this.request<BlockchainBlock, Error>({
        path: `/v2/blockchain/masterchain-head`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get low-level information about an account taken directly from the blockchain.
     *
     * @tags Blockchain
     * @name GetBlockchainRawAccount
     * @request GET:/v2/blockchain/accounts/{account_id}
     */
    getBlockchainRawAccount: (accountId: string, params: RequestParams = {}) =>
      this.request<BlockchainRawAccount, Error>({
        path: `/v2/blockchain/accounts/${accountId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get account transactions
     *
     * @tags Blockchain
     * @name GetBlockchainAccountTransactions
     * @request GET:/v2/blockchain/accounts/{account_id}/transactions
     */
    getBlockchainAccountTransactions: (
      { accountId, ...query }: GetBlockchainAccountTransactionsParams,
      params: RequestParams = {},
    ) =>
      this.request<Transactions, Error>({
        path: `/v2/blockchain/accounts/${accountId}/transactions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Execute get method for account
     *
     * @tags Blockchain
     * @name ExecGetMethodForBlockchainAccount
     * @request GET:/v2/blockchain/accounts/{account_id}/methods/{method_name}
     */
    execGetMethodForBlockchainAccount: (
      { accountId, methodName, ...query }: ExecGetMethodForBlockchainAccountParams,
      params: RequestParams = {},
    ) =>
      this.request<MethodExecutionResult, Error>({
        path: `/v2/blockchain/accounts/${accountId}/methods/${methodName}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Send message to blockchain
     *
     * @tags Blockchain
     * @name SendBlockchainMessage
     * @request POST:/v2/blockchain/message
     */
    sendBlockchainMessage: (
      data: {
        /** @example "te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg" */
        boc?: string;
        /** @maxItems 10 */
        batch?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/v2/blockchain/message`,
        method: 'POST',
        body: data,
        ...params,
      }),

    /**
     * @description Get blockchain config
     *
     * @tags Blockchain
     * @name GetBlockchainConfig
     * @request GET:/v2/blockchain/config
     */
    getBlockchainConfig: (params: RequestParams = {}) =>
      this.request<BlockchainConfig, Error>({
        path: `/v2/blockchain/config`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  events = {
    /**
     * @description Emulate sending message to blockchain
     *
     * @tags Emulation
     * @name EmulateMessageToEvent
     * @request POST:/v2/events/emulate
     */
    emulateMessageToEvent: (
      data: {
        /** @example "te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg" */
        boc: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Event, Error>({
        path: `/v2/events/emulate`,
        method: 'POST',
        body: data,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get an event either by event ID or a hash of any transaction in a trace. An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
     *
     * @tags Events
     * @name GetEvent
     * @request GET:/v2/events/{event_id}
     */
    getEvent: (eventId: string, params: RequestParams = {}) =>
      this.request<Event, Error>({
        path: `/v2/events/${eventId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  traces = {
    /**
     * @description Emulate sending message to blockchain
     *
     * @tags Emulation
     * @name EmulateMessageToTrace
     * @request POST:/v2/traces/emulate
     */
    emulateMessageToTrace: (
      data: {
        /** @example "te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg" */
        boc: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Trace, Error>({
        path: `/v2/traces/emulate`,
        method: 'POST',
        body: data,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the trace by trace ID or hash of any transaction in trace
     *
     * @tags Traces
     * @name GetTrace
     * @request GET:/v2/traces/{trace_id}
     */
    getTrace: (traceId: string, params: RequestParams = {}) =>
      this.request<Trace, Error>({
        path: `/v2/traces/${traceId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  wallet = {
    /**
     * @description Emulate sending message to blockchain
     *
     * @tags Emulation
     * @name EmulateMessageToWallet
     * @request POST:/v2/wallet/emulate
     */
    emulateMessageToWallet: (
      data: {
        /** @example "te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg" */
        boc: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MessageConsequences, Error>({
        path: `/v2/wallet/emulate`,
        method: 'POST',
        body: data,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get backup info
     *
     * @tags Wallet
     * @name GetWalletBackup
     * @request GET:/v2/wallet/backup
     */
    getWalletBackup: (params: RequestParams = {}) =>
      this.request<
        {
          dump: string;
        },
        Error
      >({
        path: `/v2/wallet/backup`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Set backup info
     *
     * @tags Wallet
     * @name SetWalletBackup
     * @request PUT:/v2/wallet/backup
     */
    setWalletBackup: (data: File, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/v2/wallet/backup`,
        method: 'PUT',
        body: data,
        ...params,
      }),

    /**
     * @description Account verification and token issuance
     *
     * @tags Wallet
     * @name TonConnectProof
     * @request POST:/v2/wallet/auth/proof
     */
    tonConnectProof: (
      data: {
        /** @example "0:97146a46acc2654y27947f14c4a4b14273e954f78bc017790b41208b0043200b" */
        address: string;
        proof: {
          /**
           * @format int64
           * @example "1678275313"
           */
          timestamp: number;
          domain: {
            /** @format uint32 */
            length_bytes?: number;
            value: string;
          };
          signature: string;
          /** @example "84jHVNLQmZsAAAAAZB0Zryi2wqVJI-KaKNXOvCijEi46YyYzkaSHyJrMPBMOkVZa" */
          payload: string;
          state_init?: string;
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
          token: string;
        },
        Error
      >({
        path: `/v2/wallet/auth/proof`,
        method: 'POST',
        body: data,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get account seqno
     *
     * @tags Wallet
     * @name GetAccountSeqno
     * @request GET:/v2/wallet/{account_id}/seqno
     */
    getAccountSeqno: (accountId: string, params: RequestParams = {}) =>
      this.request<Seqno, Error>({
        path: `/v2/wallet/${accountId}/seqno`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  accounts = {
    /**
     * @description Emulate sending message to blockchain
     *
     * @tags Emulation
     * @name EmulateMessageToAccountEvent
     * @request POST:/v2/accounts/{account_id}/events/emulate
     */
    emulateMessageToAccountEvent: (
      accountId: string,
      data: {
        /** @example "te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg" */
        boc: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AccountEvent, Error>({
        path: `/v2/accounts/${accountId}/events/emulate`,
        method: 'POST',
        body: data,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get human-friendly information about several accounts without low-level details.
     *
     * @tags Accounts
     * @name GetAccounts
     * @request POST:/v2/accounts/_bulk
     */
    getAccounts: (
      data: {
        account_ids: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<Accounts, Error>({
        path: `/v2/accounts/_bulk`,
        method: 'POST',
        body: data,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get human-friendly information about an account without low-level details.
     *
     * @tags Accounts
     * @name GetAccount
     * @request GET:/v2/accounts/{account_id}
     */
    getAccount: (accountId: string, params: RequestParams = {}) =>
      this.request<Account, Error>({
        path: `/v2/accounts/${accountId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get account's domains
     *
     * @tags Accounts
     * @name AccountDnsBackResolve
     * @request GET:/v2/accounts/{account_id}/dns/backresolve
     */
    accountDnsBackResolve: (accountId: string, params: RequestParams = {}) =>
      this.request<DomainNames, Error>({
        path: `/v2/accounts/${accountId}/dns/backresolve`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all Jettons balances by owner address
     *
     * @tags Accounts
     * @name GetAccountJettonsBalances
     * @request GET:/v2/accounts/{account_id}/jettons
     */
    getAccountJettonsBalances: (accountId: string, params: RequestParams = {}) =>
      this.request<JettonsBalances, Error>({
        path: `/v2/accounts/${accountId}/jettons`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the transfer jettons history for account
     *
     * @tags Accounts
     * @name GetAccountJettonsHistory
     * @request GET:/v2/accounts/{account_id}/jettons/history
     */
    getAccountJettonsHistory: (
      { accountId, ...query }: GetAccountJettonsHistoryParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountEvents, Error>({
        path: `/v2/accounts/${accountId}/jettons/history`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the transfer jetton history for account and jetton
     *
     * @tags Accounts
     * @name GetAccountJettonHistoryById
     * @request GET:/v2/accounts/{account_id}/jettons/{jetton_id}/history
     */
    getAccountJettonHistoryById: (
      { accountId, jettonId, ...query }: GetAccountJettonHistoryByIdParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountEvents, Error>({
        path: `/v2/accounts/${accountId}/jettons/${jettonId}/history`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all NFT items by owner address
     *
     * @tags Accounts
     * @name GetAccountNftItems
     * @request GET:/v2/accounts/{account_id}/nfts
     */
    getAccountNftItems: (
      { accountId, ...query }: GetAccountNftItemsParams,
      params: RequestParams = {},
    ) =>
      this.request<NftItems, Error>({
        path: `/v2/accounts/${accountId}/nfts`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get events for an account. Each event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
     *
     * @tags Accounts
     * @name GetAccountEvents
     * @request GET:/v2/accounts/{account_id}/events
     */
    getAccountEvents: (
      { accountId, ...query }: GetAccountEventsParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountEvents, Error>({
        path: `/v2/accounts/${accountId}/events`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get event for an account by event_id
     *
     * @tags Accounts
     * @name GetAccountEvent
     * @request GET:/v2/accounts/{account_id}/events/{event_id}
     */
    getAccountEvent: (
      { accountId, eventId, ...query }: GetAccountEventParams,
      params: RequestParams = {},
    ) =>
      this.request<AccountEvent, Error>({
        path: `/v2/accounts/${accountId}/events/${eventId}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get traces for account
     *
     * @tags Accounts
     * @name GetAccountTraces
     * @request GET:/v2/accounts/{account_id}/traces
     */
    getAccountTraces: (
      { accountId, ...query }: GetAccountTracesParams,
      params: RequestParams = {},
    ) =>
      this.request<TraceIDs, Error>({
        path: `/v2/accounts/${accountId}/traces`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all subscriptions by wallet address
     *
     * @tags Accounts
     * @name GetAccountSubscriptions
     * @request GET:/v2/accounts/{account_id}/subscriptions
     */
    getAccountSubscriptions: (accountId: string, params: RequestParams = {}) =>
      this.request<Subscriptions, Error>({
        path: `/v2/accounts/${accountId}/subscriptions`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Update internal cache for a particular account
     *
     * @tags Accounts
     * @name ReindexAccount
     * @request POST:/v2/accounts/{account_id}/reindex
     */
    reindexAccount: (accountId: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/v2/accounts/${accountId}/reindex`,
        method: 'POST',
        ...params,
      }),

    /**
     * @description Search by account domain name
     *
     * @tags Accounts
     * @name SearchAccounts
     * @request GET:/v2/accounts/search
     */
    searchAccounts: (query: SearchAccountsParams, params: RequestParams = {}) =>
      this.request<FoundAccounts, Error>({
        path: `/v2/accounts/search`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get expiring account .ton dns
     *
     * @tags Accounts
     * @name GetAccountDnsExpiring
     * @request GET:/v2/accounts/{account_id}/dns/expiring
     */
    getAccountDnsExpiring: (
      { accountId, ...query }: GetAccountDnsExpiringParams,
      params: RequestParams = {},
    ) =>
      this.request<DnsExpiring, Error>({
        path: `/v2/accounts/${accountId}/dns/expiring`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get public key by account id
     *
     * @tags Accounts
     * @name GetAccountPublicKey
     * @request GET:/v2/accounts/{account_id}/publickey
     */
    getAccountPublicKey: (accountId: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
          public_key: string;
        },
        Error
      >({
        path: `/v2/accounts/${accountId}/publickey`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  dns = {
    /**
     * @description Get full information about domain name
     *
     * @tags DNS
     * @name GetDnsInfo
     * @request GET:/v2/dns/{domain_name}
     */
    getDnsInfo: (domainName: string, params: RequestParams = {}) =>
      this.request<DomainInfo, Error>({
        path: `/v2/dns/${domainName}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description DNS resolve for domain name
     *
     * @tags DNS
     * @name DnsResolve
     * @request GET:/v2/dns/{domain_name}/resolve
     */
    dnsResolve: (domainName: string, params: RequestParams = {}) =>
      this.request<DnsRecord, Error>({
        path: `/v2/dns/${domainName}/resolve`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get domain bids
     *
     * @tags DNS
     * @name GetDomainBids
     * @request GET:/v2/dns/{domain_name}/bids
     */
    getDomainBids: (domainName: string, params: RequestParams = {}) =>
      this.request<DomainBids, Error>({
        path: `/v2/dns/${domainName}/bids`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all auctions
     *
     * @tags DNS
     * @name GetAllAuctions
     * @request GET:/v2/dns/auctions
     */
    getAllAuctions: (query: GetAllAuctionsParams, params: RequestParams = {}) =>
      this.request<Auctions, Error>({
        path: `/v2/dns/auctions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  nfts = {
    /**
     * @description Get NFT collections
     *
     * @tags NFT
     * @name GetNftCollections
     * @request GET:/v2/nfts/collections
     */
    getNftCollections: (query: GetNftCollectionsParams, params: RequestParams = {}) =>
      this.request<NftCollections, Error>({
        path: `/v2/nfts/collections`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get NFT collection by collection address
     *
     * @tags NFT
     * @name GetNftCollection
     * @request GET:/v2/nfts/collections/{account_id}
     */
    getNftCollection: (accountId: string, params: RequestParams = {}) =>
      this.request<NftCollection, Error>({
        path: `/v2/nfts/collections/${accountId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get NFT items from collection by collection address
     *
     * @tags NFT
     * @name GetItemsFromCollection
     * @request GET:/v2/nfts/collections/{account_id}/items
     */
    getItemsFromCollection: (
      { accountId, ...query }: GetItemsFromCollectionParams,
      params: RequestParams = {},
    ) =>
      this.request<NftItems, Error>({
        path: `/v2/nfts/collections/${accountId}/items`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get NFT items by their addresses
     *
     * @tags NFT
     * @name GetNftItemsByAddresses
     * @request POST:/v2/nfts/_bulk
     */
    getNftItemsByAddresses: (
      data: {
        account_ids: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<NftItems, Error>({
        path: `/v2/nfts/_bulk`,
        method: 'POST',
        body: data,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get NFT item by its address
     *
     * @tags NFT
     * @name GetNftItemByAddress
     * @request GET:/v2/nfts/{account_id}
     */
    getNftItemByAddress: (accountId: string, params: RequestParams = {}) =>
      this.request<NftItem, Error>({
        path: `/v2/nfts/${accountId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  jettons = {
    /**
     * @description Get a list of all indexed jetton masters in the blockchain.
     *
     * @tags Jettons
     * @name GetJettons
     * @request GET:/v2/jettons
     */
    getJettons: (query: GetJettonsParams, params: RequestParams = {}) =>
      this.request<Jettons, Error>({
        path: `/v2/jettons`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get jetton metadata by jetton master address
     *
     * @tags Jettons
     * @name GetJettonInfo
     * @request GET:/v2/jettons/{account_id}
     */
    getJettonInfo: (accountId: string, params: RequestParams = {}) =>
      this.request<JettonInfo, Error>({
        path: `/v2/jettons/${accountId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  staking = {
    /**
     * @description All pools where account participates
     *
     * @tags Staking
     * @name GetAccountNominatorsPools
     * @request GET:/v2/staking/nominator/{account_id}/pools
     */
    getAccountNominatorsPools: (accountId: string, params: RequestParams = {}) =>
      this.request<AccountStaking, Error>({
        path: `/v2/staking/nominator/${accountId}/pools`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Stacking pool info
     *
     * @tags Staking
     * @name GetStakingPoolInfo
     * @request GET:/v2/staking/pool/{account_id}
     */
    getStakingPoolInfo: (accountId: string, params: RequestParams = {}) =>
      this.request<
        {
          implementation: PoolImplementation;
          pool: PoolInfo;
        },
        Error
      >({
        path: `/v2/staking/pool/${accountId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Pool history
     *
     * @tags Staking
     * @name GetStakingPoolHistory
     * @request GET:/v2/staking/pool/{account_id}/history
     */
    getStakingPoolHistory: (accountId: string, params: RequestParams = {}) =>
      this.request<
        {
          apy: ApyHistory[];
        },
        Error
      >({
        path: `/v2/staking/pool/${accountId}/history`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description All pools available in network
     *
     * @tags Staking
     * @name GetStakingPools
     * @request GET:/v2/staking/pools
     */
    getStakingPools: (query: GetStakingPoolsParams, params: RequestParams = {}) =>
      this.request<
        {
          pools: PoolInfo[];
          implementations: Record<string, PoolImplementation>;
        },
        Error
      >({
        path: `/v2/staking/pools`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  storage = {
    /**
     * @description Get TON storage providers deployed to the blockchain.
     *
     * @tags Storage
     * @name GetStorageProviders
     * @request GET:/v2/storage/providers
     */
    getStorageProviders: (params: RequestParams = {}) =>
      this.request<
        {
          providers: StorageProvider[];
        },
        Error
      >({
        path: `/v2/storage/providers`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  rates = {
    /**
     * @description Get the token price to the currency
     *
     * @tags Rates
     * @name GetRates
     * @request GET:/v2/rates
     */
    getRates: (query: GetRatesParams, params: RequestParams = {}) =>
      this.request<
        {
          /** @example {} */
          rates: any;
        },
        Error
      >({
        path: `/v2/rates`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get chart by token
     *
     * @tags Rates
     * @name GetChartRates
     * @request GET:/v2/rates/chart
     */
    getChartRates: (query: GetChartRatesParams, params: RequestParams = {}) =>
      this.request<
        {
          /** @example {} */
          points: any;
        },
        Error
      >({
        path: `/v2/rates/chart`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  tonconnect = {
    /**
     * @description Get a payload for further token receipt
     *
     * @tags Connect
     * @name GetTonConnectPayload
     * @request GET:/v2/tonconnect/payload
     */
    getTonConnectPayload: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "84jHVNLQmZsAAAAAZB0Zryi2wqVJI-KaKNXOvCijEi46YyYzkaSHyJrMPBMOkVZa" */
          payload: string;
        },
        Error
      >({
        path: `/v2/tonconnect/payload`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get account info by state init
     *
     * @tags Connect
     * @name GetAccountInfoByStateInit
     * @request POST:/v2/tonconnect/stateinit
     */
    getAccountInfoByStateInit: (
      data: {
        state_init: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AccountInfoByStateInit, Error>({
        path: `/v2/tonconnect/stateinit`,
        method: 'POST',
        body: data,
        format: 'json',
        ...params,
      }),
  };
  pubkeys = {
    /**
     * @description Get wallets by public key
     *
     * @tags Wallet
     * @name GetWalletsByPublicKey
     * @request GET:/v2/pubkeys/{public_key}/wallets
     */
    getWalletsByPublicKey: (publicKey: string, params: RequestParams = {}) =>
      this.request<Accounts, Error>({
        path: `/v2/pubkeys/${publicKey}/wallets`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  liteserver = {
    /**
     * @description Get raw masterchain info
     *
     * @tags Lite Server
     * @name GetRawMasterchainInfo
     * @request GET:/v2/liteserver/get_masterchain_info
     */
    getRawMasterchainInfo: (params: RequestParams = {}) =>
      this.request<
        {
          last: BlockRaw;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          state_root_hash: string;
          init: InitStateRaw;
        },
        Error
      >({
        path: `/v2/liteserver/get_masterchain_info`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get raw masterchain info ext
     *
     * @tags Lite Server
     * @name GetRawMasterchainInfoExt
     * @request GET:/v2/liteserver/get_masterchain_info_ext
     */
    getRawMasterchainInfoExt: (
      query: GetRawMasterchainInfoExtParams,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format uint32
           * @example 0
           */
          mode: number;
          /**
           * @format uint32
           * @example 257
           */
          version: number;
          /**
           * @format uint64
           * @example 7
           */
          capabilities: number;
          last: BlockRaw;
          /**
           * @format uint32
           * @example 1687938199
           */
          last_utime: number;
          /**
           * @format uint32
           * @example 1687938204
           */
          now: number;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          state_root_hash: string;
          init: InitStateRaw;
        },
        Error
      >({
        path: `/v2/liteserver/get_masterchain_info_ext`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get raw time
     *
     * @tags Lite Server
     * @name GetRawTime
     * @request GET:/v2/liteserver/get_time
     */
    getRawTime: (params: RequestParams = {}) =>
      this.request<
        {
          /**
           * @format uint32
           * @example 1687146728
           */
          time: number;
        },
        Error
      >({
        path: `/v2/liteserver/get_time`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get raw blockchain block
     *
     * @tags Lite Server
     * @name GetRawBlockchainBlock
     * @request GET:/v2/liteserver/get_block/{block_id}
     */
    getRawBlockchainBlock: (blockId: string, params: RequestParams = {}) =>
      this.request<
        {
          id: BlockRaw;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          data: string;
        },
        Error
      >({
        path: `/v2/liteserver/get_block/${blockId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get raw blockchain block state
     *
     * @tags Lite Server
     * @name GetRawBlockchainBlockState
     * @request GET:/v2/liteserver/get_state/{block_id}
     */
    getRawBlockchainBlockState: (blockId: string, params: RequestParams = {}) =>
      this.request<
        {
          id: BlockRaw;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          root_hash: string;
          /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
          file_hash: string;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          data: string;
        },
        Error
      >({
        path: `/v2/liteserver/get_state/${blockId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get raw blockchain block header
     *
     * @tags Lite Server
     * @name GetRawBlockchainBlockHeader
     * @request GET:/v2/liteserver/get_block_header/{block_id}
     */
    getRawBlockchainBlockHeader: (
      { blockId, ...query }: GetRawBlockchainBlockHeaderParams,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: BlockRaw;
          /**
           * @format uint32
           * @example 0
           */
          mode: number;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          header_proof: string;
        },
        Error
      >({
        path: `/v2/liteserver/get_block_header/${blockId}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Send raw message to blockchain
     *
     * @tags Lite Server
     * @name SendRawMessage
     * @request POST:/v2/liteserver/send_message
     */
    sendRawMessage: (
      data: {
        body: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format uint32
           * @example 200
           */
          code: number;
        },
        Error
      >({
        path: `/v2/liteserver/send_message`,
        method: 'POST',
        body: data,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get raw account state
     *
     * @tags Lite Server
     * @name GetRawAccountState
     * @request GET:/v2/liteserver/get_account_state/{account_id}
     */
    getRawAccountState: (accountId: string, params: RequestParams = {}) =>
      this.request<
        {
          id: BlockRaw;
          shardblk: BlockRaw;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          shard_proof: string;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          proof: string;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          state: string;
        },
        Error
      >({
        path: `/v2/liteserver/get_account_state/${accountId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get raw shard info
     *
     * @tags Lite Server
     * @name GetRawShardInfo
     * @request GET:/v2/liteserver/get_shard_info/{block_id}
     */
    getRawShardInfo: (
      { blockId, ...query }: GetRawShardInfoParams,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: BlockRaw;
          shardblk: BlockRaw;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          shard_proof: string;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          shard_descr: string;
        },
        Error
      >({
        path: `/v2/liteserver/get_shard_info/${blockId}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all raw shards info
     *
     * @tags Lite Server
     * @name GetAllRawShardsInfo
     * @request GET:/v2/liteserver/get_all_shards_info/{block_id}
     */
    getAllRawShardsInfo: (blockId: string, params: RequestParams = {}) =>
      this.request<
        {
          id: BlockRaw;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          proof: string;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          data: string;
        },
        Error
      >({
        path: `/v2/liteserver/get_all_shards_info/${blockId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get raw transactions
     *
     * @tags Lite Server
     * @name GetRawTransactions
     * @request GET:/v2/liteserver/get_transactions/{account_id}
     */
    getRawTransactions: (
      { accountId, ...query }: GetRawTransactionsParams,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          ids: BlockRaw[];
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          transactions: string;
        },
        Error
      >({
        path: `/v2/liteserver/get_transactions/${accountId}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get raw list block transactions
     *
     * @tags Lite Server
     * @name GetRawListBlockTransactions
     * @request GET:/v2/liteserver/list_block_transactions/{block_id}
     */
    getRawListBlockTransactions: (
      { blockId, ...query }: GetRawListBlockTransactionsParams,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: BlockRaw;
          /**
           * @format uint32
           * @example 100
           */
          req_count: number;
          /** @example true */
          incomplete: boolean;
          ids: {
            /**
             * @format uint32
             * @example 0
             */
            mode: number;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            account?: string;
            /** @format uint64 */
            lt?: number;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            hash?: string;
          }[];
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          proof: string;
        },
        Error
      >({
        path: `/v2/liteserver/list_block_transactions/${blockId}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get raw block proof
     *
     * @tags Lite Server
     * @name GetRawBlockProof
     * @request GET:/v2/liteserver/get_block_proof
     */
    getRawBlockProof: (query: GetRawBlockProofParams, params: RequestParams = {}) =>
      this.request<
        {
          /** @example true */
          complete: boolean;
          from: BlockRaw;
          to: BlockRaw;
          steps: {
            lite_server_block_link_back: {
              /** @example false */
              to_key_block: boolean;
              from: BlockRaw;
              to: BlockRaw;
              /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
              dest_proof: string;
              /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
              proof: string;
              /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
              state_proof: string;
            };
            lite_server_block_link_forward: {
              /** @example false */
              to_key_block: boolean;
              from: BlockRaw;
              to: BlockRaw;
              /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
              dest_proof: string;
              /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
              config_proof: string;
              signatures: {
                /** @format uint32 */
                validator_set_hash: number;
                /** @format uint32 */
                catchain_seqno: number;
                signatures: {
                  /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                  node_id_short: string;
                  /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                  signature: string;
                }[];
              };
            };
          }[];
        },
        Error
      >({
        path: `/v2/liteserver/get_block_proof`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get raw config
     *
     * @tags Lite Server
     * @name GetRawConfig
     * @request GET:/v2/liteserver/get_config_all/{block_id}
     */
    getRawConfig: (
      { blockId, ...query }: GetRawConfigParams,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format uint32
           * @example 0
           */
          mode: number;
          id: BlockRaw;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          state_proof: string;
          /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
          config_proof: string;
        },
        Error
      >({
        path: `/v2/liteserver/get_config_all/${blockId}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get raw shard block proof
     *
     * @tags Lite Server
     * @name GetRawShardBlockProof
     * @request GET:/v2/liteserver/get_shard_block_proof/{block_id}
     */
    getRawShardBlockProof: (blockId: string, params: RequestParams = {}) =>
      this.request<
        {
          masterchain_id: BlockRaw;
          links: {
            id: BlockRaw;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            proof: string;
          }[];
        },
        Error
      >({
        path: `/v2/liteserver/get_shard_block_proof/${blockId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
}
