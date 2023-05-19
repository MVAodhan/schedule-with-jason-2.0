import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Temporal, toTemporalInstant } from "@js-temporal/polyfill";

Date.prototype.toTemporalInstant = toTemporalInstant;

import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import axios from "axios";
import { useRouter } from "next/router";
import { Episode } from "@prisma/client";

interface Months {
	May: number;
	Jun: number;
}

type MonthMap = {
	[key: string]: number;
};

export function DateTime({ episode }: { episode: Episode }) {
	const today = Temporal.Now.instant();
	const [selectedDay, setSelectedDay] = useState<any>(today);
	const router = useRouter();
	const handleSetSelectedDay = async (date: Date | undefined) => {
		if (!date) return;

		const months: Months & MonthMap = {
			May: 5,
			Jun: 6,
		};
		const monthName = date.toLocaleString("en", { month: "short" });
		const monthNumber: number = months[monthName as keyof Months];
		const pst = Temporal.ZonedDateTime.from({
			year: date.getFullYear(),
			month: monthNumber,
			day: date.getDate(),
			hour: 9,
			timeZone: "America/Los_Angeles",
		});
		const utcFromPst = pst.toInstant().toString();
		setSelectedDay(pst.toLocaleString("en-NZ", { calendar: "gregory" }));
		await axios.post("/api/update-recurring", {
			ep: episode,
			date: utcFromPst,
		});
		router.push("/");
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[280px] justify-start text-left font-normal",
						!selectedDay && "text-muted-foreground"
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					Select Next Solo Episode Date
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<Calendar
					mode="single"
					selected={selectedDay}
					onSelect={handleSetSelectedDay}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
