var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

http.listen(3000, () => {
    console.log('listening to port: 3000');
});

/*
Homework
Here are some ideas to improve the application:
    Broadcast a message to connected users when someone connects or disconnects.
    Add support for nicknames.
    Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
    Add “{user} is typing” functionality.
    Show who’s online.
    Add private messaging.
    Share your improvements!
*/