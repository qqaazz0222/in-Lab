import Divider from "../Divider/comonent";
import { CardTitle } from "../Typo/component";
import "./style.css";

const TodoSummary = () => {
    return (
        <div className="card todoSummary ">
            <div className="cardHeader todoSummaryHeader ">
                <CardTitle title="요약" />
                <Divider />
            </div>
            <div className="cardBody todoSummaryBody ">
                <div className="summaryInfoWrap">
                    <div className="section waiting">
                        <div className="sectionTitle">대기중</div>
                    </div>
                    <div className="section process">
                        <div className="sectionTitle">진행중</div>
                    </div>
                    <div className="section finished">
                        <div className="sectionTitle">완료</div>
                    </div>
                    <div className="section other">
                        <div className="sectionTitle">기타</div>
                    </div>
                </div>
            </div>
            <div className="cardFooter"></div>
        </div>
    );
};

export { TodoSummary };
