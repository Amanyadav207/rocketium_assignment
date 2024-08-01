const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const router = express.Router();

const dataFilePath = path.join(__dirname, '..', 'data', 'dummyData.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    throw new Error('Failed to read data file');
  }
};

router.get('/data', async (req, res, next) => {
  try {
    let jsonData = await readFile();

    const { filterBy, value, search, sortBy } = req.query;

    if (filterBy && value) {
      jsonData = jsonData.filter(item => item[filterBy] === value);
    }

    if (search) {
      const searchKeys = ['name', 'language', 'bio'];
      jsonData = jsonData.filter(item =>
        searchKeys.some(key => item[key].toLowerCase().includes(search.toLowerCase()))
      );
    }

    if (sortBy) {
      jsonData.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    }

    res.json(jsonData);
  } catch (err) {
    next(err); 
  }
});

module.exports = router;