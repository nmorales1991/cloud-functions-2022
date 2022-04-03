require('dotenv').config();
const express = require('express')
const { port, hola } = require('./config');
const app = express()
const puerto = 4000;

app.get('/', (req, res) => {
  res.send(`Hola Mundo ${ port } ${ hola }`);
})

app.listen(puerto, () => {
  console.log(`Example app listening on port ${puerto}`)
})

// HTTP Cloud Function.
exports.app = app;
