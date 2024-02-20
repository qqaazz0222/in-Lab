import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
    Home,
    CalendarDays,
    ListTodo,
    FolderGit,
    MessageCircle,
} from "lucide-react";
import "./responsive.css";

const NavList = [
    { name: "홈", link: "home", icon: <Home className="w-6 h-6" /> },
    { name: "할일", link: "todo", icon: <ListTodo className="w-6 h-6" /> },
    {
        name: "근태",
        link: "attendance",
        icon: <CalendarDays className="w-6 h-6" />,
    },

    {
        name: "프로젝트",
        link: "project",
        icon: <FolderGit className="w-6 h-6" />,
    },
    {
        name: "채팅",
        link: "chat",
        icon: <MessageCircle className="w-6 h-6" />,
    },
];

const Dock = () => {
    const navigate = useNavigate();
    const currentUrl = window.location.pathname.split("/")[1];
    return (
        <div id="dock" className=" bg-slate-950 border-slate-300 z-20 dock">
            {NavList.map((nav, idx) => (
                <>
                    <Button
                        variant={currentUrl === nav.link ? "" : "ghost"}
                        className="h-auto px-4 py-4 text-white hover:bg-slate-900 hover:text-white"
                        onClick={() => {
                            navigate("/" + nav.link);
                        }}
                        key={`nav${idx}`}
                    >
                        {nav.icon}
                    </Button>
                </>
            ))}
        </div>
    );
};

export default Dock;
