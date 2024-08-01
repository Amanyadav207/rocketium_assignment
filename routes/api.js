const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataFilePath = path.join(__dirname, '..', 'data', 'dummyData.json');

router.get('/data', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data' });
    }

    let jsonData = JSON.parse(data);

    const { filterBy, value, search, sortBy } = req.query;
    if (filterBy && value) {
      jsonData = jsonData.filter(item => item[filterBy] === value);
    }

    if (search) {
      const searchKeys = ['name', 'language', 'id'];
      jsonData = jsonData.filter(item =>
        searchKeys.some(key => item[key].toLowerCase().includes(search.toLowerCase()))
      );
    }

    if (sortBy) {
      jsonData.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    }

    res.json(jsonData);
  });
});

module.exports = router;
