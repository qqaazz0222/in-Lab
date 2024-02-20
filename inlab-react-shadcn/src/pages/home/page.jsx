// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
import Notice from "@/components/notice";
import { MyCalendar } from "@/components/customCalendar";
// 아이콘
// 스타일
import "./style.css";

const HomePage = () => {
    // const [date, setDate] = useState(new Date());
    return (
        <div id="homePage" className="page">
            <MyCalendar />
            <Notice />
        </div>
    );
};

export default HomePage;
