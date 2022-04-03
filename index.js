require('dotenv').config();
const express = require('express')
const { port } = require('./config');
const app = express()

app.get('/', (req, res) => {
  res.send(`Hola Mundo port ${port}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// HTTP Cloud Function.
exports.app = app;
