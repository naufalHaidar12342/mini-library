import Logo from "./components/Logo";
import ThemeSwitch from "./components/ThemeSwitch";
import fetchAllBooks from "./helpers/supabase/fetch-all-books";
import { Suspense } from "react";
import { BOOKS_IN_EACH_PAGE } from "./constants/pagination-constants";
import AllBooksSection from "./components/home/AllBooksSection";
//import { Books } from "./types/books";
import fetchBooksCurrentlyRead from "./helpers/supabase/fetch-books-currently-read";
import fetchBooksFinishedRead from "./helpers/supabase/fetch-books-finished-read";
import CurrentlyReadingSection from "./components/home/CurrentlyReadingSection";
import FinishedReadingSection from "./components/home/FinishedReadingSection";
import getFallbackBooks from "./helpers/fallback-books";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string }>;
}) {
	/* the parameters sent by Link inside PaginationComponent is "page". to avoid confusion where the "page" comes from, i use named variable "pageParams"*/
	const { page: pageParams } = await searchParams;
	// console.log("Page Params:", pageParams);

	const activePageNow = parseInt(pageParams, BOOKS_IN_EACH_PAGE) || 1;
	const { data: fetchedAllBooks, pages: allBooksPages } = await fetchAllBooks({
		currentPage: activePageNow,
	});
	// console.log("Fetched All Books:", fetchedAllBooks);

	/* fetching currently reading books and finished books concurrently with Promise.all([]) to prevent blocking
	the fetching process for all books section */
	const [fetchCurrentlyReadingBooksResult, fetchFinishedBooksResult] =
		await Promise.all([
			fetchBooksCurrentlyRead({ requestedBooksAmount: 5 }),
			fetchBooksFinishedRead({
				requestedBooksAmount: 5,
			}),
		]);
	const { data: currentlyReadingBooks } = fetchCurrentlyReadingBooksResult;
	const { data: finishedReadingBooks } = fetchFinishedBooksResult;

	//fallback data when books still not fetched
	const booksButStatic = getFallbackBooks();
	// console.log("Fallback Books:", booksButStatic);

	return (
		<div className="flex flex-col w-full min-h-screen font-(family-name:--bespoke-serif-regular)">
			<Suspense
				fallback={
					<div className="w-[220px] h-16 rounded-md bg-gray-400 dark:bg-gray-700 pulse"></div>
				}
			>
				<Logo />
			</Suspense>
			<ThemeSwitch />
			<section
				className="flex flex-col mt-[42px] text-[18.5px] gap-y-3"
				aria-label="Short description"
			>
				<p>
					Welcome to my mini library! This website will serve as a collection of
					books I have read, books I am currently reading, and all the books I
					have interacted with.
				</p>
				<p>
					Built with Next.js 15 App Router TypeScript, Supabase with pagination,
					and Tailwind CSS v4
				</p>
			</section>
			<div className="mt-6 flex flex-col gap-y-6 lg:flex-row lg:gap-x-6 lg:gap-y-0">
				<CurrentlyReadingSection
					booksFromServer={currentlyReadingBooks || []}
				/>
				<div className="hidden lg:flex lg:w-2 lg:bg-darkmode lg:dark:bg-lightmode"></div>
				<FinishedReadingSection booksFromServer={finishedReadingBooks || []} />
			</div>
			<AllBooksSection
				booksFromServer={
					fetchedAllBooks !== null || undefined
						? fetchedAllBooks || []
						: booksButStatic
				}
				totalPages={allBooksPages}
			/>
		</div>
	);
}
