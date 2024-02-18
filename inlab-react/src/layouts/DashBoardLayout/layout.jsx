import { Outlet } from "react-router-dom";
import Header from "../../components/Header/component";
import Dock from "../../components/Dock/component";
import "./style.css";

const DashBoardLayout = () => {
    return (
        <div id="dashBoardLayout">
            <Header />
            <Dock />
            <div className="pageWrap">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoardLayout;
