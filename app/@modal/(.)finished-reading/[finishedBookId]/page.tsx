import { notFound } from "next/navigation";
import { validate as uuidValidate, version as uuidVersion } from "uuid";
import fetchSelectedBook from "@/app/helpers/supabase/fetch-selected-book";
import { Books } from "@/app/types/books";
import timestampToHumanDate from "@/app/utilities/timestamp-to-human-date";
import BookModal from "@/app/components/BookModal";
import { CalendarDays, LibraryBig, Users } from "lucide-react";

export default async function ModalInterceptedFinishedReading({
	params,
}: {
	params: Promise<{ finishedBookId: string }>;
}) {
	// Extracting the book ID from the params
	const { finishedBookId: bookIdRequested } = await params;

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
			<div className="w-full h-full flex flex-col">
				<h1 className="font-(family-name:--font-bespoke-serif-extrabold) text-5xl">
					{requestedBookContent.map((book: Books) => book.book_title)}
				</h1>
				<div
					className="mt-6 flex flex-col gap-2 font-(family-name:--font-bespoke-serif-regular) text-xl"
					aria-label="About the book"
				>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col" aria-label="Author part">
							<span className="flex items-center gap-x-1 font-(family-name:--font-bespoke-serif-medium)">
								<Users />
								Author/Authors {":"}
							</span>
							<span>
								{requestedBookContent.map((book: Books) => book.book_author)}
							</span>
						</div>
						<div className="flex flex-col " aria-label="Release year part">
							<span className="flex items-center gap-x-1 font-(family-name:--font-bespoke-serif-medium)">
								<CalendarDays />
								Release Year {":"}
							</span>
							<span>
								{" "}
								{requestedBookContent.map((book: Books) => book.book_year)}
							</span>
						</div>
						<div className="flex flex-col " aria-label="Added to library part">
							<span className="flex items-center gap-x-1 font-(family-name:--font-bespoke-serif-medium)">
								<LibraryBig />
								Added to library {":"}
							</span>
							<span>
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
