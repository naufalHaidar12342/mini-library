import supabaseServerSide from "./supabase-server-side";

export default async function fetchBooksFinishedRead() {
	const supabase = await supabaseServerSide();
	const { data: finishedBooks } = await supabase
		.from("books")
		.select()
		.eq("book_finished_reading", true)
		.order("created_at", { ascending: false });

	return finishedBooks;
}
