// 라이브러리
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 레이아웃
import RootLayout from "./layouts/RootLayout/layout";
import DashBoardLayout from "./layouts/DashBoardLayout/layout";
// 페이지
import Sign from "./pages/Sign/page";
import Home from "./pages/Home/page";
import Attendance from "./pages/Attendance/page";
import Todo from "./pages/Todo/page";
import Project from "./pages/Project/page";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<RootLayout />}>
                        <Route path="/" element={<Sign />} />
                    </Route>
                    <Route element={<DashBoardLayout />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/attendance" element={<Attendance />} />
                        <Route path="/todo" element={<Todo />} />
                        <Route path="/project" element={<Project />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
