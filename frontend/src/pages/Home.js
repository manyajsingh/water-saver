import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import ReportCard from "../components/ReportCard";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const abi = [
  "function reportCount() public view returns (uint256)",
  "function reports(uint256) public view returns (address, string memory, string memory, uint256, bool)"
];

function Home() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchReports() {
      if (!window.ethereum) return;
      //const provider = new ethers.providers.Web3Provider(window.ethereum);
      const provider = new BrowserProvider(window.ethereum);

      const contract = new ethers.Contract(contractAddress, abi, provider);

      const count = await contract.reportCount();
      let fetchedReports = [];
      for (let i = 1; i <= count; i++) {
        const report = await contract.reports(i);
        fetchedReports.push({ id: i, address: report[0], imageUrl: report[1], description: report[2], verified: report[4] });
      }
      setReports(fetchedReports);
    }
    fetchReports();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Water Wastage Reports</h1>
      <Link to="/report" className="bg-blue-500 text-white px-4 py-2 rounded-md">Report Water Wastage</Link>
      <div className="mt-6">
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
}

export default Home;
