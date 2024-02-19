import { TodoCanlendar } from "../../components/Calendar/component";
import { TodoSummary } from "../../components/Todo/component";
import { PageTitle } from "../../components/Typo/component";
import "./style.css";

const Todo = () => {
    return (
        <div id="todoPage" className="page">
            <div className="pageHeaderWrap">
                <PageTitle
                    title="할일"
                    subTitle="나의 할일 현황 및 기록을 관리합니다."
                />
            </div>
            <div className="pageContentWrap pageContentGrid">
                <div className="summaryCard">
                    <TodoSummary />
                </div>
                <div className="calendarCard">
                    <TodoCanlendar />
                </div>
            </div>
            <div className="pageFooterWrap"></div>
        </div>
    );
};

export default Todo;
