// server.js

const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');

const app = express();
app.use(cors());

// Define API endpoint to read CSV file
app.get('/read-csv', (req, res) => {
  const results = [];
  fs.createReadStream('./data/currency.csv')
    .pipe(csv())
    .on('data', (row) => {
      results.push(row);
    })
    .on('end', () => {
      res.json(results); // Send the parsed CSV data as JSON response
    });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
