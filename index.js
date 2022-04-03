require('dotenv').config();
const express = require('express')
const { hola } = require('./config');
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Hola Mundo ${ hola }`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// HTTP Cloud Function.
exports.app = app;
