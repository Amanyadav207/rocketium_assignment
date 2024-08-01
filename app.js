const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
require('dotenv').config();

app.use(express.json());
app.use('/api', apiRouter);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'An unexpected error occurred',
    message: err.message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});