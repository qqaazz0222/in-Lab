import { Outlet } from "react-router-dom";
import "./style.css";

const RootLayout = () => {
    return (
        <div id="rootLayout">
            <div className="pageWrap">
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
