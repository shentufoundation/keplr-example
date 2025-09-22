# @wallet/proto-types

> React hooks and protocol buffer types for Cosmos ecosystem blockchain development

[中文文档](./README.md) | **English**

## Features

### 🔗 Keplr Wallet Integration
- `useKeplr()` - Connect to Keplr wallet
- `useBalance()` - Query account balances  
- `useSendTransaction()` - Send blockchain transactions

### 🧬 Proto Type Definitions
Complete TypeScript type definitions supporting:
- **Cosmos SDK** - Bank, staking, governance, distribution, authz
- **Shentu Chain** - Certificate, bounty, oracle, shield modules
- **Osmosis** - DEX and liquidity pool operations
- **CosmWasm** - Smart contract execution
- **IBC** - Inter-blockchain communication
- **Tendermint** - Core blockchain types

## Installation

```bash
npm install @wallet/proto-types

# If you need proto type encoding/decoding in Node.js environment
npm install protobufjs
```

## Proto Types Usage Guide

### 1. Basic Import and Usage

```typescript
// Import common types
import { 
  Coin,                    // Common token type
  CosmosBankTx,           // Bank transactions
  CosmosStakingTx,        // Staking transactions
  CosmosGovV1Tx,          // Governance voting
  ShentuCertTx,           // Shentu certificates
  OsmosisGammTx,          // Osmosis DEX
  IBCTransferTx           // IBC transfers
} from '@wallet/proto-types';

// Create basic token object
const coin: Coin = {
  denom: "uatom",          // Token denomination
  amount: "1000000"        // Amount (string format)
};
```

### 2. Cosmos Bank Transaction Types

```typescript
// Create send message
const sendMsg: CosmosBankTx.MsgSend = {
  fromAddress: "cosmos1sender...",
  toAddress: "cosmos1receiver...",
  amount: [
    { denom: "uatom", amount: "1000000" },
    { denom: "uosmo", amount: "500000" }
  ]
};

// Multi-send transaction
const multiSendMsg: CosmosBankTx.MsgMultiSend = {
  inputs: [{
    address: "cosmos1sender...",
    coins: [{ denom: "uatom", amount: "1000000" }]
  }],
  outputs: [{
    address: "cosmos1receiver1...",
    coins: [{ denom: "uatom", amount: "500000" }]
  }, {
    address: "cosmos1receiver2...",
    coins: [{ denom: "uatom", amount: "500000" }]
  }]
};
```

### 3. Cosmos Staking Operations

```typescript
// Delegate stake
const delegateMsg: CosmosStakingTx.MsgDelegate = {
  delegatorAddress: "cosmos1delegator...",
  validatorAddress: "cosmosvaloper1validator...",
  amount: { denom: "uatom", amount: "1000000" }
};

// Undelegate stake
const undelegateMsg: CosmosStakingTx.MsgUndelegate = {
  delegatorAddress: "cosmos1delegator...",
  validatorAddress: "cosmosvaloper1validator...",
  amount: { denom: "uatom", amount: "500000" }
};

// Redelegate stake
const redelegateMsg: CosmosStakingTx.MsgBeginRedelegate = {
  delegatorAddress: "cosmos1delegator...",
  validatorSrcAddress: "cosmosvaloper1src...",
  validatorDstAddress: "cosmosvaloper1dst...",
  amount: { denom: "uatom", amount: "1000000" }
};
```

### 4. Governance Voting

```typescript
// Gov v1 voting
const voteMsg: CosmosGovV1Tx.MsgVote = {
  proposalId: "1",
  voter: "cosmos1voter...",
  option: 1,           // 1=YES, 2=ABSTAIN, 3=NO, 4=NO_WITH_VETO
  metadata: ""
};

// Submit proposal
const submitProposalMsg: CosmosGovV1Tx.MsgSubmitProposal = {
  messages: [],        // Messages to execute in proposal
  initialDeposit: [{ denom: "uatom", amount: "10000000" }],
  proposer: "cosmos1proposer...",
  metadata: "proposal metadata",
  title: "Upgrade Protocol",
  summary: "This proposal upgrades the protocol"
};
```

