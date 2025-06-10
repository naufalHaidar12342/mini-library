import { Pagination } from "@/app/types/pagination";
import PaginationComponent from "../PaginationComponent";
import BookItem from "../BookItem";

export default async function AllBooksSection({
	booksFromServer,
	totalPages,
}: Pagination) {
	return (
		<section>
			<h2 className="text-[29.6px] font-(family-name:--font-bespoke-serif-bold)">
				All Books
			</h2>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-[50px]">
				{booksFromServer.map((book) => (
					<BookItem key={book.id} booksPassed={book} />
				))}
			</div>
			<PaginationComponent totalPagesListed={totalPages} />
		</section>
	);
}
