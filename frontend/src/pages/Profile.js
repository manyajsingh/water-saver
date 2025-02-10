import { useState, useEffect } from "react";
import { ethers } from "ethers";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const abi = ["function getRewardBalance(address _user) public view returns (uint256)"];

function Profile() {
  const [rewardBalance, setRewardBalance] = useState(0);

  useEffect(() => {
    async function fetchRewards() {
      if (!window.ethereum) return;
      //const provider = new ethers.providers.Web3Provider(window.ethereum);
      const provider = new BrowserProvider(window.ethereum);

      const contract = new ethers.Contract(contractAddress, abi, provider);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = await contract.getRewardBalance(address);
      setRewardBalance(balance.toString());
    }
    fetchRewards();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Your Profile</h1>
      <p className="text-xl mt-2">Reward Points: {rewardBalance}</p>
    </div>
  );
}

export default Profile;
