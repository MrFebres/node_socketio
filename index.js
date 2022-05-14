const express = require("express");
const {resolve} = require('path')
require('dotenv').config()

const app = express();

// Node-socket Server.
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Socket messages.
io.on('connection', client => {
  console.log('Cliente conectado')

  client.on('disconnect', () => console.log('cliente disconectado'));
});

const {PORT} = process.env

const publicPath = resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(PORT, (err) => {
  if (err) throw new Error(err)

  console.log('Servidor corriendo en puerto: ', PORT)
})