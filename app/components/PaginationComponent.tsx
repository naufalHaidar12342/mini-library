"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BOOKS_IN_EACH_PAGE } from "../constants/pagination-constants";
import { Icon } from "@iconify-icon/react";

export default function PaginationComponent({
	totalPagesListed,
}: {
	totalPagesListed: number;
}) {
	const currentPath = usePathname();
	const parametersPassed = useSearchParams();

	let page =
		parseInt(parametersPassed.get("page") || "1", BOOKS_IN_EACH_PAGE) || 1;

	// ensure that user cannot go beyond the total pages listed
	let maximumPage;
	if (page >= totalPagesListed) {
		maximumPage = totalPagesListed;
	} else {
		maximumPage = page + 1;
	}
	return (
		<div className="flex items-center justify-between mt-6">
			<Link
				href={`${currentPath}?page=${page - 1}`}
				scroll={false}
				aria-label="Go to previous page"
				className={`text-darkmode dark:text-lightmode text-2xl ${
					page <= 1 ? "cursor-not-allowed opacity-50" : ""
				}`}
				tabIndex={page <= 1 ? -1 : 0}
				aria-disabled={page <= 1 ? "true" : "false"}
			>
				<Icon icon={"solar:map-arrow-left-bold"} />
			</Link>
			<div className="font-(family-name:--font-tanker-regular) flex items-center gap-x-2">
				<span className="text-[19px]">Shelf number</span>
				<span className="bg-darkmode text-lightmode dark:bg-lightmode dark:text-darkmode p-[10px] text-2xl rounded-sm">
					{page}
				</span>
			</div>
			<Link
				href={`${currentPath}?page=${maximumPage}`}
				scroll={false}
				aria-label="Go to next page"
				className={`text-darkmode dark:text-lightmode text-2xl ${
					page >= totalPagesListed ? "cursor-not-allowed opacity-50" : ""
				}`}
				tabIndex={page >= totalPagesListed ? -1 : 0}
				aria-disabled={page >= totalPagesListed ? "true" : "false"}
			>
				<Icon icon={"solar:map-arrow-right-bold"} />
			</Link>
		</div>
	);
}
