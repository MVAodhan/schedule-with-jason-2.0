import { DateTime } from "luxon";

export const getDates = (date: string, timezone: string = "utc") => {
	let usDate;
	let nzDate;
	let dt = DateTime.fromISO(date, { zone: timezone });

	let zonedDt = DateTime.fromObject(
		{
			day: dt.day,
			month: dt.month,
			hour: dt.hour,
			minute: dt.minute,
		},
		{ zone: timezone }
	);
	if (zonedDt.zone.name === "America/Los_Angeles") {
		usDate = zonedDt.toFormat("ff");
		nzDate = zonedDt.setZone("Pacific/Auckland").toFormat("ff");
	} else {
		usDate = zonedDt.setZone("America/Los_Angeles").toFormat("ff");
		nzDate = zonedDt.toFormat("ff");
	}
	if (zonedDt.zone.name === "utc") {
		usDate = zonedDt.setZone("America/Los_Angeles").toFormat("ff");
		nzDate = zonedDt.setZone("Pacific/Auckland").toFormat("ff");
	}

	return { usDate, nzDate };
};

export const getUTCDate = (date: string, timezone: string) => {
	let utcDate;
	let dt = DateTime.fromISO(date, { zone: timezone });
	let zonedDt = DateTime.fromObject(
		{
			day: dt.day,
			month: dt.month,
			hour: dt.hour,
			minute: dt.minute,
		},
		{ zone: timezone }
	);

	utcDate = zonedDt.setZone("utc").toISO();

	return utcDate;
};

export const disableButton = (userId: any) => {
	if (
		userId === "user_2NRW0JcZzyuwZLILxooWGFUcBO5" ||
		userId === "user_2MwVLo4xFl6ch7xCP1Z4PIuFjpV"
	) {
		return false;
	} else {
		return true;
	}
};
export const captionDisclaimer = () => {
	return `
*Captions provided by White Coat Captioning (https://whitecoatcaptioning.com/). 
Communication Access Realtime Translation (CART) is provided in order to facilitate
communication accessibility and may not be a totally verbatim record of the proceedings.*`;
};

export const getCredits = () => {
	return `
Watch future episodes live at https://twitch.tv/jlengstorf

This episode was sponsored by:
- Netlify (https://lwj.dev/netlify)
- Nx (https://lwj.dev/nx)
- New Relic (https://lwj.dev/new-relic)
- Pluralsight (https://lwj.dev/pluralsight)

Live transcription by White Coat Captioning (https://whitecoatcaptioning.com/)
`;
};

export const getHighlightText = (
	twitter: string = "",
	tech: string = "",
	slug: string = ""
) => {
	return `Did you miss @${twitter} teaching us about ${tech} live on LWJ?
No worries! Watch highlights from the episode here, then check out the full episode replay ${slug}`;
};

type TTweetType = "twoWeeks" | "ninetyMinutes" | "Live";

export const getScheduleTweet = (
	tweetType: TTweetType,
	twitter_description?: string,
	slug?: string
) => {
	let title;
	let footer;

	if (tweetType === "twoWeeks") {
		title = "📣 Just Scheduled! 📣";
		footer = "⬇️ Details Here ⬇️";
	} else if (tweetType === "ninetyMinutes") {
		title = "⚠️ In 90 Mins! ⚠️";
		footer = "⬇️ Details Here ⬇️";
	} else {
		title = "🔴 Live! 🔴";
		footer = "⬇️ Watch Live Here 👀";
		slug = "https://www.twitch.tv/jlengstorf";
	}
	const tweet = `${title}
${twitter_description}

${footer}
${slug}
`;

	return tweet;
};

export const getScheduleTime = (date: string, tweetType?: TTweetType) => {
	let dt = DateTime.fromISO(date, {
		zone: "America/Los_Angeles",
	});
	if (tweetType === "twoWeeks") {
		dt = dt.minus({ week: 2 });
	} else {
		dt = dt.minus({ minutes: 90 });
	}

	return dt.toFormat("ff");
};
