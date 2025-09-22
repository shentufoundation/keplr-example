import React, { useEffect } from "react";
import { OsmosisChainInfo, useKeplr, useBalance, useSendTransaction } from "../lib/index";
import { Dec, DecUtils } from "@keplr-wallet/unit";
import { isAddress } from "@ethersproject/address";
import { MsgSend } from "../proto-types-gen/src/cosmos/bank/v1beta1/tx";
import "../styles/container.css";
import "../styles/button.css";
import "../styles/item.css";

function DemoApp() {
  const { keplr, isKeplrAvailable, connectToChain, getKey } = useKeplr();
  const { balance, getBalance } = useBalance();
  const { sendTransaction, simulateTransaction } = useSendTransaction();

  const [address, setAddress] = React.useState<string>("");
  const [recipient, setRecipient] = React.useState<string>("");
  const [amount, setAmount] = React.useState<string>("");

  const [evmResult1, setEvmResult1] = React.useState<string>("");
  const [evmResult2, setEvmResult2] = React.useState<string>("");
  const [evmResult3, setEvmResult3] = React.useState<string>("");
  const [evmRecipient, setEvmRecipient] = React.useState<string>("");
  const [evmAmount, setEvmAmount] = React.useState<string>("");
  const [evmResult4, setEvmResult4] = React.useState<string>("");
  const [evmChainId, setEvmChainId] = React.useState<string>("");
  const [evmTokenAddress, setEvmTokenAddress] = React.useState<string>("");

  useEffect(() => {
    const init = async () => {
      if (isKeplrAvailable) {
        try {
          await connectToChain(OsmosisChainInfo);
        } catch (e) {
          console.log("Failed to connect to chain:", e);
        }
      }
    };
    init();
  }, [isKeplrAvailable, connectToChain]);

  const getKeyFromKeplr = async () => {
    try {
      const key = await getKey(OsmosisChainInfo.chainId);
      if (key) {
        setAddress(key.bech32Address);
      }
    } catch (e) {
      console.error("Failed to get key:", e);
    }
  };

  const getBalanceFromChain = async () => {
    try {
      const key = await getKey(OsmosisChainInfo.chainId);
      if (key) {
        await getBalance(OsmosisChainInfo, key.bech32Address, "uosmo");
      }
    } catch (e) {
      console.error("Failed to get balance:", e);
    }
  };

  const sendBalance = async () => {
    if (!keplr) return;

    try {
      const key = await getKey(OsmosisChainInfo.chainId);
      if (!key) return;

      const protoMsgs = {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.encode({
          fromAddress: key.bech32Address,
          toAddress: recipient,
          amount: [
            {
              denom: "uosmo",
              amount: DecUtils.getTenExponentN(6)
                .mul(new Dec(amount))
                .truncate()
                .toString(),
            },
          ],
        }).finish(),
      };

      const gasUsed = await simulateTransaction(
        OsmosisChainInfo,
        key.bech32Address,
        [protoMsgs],
        [{ denom: "uosmo", amount: "236" }]
      );

      if (gasUsed) {
        await sendTransaction(
          keplr,
          OsmosisChainInfo,
          key.bech32Address,
          [protoMsgs],
          {
            amount: [{ denom: "uosmo", amount: "236" }],
            gas: Math.floor(gasUsed * 1.5).toString(),
          }
        );
      }
    } catch (e) {
      console.error("Failed to send transaction:", e);
    }
  };

  return (
    <div className="root-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <img
          src="/keplr-logo.png"
          style={{ maxWidth: "200px" }}
          alt="keplr-logo"
        />
      </div>

      <h2 style={{ marginTop: "30px" }}>
        Keplr React Hooks Demo - Osmosis Testnet
      </h2>

      <div className="item-container">
        <div className="item">
          <div className="item-title">Get OSMO Address</div>
          <div className="item-content">
            <div>
              <button className="keplr-button" onClick={getKeyFromKeplr}>
                Get Address
              </button>
            </div>
            <div>Address: {address}</div>
          </div>
        </div>

        <div className="item">
          <div className="item-title">Get OSMO Balance</div>
          <div className="item-content">
            <button className="keplr-button" onClick={getBalanceFromChain}>
              Get Balance
            </button>
            <div>Balance: {balance}</div>
          </div>
        </div>

        <div className="item">
          <div className="item-title">Send OSMO</div>
          <div className="item-content">
            <div style={{ display: "flex", flexDirection: "column" }}>
              Recipient:
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              Amount:
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <button className="keplr-button" onClick={sendBalance}>
              Send
            </button>
          </div>
        </div>
      </div>

      {/* EVM functionality remains the same as in original App.tsx */}
      <h2 style={{ marginTop: "60px" }}>
        Request to EVM Chain via Keplr Ethereum Provider
      </h2>

      <div
        className="item-container"
        style={{ maxWidth: 576, overflowWrap: "anywhere" }}
      >
        <div className="item">
          <div className="item-title">Get Data From Wallet</div>
          <div className="item-content">
            {[
              { method: "eth_chainId" },
              { method: "eth_accounts" },
            ].map(({ method }) => (
              <div key={method}>
                <button
                  className="keplr-button"
                  onClick={async () => {
                    const result = await window.keplr?.ethereum.request({
                      method,
                    });
                    setEvmResult1(result.toString());
                  }}
                >
                  {method}
                </button>
              </div>
            ))}
            <div>Result: {evmResult1}</div>
          </div>
        </div>

        <div className="item">
          <div className="item-title">Get Data From RPC Node</div>
          <div className="item-content">
            {[
              { method: "eth_blockNumber" },
              {
                method: "eth_getBalance",
                params: [window.keplr?.ethereum.selectedAddress, "latest"],
              },
            ].map(({ method, params }) => (
              <div key={method}>
                <button
                  className="keplr-button"
                  onClick={async () => {
                    const result = await window.keplr?.ethereum.request({
                      method,
                      params,
                    });
                    setEvmResult2(result);
                  }}
                >
                  {method}
                </button>
              </div>
            ))}
            <div>Result: {evmResult2}</div>
          </div>
        </div>

        {/* Additional EVM functionality from original App.tsx can be added here */}
      </div>
    </div>
  );
}

export default DemoApp; 