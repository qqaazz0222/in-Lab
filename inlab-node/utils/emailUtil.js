/*
파일명 : emailUtil
최종 수정일 : 2024.02.16
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
*/

// 라이브러리
const nodemailer = require("nodemailer");
require("dotenv").config();

// env
const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD } = process.env;

// const transporter = nodemailer.createTransport({
//     service: EMAIL_SERVICE,
//     auth: {
//         user: EMAIL_USER,
//         pass: EMAIL_PASSWORD,
//     },
// });

// const mailOptions = {
//     from: EMAIL_USER,
//     to: "받는 사람 이메일",
//     subject: "이메일 제목",
//     text: "이메일 내용",
// };

/**
 *
 * @param {*} options from: 보내는 사람 이메일, to: 받는 사람 이메일, subject: 이메일 제목, text: 이메일 내용, html: HTML 내용
 */
const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        service: EMAIL_SERVICE,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD,
        },
    });
    try {
        const result = await transporter.sendMail(options);
        return { isSuccess: true, info: result };
    } catch (err) {
        console.error(err);
        return { isSuccess: false, info: err };
    }
};

const createCode = (min = 0, max = 0) => {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum;
};

const createVerify = (email) => {
    let options = {
        from: EMAIL_USER,
        to: email,
        subject: "[inLab] 이메일 인증번호입니다.",
        html: "",
        verifyCode: 0,
    };
    options.verifyCode = createCode(111111, 999999);
    options.html = `<h1>inLab : 연구실 안의 모든 일</h1><br/><p>안녕하세요.</p><p>${email} 이메일을 인증하는데 필요한 인증번호입니다.</p><br/><h2>인증번호 : ${options.verifyCode}</h2><br/><p>본 메일이 생성된 이뉴는 inLab 웹사이트에서 ${email}을 인증하려는 시도가 있었기 때문입니다.</p>`;
    return options;
};

module.exports = { sendMail, createVerify };
