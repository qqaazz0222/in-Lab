import { useNavigate } from "react-router-dom";
import useUserStore from "@/stores/userStore";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Bell,
    HelpCircle,
    LogOut,
    Plus,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react";
import { useEffect } from "react";

const Header = () => {
    const navigate = useNavigate();
    // 전역상태
    const userData = useUserStore((state) => state.userData);
    const clearUser = useUserStore((state) => state.clearUser);
    const signOut = () => {
        clearUser();
    };
    useEffect(() => {
        if (
            userData.uid === "" ||
            userData.name === "" ||
            userData.token === ""
        ) {
            navigate("/");
        }
    }, [userData]);
    return (
        <div
            id="header"
            className="flex flex-row items-center justify-end gap-3 px-4 py-4 w-full h-fit z-10 fixed top-0 left-0 bg-opacity-50 backdrop-blur-md border-b border-border"
        >
            <div className="flex flex-row items-center">
                <Button variant="ghost">
                    <Bell className="w-6 h-6" />
                </Button>
                <Button variant="ghost">
                    <HelpCircle className="w-6 h-6" />
                </Button>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/qqaazz0222.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>프로필</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>팀</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>사용자 초대</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Plus className="mr-2 h-4 w-4" />
                        <span>새로운 팀 생성</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>설정</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>로그아웃</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default Header;
