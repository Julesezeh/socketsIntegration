const { createServer } = require("http");
const express = require("express");
const { Server } = require("socket.io");
const cors = require('cors');


const app = express();
const server = createServer(app);
const PORT = 3000


// Create a separate cors instance for Socket.IO
const ioCors = cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
});

// Enable CORS for all routes
app.use((req, res, next) => {
    ioCors(req, res, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error handling CORS' });
        }
        next();
    });
});

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,

    }
});

io.of("/socket").on("connection", (socket) => {
    console.log("Connection Successful")
    console.log(socket.id)
    socket.on("salutations", (greeting) => {
        console.log(greeting);
    })
    socket.on("message", (message) => {
        socket.emit("Mymessage", `${message}?oh really`)

    })
});


server.listen(PORT, () => {
    console.log("listening on port 3000")
})