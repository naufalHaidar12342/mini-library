export default function timestampToHumanDate(timestampFromServer: string) {
	//validate the timestamp
	if (!timestampFromServer || isNaN(Date.parse(timestampFromServer))) {
		throw new Error("Invalid timestamp provided");
	}
	// convert the timestamp to asia/jakarta timezone
	const date = new Date(timestampFromServer);
	const day = date.getUTCDate().toString().padStart(2, "0");
	const month = date.toLocaleString("en-US", {
		month: "long",
		timeZone: "Asia/Jakarta",
	});
	const year = date.getUTCFullYear();
	const jakartaDate = new Date(
		date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
	);
	const hours = jakartaDate.getHours().toString().padStart(2, "0");
	const minutes = jakartaDate.getMinutes().toString().padStart(2, "0");
	const customizedFormat = `${day} ${month} ${year} ${hours}.${minutes} (UTC+7)`;
	return customizedFormat;
}
