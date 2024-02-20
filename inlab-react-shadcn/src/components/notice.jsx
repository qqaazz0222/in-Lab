// 라이브러리
// 서비스
// 컴포넌트
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { NoticeTable } from "./customTable";
// 아이콘
// 스타일

const Notice = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>공지사항</CardTitle>
                <CardDescription>@ Notice</CardDescription>
            </CardHeader>
            <CardContent>
                <NoticeTable />
            </CardContent>
        </Card>
    );
};

export default Notice;
