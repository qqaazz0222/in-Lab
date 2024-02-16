/*
파일명 : index
최종 수정일 : 2024.02.16
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
*/

const express = require("express");
const router = express.Router();
const jwt = require("./../utils/jwt");
const { createVerify } = require("./../utils/emailUtil");

router.get("/", async (req, res, next) => {
    //  #swagger.description = '서버 상태'
    //  #swagger.tags = ['기본']
    res.json({
        status: 200,
        msg: "서버가 정상적으로 동작중입니다.",
        data: { apiDocs: "/api-docs" },
    });
});

// 기능 테스트용
router.get("/test", async (req, res, next) => {
    //  #swagger.description = '기능 테스트'
    //  #swagger.tags = ['기본']
    let result = { state: 200, msg: "테스트 중인 기능 없음", data: [] };
    return res.json(result);
});

module.exports = router;
