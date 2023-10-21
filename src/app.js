import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const PORT = process.env.PORT || 80;

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' }, transports: ["websocket", "polling"] });

app.use(express.static('src/ui'));

let buttonState = false;

let drink1 = false;
let drink2 = false;

let inputText = "";

io.on('connection', socket => {
    console.log('New Connection');

    io.to(socket.id).emit('buttonState', buttonState);

    io.to(socket.id).emit('inputText', inputText);

    socket.on('disconnect', () => {
        console.log('Disconnected');
    });

    socket.on('inputText', value => {
        console.log('inputText:', value);
        inputText = value;
        socket.broadcast.emit('inputText', value);
    });

    socket.on('drink1', value => {
        console.log('drink1:', value);
        drink1 = value;
        socket.broadcast.emit('drink1', value);
    });

    socket.on('drink2', value => {
        console.log('drink2:', value);
        drink2 = value;
        socket.broadcast.emit('drink2', value);
    });
});

httpServer.listen(PORT, () => {
    console.log('Running on : ', httpServer.address());
});
