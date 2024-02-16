/*
파일명 : crypto
최종 수정일 : 2024.02.14
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
참고 : .evn
*/
const util = require("util");
const crypto = require("crypto");
const pbkdf2Promise = util.promisify(crypto.pbkdf2);
require("dotenv").config();

const CreateHashedPassword = async (pw) => {
    const key = await pbkdf2Promise(
        pw,
        process.env.PW_SALT,
        104906,
        64,
        "sha512"
    );
    const hashedPassword = key.toString("base64");
    return hashedPassword;
};

module.exports = { CreateHashedPassword };
