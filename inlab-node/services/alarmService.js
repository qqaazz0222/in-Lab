// const io = require("./../app");

// io.on("connection", (socket) => {
//     console.log(`${socket.id}가 접속했습니다.`);
//     socket.on("join_room", (data) => {
//         socket.join(data.room);
//         console.log(`${data.username}유저가 ${data.room}번 방에 입장했습니다`);
//         let noti = {
//             message: `${data.username} 유저가 방에 입장했습니다`,
//             author: "알림",
//         };
//         socket.to(data.room).emit("receive_message", noti);
//     });

//     socket.on("send_message", (data) => {
//         console.log(data);
//         socket.to(data.room).emit("receive_message", data);
//     });

//     socket.on("disconnect", () => {
//         console.log(`${socket.id}가 접속을 끊었습니다`);
//     });
// });
