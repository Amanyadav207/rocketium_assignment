# Node.js Data API Project

## Project Overview
This Node.js application fetches dummy JSON data, stores it locally, and provides an API endpoint to serve this data with filtering and sorting capabilities. It demonstrates skills in Node.js development, API implementation, and data handling.

## Features

- Data fetching and local storage
- RESTful API endpoint for data retrieval
- Filtering and sorting functionalities
- Error handling and logging

## Setup and Running Locally

1. **Clone the repository** to your local machine.

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root directory.
    - Add the following content, replacing the dummy URL with the actual dummy data URL:
        ```plaintext
        PORT=3000
        DUMMY_URL=https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json
        ```

4. **Initialize the data**:
    ```bash
    npm run init-data
    ```

5. **Start the server**:
    ```bash
    npm start
    ```

The server will be running on [http://localhost:3000](http://localhost:3000).

## API Usage

### Endpoint: `GET /api/data`
Retrieves the stored data with optional filtering, searching, and sorting.

### Query Parameters:

- `filterBy`: Field to filter by
- `value`: Value to filter for
- `sortBy`: Field to sort by

### Example Requests:

#### Get all data:
```
GET http://localhost:3000/api/data
```
### Filter data:
```
GET http://localhost:3000/api/data?filterBy=language&value=Sindhi
```

### Sort data:
```
GET http://localhost:3000/api/data?sortBy=version
```

## Postman Documentation

You can view and test the API using the Postman documentation available at the following link:

[View Postman Documentation](https://documenter.getpostman.com/view/34022374/2sA3kdAxTC)