### 5. Shentu Blockchain Specific Types

```typescript
// Issue security certificate
const issueCertMsg: ShentuCertTx.MsgIssueCertificate = {
  content: "Smart contract security audit passed",
  compiler: "cosmos1compiler...",
  bytecodeHash: "0x1234567890abcdef...",
  description: "Security audit certificate for DeFi protocol",
  certifier: "cosmos1certifier..."
};

// Revoke certificate
const revokeCertMsg: ShentuCertTx.MsgRevokeCertificate = {
  certificateId: "1",
  description: "Security vulnerability found",
  revoker: "cosmos1revoker..."
};

// Certify platform
const certifyPlatformMsg: ShentuCertTx.MsgCertifyPlatform = {
  certifier: "cosmos1certifier...",
  platform: "ethereum",
  description: "Platform security certification"
};
```

### 6. Osmosis DEX Operations

```typescript
// Join liquidity pool
const joinPoolMsg: OsmosisGammTx.MsgJoinPool = {
  sender: "osmo1sender...",
  poolId: "1",
  shareOutAmount: "1000000",
  tokenInMaxs: [
    { denom: "uosmo", amount: "1000000" },
    { denom: "uatom", amount: "1000000" }
  ]
};

// Exit liquidity pool
const exitPoolMsg: OsmosisGammTx.MsgExitPool = {
  sender: "osmo1sender...",
  poolId: "1",
  shareInAmount: "500000",
  tokenOutMins: [
    { denom: "uosmo", amount: "450000" },
    { denom: "uatom", amount: "450000" }
  ]
};

// Token swap
const swapMsg: OsmosisGammTx.MsgSwapExactAmountIn = {
  sender: "osmo1sender...",
  routes: [{
    poolId: "1",
    tokenOutDenom: "uatom"
  }],
  tokenIn: { denom: "uosmo", amount: "1000000" },
  tokenOutMinAmount: "900000"
};
```

### 7. CosmWasm Smart Contracts

```typescript
// Execute contract
const executeMsg: CosmwasmWasmTx.MsgExecuteContract = {
  sender: "cosmos1sender...",
  contract: "cosmos1contractaddr...",
  msg: new Uint8Array(Buffer.from(JSON.stringify({
    transfer: {
      recipient: "cosmos1recipient...",
      amount: "1000000"
    }
  }))),
  funds: [{ denom: "uatom", amount: "100000" }]
};

// Instantiate contract
const instantiateMsg: CosmwasmWasmTx.MsgInstantiateContract = {
  sender: "cosmos1sender...",
  admin: "cosmos1admin...",
  codeId: "1",
  label: "My Token Contract",
  msg: new Uint8Array(Buffer.from(JSON.stringify({
    name: "MyToken",
    symbol: "MTK",
    decimals: 6,
    initial_balances: [
      { address: "cosmos1...", amount: "1000000000000" }
    ]
  }))),
  funds: []
};
```

### 8. IBC Cross-chain Transfers

```typescript
// IBC transfer
const ibcTransferMsg: IBCTransferTx.MsgTransfer = {
  sourcePort: "transfer",
  sourceChannel: "channel-0",
  token: { denom: "uatom", amount: "1000000" },
  sender: "cosmos1sender...",
  receiver: "osmo1receiver...",
  timeoutHeight: {
    revisionNumber: "1",
    revisionHeight: "1000000"
  },
  timeoutTimestamp: "1700000000000000000",
  memo: "Cross-chain transfer"
};
```

## Message Encoding/Decoding

### Encoding Messages for Transactions

```typescript
import { CosmosBankTx } from '@wallet/proto-types';

// Create message object
const sendMsg: CosmosBankTx.MsgSend = {
  fromAddress: "cosmos1sender...",
  toAddress: "cosmos1receiver...",
  amount: [{ denom: "uatom", amount: "1000000" }]
};

// Encode to binary data (for transaction submission)
const encodedMsg = CosmosBankTx.MsgSend.encode(sendMsg).finish();

// Use in transaction
const txMsg = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  value: encodedMsg
};
```

