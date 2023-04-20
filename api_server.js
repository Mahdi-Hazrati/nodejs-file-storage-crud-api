const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const FILE_NAME = 'data.json';

// Middleware to parse request body
app.use(bodyParser.json());

// Create operation
app.post('/create', (req, res) => {
  const data = readDataFromFile();
  const newItem = req.body;
  data.push(newItem);
  saveDataToFile(data);
  res.send('Item added successfully.');
});

// Read operation
app.get('/read/:id', (req, res) => {
  const data = readDataFromFile();
  const item = data.find((item) => item.id === parseInt(req.params.id));
  if (item) {
    res.send(item);
  } else {
    res.status(404).send('Item not found.');
  }
});

// Update operation
app.put('/update/:id', (req, res) => {
  const data = readDataFromFile();
  const index = data.findIndex((item) => item.id === parseInt(req.params.id));
  if (index !== -1) {
    data[index] = req.body;
    saveDataToFile(data);
    res.send('Item updated successfully.');
  } else {
    res.status(404).send('Item not found.');
  }
});

// Delete operation
app.delete('/delete/:id', (req, res) => {
  const data = readDataFromFile();
  const index = data.findIndex((item) => item.id === parseInt(req.params.id));
  if (index !== -1) {
    data.splice(index, 1);
    saveDataToFile(data);
    res.send('Item deleted successfully.');
  } else {
    res.status(404).send('Item not found.');
  }
});

// Utility functions to read/write data from/to file
function readDataFromFile() {
  try {
    const data = fs.readFileSync(FILE_NAME, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveDataToFile(data) {
  fs.writeFileSync(FILE_NAME, JSON.stringify(data), 'utf8');
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
