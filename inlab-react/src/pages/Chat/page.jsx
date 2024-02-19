import { useEffect, useState } from "react";
import Profile from "../../components/Profile/component";
import { SectionTitle } from "../../components/Typo/component";
import "./style.css";

const sampleData = [
    { cid: "chatid1", name: "대화방1", lastChat: "마지막 대화 1" },
    { cid: "chatid2", name: "대화방2", lastChat: "마지막 대화 2" },
    { cid: "chatid3", name: "대화방3", lastChat: "마지막 대화 3" },
    { cid: "chatid4", name: "대화방4", lastChat: "마지막 대화 4" },
    { cid: "chatid5", name: "대화방5", lastChat: "마지막 대화 5" },
    { cid: "chatid6", name: "대화방6", lastChat: "마지막 대화 6" },
    { cid: "chatid1", name: "대화방1", lastChat: "마지막 대화 1" },
    { cid: "chatid2", name: "대화방2", lastChat: "마지막 대화 2" },
    { cid: "chatid3", name: "대화방3", lastChat: "마지막 대화 3" },
    { cid: "chatid4", name: "대화방4", lastChat: "마지막 대화 4" },
    { cid: "chatid5", name: "대화방5", lastChat: "마지막 대화 5" },
    { cid: "chatid6", name: "대화방6", lastChat: "마지막 대화 6" },
    { cid: "chatid1", name: "대화방1", lastChat: "마지막 대화 1" },
    { cid: "chatid2", name: "대화방2", lastChat: "마지막 대화 2" },
    { cid: "chatid3", name: "대화방3", lastChat: "마지막 대화 3" },
    { cid: "chatid4", name: "대화방4", lastChat: "마지막 대화 4" },
    { cid: "chatid5", name: "대화방5", lastChat: "마지막 대화 5" },
    { cid: "chatid6", name: "대화방6", lastChat: "마지막 대화 6" },
    { cid: "chatid1", name: "대화방1", lastChat: "마지막 대화 1" },
    { cid: "chatid2", name: "대화방2", lastChat: "마지막 대화 2" },
    { cid: "chatid3", name: "대화방3", lastChat: "마지막 대화 3" },
    { cid: "chatid4", name: "대화방4", lastChat: "마지막 대화 4" },
    { cid: "chatid5", name: "대화방5", lastChat: "마지막 대화 5" },
    { cid: "chatid6", name: "대화방6", lastChat: "마지막 대화 6" },
];

const Chat = () => {
    const [chatRoomList, setChatRoomList] = useState(sampleData);
    const [selRoom, setSelRoom] = useState(0);
    useEffect(() => {
        console.log(selRoom);
    }, [selRoom]);
    return (
        <div id="chatPage" className="page">
            <div className="pageSideBarWrap">
                <div className="pageSideBarHeaderWrap">
                    <SectionTitle title="대화 목록" />
                </div>
                <div className="pageSideBarBodyWrap">
                    <div className="chatListWrap">
                        {chatRoomList.map((chatRoom, idx) => (
                            <ChatRoom
                                cid={chatRoom.cid}
                                name={chatRoom.name}
                                lastChat={chatRoom.lastChat}
                                isSelect={idx === selRoom}
                                onClick={() => {
                                    setSelRoom(idx);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="pageContentWrap">
                <div className="pageContnetHeaderWrap"></div>
                <div className="pageContentBodyWrap"></div>
            </div>
        </div>
    );
};

const ChatRoom = ({
    cid = "",
    name = "",
    lastChat = "",
    isSelect = false,
    onClick = () => {},
}) => {
    return (
        <div className={`chatRoom ${isSelect && "selected"}`} onClick={onClick}>
            <Profile uid="" size={40} />
            <div className="chatRoomInfoWrap">
                <div className="roomName">{name}</div>
                <div className="lastChat">{lastChat}</div>
            </div>
        </div>
    );
};

export default Chat;
