import type { Metadata } from "next";
import fetchBooksCurrentlyRead from "../helpers/supabase/fetch-books-currently-read";
import { Books } from "../types/books";
import Link from "next/link";
import { BOOKS_IN_EACH_PAGE } from "../constants/pagination-constants";
import BookItem from "../components/BookItem";
import PaginationComponent from "../components/PaginationComponent";
import { Icon } from "@iconify-icon/react";
import { Suspense } from "react";
import Logo from "../components/Logo";
import ThemeSwitch from "../components/ThemeSwitch";

export async function generateMetadata(): Promise<Metadata> {
	const { data: recentlyReadBook } = await fetchBooksCurrentlyRead({
		requestedBooksAmount: 1,
	});

	const recentBookTitle = recentlyReadBook?.map(
		(book: Books) => book.book_title
	);
	const recentBookAuthor = recentlyReadBook?.map(
		(book: Books) => book.book_author
	);
	// console.log(`Recently read book title: ${recentBookTitle}`);

	return {
		title: "Currently Reading",
		description: `Here is the latest book I am currently reading: "${recentBookTitle}" by ${recentBookAuthor}. Here are some other books I am currently reading as well.`,
	};
}
export default async function CurrentlyReadingPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string }>;
}) {
	/* the parameters sent by Link inside PaginationComponent is "page". to avoid confusion where the "page" comes from, i use named variable "pageParamsCurrentlyReading"*/
	const { page: pageParamsCurrentlyReading } = await searchParams;

	const activePageNow =
		parseInt(pageParamsCurrentlyReading, BOOKS_IN_EACH_PAGE) || 1;
	const {
		data: fetchedBooksCurrentlyRead,
		pages: fetchedBooksCurrentlyReadPages,
	} = await fetchBooksCurrentlyRead({
		currentPage: activePageNow,
	});
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
			<h1 className="mt-16 text-[29.6px] font-(family-name:--font-bespoke-serif-bold)">
				Currently Reading
			</h1>
			<Link href={"/"} className="mt-2 flex items-center text-lg gap-x-2">
				<Icon icon={"tabler:sign-left-filled"} />
				Go back to homepage
			</Link>
			<section className="w-full mt-[50px]">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
					{fetchedBooksCurrentlyRead?.map((book: Books) => (
						<BookItem key={book.id} booksPassed={book} />
					))}
				</div>
				<PaginationComponent
					totalPagesListed={fetchedBooksCurrentlyReadPages}
				/>
			</section>
		</div>
	);
}
