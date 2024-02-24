/*
파일명 : userService
최종 수정일 : 2024.02.14
작성자 : 김현수
작성자 연락처 : qqaazz0222@kakao.com
*/

// 데이터베이스
const db = require("../bin/db");

// 유틸
const { userExist } = require("../utils/userUtil");
const { NullCheck } = require("../utils/reqCheck");
const { CreateHashedPassword } = require("../utils/crypto");

const create = async (req) => {
    try {
        const { id, pw, name, phone, email } = req.body;
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
        } else if (!NullCheck(name)) {
            return {
                status: 500,
                msg: "입력값 오류(name 미입력)",
                data: req.body,
            };
        } else {
            const hashedPassword = await CreateHashedPassword(pw);
            const response = await db.query(
                "INSERT INTO userTable(uid, upw, name, phone, email) VALUE (?, ?, ?, ?, ?);",
                [
                    id,
                    hashedPassword,
                    name,
                    phone ? phone : "-",
                    email ? email : "-",
                ]
            );
            return {
                status: 200,
                msg: "사용자 생성 성공",
                data: { uid: id, name: name },
            };
        }
    } catch (err) {
        return { status: 500, msg: "알 수 없는 오류", data: err };
    }
};

const readList = async (req) => {
    try {
        /* 관리자 권한 확인 */
        // 관리자일 경우
        const response = await db.query(
            "SELECT uid, name, phone, email FROM user;"
        );
        return {
            status: 200,
            msg: "사용자 목록 조회 성공",
            data: response[0],
        };
        // 사용자일 경우
        /* 추후 작성 */
    } catch (err) {
        return { status: 500, msg: "알 수 없는 오류", data: err };
    }
};

const readDetail = async (req) => {
    try {
        /* 관리자 권한 확인 */
        // 관리자일 경우
        const response = await db.query(
            "SELECT uid, name, phone, email FROM userTable WHERE uid = ?;",
            [req.params.uid]
        );
        if (response[0].length === 0) {
            return {
                status: 201,
                msg: "등록된 사용자 없음",
                data: { searchedId: req.params.uid },
            };
        }
        return {
            status: 200,
            msg: "사용자 정보 조회 성공",
            data: response[0],
        };
        // 사용자일 경우
        /* 추후 작성 */
    } catch (err) {
        return { status: 500, msg: "알 수 없는 오류", data: err };
    }
};

const updateInfo = async (req) => {
    try {
        const { id, name, phone, email } = req.body;
        const originalInfo = await userExist(id);
        if (originalInfo) {
            return { status: 201, msg: "등록되지 않은 사용자", data: [] };
        }
        const response = await db.query(
            "UPDATE userTable SET name=?, phone=?, email=? WHERE uid = ?;",
            [name, phone, email, id]
        );
        return {
            status: 200,
            msg: "사용자 정보 수정 성공",
            data: {
                uid: id,
                log: {
                    name:
                        originalInfo.name == name
                            ? "Unchanged"
                            : `Changed : ${originalInfo.name} -> ${name}`,
                    phone:
                        originalInfo.phone == phone
                            ? "Unchanged"
                            : `Changed : ${originalInfo.phone} -> ${phone}`,
                    email:
                        originalInfo.email == email
                            ? "Unchanged"
                            : `Changed : ${originalInfo.email} -> ${email}`,
                },
            },
            info: response[0].info,
        };
    } catch (err) {
        console.log(err);
        return { status: 500, msg: "알 수 없는 오류", data: err };
    }
};

const updatePermission = async (req) => {
    try {
        const { id, permit } = req.body;
        if (typeof permit !== "boolean") {
            return {
                status: 500,
                msg: "입력값 오류(permit 타입 오류, type:boolean)",
                data: req.body,
            };
        }
        const originalInfo = await userExist(id);
        if (originalInfo) {
            return { status: 201, msg: "등록되지 않은 사용자", data: [] };
        } else {
            const isUsing = permit ? 1 : 0;
            const originalPermit = originalInfo.isUsing;
            const response = await db.query(
                "UPDATE userTable SET isUsing=? WHERE uid = ?;",
                [isUsing, id]
            );
            return {
                status: 200,
                msg: "사용자 계정 승인/정지 성공",
                data: {
                    uid: id,
                    log: {
                        isUsing:
                            originalPermit == permit
                                ? "Unchanged"
                                : `Changed : ${originalPermit} -> ${isUsing}`,
                    },
                },
                info: response[0].info,
            };
        }
    } catch (err) {
        return { status: 500, msg: "알 수 없는 오류", data: err };
    }
};

const deleteDetail = async (req) => {
    try {
        const { id } = req.body;
        const originalInfo = await userExist(id);
        if (originalInfo) {
            return { status: 201, msg: "등록되지 않은 사용자", data: [] };
        }
        const response = await db.query("DELETE FROM userTable WHERE uid = ?", [
            id,
        ]);
        return {
            status: 200,
            msg: "사용자 삭제 성공",
            data: { uid: id },
        };
    } catch (err) {
        return { status: 500, msg: "알 수 없는 오류", data: err };
    }
};

const deleteList = async (req) => {
    try {
        const { idArr } = req.body;
    } catch (err) {
        return { status: 500, msg: "알 수 없는 오류", data: err };
    }
};

module.exports = {
    create,
    readList,
    readDetail,
    updateInfo,
    updatePermission,
    deleteDetail,
    deleteList,
};
