const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: 'Urishika',
    referralCode: 'urishika2025',
    donations: 12500
  });
});

module.exports = router;
