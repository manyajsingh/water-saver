import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Profile from "./pages/Profile";
import NavBar from "./components/Navbar";
import WaterSaving from "./components/WaterSaving";
import Rewards from "./pages/Rewards";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/save" element={<WaterSaving />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

      </Routes>
    </Router>
  );
}

export default App;
