import { notFound } from "next/navigation";
import { validate as uuidValidate, version as uuidVersion } from "uuid";
import { Metadata } from "next";
import fetchSelectedBook from "@/app/helpers/supabase/fetch-selected-book";
import { Books } from "@/app/types/books";
import timestampToHumanDate from "@/app/utilities/timestamp-to-human-date";
import {
	BookOpenText,
	CalendarDays,
	LibraryBig,
	Users,
	BookOpenCheck,
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ currentBookId: string }>;
}): Promise<Metadata> {
	const { currentBookId: bookIdRequested } = await params;
	const { data: bookContentForMetadata } = await fetchSelectedBook(
		bookIdRequested
	);
	if (!bookContentForMetadata || bookContentForMetadata.length === 0) {
		return {
			title: ` - Book Not Found`,
		};
	}
	const metadataBookTitle = bookContentForMetadata.map(
		(book: Books) => book.book_title
	);
	const metadataBookAuthors = bookContentForMetadata.map(
		(book: Books) => book.book_author
	);
	return {
		title: `${metadataBookTitle} - Currently Reading`,
		description: `Currently reading book: "${metadataBookTitle}" by ${metadataBookAuthors}`,
	};
}

export default async function CurrentBookDetailsPage({
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
		<div className="w-full min-h-screen flex flex-col">
			<h1 className="font-(family-name:--font-bespoke-serif-extrabold) text-5xl">
				Currently Reading -{" "}
			</h1>
			<h2 className="font-(family-name:--font-bespoke-serif-bold) text-3xl">
				{requestedBookContent.map((book: Books) => book.book_title)}
			</h2>

			<div
				className="mt-4 flex flex-col gap-2 md:flex-row md:gap-x-20  font-(family-name:--font-bespoke-serif-regular) text-xl"
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
				<div className="flex flex-col p-2 gap-3 border-2 border-dashed border-darkmode dark:border-lightmode rounded-md">
					<Link
						href="#"
						className="font-(family-name:--font-bespoke-serif-medium) flex items-center bg-pictonblue-400 text-darkmode  gap-x-2 text-lg p-2 rounded-lg scale-100 hover:scale-105 duration-300"
						aria-label="Back to list of books currently reading"
					>
						<BookOpenCheck />
						Mark as Finished
					</Link>
					<Link
						href="/currently-reading"
						className="flex items-center gap-x-1 text-lg p-2 border-2 border-pictonblue-400 rounded-lg scale-100 hover:scale-105 duration-300"
						aria-label="Back to list of books currently reading"
					>
						<BookOpenText />
						Currently Reading
					</Link>
					<Link
						href="/"
						className="flex items-center gap-x-1 text-lg p-2 border-2 border-pictonblue-400 rounded-lg scale-100 hover:scale-105 duration-300"
						aria-label="Back to list of books currently reading"
					>
						<LibraryBig />
						Home
					</Link>
				</div>
			</div>
		</div>
	);
}
