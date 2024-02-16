/*
파일명 : userService
최종 수정일 : 2024.02.14
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
*/

// 데이터베이스
const db = require("../bin/db");

const userExist = async (id) => {
    const response = await db.query(
        "SELECT uid, name, phone, email FROM user WHERE uid = ?;",
        [id]
    );
    return response[0][0];
};

module.exports = { userExist };
