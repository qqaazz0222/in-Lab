// 라이브러리
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// 서비스
// 레이아웃
import DashBoardLayout from "./layouts/dashBoardLayout/layout";
// 페이지
import SignPage from "./pages/sign/page";
import HomePage from "./pages/home/page";
import TodoPage from "./pages/todo/page";
// 스타일
import "./index.css";
import "./custom.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignPage />,
    },
    {
        element: <DashBoardLayout />,
        children: [
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/todo",
                element: <TodoPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);