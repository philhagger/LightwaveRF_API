const port = 9761;
const dgram = require('dgram');

const client = dgram.createSocket({type: 'udp4', reuseAddr: true});

client.bind(port);

client.on('listening', () => {
    const address = client.address();
    console.log(`UDP listening on ${address.address}:${address.port}`);
});

client.on('message', (message, remote) => {
    if(remote.port === 4101)
        console.log(`${remote.address}:${remote.port} - ${message}`);
});