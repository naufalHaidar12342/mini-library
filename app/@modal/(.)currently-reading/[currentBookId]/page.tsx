import { notFound } from "next/navigation";
import { validate as uuidValidate, version as uuidVersion } from "uuid";
import fetchSelectedBook from "@/app/helpers/supabase/fetch-selected-book";
import { Books } from "@/app/types/books";
import timestampToHumanDate from "@/app/utilities/timestamp-to-human-date";
import BookModal from "@/app/components/BookModal";

export default async function ModalSelectedCurrentlyReading({
	params,
}: {
	params: Promise<{ currentBookId: string }>;
}) {
	// Extracting the book ID from the params
	const { currentBookId: bookIdRequested } = await params;

	/* validate book ID if its a valid UUID v4
        - !bookIdRequested is used to check if the bookIdRequested is undefined or null
        - uuidValidate checks if the bookIdRequested is a valid UUID
        - uuidVersion checks if the bookIdRequested is a UUID v4 */
	if (
		!bookIdRequested ||
		!uuidValidate(bookIdRequested) ||
		uuidVersion(bookIdRequested) !== 4
	) {
		// If the book ID is invalid, return a 404 not found response
		notFound();
	}
	// If the book ID is valid, you can proceed to fetch the book details from the database
	const { data: requestedBookContent } = await fetchSelectedBook(
		bookIdRequested
	);
	// console.log("Requested Book Content:", requestedBookContent);
	return (
		<BookModal>
			<div className="w-full flex flex-col">
				<h1 className="font-(family-name:--font-bespoke-serif-extrabold) text-5xl">
					{requestedBookContent.map((book: Books) => book.book_title)}
				</h1>
				<div
					className="mt-4 flex flex-col gap-2 font-(family-name:--font-bespoke-serif-regular) text-xl"
					aria-label="About the book"
				>
					<div className="flex gap-x-10">
						<div
							className="flex flex-col font-(family-name:--font-bespoke-serif-medium)"
							aria-label="Book properties"
						>
							<span>Author</span>
							<span>Release Year</span>
							<span>Added to library</span>
						</div>
						<div
							className="flex flex-col"
							aria-label="Value of the book properties"
						>
							<span>
								{":"}{" "}
								{requestedBookContent.map((book: Books) => book.book_author)}
							</span>
							<span>
								{":"}{" "}
								{requestedBookContent.map((book: Books) => book.book_year)}
							</span>
							<span>
								{":"}
								{""}
								{requestedBookContent.map((book: Books) =>
									timestampToHumanDate(book.created_at)
								)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</BookModal>
	);
}
