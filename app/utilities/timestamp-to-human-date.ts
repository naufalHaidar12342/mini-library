export default function timestampToHumanDate(timestampFromServer: string) {
	//validate the timestamp
	if (!timestampFromServer || isNaN(Date.parse(timestampFromServer))) {
		throw new Error("Invalid timestamp provided");
	}
	// convert the timestamp to asia/jakarta timezone
	const date = new Date(timestampFromServer);
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "Asia/Jakarta",
	};
	return date.toLocaleString("en-US", options);
}
