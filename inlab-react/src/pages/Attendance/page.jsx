import { AttendanceCalendar } from "../../components/Calendar/component";
import { PageTitle } from "../../components/Typo/component";
import "./style.css";

const Attendance = () => {
    return (
        <div id="attendancePage" className="page">
            <div className="pageHeaderWrap">
                <PageTitle
                    title="근태"
                    subTitle="나의 근태 현황 및 기록을 관리합니다."
                />
            </div>
            <div className="pageContentWrap pageContentGrid">
                <div className="calendarCard">
                    <AttendanceCalendar />
                </div>
            </div>
            <div className="pageFooterWrap"></div>
        </div>
    );
};

export default Attendance;
