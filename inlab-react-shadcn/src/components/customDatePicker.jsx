import { useCallback, useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";

const DatePicker = ({ placeholder }) => {
    const [date, setDate] = useState();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "justify-start text-left font-normal w-full",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                        format(date, "PPP", { locale: ko })
                    ) : (
                        <span>
                            {placeholder !== ""
                                ? placeholder
                                : "날짜를 선택하세요."}
                        </span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
};

const DateTimePicker = ({
    placeholder = "",
    date = new Date(),
    setDate = () => {},
}) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "justify-start text-left font-normal w-full",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                        format(date, "PPP EEE p", { locale: ko })
                    ) : (
                        <span>
                            {placeholder !== ""
                                ? placeholder
                                : "날짜를 선택하세요."}
                        </span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
                <Separator />
                <TimePicker data={date} setDate={setDate} />
            </PopoverContent>
        </Popover>
    );
};

const TimePicker = ({ date = new Date(), setDate = () => {} }) => {
    const hourRef = useRef();
    const minRef = useRef();
    const NullCheck = (value) => {
        if (value === undefined || value === null || value === "") {
            return true;
        } else {
            return false;
        }
    };
    const setHour = () => {
        if (!NullCheck(hourRef.current.value)) {
            const temp = date;
            let value = hourRef.current.value;
            if (value < 0) {
                hourRef.current.value = 0;
                value = 0;
            }
            if (value > 23) {
                hourRef.current.value = 23;
                value = 23;
            }
            temp.setHours(parseInt(value));
            setDate(temp);
        }
    };
    const setMin = () => {
        if (!NullCheck(minRef.current.value)) {
            const temp = date;
            let value = minRef.current.value;
            if (value < 0) {
                minRef.current.value = 0;
                value = 0;
            }
            if (value > 59) {
                minRef.current.value = 59;
                value = 59;
            }
            temp.setMinutes(parseInt(value));
            setDate(temp);
        }
    };
    useEffect(() => {
        hourRef.current.value = date.getHours();
        minRef.current.value = date.getMinutes();
    }, []);
    return (
        <div className="flex flex-row items-center gap-2 w-full p-2">
            <Clock className="w-4 h-4 mx-2" />
            <Input
                type="number"
                min="0"
                max="23"
                placeholder="시"
                onInput={setHour}
                className="flex-1 max-w-24 text-center"
                ref={hourRef}
            />
            <span>:</span>
            <Input
                id="test"
                type="number"
                min="0"
                max="59"
                placeholder="분"
                onInput={setMin}
                className="flex-1 max-w-24 text-center"
                ref={minRef}
            />
        </div>
    );
};

export { DatePicker, DateTimePicker };
