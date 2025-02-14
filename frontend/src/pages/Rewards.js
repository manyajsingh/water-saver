import { useState } from "react";
import "./Rewards.css";
import { FaWallet, FaGift, FaCoins, FaExclamationCircle } from "react-icons/fa";

function Rewards() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [rewardBalance, setRewardBalance] = useState(0.000000);
  const [transactions, setTransactions] = useState([]);
  const [availableRewards, setAvailableRewards] = useState(false);

  function connectWallet() {
    setWalletConnected(true);
    setRewardBalance(10.123456); // Simulated reward balance
  }

  return (
    <div className="rewards-container">
      <h1 className="rewards-title">Rewards</h1>

      {/* Wallet & Reward Balance Section */}
      <div className="rewards-grid">
        <div className="rewards-card wallet-card">
          <h3>Wallet</h3>
          {!walletConnected ? (
            <button className="wallet-btn" onClick={connectWallet}>
              <FaWallet className="icon" /> Connect Wallet
            </button>
          ) : (
            <p className="wallet-connected">Wallet Connected ✅</p>
          )}
        </div>

        <div className="rewards-card balance-card">
          <h3>Reward Balance</h3>
          <p className="reward-amount">
            <FaCoins className="icon" /> {rewardBalance.toFixed(6)}
          </p>
          <p className="subtext">Available Points</p>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <h2 className="section-title">Recent Transactions</h2>
      <div className="transactions-card">
        {transactions.length === 0 ? (
          <p className="no-data">No transactions yet</p>
        ) : (
          <ul>
            {transactions.map((tx, index) => (
              <li key={index}>{tx}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Available Rewards Section */}
      <h2 className="section-title">Available Rewards</h2>
      <div className="rewards-info">
        {!availableRewards ? (
          <p className="no-rewards">
            <FaExclamationCircle className="warning-icon" /> No rewards available at the moment.
          </p>
        ) : (
          <div className="reward-item">
            <FaGift className="reward-icon" />
            <p>Redeemable Water Conservation Token</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rewards;
