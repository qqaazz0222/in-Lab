// 라이브러리
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/stores/userStore";
// 서비스
import { UserSignIn, VerifyToken } from "@/services/signService";
// 컴포넌트
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// 아이콘
import { Eye, EyeOff } from "lucide-react";
// 스타일
import "./style.css";

const SignPage = () => {
    const navigate = useNavigate();
    // 전역상태
    const userData = useUserStore((state) => state.userData);
    const setUser = useUserStore((state) => state.setUser);
    // 상태
    const [option, setOption] = useState("user");
    const [isVisible, setIsVisible] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    // ref
    const idRef = useRef();
    const pwRef = useRef();
    // 함수
    const requestSignIn = async () => {
        if (option === "user") {
            requestUserSignIn(
                idRef.current.value,
                pwRef.current.value,
                (msg) => {
                    setErrMsg(msg);
                }
            );
        } else {
            requestAdminSignIn();
        }
    };
    const requestUserSignIn = async (id, pw, onError = () => {}) => {
        if (option === "user") {
            const response = await UserSignIn(id, pw);
            if (response.status === 200) {
                setUser(response.data);
                navigate("/home");
            } else if (response.status === 201) {
                onError("어아다 또는 비밀번호가 일치하지 않습니다.");
            }
        }
    };
    const requestAdminSignIn = async () => {
        console.log("Admin SignIn");
        console.log(idRef.current.value);
        console.log(pwRef.current.value);
        setErrMsg("오류발생!!!");
    };
    const verifyToken = async (token) => {
        const response = await VerifyToken(token);
        if (response.status === 200) {
            navigate("/home");
        }
    };
    const keyPressEvent = () => {
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                requestSignIn();
            }
        });
    };
    useEffect(() => {
        keyPressEvent();
    }, []);
    useEffect(() => {
        if (userData.token !== "") {
            verifyToken(userData.token);
        }
    }, [userData]);
    return (
        <div
            id="signPage"
            className="flex items-center justify-center w-svw h-svh"
        >
            <div className="jumbo"></div>
            <Card className="w-responsive-sign transition-width">
                <CardHeader>
                    <CardTitle>in:Lab</CardTitle>
                    <CardDescription>연구실 안의 모든 일</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="user" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger
                                value="user"
                                onClick={() => {
                                    setOption("user");
                                }}
                            >
                                사용자 로그인
                            </TabsTrigger>
                            <TabsTrigger
                                value="admin"
                                onClick={() => {
                                    setOption("admin");
                                }}
                            >
                                관리자 로그인
                            </TabsTrigger>
                        </TabsList>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="userId">아이디</Label>
                                <Input
                                    id="userId"
                                    type="text"
                                    placeholder="아이디를 입력하세요."
                                    ref={idRef}
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="userPw">비밀번호</Label>
                                <div className="flex flex-row gap-2">
                                    <Input
                                        id="userPw"
                                        className="flex-1"
                                        type={isVisible ? "text" : "password"}
                                        placeholder="비밀번호를 입력하세요."
                                        ref={pwRef}
                                    />

                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => {
                                            setIsVisible(!isVisible);
                                        }}
                                    >
                                        {isVisible ? (
                                            <Eye className="w-4 h-4" />
                                        ) : (
                                            <EyeOff className="w-4 h-4" />
                                        )}
                                    </Button>
                                </div>
                            </div>
                            <Button className="p-6" onClick={requestSignIn}>
                                로그인
                            </Button>
                        </div>
                    </Tabs>
                </CardContent>
                <CardFooter>
                    <div className="w-full flex flex-row">
                        <Button className="flex-1" variant="link">
                            아이디 찾기
                        </Button>
                        <Button className="flex-1" variant="link">
                            비밀번호 찾기
                        </Button>
                        <Button className="flex-1" variant="link">
                            회원가입
                        </Button>
                    </div>
                </CardFooter>
            </Card>
            <AlertDialog open={errMsg !== ""}>
                <AlertDialogContent className="sm:max-w-[420px]">
                    <AlertDialogHeader>
                        <AlertDialogTitle>{errMsg}</AlertDialogTitle>
                        <AlertDialogDescription>
                            아이디와 비밀번호를 확인하신 후, 다시 시도해 주세요.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction
                            onClick={() => {
                                setErrMsg("");
                            }}
                        >
                            확인
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default SignPage;
