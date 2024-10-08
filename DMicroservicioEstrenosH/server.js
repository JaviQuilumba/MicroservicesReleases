const express = require('express');
const db = require('./database/db');
const movieRouter = require('./releases-routes/movieRouter');
const app = express();
const cors = require('cors');

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice  Running' });
});


app.use(cors({
  origin: 'https://cinema-platform-743n6.ondigitalocean.app'
}));

const kafkaConsumer = require('./kafka/consumer');

app.use(express.json());
app.use('/api', movieRouter); 

const PORT = process.env.PORT || 4018;
app.listen(PORT, () => {
  console.log(`Movie History Service is running on port ${PORT}`);
});

kafkaConsumer.start();