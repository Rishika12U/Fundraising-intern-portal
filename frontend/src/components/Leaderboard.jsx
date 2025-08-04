import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Leaderboard.css';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/leaderboard')
      .then(res => {
        console.log(res.data);
        setLeaders(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="leaderboard-card">
      <h2>🏆 Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Referral Code</th>
            <th>Donations (₹)</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((intern, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{intern.name}</td>
              <td>{intern.referralCode}</td>
              <td>{intern.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;