import { Icon } from "@iconify-icon/react";
import { Books } from "../types/books";
import Link from "next/link";
import BookActionButton from "./BookActionButton";

export default function BookItem({ booksPassed }: { booksPassed: Books }) {
	// conditional rendering on color gradient based on book_finished_reading
	let conditionalGradient: string = "";
	if (booksPassed.book_finished_reading === false) {
		conditionalGradient =
			"from-lightmode to-pictonblue-400 dark:from-darkmode dark:to-pictonblue-400";
	} else {
		conditionalGradient =
			"from-lightmode to-pictonblue-900 dark:from-darkmode dark:to-pictonblue-900";
	}

	// conditional rendering on background color based on book_finished_reading
	let conditionalBackgroundColors: string = "";
	if (booksPassed.book_finished_reading === false) {
		conditionalBackgroundColors =
			"from-pictonblue-400 to-lightmode dark:to-darkmode ";
	} else {
		conditionalBackgroundColors =
			"from-pictonblue-900 to-lightmode text-lightmode dark:to-darkmode";
	}

	return (
		<div
			aria-label="Gradient border for book item"
			className={`p-px rounded-sm bg-gradient-to-b ${conditionalGradient}`}
		>
			<div
				className={`px-[11px] py-[18px] rounded-sm -bg-linear-210 ${conditionalBackgroundColors}`}
			>
				<div className="flex flex-col w-full h-32">
					<h3 className="text-xl tracking-wide font-(family-name:--font-tanker-regular) line-clamp-2">
						{booksPassed.book_title}
					</h3>
					<span className="text-sm tracking-wide font-(family-name:--font-bespoke-serif-regular) line-clamp-1">
						{booksPassed.book_author}
					</span>
					<span className="text-sm tracking-wider font-(family-name:--font-tanker-regular)">
						{booksPassed.book_year}
					</span>
					<div className="flex mt-auto justify-end">
						<BookActionButton
							bookId={booksPassed.id}
							bookReadingStatus={booksPassed.book_finished_reading}
							key={booksPassed.id}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
