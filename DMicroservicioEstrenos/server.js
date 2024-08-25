const express = require('express');
const db = require('./database/db');
const movieRouter = require('./releases-routes/movieRouter');
const app = express();
const cors = require('cors');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Running' });
});

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use('/movies', movieRouter);


const PORT = process.env.PORT || 4017;
app.listen(PORT, () => {
  console.log(`New Releases Service is running on port ${PORT}`);
});
