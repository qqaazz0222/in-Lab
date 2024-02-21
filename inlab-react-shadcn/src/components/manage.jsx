// 라이브러리
import { useEffect, useRef, useState } from "react";
// 서비스
// 컴포넌트
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TodoClassTable, TodoManageTable } from "@/components/customTable";
import { DateTimePicker } from "@/components/customDatePicker";

// 아이콘
import { Settings, RotateCcw, Plus } from "lucide-react";
// 스타일

const TodoManage = () => {
    const now = new Date();
    const nowAfterOne = new Date(now + 10000);
    const [status, setStatus] = useState([]);
    const [typeList, setTypeList] = useState([
        { name: "업무", value: "job" },
        { name: "회의", value: "meeting" },
    ]);
    const [type, setType] = useState("all");
    const nameRef = useRef();
    const typeRef = useRef();
    const [sDate, setSDate] = useState(now);
    const [eDate, setEDate] = useState(nowAfterOne);
    const detailRef = useRef();
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
    const checkDates = () => {
        if (sDate > eDate) {
            console.error("오류발생");
            if (eDate > now) {
                setSDate(now);
            } else if (sDate < now) {
                setEDate(now);
            } else {
                setSDate(now);
                setEDate(Date(now + 3600));
            }
        }
    };
    const createToDoItem = (
        name = "",
        type = "",
        sDate = new Date(),
        eDate = new Date(),
        detail = ""
    ) => {
        console.log("[NAME] =>", name);
        console.log("[TYPE] =>", type);
        console.log("[START] =>", sDate);
        console.log("[END] =>", eDate);
        console.log("[DETAIL] =>", detail);
    };
    useEffect(() => {
        console.log("start", sDate);
        console.log("end", eDate);
        checkDates();
    }, [sDate, eDate]);
    return (
        <Card>
            <CardHeader>
                <CardTitle>할 일 관리</CardTitle>
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
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>진행중인 할 일</AccordionTrigger>
                        <AccordionContent>
                            <TodoManageTable />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>대기중인 할 일</AccordionTrigger>
                        <AccordionContent>
                            <TodoManageTable />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>완료된 할 일</AccordionTrigger>
                        <AccordionContent>
                            <TodoManageTable />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
            <CardFooter>
                <div className="flex flex-col w-full gap-4">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        할 일 추가
                    </h4>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-row items-center gap-2 w-full">
                            <div className="flex flex-1 flex-col space-y-1.5">
                                <Label htmlFor="name">할 일</Label>
                                <Input
                                    id="name"
                                    placeholder="할 일을 입력하세요."
                                    ref={nameRef}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5 w-[160px]">
                                <Label htmlFor="selectType">구분</Label>
                                <Select ref={typeRef}>
                                    <SelectTrigger id="selectType">
                                        <SelectValue placeholder="구분을 선택하세요." />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        {typeList.map((type) => (
                                            <SelectItem
                                                value={type.value}
                                                key={type.value}
                                            >
                                                {type.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 w-full">
                            <div className="flex flex-col space-y-1.5 w-full">
                                <Label htmlFor="startPicker">시작</Label>
                                <div
                                    id="startPicker"
                                    className="flex flex-row items-center gap-2 w-full"
                                >
                                    <DateTimePicker
                                        placeholder="시작일 및 시간을 선택하세요."
                                        date={sDate}
                                        setDate={setSDate}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1.5 w-full">
                                <Label htmlFor="endPicker">종료</Label>
                                <div
                                    id="endPicker"
                                    className="flex flex-row items-center gap-2 w-full"
                                >
                                    <DateTimePicker
                                        placeholder="종료일 및 시간을 선택하세요."
                                        date={eDate}
                                        setDate={setEDate}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col space-y-1.5">
                            <Label htmlFor="startDatePicker">세부 내용</Label>
                            <Textarea
                                id="detail"
                                ref={detailRef}
                                placeholder="세부 내용을 입력하세요."
                            />
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-end gap-2 w-full">
                            <Button variant="outline" className="gap-2">
                                <RotateCcw className="w-4 h-4" />
                                <span>초기화</span>
                            </Button>
                            <Button
                                className="gap-2"
                                onClick={() => {
                                    createToDoItem(
                                        nameRef.current.value,
                                        typeRef.current.value,
                                        sDate,
                                        eDate,
                                        detailRef.current.value
                                    );
                                }}
                            >
                                <Plus className="w-4 h-4" />
                                <span>추가</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export { TodoManage };
