"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";
// import updateBookReadingStatus from "../helpers/supabase/update-book-reading-status";
import clientUpdateBookReadingStatus from "../helpers/supabase/client-update-book-reading-status";

export default function BookActionButton({
	bookId,
	bookReadingStatus,
}: {
	bookId: string;
	bookReadingStatus: boolean;
}) {
	return (
		<Popover className={"relative"}>
			<PopoverButton className={"flex items-center"}>
				<Icon icon={"tabler:dots"} className="text-2xl" />
			</PopoverButton>
			<PopoverPanel
				anchor={"top end"}
				transition
				className={
					"flex origin-top flex-col transition duration-300 ease-out data-closed:scale-95 data-closed:opacity-0 bg-pictonblue-950 text-lightmode dark:bg-lightmode dark:text-pictonblue-950 font-(family-name:--font-bespoke-serif-regular) rounded-md p-2"
				}
			>
				{/* conditional rendering for view book link
                if bookReadingStatus is false, show currently reading link, else show finished reading link
                */}

				{bookReadingStatus === false ? (
					<Link
						href={`/currently-reading/${bookId}`}
						className="flex items-center gap-x-1"
					>
						<Icon icon={"hugeicons:view"} />
						View book
					</Link>
				) : (
					<Link
						href={`/finished-reading/${bookId}`}
						className="flex items-center gap-x-1"
					>
						<Icon icon={"hugeicons:view"} />
						View book
					</Link>
				)}
				{/* conditional rendering for  */}
				{bookReadingStatus === false ? (
					<button
						onClick={() => clientUpdateBookReadingStatus(bookId, true)}
						className="flex items-center gap-x-1"
					>
						<Icon icon={"mdi:book-check-outline"} />
						Mark as finished reading
					</button>
				) : (
					<button
						onClick={() => clientUpdateBookReadingStatus(bookId, false)}
						className="flex items-center gap-x-1"
					>
						<Icon icon={"streamline-freehand:newspaper-read-man"} />
						Mark as currently reading
					</button>
				)}
			</PopoverPanel>
		</Popover>
	);
}
