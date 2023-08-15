const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const testData = require('../testData');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
});

server.get('/todos', (req, res) => {
  res.json(testData);
});

server.post('/todos', (req, res) => {
  
});

server.put('/todos/:id', (req, res) => {
  
});

server.delete('/todos/:id', (req, res) => {
  
})

module.exports = server;
