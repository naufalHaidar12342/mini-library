export default function FallbackSkeleton() {
	return (
		<div className="flex flex-col animate-pulse">
			<h2
				className="w-40 h-14 rounded-full bg-gray-400 dark:bg-gray-700"
				aria-label="Skeleton for the category name"
			/>
			<section className="mt-[50px]">
				<div
					className="grid md:grid-cols-3 lg:grid-cols-5 gap-10"
					aria-label="Skeleton for first row of books"
				>
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
				</div>
				<div
					className="w-full h-[26px] my-3.5 rounded-sm bg-gray-400 dark:bg-gray-700"
					aria-label="Skeleton for horizontal line that mimics divider in bookshelf"
				/>
				<div
					className="grid md:grid-cols-3 lg:grid-cols-5 gap-10"
					aria-label="Skeleton for second row of books"
				>
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
				</div>
				<div
					className="w-full h-[26px] my-3.5 rounded-sm bg-gray-400 dark:bg-gray-700"
					aria-label="Skeleton for horizontal line that mimics divider in bookshelf"
				/>
				<div
					className="grid md:grid-cols-3 lg:grid-cols-5 gap-10"
					aria-label="Skeleton for last row of books"
				>
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="w-full h-[116.37px] rounded-md bg-gray-400 dark:bg-gray-700 " />
				</div>
			</section>
		</div>
	);
}
