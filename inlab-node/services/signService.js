/*
파일명 : signService
최종 수정일 : 2024.02.16
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
*/

// 데이터베이스
const db = require("../bin/db");

// 유틸
const jwt = require("./../utils/jwt");
const { userExist } = require("../utils/userUtil");
const { NullCheck } = require("../utils/reqCheck");
const { CreateHashedPassword } = require("../utils/crypto");
const { sendMail, createVerify } = require("./../utils/emailUtil");

/**
 * 사용자 로그인
 * @param {*} req
 * @returns
 */
const signInUser = async (req) => {
    try {
        const { id, pw } = req.body;
        if (!NullCheck(id)) {
            return {
                status: 500,
                msg: "입력값 오류(id 미입력)",
                data: req.body,
            };
        } else if (!NullCheck(pw)) {
            return {
                status: 500,
                msg: "입력값 오류(pw 미입력)",
                data: req.body,
            };
        } else {
            const hashedPassword = await CreateHashedPassword(pw);
            const response = await db.query(
                "SELECT uid, name FROM userTable WHERE uid = ? and upw = ?;",
                [id, hashedPassword]
            );
            if (response[0].length > 0) {
                const token = jwt.create(id);
                return {
                    status: 200,
                    msg: "사용자 로그인 성공",
                    data: {
                        uid: response[0][0].uid,
                        name: response[0][0].name,
                        token: token,
                    },
                };
            } else {
                return {
                    status: 201,
                    msg: "아이디 또는 비밀번호 불일치",
                    data: {},
                };
            }
        }
    } catch (err) {
        return { status: 500, msg: "알 수 없는 오류", data: err };
    }
};

/**
 * 사용자 회원가입
 * @param {*} req
 * @returns
 */
const signUpUser = async (req) => {
    try {
        const { id, pw } = req.body;
        if (!NullCheck(id)) {
            return {
                status: 500,
                msg: "입력값 오류(id 미입력)",
                data: req.body,
            };
        } else if (!NullCheck(pw)) {
            return {
                status: 500,
                msg: "입력값 오류(pw 미입력)",
                data: req.body,
            };
        } else {
            const result = await userExist(id);
            if (!result) {
                // 회원가입 로직
            } else {
                return {
                    status: 500,
                    msg: "사용중인 아이디",
                    data: req.body,
                };
            }
        }
    } catch (err) {
        return { status: 500, msg: "알 수 없는 오류", data: err };
    }
};

/**
 * 관리자 로그인
 * @param {*} req
 * @returns
 */
const signInAdmin = async (req) => {
    try {
    } catch (err) {
        return { status: 500, msg: "알 수 없는 오류", data: err };
    }
};

/**
 * 토큰 검증
 * @param {*} req
 * @returns
 */
const verifyToken = async (req) => {
    try {
        const { token } = req.body;
        if (!NullCheck(token)) {
            return {
                status: 500,
                msg: "입력값 오류(토큰 미입력)",
                data: req.body,
            };
        } else {
            if (jwt.check(token)) {
                return {
                    status: 200,
                    msg: "토큰 검증 성공",
                    data: {
                        token: token,
                    },
                };
            } else {
                return {
                    status: 201,
                    msg: "토큰 검증 실패",
                    data: {
                        token: token,
                    },
                };
            }
        }
    } catch (err) {
        return { status: 500, msg: "알 수 없는 오류", data: err };
    }
};

/**
 * 인증 코드 메일 발송
 * @param {*} req
 * @returns
 */
const verifyEmail = async (req) => {
    try {
        const { email } = req.body;
        if (!NullCheck(email)) {
            return {
                status: 500,
                msg: "입력값 오류(이메일 미입력)",
                data: req.body,
            };
        } else {
            const options = createVerify(email);
            const response = await sendMail(options);
            if (response.isSuccess) {
                return {
                    status: 200,
                    msg: "메일 발송 성공",
                    data: {
                        verifyCode: options.verifyCode,
                        info: response.info,
                    },
                };
            } else {
                return {
                    status: 400,
                    msg: "메일 발송 실패",
                    data: {
                        verifyCode: options.verifyCode,
                        info: response.info,
                    },
                };
            }
        }
    } catch (err) {
        return { status: 500, msg: "알 수 없는 오류", data: err };
    }
};

module.exports = {
    signInUser,
    signUpUser,
    signInAdmin,
    verifyToken,
    verifyEmail,
};
