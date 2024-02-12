/*
파일명 : communityMiddleWare
최종 수정일 : 2024.02.12
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
참고 : Create : 🟢 / Read : 🔵 / Update : 🟠 / Delete : 🔴
*/
const express = require("express");
const router = express.Router();

/*
공지사항 관련 미들웨어
*/

// 🟢 공지 등록하기(공지 등록)
router.get("/create/notice", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 다중 공지 조회하기(공지 목록 조회)
router.get("/read/notice/list", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 단일 공지 조회하기(공지 상세보기)
router.get("/read/notice/detail/:nid", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟠 공지 수정하기(공지 수정)
router.get("/update/notice", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔴 공지 삭제하기(공지 삭제)
router.get("/delete/notice/detail/:nid", (req, res, next) => {
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

module.exports = router;
