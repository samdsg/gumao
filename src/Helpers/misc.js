const IO = require('socket.io-client');
export const websiteUrl = `http://192.168.254.200:5000`;
export const socket = IO.connect(`${websiteUrl}`, {
  timeout: 5000,
  'connect timeout': 5000,
  forceNew: true,
});

socket.on('connection', () => console.log('Connection'));
