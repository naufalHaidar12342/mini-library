import { validate as uuidValidate, version as uuidVersion } from "uuid";
import supabaseServerSide from "./supabase-server-side";

export default async function fetchSelectedBook(bookId: string) {
	let bookIdRequested;
	if (!bookId || !uuidValidate(bookId) || uuidVersion(bookId) !== 4) {
		throw new Error("Invalid book ID");
	} else {
		bookIdRequested = bookId;
	}
	const supabase = await supabaseServerSide();
	const { data: bookData } = await supabase
		.from("books")
		.select("*")
		.eq("id", bookIdRequested);
	if (!bookData || bookData.length === 0) {
		throw new Error("Book not found in database");
	}
	return { data: bookData };
}
