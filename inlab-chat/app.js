// app.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// express REST API
app.use("/api", routes);

io.on("connection", (socket) => {
    // 소켓 커넥션이 성공적으로 이루어졌을 때 실행되는 이벤트 처리
    webSocketController.handleSocketConnection(socket, io);
});

server.listen(PORT, () => {
    // 서버가 실행되었을 때 실행되는 이벤트 처리
    logger.info(`${PORT} 포트 번호로 서버가 실행되었습니다.`);
});
