const port = process.env.PORT || 3001;
const io = require("socket.io")(port, {
    cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
}})

io.on("connection", (socket) => {
    console.log("a user connected")


    socket.on('message', (body) => {
        socket.broadcast.emit('message', {
            body,
            from: socket.id.slice(6)
        })
    })
})
console.log("hello worldd")