import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaTint,
  FaFaucet,
  FaGift,
  FaTrophy,
  FaCog,
  FaBars,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("home");

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <button className="menu-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
          <FaBars />
        </button>
        {!isCollapsed && (
          <div className="logo">
            <img src="/logo.png" alt="Water Saver Logo" className="logo-img" />
            <h2>Water Saver</h2>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <ul>
          <li className={activePage === "home" ? "active" : ""} onClick={() => setActivePage("home")}>
            <Link to="/">
              <FaHome className="icon" /> {!isCollapsed && "Home"}
            </Link>
          </li>
          <li className={activePage === "report" ? "active" : ""} onClick={() => setActivePage("report")}>
            <Link to="/report">
              <FaFaucet className="icon" /> {!isCollapsed && "Report Leak"}
            </Link>
          </li>
          <li className={activePage === "save" ? "active" : ""} onClick={() => setActivePage("save")}>
            <Link to="/save">
              <FaTint className="icon" /> {!isCollapsed && "Water Saving Tips"}
            </Link>
          </li>
          <li className={activePage === "rewards" ? "active" : ""} onClick={() => setActivePage("rewards")}>
            <Link to="/rewards">
              <FaGift className="icon" /> {!isCollapsed && "Rewards"}
            </Link>
          </li>
          <li className={activePage === "leaderboard" ? "active" : ""} onClick={() => setActivePage("leaderboard")}>
            <Link to="/leaderboard">
              <FaTrophy className="icon" /> {!isCollapsed && "Leaderboard"}
            </Link>
          </li>
          <li className={activePage === "settings" ? "active" : ""} onClick={() => setActivePage("settings")}>
            <Link to="/settings">
              <FaCog className="icon" /> {!isCollapsed && "Settings"}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
