// 라이브러리
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../stores/userStore";
// 컴포넌트
import Notice from "../../components/Notice/component";
import { SignInSelector } from "../../components/Selector/component";
import { InputText, InputPassword } from "../../components/Input/component";
import { FullButton } from "../../components/Button/component";
import Divider from "../../components/Divider/comonent";
// 서비스
import { UserSignIn, VerifyToken } from "../../services/Sign/signService";
// 스타일
import "./style.css";

const Sign = () => {
    const navigate = useNavigate();
    // 전역상태
    const userData = useUserStore((state) => state.userData);
    const setUser = useUserStore((state) => state.setUser);
    // 상태
    const [option, setOption] = useState("user");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [errMsg, setErrMsg] = useState("");
    // 함수
    const requsetSignIn = async (option, id, pw, setErrMsg) => {
        if (option === "user") {
            const response = await UserSignIn(id, pw);
            if (response.status === 200) {
                setUser(response.data);
                navigate("/home");
            } else {
            }
        } else {
        }
    };
    const verifyToken = async (token) => {
        const response = await VerifyToken(token);
        if (response.status === 200) {
            navigate("/home");
        } else {
        }
    };
    useEffect(() => {
        if (userData.token !== "") {
            verifyToken(userData.token);
        }
    }, [userData]);
    return (
        <div id="signPage">
            <Notice />
            <div className="signWrap">
                <div className="signHeader">
                    <div className="signTitle">in:Lab</div>
                    <div className="signSubTitle">연구실 안의 모든 일</div>
                </div>
                <div className="signOptionWrap">
                    <SignInSelector
                        value={option}
                        func={(v) => {
                            setOption(v);
                        }}
                    />
                </div>
                <div className="signInfoWrap">
                    <InputText
                        name="아이디"
                        placeholder="아이디를 입력하세요."
                        value={id}
                        setValue={(v) => {
                            setId(v);
                        }}
                    />
                    <InputPassword
                        name="비밀번호"
                        placeholder="비밀번호를 입력하세요."
                        value={pw}
                        setValue={(v) => {
                            setPw(v);
                        }}
                    />
                </div>
                <div className="signFuncWrap">
                    <FullButton
                        text="로그인"
                        func={() => {
                            requsetSignIn(option, id, pw);
                        }}
                        variant="primary"
                    />
                </div>
                <Divider />
                <div className="signMoreWrap">
                    <div className="moreItem">아이디 찾기</div>
                    <div className="moreItem">비밀번호 찾기</div>
                    <div className="moreItem">회원가입</div>
                </div>
            </div>
        </div>
    );
};

export default Sign;
