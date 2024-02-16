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

/* GET home page. */
router.get("/", async (req, res, next) => {
    res.render("index", { title: "Express" });
});

// 기능 테스트용
router.get("/test", async (req, res, next) => {
    let result;
    return res.json(options);
});

module.exports = router;
