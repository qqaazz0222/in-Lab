/*
파일명 : groupMiddleWare
최종 수정일 : 2024.02.16
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
참고 : Create : 🟢 / Read : 🔵 / Update : 🟠 / Delete : 🔴
*/
const express = require("express");
const router = express.Router();

// 🟢 신규 그룹 생성하기
router.get("/create", (req, res, next) => {
    //  #swagger.description = '그룹 생성'
    //  #swagger.tags = ['그룹']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 다중 그룹 목록 조회하기(그룹 목록 조회)
router.get("/read/list", (req, res, next) => {
    //  #swagger.description = '그룹 목록 조회'
    //  #swagger.tags = ['그룹']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 단일 그룹 정보 조회하기(그룹 상세정보 조회)
router.get("/read/detail/:gid", (req, res, next) => {
    //  #swagger.description = '그룹 상세정보 조회'
    //  #swagger.tags = ['그룹']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟠 단일 그룹 정보 수정하기(그룹 정보 수정)
router.get("/update/info", (req, res, next) => {
    //  #swagger.description = '그룹 정보 수정'
    //  #swagger.tags = ['그룹']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔴 단일 그룹 삭제하기(그룹 삭제)
router.get("/delete/detail/:gid", (req, res, next) => {
    //  #swagger.description = '그룹 삭제'
    //  #swagger.tags = ['그룹']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

module.exports = router;
