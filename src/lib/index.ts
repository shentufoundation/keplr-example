// Re-export all hooks
export * from './hooks/useKeplr';
export * from './hooks/useBalance';
export * from './hooks/useSendTransaction';

// Re-export utilities
export { api } from '../util/api';
export { sendMsgs, fetchAccountInfo, broadcastTxSync } from '../util/sendMsgs';
export { simulateMsgs } from '../util/simulateMsgs';
export { getKeplrFromWindow } from './utils/getKeplrFromWindow';

// Re-export types
export * from '../types/account';
export * from '../types/balance';
export * from '../types/simulate';

// Re-export constants
export { OsmosisChainInfo } from '../constants';

// Re-export proto types (commonly used ones)
export type { MsgSend } from '../proto-types-gen/src/cosmos/bank/v1beta1/tx';
export type { Any } from '../proto-types-gen/src/google/protobuf/any';

// Version
export const version = '1.0.0'; 