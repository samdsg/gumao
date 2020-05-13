export const websiteUrl = `http://192.168.254.200:5000`;
// export const socket = IO.connect(`${websiteUrl}`, {
//   timeout: 5000,
//   'connect timeout': 5000,
//   forceNew: true,
//   transports: ['websocket', 'polling'],
// });

// socket.on('connection', () => console.log('Connection'));
export const codeToEmoji = cCode => {
  cCode
    .toUpperCase()
    .replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
};