### Decoding Received Messages

```typescript
// Decode from binary data
const decodedMsg = CosmosBankTx.MsgSend.decode(encodedData);
console.log("Decoded message:", decodedMsg);

// Type validation
function isValidMsgSend(obj: any): obj is CosmosBankTx.MsgSend {
  return (
    typeof obj.fromAddress === 'string' &&
    typeof obj.toAddress === 'string' &&
    Array.isArray(obj.amount) &&
    obj.amount.every((coin: any) => 
      typeof coin.denom === 'string' && 
      typeof coin.amount === 'string'
    )
  );
}
```

## React Hooks Usage

```typescript
import { 
  useKeplr, 
  useSendTransaction,
  CosmosBankTx,
  Coin 
} from '@wallet/proto-types';

function WalletComponent() {
  const { keplr, account, connectWallet } = useKeplr();
  const { sendTransaction, isLoading } = useSendTransaction();

  const handleSendTokens = async () => {
    if (!account) return;

    // Use generated proto types
    const coin: Coin = {
      denom: "uatom",
      amount: "1000000"
    };

    const msg: CosmosBankTx.MsgSend = {
      fromAddress: account.address,
      toAddress: "cosmos1recipient...",
      amount: [coin]
    };

    // Encode and send transaction
    const encodedMsg = CosmosBankTx.MsgSend.encode(msg).finish();
    
    await sendTransaction([{
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: encodedMsg
    }]);
  };

  return (
    <div>
      {account ? (
        <div>
          <p>Connected: {account.address}</p>
          <button onClick={handleSendTokens} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Tokens'}
          </button>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}
```

## Complete Type Module List

| Module | Description | Main Types |
|--------|-------------|------------|
| `CosmosAuthV1Beta1` | Authentication | `BaseAccount`, `ModuleAccount` |
| `CosmosBankTx` | Bank transfers | `MsgSend`, `MsgMultiSend` |
| `CosmosStakingTx` | Staking operations | `MsgDelegate`, `MsgUndelegate` |
| `CosmosGovV1Tx` | Governance voting | `MsgVote`, `MsgSubmitProposal` |
| `CosmosDistributionTx` | Reward distribution | `MsgWithdrawRewards` |
| `ShentuCertTx` | Shentu certificates | `MsgIssueCertificate` |
| `ShentuBountyTypes` | Shentu bounties | `Program`, `Finding` |
| `ShentuShieldTypes` | Shentu shield | `Pool`, `Purchase` |
| `OsmosisGammTx` | Osmosis DEX | `MsgJoinPool`, `MsgSwapExactAmountIn` |
| `CosmwasmWasmTx` | CosmWasm contracts | `MsgExecuteContract` |
| `IBCTransferTx` | IBC transfers | `MsgTransfer` |
| `TendermintCrypto` | Crypto operations | `PublicKey`, `PrivateKey` |

## Development and Building

### Regenerating Proto Types
```bash
# Generate TypeScript types from .proto files
npm run proto-build

# Build entire project
npm run build
```

### Adding New Proto Files
1. Add `.proto` files to `src/proto-types-gen/proto/`
2. Update `src/proto-types-gen/scripts/proto-gen.mjs` to include new files
3. Run `npm run proto-build`
4. Add exports in `src/proto-types-gen/index.ts`
5. Run `npm run build`

## Publishing

For package publishing workflow, please refer to [NPM Publishing Guide](./NPM_PUBLISH.md).

## Troubleshooting

### Common Issues
1. **Missing protobufjs dependency**: Install `npm install protobufjs` in consuming projects
2. **TypeScript compilation errors**: Check TypeScript version compatibility
3. **Module resolution issues**: Use explicit import paths for proto types

### Build Failures
- Verify all `.proto` files are valid format
- Ensure `protoc` is available in system PATH
- Check Node.js version compatibility

## License

MIT License


**Note**: This package provides complete Cosmos ecosystem proto type definitions, enabling you to safely build and parse blockchain messages in TypeScript projects. All types are validated through protoc tooling to ensure full compatibility with on-chain protocols. 