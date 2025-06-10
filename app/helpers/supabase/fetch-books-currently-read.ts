import supabaseServerSide from "./supabase-server-side";

export default async function fetchBooksCurrentlyRead() {
	const supabase = await supabaseServerSide();
	const { data: currentlyReadBooks } = await supabase
		.from("books")
		.select("*", { count: "exact" })
		.eq("book_finished_reading", false)
		.order("created_at", { ascending: false })
		.range(0, 14);

	return currentlyReadBooks;
}
