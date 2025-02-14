import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaSignInAlt } from "react-icons/fa";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Section - Logo & Menu */}
      <div className="navbar-left">
        <button className="menu-btn">☰</button>
        <div className="logo">
          <img src="/logo.png" alt="Zero2Hero Logo" className="logo-img" />
          <div className="logo-text">
            <h2>Zero2Hero</h2>
            <p>ETHOnline24</p>
          </div>
        </div>
      </div>

      {/* Center Section - Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>

      {/* Right Section - Icons & Login */}
      <div className="navbar-right">
        <FaBell className="icon bell-icon" />
        <div className="balance">
          <span className="icon">💰</span> 0.00
        </div>
        <Link to="/login" className="login-btn">
          Login <FaSignInAlt />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
