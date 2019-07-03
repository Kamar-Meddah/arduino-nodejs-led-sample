import SerialPort from "serialport";

const port  = new SerialPort(`COM3`, { baudRate: 9600 });

setInterval(() => port.write((Math.round(Math.random())).toString()),500);


port.on('data', data=>console.log('res',new String(data)));

