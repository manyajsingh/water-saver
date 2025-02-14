import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./Home.css"; // Import CSS file
import { FaTint, FaGift, FaUsers, FaRecycle, FaMapMarkerAlt, FaWater } from "react-icons/fa";

function Home() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="home-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-icon">
              <FaWater className="water-icon" />
            </div>
            <h1>
              Zero-to-Hero <span className="highlight">Water</span> Conservation
            </h1>
            <p>Join our community in making water conservation more efficient and impactful!</p>
            <Link to="/get-started" className="cta-btn">Get Started →</Link>
          </div>
        </section>

        {/* Feature Section */}
        <section className="features">
          <div className="feature-card">
            <div className="feature-icon"><FaTint /></div>
            <h3>Save Water</h3>
            <p>Report and reduce water wastage to protect our planet's most valuable resource.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaGift /></div>
            <h3>Earn Rewards</h3>
            <p>Get incentives for contributing to sustainable water management.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaUsers /></div>
            <h3>Community-Driven</h3>
            <p>Join a growing community dedicated to water conservation efforts.</p>
          </div>
        </section>

        {/* Impact Section */}
        <section className="impact">
          <h2>Our Impact</h2>
          <div className="impact-cards">
            <div className="impact-card">
              <div className="impact-icon"><FaRecycle /></div>
              <h3>0 L</h3>
              <p>Water Saved</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon"><FaMapMarkerAlt /></div>
              <h3>0</h3>
              <p>Reports Submitted</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon"><FaGift /></div>
              <h3>0</h3>
              <p>Rewards Earned</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon"><FaWater /></div>
              <h3>0 L</h3>
              <p>Water Recycled</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
