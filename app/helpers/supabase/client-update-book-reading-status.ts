import { validate as uuidValidate, version as uuidVersion } from "uuid";
import supabaseServerSide from "./supabase-server-side";
import supabaseClientSide from "./supabase-client-side";

export default async function clientUpdateBookReadingStatus(
	bookIdForUpdate: string,
	bookReadingStatus: boolean
) {
	if (!uuidValidate(bookIdForUpdate) || uuidVersion(bookIdForUpdate) !== 4) {
		throw new Error("Invalid book ID format");
	}
	const supabase = supabaseClientSide();
	const { data, error } = await supabase
		.from("books")
		.update({ book_finished_reading: bookReadingStatus })
		.eq("book_id", bookIdForUpdate);

	if (error) {
		throw new Error(`Error updating book progress: ${error.message}`);
	}

	return data;
}
