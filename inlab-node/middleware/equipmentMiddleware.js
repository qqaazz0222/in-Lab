/*
파일명 : equipmentMiddleWare
최종 수정일 : 2024.02.16
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
참고 : Create : 🟢 / Read : 🔵 / Update : 🟠 / Delete : 🔴
*/
const express = require("express");
const router = express.Router();

// 🟢 기자재 등록하기(기자재 등록)
router.post("/create", (req, res, next) => {
    //  #swagger.description = '기자재 등록'
    //  #swagger.tags = ['기자재']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟢 기자재 부여하기(기자재 부여)
router.post("/grant", (req, res, next) => {
    //  #swagger.description = '기자재 부여'
    //  #swagger.tags = ['기자재']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 다중 기자재 조회하기(기자재 목록 조회)
router.get("/read/list", (req, res, next) => {
    //  #swagger.description = '기자재 목록 조회'
    //  #swagger.tags = ['기자재']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 단일 기자재 조회하기(기자재 상세정보 조회)
router.get("/read/detail/:eid", (req, res, next) => {
    //  #swagger.description = '기자재 상세정보 조회'
    //  #swagger.tags = ['기자재']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟠 기자재 수정하기(기자재 정보 수정)
router.post("/update/info", (req, res, next) => {
    //  #swagger.description = '기자재 정보 수정'
    //  #swagger.tags = ['기자재']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔴 단일 기자재 삭제하기(기자재 삭제)
router.post("/delete/detail", (req, res, next) => {
    //  #swagger.description = '기자재 삭제'
    //  #swagger.tags = ['기자재']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔴 다중 기자재 삭제하기(기자재 일괄 삭제)
router.post("/delete/list", (req, res, next) => {
    //  #swagger.description = '기자재 일괄 삭제'
    //  #swagger.tags = ['기자재']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

module.exports = router;
