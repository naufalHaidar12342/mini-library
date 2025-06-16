// import supabaseJSClient from "./supabase-js-client";
import { BOOKS_IN_EACH_PAGE } from "@/app/constants/pagination-constants";
import supabaseServerSide from "./supabase-server-side";

export default async function fetchAllBooks({
	currentPage = 1,
	requestedBooksAmount = BOOKS_IN_EACH_PAGE,
}: {
	currentPage?: number;
	requestedBooksAmount?: number;
}) {
	// const supabase = supabaseJSClient();
	const startingRange = (currentPage - 1) * requestedBooksAmount;
	const finalRange = currentPage * requestedBooksAmount - 1;

	const supabase = await supabaseServerSide();
	const { data: allBooksData, count: allBooksCount } = await supabase
		.from("books")
		.select("*", { count: "exact" })
		.order("created_at", { ascending: false })
		.range(startingRange, finalRange);

	const allBooksPages = allBooksCount
		? Math.ceil(allBooksCount / requestedBooksAmount)
		: 0;
	return { data: allBooksData, pages: allBooksPages };
}
