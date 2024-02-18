import { useState } from "react";
import Icon from "../../components/Icon/component";
import "./style.css";

const Notice = () => {
    const [isClose, setIsClose] = useState(false);
    return (
        <>
            {!isClose && (
                <div id="notice">
                    <div className="noticeHeader">in:Lab 공지사항</div>
                    <div className="noticeBody">공지사항입니다.</div>

                    <div
                        className="noticeClose"
                        onClick={() => {
                            setIsClose(true);
                        }}
                    >
                        <Icon name="close-x" color="gray-500" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Notice;
