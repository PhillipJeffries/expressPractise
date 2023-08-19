const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('./dbConfig');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
});

server.get('/todos', async (req, res) => {
  //GET all todos
  try {
    const todos = await db('todos');
    res.json(todos);
  } catch(err) {
    console.log(err);
  }

  
});

server.post('/todos', (req, res) => {
  
});

server.put('/todos/:id', (req, res) => {
  
});

server.delete('/todos/:id', (req, res) => {
  
})

module.exports = server;
