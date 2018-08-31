var port = 9760;
var host = '192.168.1.64';

const dgram = require('dgram');

var client = dgram.createSocket({type: 'udp4', reuseAddr: true});
client.bind(9761);

client.on('listening', () => {
    const address = client.address();
    console.log(`UDP listening on ${address.address}:${address.port}`);
});

client.on('message', (message, remote) => {
    // if(remote.port === 9760)
        console.log(`${remote.address}:${remote.port} - ${message}`);
});