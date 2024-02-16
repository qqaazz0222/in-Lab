/*
파일명 : attendanceMiddleWare
최종 수정일 : 2024.02.16
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
참고 : Create : 🟢 / Read : 🔵 / Update : 🟠 / Delete : 🔴
*/
const express = require("express");
const router = express.Router();

/*
출결 관련
*/

// 🟢 입실 기록하기(입실 기록)
router.get("/create/check/in", (req, res, next) => {
    //  #swagger.description = '입실 기록'
    //  #swagger.tags = ['출결']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟢 퇴실 기록하기(퇴실 기록)
router.get("/create/check/out", (req, res, next) => {
    //  #swagger.description = '퇴실 기록'
    //  #swagger.tags = ['출결']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

/*
출결 현황 관련
*/

// 🔵 출결 현황 조회하기(출결 현황 조회)
router.get("/read/checksummary/list", (req, res, next) => {
    //  #swagger.description = '출결 현황 조회'
    //  #swagger.tags = ['출결 현황']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 월별 리포트 조회하기(월별 리포트 조회)
router.get("/read/checksummary/monthly", (req, res, next) => {
    //  #swagger.description = '월별 리포트 조회'
    //  #swagger.tags = ['출결 현황']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟠 출결 이력 수정하기(출결 이력 수정)
router.get("/update/check:", (req, res, next) => {
    //  #swagger.description = '출결 이력 수정'
    //  #swagger.tags = ['출결 현황']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

/*
유고 결석 관련
*/

// 🟢 유고결석 등록하기(유고결석 등록)
router.get("/create/absence", (req, res, next) => {
    //  #swagger.description = '유고결석 등록'
    //  #swagger.tags = ['유고결석']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 유고결석 조회하기(유고결석 조회)
router.get("/read/absence/list", (req, res, next) => {
    //  #swagger.description = '유고결석 조회'
    //  #swagger.tags = ['유고결석']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔵 유고결석 상세보기(유고결석 상세정보 조회)
router.get("/read/absence/detail/:abid", (req, res, next) => {
    //  #swagger.description = '유고결석 상세정보 조회'
    //  #swagger.tags = ['유고결석']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🟠 유고결석 승인 및 반려하기(유고결석 승인 및 반려)
router.get("/update/absence", (req, res, next) => {
    //  #swagger.description = '유고결석 승인 및 반려'
    //  #swagger.tags = ['유고결석']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

// 🔴 유교결석 삭제하기(유고결석 삭제)
router.get("/delete/absence/:abid", (req, res, next) => {
    //  #swagger.description = '유고결석 삭제'
    //  #swagger.tags = ['유고결석']
    res.json({ status: 200, msg: "사용자 생성", data: [] });
});

module.exports = router;
