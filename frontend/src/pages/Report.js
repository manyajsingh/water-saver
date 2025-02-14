import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import "./Report.css";
import { FaUpload, FaCheck } from "react-icons/fa";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const abi = [
  "function submitReport(string memory _imageUrl, string memory _description) public"
];

function Report() {
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to upload an image to Cloudinary
  async function uploadImage(file) {
    if (!file) return alert("Please select a file");

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "YOUR_CLOUDINARY_UPLOAD_PRESET"); // Replace with your Cloudinary preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUDINARY_NAME/image/upload", // Replace with your Cloudinary cloud name
        formData
      );
      setImageUrl(response.data.secure_url);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image");
    } finally {
      setUploading(false);
    }
  }

  // Simulate AI-based verification
  function verifyWastage() {
    if (!imageUrl) {
      alert("Please upload an image first.");
      return;
    }
    setIsVerified(true);
    alert("Wastage verified successfully!");
  }

  async function submitReport() {
    if (!window.ethereum) return alert("Install Metamask!");
    if (!isVerified) return alert("Please verify wastage before submitting.");

    try {
      setLoading(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await contract.submitReport(imageUrl, description);
      await tx.wait();
      alert("Report submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error submitting report.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="report-container">
      <h1 className="report-title">Report Water Wastage</h1>

      {/* Upload Box */}
      <div className="upload-box">
        <FaUpload className="upload-icon" />
        <p>
          <span className="upload-text">Upload a file</span> or drag and drop
        </p>
        <p className="upload-hint">PNG, JPG, GIF up to 10MB</p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="input-file"
        />
        <button
          className="upload-btn"
          onClick={() => uploadImage(selectedFile)}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Image"}
        </button>
      </div>

      {/* Show Preview of Uploaded Image */}
      {imageUrl && (
        <div className="image-preview">
          <img src={imageUrl} alt="Uploaded Preview" />
        </div>
      )}

      {/* Verify Button */}
      <button className="verify-btn" onClick={verifyWastage} disabled={isVerified}>
        {isVerified ? <FaCheck /> : "Verify Wastage"}
      </button>

      {/* Location and Waste Type Fields */}
      <div className="input-group">
        <div className="input-container">
          <label>Location</label>
          <input
            type="text"
            placeholder="Enter water wastage location"
            onChange={(e) => setLocation(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label>Waste Type</label>
          <input
            type="text"
            value={isVerified ? "Verified Water Wastage" : ""}
            disabled
            className="input-field disabled"
          />
        </div>
      </div>

      {/* Description Field */}
      <textarea
        placeholder="Describe the issue..."
        onChange={(e) => setDescription(e.target.value)}
        className="input-field textarea"
      />

      {/* Submit Button */}
      <button
        onClick={submitReport}
        className="submit-btn"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Report"}
      </button>
    </div>
  );
}

export default Report;
