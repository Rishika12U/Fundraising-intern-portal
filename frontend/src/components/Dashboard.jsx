import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [intern, setIntern] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/intern')
      .then(res => setIntern(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="dashboard-card">
      <h2>Welcome, {intern?.name}</h2>
      <p><strong>Referral Code:</strong> {intern?.referralCode}</p>
      <p><strong>Total Donations Raised:</strong> ₹{intern?.donations}</p>

      <div className="rewards-section">
        <h3>🎁 Rewards / Unlockables</h3>
        <ul>
          <li>📜 E-Certificate after ₹1000 raised</li>
          <li>🏅 Social Media Shoutout after ₹5000 raised</li>
          <li>🎉 Featured Intern Badge after ₹10000 raised</li>
        </ul>
      </div>

      <button className="leaderboard-button" onClick={() => navigate('/leaderboard')}>
        View Leaderboard
      </button>
    </div>
  );
};

export default Dashboard;