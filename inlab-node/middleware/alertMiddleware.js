/*
파일명 : alertMiddleWare
최종 수정일 : 2024.02.12
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
참고 : Create : 🟢 / Read : 🔵 / Update : 🟠 / Delete : 🔴
*/
const express = require("express");
const router = express.Router();

// 🟢 단일 사용자 경고 부여하기(사용자 경고 부여)
router.get("/grant/detail/:alid", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟢 다중 사용자 경고 부여하기(사용자 일괄 경고 부여)
router.get("/grant/list", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 다중 사용자 경고 조회하기(다중 사용자 경고 목록 조회)
router.get("/read/list", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 단일 사용자 경고 조회하기(단일 사용자 경고 목록 조회)
router.get("/read/deatil/user/:uid", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 단일 경고 조회하기(경고 상세보기)
router.get("/read/deatil/alert/:alid", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟠 단일 사용자 경고 회수하기(사용자 경고 회수)
router.get("/revoke/detail", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟠 다중 사용자 경고 회수하기(사용자 일괄 경고 회수)
router.get("/revoke/list", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔴 단일 사용자 경고 초기화하기(사용자 경고 초기화)
router.get("/init/detail/:uid", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔴 다중 사용자 경고 초기화하기(사용자 일괄 경고 초기화)
router.get("/init/list", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

module.exports = router;
