require('dotenv').config();
const express = require('express')
const { port, hola} = require('./config');
const app = express()

app.get('/', (req, res) => {
  res.send(`Hola Mundo ${ hola }`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// HTTP Cloud Function.
exports.app = app;
