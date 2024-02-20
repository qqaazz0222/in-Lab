// 라이브러리
// 서비스
// 컴포넌트
import { TodoCalendar } from "@/components/customCalendar";
import { TodoManage } from "@/components/manage";
import { TodoSummary } from "@/components/summary";
// 아이콘
// 스타일

const TodoPage = () => {
    return (
        <div id="todoPage" className="page">
            <div className="flex flex-col gap-4">
                <TodoSummary />
                <TodoCalendar />
            </div>
            <TodoManage />
        </div>
    );
};

export default TodoPage;
