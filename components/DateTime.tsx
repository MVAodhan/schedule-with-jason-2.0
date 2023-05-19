import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Temporal, toTemporalInstant } from "@js-temporal/polyfill";

// eslint-disable-next-line no-undef
Date.prototype.toTemporalInstant = toTemporalInstant;

import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import axios from "axios";
import { useRouter } from "next/router";
import { Episode } from "@prisma/client";

export function DateTime({ episode }: { episode: Episode }) {
	const today = Temporal.Now.instant();
	const [selectedDay, setSelectedDay] = useState<any>(today);
	const router = useRouter();
	const handleSetSelectedDay = async (e) => {
		const months = {
			May: 5,
			Jun: 6,
		};
		const bits = e.toString().split(" ");
		const pst = Temporal.ZonedDateTime.from({
			year: bits[3],
			month: months[bits[1]],
			day: bits[2],
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
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={selectedDay}
					onSelect={handleSetSelectedDay}
					initialFocus
					showOutsideDays
				/>
			</PopoverContent>
		</Popover>
	);
}
