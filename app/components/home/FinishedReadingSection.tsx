import Link from "next/link";
import BookItem from "../BookItem";
import { Books } from "@/app/types/books";
import { Icon } from "@iconify-icon/react";

export default async function FinishedReadingSection({
	booksFromServer,
}: {
	booksFromServer: Books[];
}) {
	return (
		<section className="w-full">
			<h2 className="text-[29.6px] font-(family-name:--font-bespoke-serif-bold)">
				Finished Reading
			</h2>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-[50px]">
				{booksFromServer.map((book) => (
					<BookItem key={book.id} booksPassed={book} />
				))}
				<div className="w-full p-[2px] rounded-sm animate-rotate-border bg-conic/[from_var(--border-angle)] from-pictonblue-300 via-lightmode to-pictonblue-700">
					<div className="px-[11px] py-[18px] bg-pictonblue-900 text-lightmode w-full h-full flex flex-col rounded-sm">
						<span className="grow text-3xl">
							<Icon icon={"streamline-cyber:document-bookmark-2"} />
						</span>
						<div className="font-(family-name:--font-bespoke-serif-regular)">
							See all of the books I am finished reading
						</div>
						<Link
							href={"/finished-reading"}
							className="mt-4 font-(family-name:--font-tanker-regular) uppercase text-xl tracking-wider"
						>
							Shows all
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
