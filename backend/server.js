const express = require('express');
const cors = require('cors');

const app = express();
const leaderboardRoutes = require('./routes/leaderboardRoutes.js');
const internRoutes = require('./routes/internRoutes.js');

app.get('/test', (req, res) => res.send('Test route works!'));

app.use(cors());
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/intern', internRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
