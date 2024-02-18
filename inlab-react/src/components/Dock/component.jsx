import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon/component";
import "./style.css";

const Dock = () => {
    const navigate = useNavigate();
    const uri = window.location.pathname;
    const [isOpen, setIsOpen] = useState(false);
    const nav = [
        { name: "홈", icon: "home", link: "/home" },
        { name: "출결", icon: "calendar", link: "/attendance" },
        { name: "할일", icon: "square-edit", link: "/todo" },
        { name: "프로젝트", icon: "folder", link: "/project" },
        { name: "채팅", icon: "message-square", link: "/chat" },
    ];
    return (
        <>
            <div id="sideDockComp" className={isOpen ? "opened" : ""}>
                <div
                    className="menuWrap"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    {isOpen ? (
                        <Icon name="close-x" size="32px" color="gray-50" />
                    ) : (
                        <Icon name="menu-burger" size="32px" color="gray-50" />
                    )}
                </div>
                <div className="navWrap">
                    {nav.map((item, idx) => (
                        <div
                            className={
                                uri === item.link
                                    ? "navItemWrap selected"
                                    : "navItemWrap"
                            }
                            key={`navItem${idx}`}
                            onClick={() => {
                                navigate(item.link);
                            }}
                        >
                            <Icon
                                name={item.icon}
                                size="32px"
                                color="gray-50"
                            />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div id="bottomDockComp">
                <div className="navWrap">
                    {nav.map((item, idx) => (
                        <div
                            className={
                                uri === item.link
                                    ? "navItemWrap selected"
                                    : "navItemWrap"
                            }
                            key={`navItem${idx}`}
                            onClick={() => {
                                navigate(item.link);
                            }}
                        >
                            <Icon
                                name={item.icon}
                                size="24px"
                                color="gray-50"
                            />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Dock;
