import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "https://example.com"
    }
});

io.on("connection", (socket) => {
    console.log("Connection Successful")
    console.log(socket.id)
});

io.listen(3000)