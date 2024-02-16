/*
파일명 : jwt
최종 수정일 : 2024.02.16
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
참고 : Create : 🟢 / Read : 🔵 / Update : 🟠 / Delete : 🔴
*/

// 라이브러리
const jwt = require("jsonwebtoken");
require("dotenv").config();

// env
const KEY = process.env.JWT_KEY;

/**
 * 🟢 토큰 셍성하기
 * @param {string} id 사용자 아이디 문자열
 * @param {int} time 초 단위 정수값 입력, 기본값 : 1800초 = 30분
 * @returns {string} JWT 문자열
 */
const create = (id, time = 1800) => {
    const token = jwt.sign(
        { id: id, exp: parseInt(Date.now() / 1000) + time },
        KEY
    );
    return token;
};

/**
 * 🔵 토큰 검증하기
 * @param {sting} token JWT 문자열
 * @returns {boolean} 검증 결과 (true : 일치, false : 불일치)
 */
const check = (token) => {
    try {
        const payload = jwt.verify(token, KEY);
        console.info("[Func:jwt>check>Success]", payload);
        return true;
    } catch (err) {
        console.error("[Func:jwt>check>Fail]", {});
        return false;
    }
};

module.exports = { create, check };
