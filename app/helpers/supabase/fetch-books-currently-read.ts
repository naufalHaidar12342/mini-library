import { BOOKS_IN_EACH_PAGE } from "@/app/constants/pagination-constants";
import supabaseServerSide from "./supabase-server-side";

/* all parameters are set to optional with the "?"" symbol
and given default value if its not receiving argument */
export default async function fetchBooksCurrentlyRead({
	currentPage = 1,
	requestedBooksAmount = BOOKS_IN_EACH_PAGE,
}: {
	currentPage?: number;
	requestedBooksAmount?: number;
}) {
	const startingRange = (currentPage - 1) * requestedBooksAmount;
	const finalRange = currentPage * requestedBooksAmount - 1;

	const supabase = await supabaseServerSide();
	const { data: currentlyReadBooks, count: currentlyReadBooksCount } =
		await supabase
			.from("books")
			.select("*", { count: "exact" })
			.eq("book_finished_reading", false)
			.order("created_at", { ascending: false })
			.range(startingRange, finalRange);

	const currentlyReadBooksPages = currentlyReadBooksCount
		? Math.ceil(currentlyReadBooksCount / requestedBooksAmount)
		: 0;

	return {
		data: currentlyReadBooks,
		pages: currentlyReadBooksPages,
	};
}
