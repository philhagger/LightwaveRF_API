const port = 9760;
const host = '192.168.1.79';
const dgram = require('dgram');

const client = dgram.createSocket('udp4');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const send = () => {
    readline.question("Enter Code: ", (answer) => {
        sendMessage(answer);
        readline.close();
    });
}

const sendMessage = code => {
    var message = "100,!" + code;
    var sendMessage = Buffer.from(message);

    client.send(sendMessage, 0, sendMessage.length, port, host, (err) => {
        if(err) throw err;
        console.log(`UDP message - ${sendMessage} sent to ${host}:${port}`);
        client.close();
    });
}

send();

// https://api.lightwaverf.com/
// !F*p - register
// !F*xP - deregister
// R1D1F0 - Room 1 Device 1 F(1=on,0=off) - put device in pairing mode then send this command to link/unlink.