// 라이브러리
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// 라우터 (API 테스트용)
const indexRouter = require("./routes/index");

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
// 인덱스 라우터
app.use("/", indexRouter);
// 미들웨어 연결
app.use("/user", userMiddleware);
app.use("/group", groupMiddleware);
app.use("/alert", alertMiddleware);
app.use("/community", communityMiddleware);
app.use("/equipment", equipmentMiddleware);
app.use("/attendance", attendanceMiddleware);
app.use("/sign", signMiddleware);
// Swagger 연결
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile, { explorer: true })
);
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

module.exports = app;
