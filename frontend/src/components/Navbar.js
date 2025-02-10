import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/" className="font-bold">Water Saver</Link>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/report" className="mr-4">Report</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default NavBar;
