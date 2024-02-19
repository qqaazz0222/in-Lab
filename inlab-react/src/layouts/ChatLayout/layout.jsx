import { Outlet } from "react-router-dom";
import Dock from "../../components/Dock/component";
import "./style.css";

const ChatLayout = () => {
    return (
        <div id="chatLayout">
            <Dock />
            <div className="pageWrap">
                <Outlet />
            </div>
        </div>
    );
};

export default ChatLayout;
