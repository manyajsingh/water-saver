import "./WaterSaving.css";
import { FaTint, FaFaucet, FaShower, FaLeaf, FaHandHoldingWater } from "react-icons/fa";

function WaterSaving() {
  return (
    <div className="tips-container">
      <h1 className="tips-title">Water Saving Tips</h1>
      <p className="tips-subtitle">Simple steps to conserve water every day!</p>

      {/* Water Saving Tips Grid */}
      <div className="tips-grid">
        <div className="tip-card">
          <FaFaucet className="tip-icon" />
          <h3>Fix Leaks</h3>
          <p>Check for and repair leaks to prevent wasting water.</p>
        </div>
        <div className="tip-card">
          <FaShower className="tip-icon" />
          <h3>Take Shorter Showers</h3>
          <p>Reduce your shower time to save gallons of water daily.</p>
        </div>
        <div className="tip-card">
          <FaLeaf className="tip-icon" />
          <h3>Water Plants Efficiently</h3>
          <p>Water plants during early mornings or evenings to minimize evaporation.</p>
        </div>
        <div className="tip-card">
          <FaHandHoldingWater className="tip-icon" />
          <h3>Reuse Water</h3>
          <p>Use leftover water from washing fruits and veggies to water plants.</p>
        </div>
        <div className="tip-card">
          <FaTint className="tip-icon" />
          <h3>Turn Off the Tap</h3>
          <p>Don’t let the water run while brushing your teeth or washing hands.</p>
        </div>
      </div>

      {/* Take Pledge Button */}
      <button className="pledge-btn">Take a Pledge to Save Water</button>
    </div>
  );
}

export default WaterSaving;
