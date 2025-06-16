import { Suspense } from "react";
import Logo from "../components/Logo";
import ThemeSwitch from "../components/ThemeSwitch";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { BOOKS_IN_EACH_PAGE } from "../constants/pagination-constants";
import fetchBooksFinishedRead from "../helpers/supabase/fetch-books-finished-read";
import { Books } from "../types/books";
import BookItem from "../components/BookItem";
import PaginationComponent from "../components/PaginationComponent";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const { data: finishedReadBook } = await fetchBooksFinishedRead({
		requestedBooksAmount: 1,
	});

	const recentBookTitle = finishedReadBook?.map(
		(book: Books) => book.book_title
	);

	const recentBookAuthor = finishedReadBook?.map(
		(book: Books) => book.book_author
	);

	return {
		title: "Finished Reading",
		description: `Here is the latest book I am finished reading: "${recentBookTitle}" by ${recentBookAuthor}. Here are some other books I am finished reading as well.`,
	};
}

export default async function FinishedReadingPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string }>;
}) {
	/* the parameters sent by Link inside PaginationComponent is "page". to avoid confusion where the "page" comes from, i use named variable "pageParamsCurrentlyReading"*/
	const { page: pageParamsFinishedReading } = await searchParams;

	const activePageNow =
		parseInt(pageParamsFinishedReading, BOOKS_IN_EACH_PAGE) || 1;

	const {
		data: fetchedBooksFinishedRead,
		pages: fetchedBooksFinishedReadPages,
	} = await fetchBooksFinishedRead({
		currentPage: activePageNow,
	});
	return (
		<div className="w-full min-h-screen flex flex-col font-(family-name:--bespoke-serif-regular)">
			<Suspense
				fallback={
					<div className="w-[220px] h-16 rounded-md bg-gray-400 dark:bg-gray-700 pulse"></div>
				}
			>
				<Logo />
			</Suspense>
			<ThemeSwitch />
			<h1 className="mt-16 text-[29.6px] font-(family-name:--font-bespoke-serif-bold)">
				Finished Reading
			</h1>
			<Link href={"/"} className="mt-2 flex items-center text-lg gap-x-2">
				<Icon icon={"tabler:sign-left-filled"} />
				Go back to homepage
			</Link>
			<section className="w-full mt-[50px]">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
					{fetchedBooksFinishedRead?.map((book: Books) => (
						<BookItem key={book.id} booksPassed={book} />
					))}
				</div>
				<PaginationComponent totalPagesListed={fetchedBooksFinishedReadPages} />
			</section>
		</div>
	);
}
