const { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

bands.addBand(new Band('Bon Jovi'));
bands.addBand(new Band('Metallica'));
bands.addBand(new Band('Queen'));
bands.addBand(new Band('UB40'));

io.on('connection', client => {
  console.log('Cliente conectado')

  client.emit('active-bands', bands.getBands())

  client.on('emitir-mensaje', (payload) => {
    // io.emit('nuevo-mensaje', payload) // emite a todos
    client.broadcast.emit('nuevo-mensaje', payload) // emite a todos menos el emisor.
  });

  client.on('disconnect', () => console.log('cliente disconectado'));
});
