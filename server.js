// Import the Express module
const express = require('express');
const knex = require('knex');

// Create an instance of the Express application
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, this is your Express server!');
  });

  
  // Define another route
app.get('/api/data', (req, res) => {
    const data = { message: 'This is some data from the server.' };
    res.json(data);
  });

  // Start the server and listen on a specific port (e.g., 3000)
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});