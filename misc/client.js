const lightwave = require('./lightwave');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const send = () => {
    readline.question("Enter Code: ", (answer) => {
        lightwave.sendMessage(answer);
        readline.close();
    });
}

send();

// https://api.lightwaverf.com/
// !F*p - register
// !F*xP - deregister
// R1D1F0 - Room 1 Device 1 F(1=on,0=off) - put device in pairing mode then send this command to link/unlink.