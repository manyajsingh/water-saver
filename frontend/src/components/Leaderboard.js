import { useState } from "react";
import "./Leaderboard.css";
import { FaTrophy, FaMedal } from "react-icons/fa";

function Leaderboard() {
  const [leaderboardData] = useState([
    { rank: 1, user: "Alice", points: 1200, level: "Gold" },
    { rank: 2, user: "Bob", points: 1100, level: "Silver" },
    { rank: 3, user: "Charlie", points: 1000, level: "Bronze" },
    { rank: 4, user: "David", points: 900, level: "Silver" },
    { rank: 5, user: "Eve", points: 850, level: "Bronze" }
  ]);

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>

      {/* Top Performers Header */}
      <div className="leaderboard-header">
        <FaTrophy className="header-icon" />
        <h2>Top Performers</h2>
        <FaMedal className="header-icon" />
      </div>

      {/* Leaderboard Table */}
      <div className="leaderboard-table">
        <table>
          <thead>
            <tr>
              <th>RANK</th>
              <th>USER</th>
              <th>POINTS</th>
              <th>LEVEL</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((user, index) => (
              <tr key={index}>
                <td>{user.rank}</td>
                <td>{user.user}</td>
                <td>{user.points}</td>
                <td className={`level-${user.level.toLowerCase()}`}>{user.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
