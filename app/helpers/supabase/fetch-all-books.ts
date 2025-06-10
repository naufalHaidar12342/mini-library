// import supabaseJSClient from "./supabase-js-client";
import { BOOKS_IN_EACH_PAGE } from "@/app/constants/pagination-constants";
import supabaseServerSide from "./supabase-server-side";

export default async function fetchAllBooks(currentPage: number = 1) {
	// const supabase = supabaseJSClient();
	const startingRange = (currentPage - 1) * BOOKS_IN_EACH_PAGE;
	const finalRange = currentPage * BOOKS_IN_EACH_PAGE - 1;

	const supabase = await supabaseServerSide();
	const { data: allBooksData, count: allBooksCount } = await supabase
		.from("books")
		.select("*", { count: "exact" })
		.order("created_at", { ascending: false })
		.range(startingRange, finalRange);

	const allBooksPages = allBooksCount
		? Math.ceil(allBooksCount / BOOKS_IN_EACH_PAGE)
		: 0;
	return { data: allBooksData, allBooksPages };
}
