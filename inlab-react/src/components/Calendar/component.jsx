import { useEffect, useState } from "react";
import { getMonthList } from "../../utils/dateUtil";
import { CardTitle } from "../Typo/component";
import { MonthPicker } from "../DatePicker/component";
import Divider from "../Divider/comonent";
import "./style.css";

const genSampleData = (endDate) => {
    let result = [];
    for (let i = 1; i <= endDate; i++) {
        let temp = { name: "" };
    }
};

const AttendanceCalendar = () => {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth() + 1);
    const [dateList, setDateList] = useState([]);
    const dayList = ["일", "월", "화", "수", "목", "금", "토"];
    useEffect(() => {
        setDateList(getMonthList(year, month));
    }, [year, month]);
    return (
        <div className="calendar attendanceCalendar">
            <div className="calendarHeader">
                <CardTitle title="근태 캘린더" />
                <Divider />
                <div className="pickerWrap">
                    <MonthPicker
                        year={year}
                        month={month}
                        setYear={(y) => {
                            setYear(y);
                        }}
                        setMonth={(m) => {
                            setMonth(m);
                        }}
                    />
                </div>
            </div>
            <div className="calendarBody">
                {dayList.map((day, idx) => (
                    <div className="calHead" key={`calHead${idx}`}>
                        {day}
                    </div>
                ))}
                {dateList.map((date, idx) => (
                    <div
                        className={`calBody ${date.isMain && "actived"} ${
                            date.day === "토" && "sat"
                        } ${date.day === "일" && "sun"}`}
                    >
                        <span className="date">{date.date}</span>

                        {date.isMain && (
                            <>
                                <Schedule name="일정일정일정" />
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className="calendarFooter"></div>
        </div>
    );
};

const Schedule = ({ name = "", sid = 0, color = "gray" }) => {
    return (
        <div className="schedule">
            <span className="scheduleName">{name}</span>
        </div>
    );
};

export { AttendanceCalendar };
