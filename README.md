# @wallet/proto-types

> React hooks and protocol buffer types for Cosmos ecosystem blockchain development

**中文** | [English](./README_EN.md)

## 功能特性

### 🔗 Keplr钱包集成
- `useKeplr()` - 连接Keplr钱包
- `useBalance()` - 查询账户余额  
- `useSendTransaction()` - 发送区块链交易

### 🧬 Proto类型定义
完整的TypeScript类型定义，支持：
- **Cosmos SDK** - 银行、质押、治理、分发、授权
- **Shentu链** - 证书、赏金、预言机、护盾模块
- **Osmosis** - DEX和流动性池操作
- **CosmWasm** - 智能合约执行
- **IBC** - 跨链通信
- **Tendermint** - 核心区块链类型

## 安装使用

```bash
npm install @wallet/proto-types

# 如果需要在Node.js环境中使用proto类型编解码功能
npm install protobufjs
```

## Proto类型使用详解

### 1. 基础导入和使用

```typescript
// 导入常用类型
import { 
  Coin,                    // 通用代币类型
  CosmosBankTx,           // 银行交易
  CosmosStakingTx,        // 质押交易
  CosmosGovV1Tx,          // 治理投票
  ShentuCertTx,           // Shentu证书
  OsmosisGammTx,          // Osmosis DEX
  IBCTransferTx           // IBC转账
} from '@wallet/proto-types';

// 创建基础代币对象
const coin: Coin = {
  denom: "uatom",          // 代币单位
  amount: "1000000"        // 数量(字符串格式)
};
```

### 2. Cosmos银行交易类型

```typescript
// 创建转账消息
const sendMsg: CosmosBankTx.MsgSend = {
  fromAddress: "cosmos1sender...",
  toAddress: "cosmos1receiver...",
  amount: [
    { denom: "uatom", amount: "1000000" },
    { denom: "uosmo", amount: "500000" }
  ]
};

// 多重发送
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

### 3. Cosmos质押操作

```typescript
// 委托质押
const delegateMsg: CosmosStakingTx.MsgDelegate = {
  delegatorAddress: "cosmos1delegator...",
  validatorAddress: "cosmosvaloper1validator...",
  amount: { denom: "uatom", amount: "1000000" }
};

// 取消委托
const undelegateMsg: CosmosStakingTx.MsgUndelegate = {
  delegatorAddress: "cosmos1delegator...",
  validatorAddress: "cosmosvaloper1validator...",
  amount: { denom: "uatom", amount: "500000" }
};

// 重新委托
const redelegateMsg: CosmosStakingTx.MsgBeginRedelegate = {
  delegatorAddress: "cosmos1delegator...",
  validatorSrcAddress: "cosmosvaloper1src...",
  validatorDstAddress: "cosmosvaloper1dst...",
  amount: { denom: "uatom", amount: "1000000" }
};
```

### 4. 治理投票

```typescript
// Gov v1 投票
const voteMsg: CosmosGovV1Tx.MsgVote = {
  proposalId: "1",
  voter: "cosmos1voter...",
  option: 1,           // 1=YES, 2=ABSTAIN, 3=NO, 4=NO_WITH_VETO
  metadata: ""
};

// 提交提案
const submitProposalMsg: CosmosGovV1Tx.MsgSubmitProposal = {
  messages: [],        // 提案要执行的消息
  initialDeposit: [{ denom: "uatom", amount: "10000000" }],
  proposer: "cosmos1proposer...",
  metadata: "proposal metadata",
  title: "Upgrade Protocol",
  summary: "This proposal upgrades the protocol"
};
```

### 5. Shentu区块链特有类型

```typescript
// 颁发安全证书
const issueCertMsg: ShentuCertTx.MsgIssueCertificate = {
  content: "Smart contract security audit passed",
  compiler: "cosmos1compiler...",
  bytecodeHash: "0x1234567890abcdef...",
  description: "Security audit certificate for DeFi protocol",
  certifier: "cosmos1certifier..."
};

// 证书撤销
const revokeCertMsg: ShentuCertTx.MsgRevokeCertificate = {
  certificateId: "1",
  description: "Security vulnerability found",
  revoker: "cosmos1revoker..."
};

// 平台认证
const certifyPlatformMsg: ShentuCertTx.MsgCertifyPlatform = {
  certifier: "cosmos1certifier...",
  platform: "ethereum",
  description: "Platform security certification"
};
```

### 6. Osmosis DEX操作

```typescript
// 加入流动性池
const joinPoolMsg: OsmosisGammTx.MsgJoinPool = {
  sender: "osmo1sender...",
  poolId: "1",
  shareOutAmount: "1000000",
  tokenInMaxs: [
    { denom: "uosmo", amount: "1000000" },
    { denom: "uatom", amount: "1000000" }
  ]
};

