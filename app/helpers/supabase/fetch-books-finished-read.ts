import { BOOKS_IN_EACH_PAGE } from "@/app/constants/pagination-constants";
import supabaseServerSide from "./supabase-server-side";

export default async function fetchBooksFinishedRead({
	currentPage = 1,
	requestedBooksAmount = BOOKS_IN_EACH_PAGE,
}: {
	currentPage?: number;
	requestedBooksAmount?: number;
}) {
	const startingRange = (currentPage - 1) * requestedBooksAmount;
	const finalRange = currentPage * requestedBooksAmount - 1;
	const supabase = await supabaseServerSide();
	const { data: finishedBooks, count: finishedBooksCount } = await supabase
		.from("books")
		.select("*", { count: "exact" })
		.eq("book_finished_reading", true)
		.order("created_at", { ascending: false })
		.range(startingRange, finalRange);

	const finishedBooksPages = finishedBooksCount
		? Math.ceil(finishedBooksCount / requestedBooksAmount)
		: 0;

	return { data: finishedBooks, pages: finishedBooksPages };
}
