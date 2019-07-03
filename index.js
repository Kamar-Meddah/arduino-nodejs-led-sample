const SerialPort = require("serialport");
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(express.static('public'));


io.on('connection', function (socket) {
    socket.on('/led', function (data) {
        let dataToWrite = data.status === 'on' ? '1' : '0';
        port.write(dataToWrite);
    });
});

server.listen(3000, () => console.log('Example app listening on port 3000!'));

const port  = new SerialPort(`COM3`, { baudRate: 9600 });


port.on('data', data=>console.log('res',new String(data)));

