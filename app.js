const host = '192.168.1.79';
const port = 9760;

const sendMessage = code => {
    const udp = require('dgram').createSocket('udp4');
    const sendMessage = Buffer.from("100,!" + code);
    // const sendMessage = Buffer.from(message);

    udp.send(sendMessage, 0, sendMessage.length, port, host, (err) => {
        if(err) throw err;
        console.log(`UDP message - ${sendMessage} sent to ${host}:${port}`);
        udp.close();
    });
}

sendMessage('R2D2F1');