// 退出流动性池
const exitPoolMsg: OsmosisGammTx.MsgExitPool = {
  sender: "osmo1sender...",
  poolId: "1",
  shareInAmount: "500000",
  tokenOutMins: [
    { denom: "uosmo", amount: "450000" },
    { denom: "uatom", amount: "450000" }
  ]
};

// 代币交换
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

### 7. CosmWasm智能合约

```typescript
// 执行合约
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

// 实例化合约
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

### 8. IBC跨链转账

```typescript
// IBC转账
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

## 消息编解码

### 编码消息用于交易

```typescript
import { CosmosBankTx } from '@wallet/proto-types';

// 创建消息对象
const sendMsg: CosmosBankTx.MsgSend = {
  fromAddress: "cosmos1sender...",
  toAddress: "cosmos1receiver...",
  amount: [{ denom: "uatom", amount: "1000000" }]
};

// 编码为二进制数据(用于交易提交)
const encodedMsg = CosmosBankTx.MsgSend.encode(sendMsg).finish();

// 在交易中使用
const txMsg = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  value: encodedMsg
};
```

### 解码接收到的消息

```typescript
// 从二进制数据解码
const decodedMsg = CosmosBankTx.MsgSend.decode(encodedData);
console.log("解码后的消息:", decodedMsg);

// 类型验证
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

## React Hooks使用

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

    // 使用生成的proto类型
    const coin: Coin = {
      denom: "uatom",
      amount: "1000000"
    };

    const msg: CosmosBankTx.MsgSend = {
      fromAddress: account.address,
      toAddress: "cosmos1recipient...",
      amount: [coin]
    };

    // 编码并发送交易
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
          <p>已连接: {account.address}</p>
          <button onClick={handleSendTokens} disabled={isLoading}>
            {isLoading ? '发送中...' : '发送代币'}
          </button>
        </div>
      ) : (
        <button onClick={connectWallet}>连接钱包</button>
      )}
    </div>
  );
}
```

## 完整类型模块列表

| 模块 | 说明 | 主要类型 |
|------|------|----------|
| `CosmosAuthV1Beta1` | 身份认证 | `BaseAccount`, `ModuleAccount` |
| `CosmosBankTx` | 银行转账 | `MsgSend`, `MsgMultiSend` |
| `CosmosStakingTx` | 质押操作 | `MsgDelegate`, `MsgUndelegate` |
| `CosmosGovV1Tx` | 治理投票 | `MsgVote`, `MsgSubmitProposal` |
| `CosmosDistributionTx` | 奖励分发 | `MsgWithdrawRewards` |
| `ShentuCertTx` | Shentu证书 | `MsgIssueCertificate` |
| `ShentuBountyTypes` | Shentu赏金 | `Program`, `Finding` |
| `ShentuShieldTypes` | Shentu护盾 | `Pool`, `Purchase` |
| `OsmosisGammTx` | Osmosis DEX | `MsgJoinPool`, `MsgSwapExactAmountIn` |
| `CosmwasmWasmTx` | CosmWasm合约 | `MsgExecuteContract` |
| `IBCTransferTx` | IBC转账 | `MsgTransfer` |
| `TendermintCrypto` | 加密操作 | `PublicKey`, `PrivateKey` |

## 开发和构建

### 重新生成Proto类型
```bash
# 从.proto文件生成TypeScript类型
npm run proto-build

# 编译整个项目
npm run build
```

### 添加新的Proto文件
1. 将`.proto`文件放入 `src/proto-types-gen/proto/`
2. 更新 `src/proto-types-gen/scripts/proto-gen.mjs` 包含新文件
3. 运行 `npm run proto-build`
4. 在 `src/proto-types-gen/index.ts` 中添加导出
5. 运行 `npm run build`

## 发布说明

包的发布流程请参考 [NPM发布指南](./NPM_PUBLISH.md)。

### 版本回滚

如果需要撤回版本：

```bash
# 撤回特定版本 (仅在发布72小时内)
npm unpublish @wallet/proto-types@1.0.0

# 标记版本为已弃用 (推荐方式)
npm deprecate @wallet/proto-types@1.0.0 "This version has critical bugs, please upgrade to 1.0.1"

# 发布修复版本
npm version patch
npm publish
```

## 故障排除

### 常见问题
1. **缺少protobufjs依赖**: 运行时需要 `npm install protobufjs`
2. **TypeScript编译错误**: 检查TypeScript版本兼容性
3. **模块解析问题**: 使用明确的导入路径

### 编译失败
- 检查所有`.proto`文件格式正确
- 确保系统PATH中有`protoc`工具
- 验证Node.js版本兼容性

## 许可证

MIT License




