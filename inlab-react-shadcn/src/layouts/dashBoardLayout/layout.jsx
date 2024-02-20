import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Dock from "@/components/dock";

const DashBoardLayout = () => {
    return (
        <div id="dashBoardLayout" className="w-svw h-svh">
            <Header />
            <Dock />
            <div className="pageWrap">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoardLayout;
