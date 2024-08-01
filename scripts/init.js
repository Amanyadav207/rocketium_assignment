const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const DATA_URL = process.env.DUMMY_URL;
const DATA_FILE_PATH = path.join(__dirname, '..', 'dummyData.json');

const fetchDataAndStore = async () => {
  try {
    const response = await axios.get(DATA_URL);
    const data = response.data;

    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2));
    console.log('Data fetched and stored successfully.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const initializeData = () => {
  if (!fs.existsSync(DATA_FILE_PATH)) {
    fetchDataAndStore();
  } else {
    console.log('Data file already exists. Skipping data fetch.');
  }
};

initializeData();
