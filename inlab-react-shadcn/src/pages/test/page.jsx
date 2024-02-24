import { useEffect, useState } from "react";
import io from "socket.io-client";
import useUserStore from "@/stores/userStore";

const socket = io.connect("http://localhost:80");

const TestPage = () => {
    const userData = useUserStore((state) => state.userData);
    const roomname = "testroom";
    const username = userData.name;
    const joinRoom = () => {
        socket.emit("join_room", { room: roomname, username: username });
    };
    const sendMessage = async () => {
        const currentMsg = "테스트메시지";
        if (currentMsg !== "") {
            const messageData = {
                room: roomname,
                author: username,
                message: currentMsg,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };
            await socket.emit("send_message", messageData);
        }
    };
    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data);
        });
    }, [socket]);
    return (
        <div id="testPage">
            <button onClick={joinRoom}>방접속</button>
            <button onClick={sendMessage}>보내기</button>
        </div>
    );
};

export default TestPage;
