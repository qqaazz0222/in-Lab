import { useEffect, useState } from "react";
import Icon from "../Icon/component";
import "./style.css";

const MonthPicker = ({
    year = 2024,
    month = 1,
    setYear = () => {},
    setMonth = () => {},
}) => {
    const [selYear, setSelYear] = useState(year);
    const [selMonth, setSelMonth] = useState(month);
    const [isVisible, setIsVisible] = useState(false);
    const prevMonth = () => {
        if (selMonth === 1) {
            setSelYear(selYear - 1);
            setSelMonth(12);
        } else {
            setSelMonth(selMonth - 1);
        }
    };
    const nextMonth = () => {
        if (selMonth === 12) {
            setSelYear(selYear + 1);
            setSelMonth(1);
        } else {
            setSelMonth(selMonth + 1);
        }
    };
    const currentMonth = () => {
        const today = new Date();
        setSelYear(today.getFullYear());
        setSelMonth(today.getMonth() + 1);
    };
    const switchVisible = () => {
        setIsVisible(!isVisible);
    };
    useEffect(() => {
        setYear(selYear);
    }, [selYear]);
    useEffect(() => {
        setMonth(selMonth);
    }, [selMonth]);
    return (
        <div className="monthPicker">
            <div className="group1Wrap">
                <button className="btn prevBtn" onClick={prevMonth}>
                    <Icon name="chevron-left" size="20px" color="gray-500" />
                </button>
                <div className="indicator">
                    {year}.{month.toString().padStart(2, "0")}
                </div>
                <button className="btn calBtn" onClick={switchVisible}>
                    <Icon name="calendar" size="20px" color="gray-500" />
                    {isVisible && <div className="box">asdads</div>}
                </button>
                <button className="btn nextBtn" onClick={nextMonth}>
                    <Icon name="chevron-right" size="20px" color="gray-500" />
                </button>
            </div>
            <div className="group2Wrap">
                <button className="btn todayBtn" onClick={currentMonth}>
                    오늘
                </button>
            </div>
        </div>
    );
};

export { MonthPicker };
