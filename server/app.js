const express = require('express');
const app = express();
const http = require('http');
const { nextTick } = require('process');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    allowEIO3: true,
    cors:{
        origin:"*",
    },
    transports:["polling","websocket"],
});

io.use((socket,next) => {
    const userName = socket.handshake.auth?.userName;
    const userRoom = socket.handshake.auth?.userRoom;
    if (!userName) return next(new Error("no fill username"));
    
    socket.userName = userName;
    socket.userRoom = userRoom;

    next();
})
io.use((socket,next) => {
    const userRoom = socket.handshake.auth?.userRoom;
    socket.userRoom = userRoom;

    next();
})
io.on("connection",(socket) => {
    console.log("a user connected");
    
    const users = [];
    
    for (let [id,socket] of io.of("/").sockets) {
        users.push({
            userId   : id,
            userName : socket.userName,
            userRoom : socket.userRoom 
        })
    }
    
    socket.emit("getUsers",users)

    socket.broadcast.emit("userJustConnected",{
        userId: socket.id,
        userName: socket.userName,
        userRoom: socket.userRoom
    })

    socket.on("disconnect",() =>{
        console.log("a user disconnected");
    });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});