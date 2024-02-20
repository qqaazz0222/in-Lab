// 라이브러리
// 서비스
// 컴포넌트
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

// 아이콘
import { Play, Pause, ClipboardCheck } from "lucide-react";
// 스타일

const TodoSummary = () => {
    const sampleData = [
        {
            status: "진행중",
            icon: <Play className="w-4 h-4 text-muted stroke-foreground" />,
            list: ["진행중1", "진행중2", "진행중3", "진행중4"],
        },
        {
            status: "대기중",
            icon: <Pause className="w-4 h-4 text-muted stroke-foreground" />,
            list: ["대기중1", "대기중2"],
        },
        {
            status: "완료됨",
            icon: (
                <ClipboardCheck className="w-4 h-4 text-muted stroke-foreground" />
            ),
            list: ["왼료됨1", "완료됨2", "완료됨3"],
        },
    ];
    return (
        <div className="flex flex-row w-full gap-4">
            {sampleData.map((data, idx) => (
                <Card className="flex-1" key={`summaryCard${idx}`}>
                    <CardHeader className="pb-4">
                        <div className="flex flex-row items-center justify-between w-full">
                            <p className="font-medium">{data.status}</p>
                            {data.icon}
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Separator />
                        <div className="h-32 max-h-32 overflow-scroll">
                            <Table>
                                <TableBody>
                                    {data.list.map((item) => (
                                        <TableRow key={item}>
                                            <TableCell className="px-4 py-2 font-medium truncate">
                                                {item}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export { TodoSummary };
