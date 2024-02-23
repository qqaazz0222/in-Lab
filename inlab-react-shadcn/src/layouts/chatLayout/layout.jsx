import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Dock from "@/components/dock";

const ChatLayout = () => {
    return (
        <div id="chatLayout" className="w-svw h-svh max-h-svh">
            <Header />
            <Dock />
            <div className="pageWrap">
                <Outlet />
            </div>
        </div>
    );
};

export default ChatLayout;
