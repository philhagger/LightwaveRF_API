var port = 9760;
var host = '192.168.1.64';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const dgram = require('dgram');

function send() {
    readline.question("Enter Code: ", (answer) => {
        sendMessage(answer);
        readline.close();
    });
}

var sendMessage = (code) => {
    var client = dgram.createSocket('udp4');
    var message = "100,!" + code;
    var sendMessage = new Buffer(message);

    client.send(sendMessage, 0, sendMessage.length, port, host, (err, bytes) => {
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