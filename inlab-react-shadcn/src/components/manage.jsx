// 라이브러리
import { useEffect, useRef, useState } from "react";
// 서비스
// 컴포넌트
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// 아이콘
import { Settings } from "lucide-react";
import { TodoClassTable } from "./customTable";
// 스타일

const TodoManage = () => {
    const [status, setStatus] = useState([]);
    const [typeList, setTypeList] = useState([
        { name: "업무", value: "job" },
        { name: "회의", value: "meeting" },
    ]);
    const [type, setType] = useState("all");
    const statusToggle = (value) => {
        let array = [...status];
        const index = array.indexOf(value);
        if (index === -1) {
            array.push(value);
        } else {
            array.splice(index, 1);
        }
        setStatus(array);
    };
    useEffect(() => {
        console.log(type);
    }, [type]);
    return (
        <Card>
            <CardHeader>
                <CardTitle>할일 관리</CardTitle>
                <CardDescription>@ To Do Manage</CardDescription>
                <Separator />
                <div className="flex flex-row items-center justify-end flex-wrap gap-4">
                    <div className="flex flex-row items-center gap-2 w-fit h-fit">
                        <Select
                            onValueChange={(value) => {
                                setType(value);
                            }}
                        >
                            <SelectTrigger className="w-[160px]">
                                <SelectValue placeholder="구분" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">전체</SelectItem>
                                {typeList.map((typeItem, idx) => (
                                    <SelectItem
                                        value={typeItem.value}
                                        key={`selectItem${idx}`}
                                    >
                                        {typeItem.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Sheet>
                            <SheetTrigger>
                                <Button variant="outline" className="p-3">
                                    <Settings className="w-4 h-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>구분 관리</SheetTitle>
                                    <SheetDescription>
                                        @ Todo Class Manage
                                    </SheetDescription>
                                </SheetHeader>
                                <TodoClassTable
                                    types={typeList}
                                    setTypes={(v) => {
                                        setTypeList(v);
                                    }}
                                />
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
};

export { TodoManage };
