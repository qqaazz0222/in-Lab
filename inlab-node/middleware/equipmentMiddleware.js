/*
파일명 : equipmentMiddleWare
최종 수정일 : 2024.02.12
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
참고 : Create : 🟢 / Read : 🔵 / Update : 🟠 / Delete : 🔴
*/
const express = require("express");
const router = express.Router();

// 🟢 기자재 등록하기(기자재 등록)
router.get("/create", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟢 기자재 부여하기(기자재 부여)
router.get("/grant", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 기자재 조회하기(기자재 조회)
router.get("/read/list", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟠 기자재 수정하기(기자재 수정)
router.get("/update", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔴 단일 기자재 삭제하기(단일 기자재 삭제)
router.get("/delete/detail/:eid", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔴 다중 기자재 삭제하기(다중 기자재 삭제)
router.get("/delete/list", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

module.exports = router;
