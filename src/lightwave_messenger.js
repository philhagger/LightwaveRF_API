const host = '192.168.1.79';
const port = 9760;

const sendMessage = (code, callback) => {
    const udp = require('dgram').createSocket('udp4');
    const udpMessage = Buffer.from("100,!" + code);

    udp.send(udpMessage, 0, udpMessage.length, port, host, (err) => {
        // TODO: need to check the response from the listener then if it is not returned fail the request
        if(err){
            callback({success: false, message: err});
        }else{
            console.log(`UDP message - ${udpMessage} sent to ${host}:${port}`);
            callback({success: true, message: `UDP message - ${udpMessage} sent to ${host}:${port}`});
        }
        udp.close();
    });
};

export default sendMessage;