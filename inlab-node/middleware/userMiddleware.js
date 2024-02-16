/*
파일명 : userMiddleWare
최종 수정일 : 2024.02.14
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
참고 : Create : 🟢 / Read : 🔵 / Update : 🟠 / Delete : 🔴
*/

// 라이브러리
const express = require("express");
const router = express.Router();

// 서비스
const userService = require("./../services/userService");

// 🟢 신규 사용자 생성하기
router.post("/create", async (req, res, next) => {
    //  #swagger.description = '신규 사용자 생성'
    //  #swagger.tags = ['사용자']
    const result = await userService.create(req);
    return res.json(result);
});

// 🔵 다중 사용자 목록 조회하기(사용자 목록 조회)
router.get("/read/list", async (req, res, next) => {
    //  #swagger.description = '사용자 목록 조회'
    //  #swagger.tags = ['사용자']
    const result = await userService.readList(req);
    return res.json(result);
});

// 🔵 단일 사용자 정보 조회하기(사용자 상세정보 조회)
router.get("/read/detail/:uid", async (req, res, next) => {
    //  #swagger.description = '사용자 상세정보 조회'
    //  #swagger.tags = ['사용자']
    const result = await userService.readDetail(req);
    return res.json(result);
});

// 🟠 단일 사용자 정보 수정하기(사용자 정보 수정)
router.post("/update/info", async (req, res, next) => {
    //  #swagger.description = '사용자 상세정보 조회'
    //  #swagger.tags = ['사용자']
    const result = await userService.updateInfo(req);
    return res.json(result);
});

// 🟠 단일 사용자 계정 허가 및 정지하기(사용자 계정 허가 및 정지)
router.post("/update/permission", async (req, res, next) => {
    //  #swagger.description = '사용자 계정 허가 및 정지'
    //  #swagger.tags = ['사용자']
    const result = await userService.updatePermission(req);
    return res.json(result);
});

// 🔴 단일 사용자 삭제하기(사용자 삭제)
router.post("/delete/detail", async (req, res, next) => {
    //  #swagger.description = '사용자 삭제'
    //  #swagger.tags = ['사용자']
    const result = await userService.deleteDetail(req);
    return res.json(result);
});

// 🔴 다중 사용자 삭제하기(사용자 일괄 삭제)
router.post("/delete/list", async (req, res, next) => {
    //  #swagger.description = '사용자 일괄 삭제'
    //  #swagger.tags = ['사용자']
    const result = await userService.deleteList(req);
    return res.json(result);
});

module.exports = router;
