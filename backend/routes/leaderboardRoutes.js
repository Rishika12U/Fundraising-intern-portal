const express = require('express');
const router = express.Router();

// Dummy intern data defined directly
const internData = [
  { name: "Ananya", referralCode: "ananya2025", donations: 15000 },
  { name: "Rohan", referralCode: "rohan2025", donations: 13000 },
  { name: "Urishika", referralCode: "urishika2025", donations: 12500 },
  { name: "Sara", referralCode: "sara2025", donations: 11000 },
  { name: "Mihir", referralCode: "mihir2025", donations: 10500 }
];

// GET /api/leaderboard
router.get('/', (req, res) => {
  const sorted = internData.sort((a, b) => b.donations - a.donations);
  res.json(sorted);
});

module.exports = router;
