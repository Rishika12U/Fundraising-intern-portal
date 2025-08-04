const express = require('express');
const cors = require('cors');

const app = express();
const leaderboardRoutes = require('./routes/leaderboardRoutes.js');
const internRoutes = require('./routes/internRoutes.js');

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:5173',
      'https://rainbow-licorice-b37739.netlify.app'
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  credentials: true,
};


app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/intern', internRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
