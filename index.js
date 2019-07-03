import SerialPort from "serialport";
import express from 'express';
const app = express();

app.use(express.static('public'));


app.listen(3000, () => console.log('Example app listening on port 3000!'));

const port  = new SerialPort(`COM3`, { baudRate: 9600 });

setInterval(() => port.write((Math.round(Math.random())).toString()),500);


port.on('data', data=>console.log('res',new String(data)));

