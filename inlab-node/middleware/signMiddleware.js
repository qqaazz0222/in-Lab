/*
파일명 : signMiddleWare
최종 수정일 : 2024.02.16
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
참고 : Create : 🟢 / Read : 🔵 / Update : 🟠 / Delete : 🔴
*/

// 라이브러리
const express = require("express");
const router = express.Router();

// 서비스
const signService = require("./../services/signService");

// 🔵 사용자 로그인
router.post("/in/user", async (req, res, next) => {
    //  #swagger.description = '사용자 로그인'
    //  #swagger.tags = ['로그인 및 회원가입']
    const result = await signService.signInUser(req);
    return res.json(result);
});

// 🔵 사용자 회원가입
router.post("/up/user", async (req, res, next) => {
    //  #swagger.description = '사용자 회원가입'
    //  #swagger.tags = ['로그인 및 회원가입']
    const result = await signService.signUpUser(req);
    return res.json(result);
});

// 🔵 관리자 로그인
router.post("/in/admin", async (req, res, next) => {
    //  #swagger.description = '관리자 로그인'
    //  #swagger.tags = ['로그인 및 회원가입']
    const result = await signService.signInAdmin(req);
    return res.json(result);
});

// 🔵 이메일 인증
router.post("/verify", async (req, res, next) => {
    //  #swagger.description = '이메일 인증'
    //  #swagger.tags = ['로그인 및 회원가입']
    const result = await signService.verify(req);
    console.log(result);
    return res.json(result);
});

module.exports = router;
