// 라이브러리
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// 아이콘
import { Plus, Trash } from "lucide-react";
import { useRef } from "react";
// 스타일

const AttendanceTable = () => {
    const sampleData = [
        { status: "출근", time: "10:00", detail: "PC 출근" },
        { status: "자리비움", time: "12:00", detail: "점심 식사" },
        { status: "복귀", time: "13:00", detail: "점심 식사" },
        { status: "자리비움", time: "15:30", detail: "거래처 미팅(OO사)" },
        { status: "퇴근", time: "18:00", detail: "모바일 퇴근" },
    ];
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-24">상태</TableHead>
                    <TableHead className="w-20">시간</TableHead>
                    <TableHead>상세</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sampleData.map((data, idx) => (
                    <TableRow key={`tableRow${idx}`}>
                        <TableCell className="font-medium">
                            {data.status}
                        </TableCell>
                        <TableCell>{data.time}</TableCell>
                        <TableCell>{data.detail}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

const TodoTable = () => {
    const sampleData = [
        { status: "회의", time: "10:30", detail: "주간회의" },
        { status: "업무", time: "15:00", detail: "과업 A" },
        { status: "업무", time: "15:00", detail: "과업 B" },
        { status: "미팅", time: "15:30", detail: "거래처 미팅(OO사)" },
    ];
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-20">구분</TableHead>
                    <TableHead className="w-20">시간</TableHead>
                    <TableHead>상세</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sampleData.map((data, idx) => (
                    <TableRow key={`tableRow${idx}`}>
                        <TableCell className="font-medium">
                            {data.status}
                        </TableCell>
                        <TableCell>{data.time}</TableCell>
                        <TableCell>{data.detail}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

const TodoClassTable = ({
    types = [{ name: "", value: "" }],
    setTypes = () => {},
}) => {
    const nameRef = useRef();
    const valueRef = useRef();
    const addType = () => {
        let array = [...types];
        const index = array.findIndex(
            ({ value }) => value === valueRef.current.value
        );
        if (nameRef.current.value !== "" && valueRef.current.value !== "") {
            if (index === -1) {
                array.push({
                    name: nameRef.current.value,
                    value: valueRef.current.value,
                });
                nameRef.current.value = "";
                valueRef.current.value = "";
            }
        }

        setTypes(array);
    };
    const removeType = (v) => {
        let array = [...types];
        const index = array.findIndex(({ value }) => value === v);
        if (index !== -1) {
            array.splice(index, 1);
        }
        setTypes(array);
    };
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-2/5">표기 이름</TableHead>
                    <TableHead className="w-2/5">값</TableHead>
                    <TableHead className="w-1/5 text-center">삭제</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {types.map((type, idx) => (
                    <TableRow key={`tableRow${idx}`}>
                        <TableCell className="font-medium">
                            {type.name}
                        </TableCell>
                        <TableCell>{type.value}</TableCell>
                        <TableCell>
                            <Button
                                className="p-3"
                                variant="outline"
                                onClick={() => {
                                    removeType(type.value);
                                }}
                            >
                                <Trash className="w-4 h-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell className="px-1 overflow-visible">
                        <Input placeholder="이름 입력" ref={nameRef} />
                    </TableCell>
                    <TableCell className="px-1">
                        <Input placeholder="값 입력" ref={valueRef} />
                    </TableCell>
                    <TableCell>
                        <Button
                            className="p-3"
                            variant="outline"
                            onClick={() => {
                                addType("", "");
                            }}
                        >
                            <Plus className="w-4 h-4" />
                        </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const ProjectTable = () => {
    const sampleData = [
        { project: "프로젝트A", status: "진행중", detail: "프로젝트 핫픽스" },
        { project: "프로젝트B", status: "대기중", detail: "프로젝트 배포" },
        {
            project: "프로젝트C",
            status: "완료됨",
            detail: "프로젝트 1차 테스트",
        },
    ];
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>프로젝트</TableHead>
                    <TableHead className="w-20">상태</TableHead>
                    <TableHead>상세</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sampleData.map((data, idx) => (
                    <TableRow key={`tableRow${idx}`}>
                        <TableCell className="font-medium">
                            {data.project}
                        </TableCell>
                        <TableCell>{data.status}</TableCell>
                        <TableCell>{data.detail}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

const NoticeTable = () => {
    const sampleData = [
        {
            group: "시스템안내",
            title: "정식 업데이트 안내",
            date: "2024.01.22",
            id: 1,
        },
        {
            group: "시스템안내",
            title: "[외부기간연동] 점검 예고 안내",
            date: "2024.01.20",
            id: 2,
        },
        {
            group: "시스템정보",
            title: "차량 운행 관리 기능 업데이트",
            date: "2024.01.19",
            id: 3,
        },
        {
            group: "시스템정보",
            title: "12월 온라인 교육 안내",
            date: "2024.01.17",
            id: 4,
        },
        {
            group: "시스템안내",
            title: "업데이트 안내",
            date: "2024.01.17",
            id: 5,
        },
    ];
    const navigate = useNavigate();
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">구분</TableHead>
                    <TableHead className="w-auto">제목</TableHead>
                    <TableHead className="w-[120px]">등록일</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sampleData.map((data, idx) => (
                    <TableRow key={`tableRow${idx}`}>
                        <TableCell className="font-medium truncate">
                            {data.group}
                        </TableCell>
                        <TableCell className="truncate">
                            <Button
                                variant="link"
                                className="px-0"
                                onClick={() => {
                                    navigate();
                                }}
                            >
                                {data.title}
                            </Button>
                        </TableCell>
                        <TableCell className="truncate">{data.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export {
    AttendanceTable,
    TodoTable,
    TodoClassTable,
    ProjectTable,
    NoticeTable,
};
