/*
파일명 : userMiddleWare
최종 수정일 : 2024.02.12
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
참고 : Create : 🟢 / Read : 🔵 / Update : 🟠 / Delete : 🔴
*/
const express = require("express");
const router = express.Router();

// 🟢 신규 사용자 생성하기
router.get("/create", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 다중 사용자 목록 조회하기(사용자 목록 조회)
router.get("/read/list", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 단일 사용자 정보 조회하기(사용자 상세보기)
router.get("/read/detail/:uid", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟠 단일 사용자 정보 수정하기(사용자 정보 수정)
router.get("/update/info", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟠 단일 사용자 계정 허가 및 정지하기(사용자 계정 허가 및 정지)
router.get("/update/permission", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔴 단일 사용자 삭제하기(사용자 삭제)
router.get("/delete/detail/:uid", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔴 다중 사용자 삭제하기(사용자 일괄 삭제)
router.get("/delete/list", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

module.exports = router;
