const port = process.env.PORT || 3001;
const io = require("socket.io")(port, {
    cors: {
    origin: "socket-front-r0almdr0d-axel-gomezs-projects.vercel.app",
    methods: ["GET", "POST"],
}})

io.on("connection", (socket) => {
    console.log("a user connected")


    socket.on('message', (body) => {
        console.log(body)
        socket.broadcast.emit('message', {
            body,
            from: socket.id.slice(6)
        })
    })
})
console.log("hello worldd")