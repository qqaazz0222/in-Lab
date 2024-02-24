// 라이브러리
const createError = require("http-errors");
const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const debug = require("debug")("inlab-node:server");
const { Server } = require("socket.io");

// 미들웨어
const userMiddleware = require("./middleware/userMiddleware"); // 사용자 미들웨어
const groupMiddleware = require("./middleware/groupMiddleware"); // 그룹 미들웨어
const alertMiddleware = require("./middleware/alertMiddleware"); // 경고 미들웨어
const communityMiddleware = require("./middleware/communityMiddleware"); // 커뮤니티 미들웨어
const equipmentMiddleware = require("./middleware/equipmentMiddleware"); // 기자재 미들웨어
const attendanceMiddleware = require("./middleware/attendanceMiddleware"); // 출결 미들웨어
const signMiddleware = require("./middleware/signMiddleware"); // 로그인 및 회원가입 미들웨어

// API 문서
const swaggerFile = require("./swagger/swagger-output.json");
const swaggerUi = require("swagger-ui-express");

// Express 셋팅
const app = express();
app.use(cors());
// View Engine 셋팅 (미사용)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// Dev 모드시 로그
app.use(logger("dev"));
// Json 호환
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Public 폴더 엑세스
app.use(express.static(path.join(__dirname, "public")));
// 미들웨어 연결
app.use("/user", userMiddleware);
app.use("/group", groupMiddleware);
app.use("/alert", alertMiddleware);
app.use("/community", communityMiddleware);
app.use("/equipment", equipmentMiddleware);
app.use("/attendance", attendanceMiddleware);
app.use("/sign", signMiddleware);
// Swagger 연결
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile, { explorer: true }));
// 404 핸들러
app.use((req, res, next) => {
    next(createError(404));
});

// Error 핸들러
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

const normalizePort = (val) => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

const onError = (error) => {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind =
        typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "80");
app.set("port", port);
const server = http.createServer(app);
// 소켓 설정
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    console.log(`${socket.id}가 접속했습니다.`);
    socket.on("join_room", (data) => {
        socket.join(data.room);
        console.log(`${data.username}유저가 ${data.room}번 방에 입장했습니다`);
        let noti = {
            message: `${data.username} 유저가 방에 입장했습니다`,
            author: "알림",
        };
        socket.to(data.room).emit("receive_message", noti);
    });

    socket.on("send_message", (data) => {
        console.log(data);
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log(`${socket.id}가 접속을 끊었습니다`);
    });
});
// 서버 실행
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
