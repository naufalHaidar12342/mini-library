export default function FallbackSkeleton() {
	return (
		<div className="flex flex-col animate-pulse">
			<h1
				className="w-40 h-14 rounded-sm bg-gray-400 dark:bg-gray-700"
				aria-label="Skeleton for the category name"
			/>
			<div
				className="flex flex-col gap-y-3 mt-[42px]"
				aria-label="Skeleton for paragraphs"
			>
				<div className="w-full h-14 rounded-md bg-gray-400 dark:bg-gray-700"></div>
				<div className="w-full h-14 rounded-md bg-gray-400 dark:bg-gray-700"></div>
			</div>
			<section className="mt-[50px]" aria-label="Skeleton for books section">
				<div
					className="grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10"
					aria-label="Skeleton for first row of books"
				>
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
					<div className="flex flex-col w-full h-32 rounded-md bg-gray-400 dark:bg-gray-700 " />
				</div>
			</section>
			<div
				className="w-full h-16 bg-gray-400 dark:bg-gray-700 rounded-sm p-[6px] mt-6"
				aria-label="Skeleton for pagination"
			></div>
		</div>
	);
}
