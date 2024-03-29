import { Outlet } from "react-router-dom";
import "./style.css";

const DashBoardLayout = () => {
    return (
        <div id="dashBoardLayout">
            <div className="pageWrap">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoardLayout;
