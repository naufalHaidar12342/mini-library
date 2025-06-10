import Logo from "./components/Logo";
import ThemeSwitch from "./components/ThemeSwitch";
import fetchAllBooks from "./helpers/supabase/fetch-all-books";
import { Suspense } from "react";
import FallbackSkeleton from "./components/FallbackSkeleton";
import { BOOKS_IN_EACH_PAGE } from "./constants/pagination-constants";
import AllBooksSection from "./components/home/AllBooksSection";
import { Books } from "./types/books";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string }>;
}) {
	const { page: pageParams } = await searchParams;
	console.log("Page Params:", pageParams);

	const currentPage = parseInt(pageParams, BOOKS_IN_EACH_PAGE) || 1;
	const { data: fetchedAllBooks, allBooksPages } = await fetchAllBooks(
		currentPage
	);

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
			<AllBooksSection
				booksFromServer={fetchedAllBooks as Books[]}
				totalPages={allBooksPages}
			/>
		</div>
	);
}
