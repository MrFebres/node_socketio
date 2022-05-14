const express = require("express");
const {resolve} = require('path')
require('dotenv').config()

const {PORT} = process.env

const app = express()

const publicPath = resolve(__dirname, 'public')
app.use(express.static(publicPath))

app.listen(PORT, (err) => {
  if (err) throw new Error(err)

  console.log('Servidor corriendo en puerto: ', PORT)
})