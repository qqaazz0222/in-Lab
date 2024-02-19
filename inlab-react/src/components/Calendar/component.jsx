import { useEffect, useState } from "react";
import { getMonthList } from "../../utils/dateUtil";
import { CardTitle } from "../Typo/component";
import { MonthPicker } from "../DatePicker/component";
import Divider from "../Divider/comonent";
import "./style.css";

const sampleData1 = [
    { time: "10:00", name: "출근" },
    { time: "12:00", name: "자리비움" },
    { time: "13:00", name: "자리비움" },
    { time: "13:00", name: "복귀" },
    { time: "18:00", name: "퇴근" },
];

const sampleData2 = [
    { time: "10:30", name: "정규 회의" },
    { time: "11:00", name: "프로젝트 회의" },
    { time: "14:00", name: "UI/UX 디자인" },
    { time: "15:00", name: "서류 제출" },
];

const AttendanceCalendar = () => {
    const today = new Date();
    const dayList = ["일", "월", "화", "수", "목", "금", "토"];
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth() + 1);
    const [date, setDate] = useState(today.getDate());
    const [day, setDay] = useState(dayList[today.getDay()]);
    const [calBodyIdx, setCalBodyIdx] = useState(0);
    const [dateList, setDateList] = useState([]);
    const [attendanceData, setAttendanceData] = useState(sampleData1);
    const selectDate = (newDate, newDay) => {
        const prevTarget = document.getElementById(`calBody${date}`);
        const newTarget = document.getElementById(`calBody${newDate}`);
        if (prevTarget) {
            prevTarget.classList.remove("selected");
        }
        if (newTarget) {
            newTarget.classList.add("selected");
        }
        setDate(newDate);
        setDay(newDay);
    };
    const initSelectDate = () => {
        const target = document.querySelector(".calBody.selected");
        if (target) {
            target.classList.remove("selected");
        }
    };
    useEffect(() => {
        setDateList(getMonthList(year, month));
        setDate(1);
        initSelectDate();
    }, [year, month]);
    useEffect(() => {
        const tempDate = new Date(year, month, date, 0, 0, 0);
        const tempDay = dayList[tempDate.getDay()];
        selectDate(date, tempDay);
    }, [date]);
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
                        id={`calBody${date.date}`}
                        className={`calBody ${date.isMain && "actived"} ${
                            date.day === "토" && "sat"
                        } ${date.day === "일" && "sun"}`}
                        key={`calBody${idx}`}
                        onClick={(e) => {
                            date.isMain && selectDate(date.date, date.day);
                        }}
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
            <div className="calendarFooter">
                <CalendarListView
                    date={{ year: year, month: month, date: date, day: day }}
                    data={attendanceData}
                />
            </div>
        </div>
    );
};

const TodoCanlendar = () => {
    const today = new Date();
    const dayList = ["일", "월", "화", "수", "목", "금", "토"];
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth() + 1);
    const [date, setDate] = useState(today.getDate());
    const [day, setDay] = useState(dayList[today.getDay()]);
    const [dateList, setDateList] = useState([]);
    const [todoData, setTodoData] = useState(sampleData2);
    const selectDate = (newDate, newDay) => {
        const prevTarget = document.getElementById(`calBody${date}`);
        const newTarget = document.getElementById(`calBody${newDate}`);
        prevTarget.classList.remove("selected");
        newTarget.classList.add("selected");
        setDate(newDate);
        setDay(newDay);
    };

    useEffect(() => {
        setDateList(getMonthList(year, month));
    }, [year, month]);
    return (
        <div className="calendar attendanceCalendar">
            <div className="calendarHeader">
                <CardTitle title="과업 캘린더" />
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
                        id={`calBody${date.date}`}
                        className={`calBody ${date.isMain && "actived"} ${
                            date.day === "토" && "sat"
                        } ${date.day === "일" && "sun"}`}
                        key={`calBody${idx}`}
                        onClick={(e) => {
                            date.isMain && selectDate(date.date, date.day);
                        }}
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
            <div className="calendarFooter">
                <CalendarListView
                    date={{ year: year, month: month, date: date, day: day }}
                    data={todoData}
                />
            </div>
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

const CalendarListView = ({
    date = { year: 0, month: 0, date: 0, day: "" },
    data = [],
}) => {
    return (
        <div className="listView">
            <div className="listViewHeader">
                {date.year}년 {date.month}월 {date.date}일 ({date.day})
            </div>
            {data.map((item, idx) => (
                <div className="listViewItemWrap" key={`item${idx}`}>
                    <div className="dateInfoWrap">
                        <div className="time">{item.time}</div>
                    </div>
                    <div className="detailInfoWrap">
                        <div className="detail">{item.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { AttendanceCalendar, TodoCanlendar };
