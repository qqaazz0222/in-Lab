// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    AttendanceTable,
    ProjectTable,
    TodoTable,
} from "@/components/customTable";
// 아이콘
// 스타일

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Card>
            <CardHeader>
                <CardTitle>나의 캘린더</CardTitle>
                <CardDescription>@ My Calendar</CardDescription>
            </CardHeader>
            <CardContent>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border w-full"
                />
            </CardContent>
            <CardFooter>
                <Tabs defaultValue="todo" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="todo">할 일</TabsTrigger>
                        <TabsTrigger value="attendance">근태</TabsTrigger>
                        <TabsTrigger value="project">프로젝트</TabsTrigger>
                    </TabsList>
                    <TabsContent value="todo">
                        <TodoTable />
                    </TabsContent>
                    <TabsContent value="attendance">
                        <AttendanceTable />
                    </TabsContent>
                    <TabsContent value="project">
                        <ProjectTable />
                    </TabsContent>
                </Tabs>
            </CardFooter>
        </Card>
    );
};

const TodoCalendar = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Card>
            <CardHeader>
                <CardTitle>할 일 캘린더</CardTitle>
                <CardDescription>@ To Do Calendar</CardDescription>
            </CardHeader>
            <CardContent>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border w-full"
                />
            </CardContent>
            <CardFooter>
                <TodoTable />
            </CardFooter>
        </Card>
    );
};

export { MyCalendar, TodoCalendar };
