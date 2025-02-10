import { useState } from "react";
import { ethers } from "ethers";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const abi = [
  "function submitReport(string memory _imageUrl, string memory _description) public"
];

function Report() {
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  async function submitReport() {
    if (!window.ethereum) return alert("Install Metamask!");
    //const provider = new ethers.providers.Web3Provider(window.ethereum);
    const provider = new BrowserProvider(window.ethereum);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    const tx = await contract.submitReport(imageUrl, description);
    await tx.wait();
    alert("Report submitted!");
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Report Water Wastage</h1>
      <input type="text" placeholder="Image URL" onChange={(e) => setImageUrl(e.target.value)} className="block mt-2 p-2 border rounded-md w-full" />
      <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="block mt-2 p-2 border rounded-md w-full" />
      <button onClick={submitReport} className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">Submit Report</button>
    </div>
  );
}

export default Report;
