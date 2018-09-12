const host = '192.168.1.79';
const port = 9760;
let queue = [];
let code = '';

const udp = require('dgram')
  .createSocket({ type: 'udp4', reuseAddr: true })
  .bind(9761);

const addToQueue = (target, callback) => {
  queue.push(target);
  callback({ success: true });
};

const sendMessage = () => {
  code = queue[0];
  const udpMessage = Buffer.from(`100,!${code}`);
  udp.send(udpMessage, 0, udpMessage.length, port, host);
};

udp.on('message', (message, remote) => {
  if (remote.port === 4101) {
    const rx = JSON.parse(message.toString().split('!')[1]);
    const checkValue = `R${rx.room}D${rx.dev}F${
      rx.fn === 'on' ? 1 : rx.fn === 'dim' ? `dP${Math.round(rx.param)}` : 0
    }`;

    if (code === checkValue) {
      console.log({ success: true, target: code });
      queue.shift();
    }
  }
});

setInterval(() => {
  if (queue.length > 0) {
    console.log(queue, code);
    sendMessage();
  }
}, 300);

export default addToQueue;

// TODO: if attempts === 10 then move onto the next item and return an error
// TODO: make this more efficient so it isn't just spamming messages. Recurring algorithm would be nice
