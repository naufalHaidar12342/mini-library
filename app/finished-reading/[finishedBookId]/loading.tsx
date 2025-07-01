export default function Loading() {
	return (
		<div className="flex flex-col animate-pulse">
			<span
				aria-label="Skeleton for page title"
				className="w-40 h-14 rounded-sm bg-gray-400 dark:bg-gray-700"
			/>
			<span
				aria-label="Skeleton for book title"
				className="mt-3 w-40 h-10 rounded-sm bg-gray-400 dark:bg-gray-700"
			/>
			<div
				aria-label="Wrapper for book information and action buttons"
				className="flex flex-col md:flex-row md:gap-x-20 gap-2"
			>
				<div
					aria-label="Wrapper only for book information"
					className="flex flex-col gap-6"
				>
					<span aria-label="Skeleton for authors" className="h-4 w-full" />
					<span
						aria-label="Skeleton for book release year"
						className="h-4 w-full"
					/>
					<span
						aria-label="Skeleton for added to library"
						className="h-4 w-full"
					/>
				</div>
				<div
					aria-label="Wrapper only for action buttons"
					className="flex flex-col p-2 gap-3"
				>
					<span
						aria-label="Skeleton for mark as finished button"
						className="h-4 w-full"
					/>
					<span
						aria-label="Skeleton for currently reading button"
						className="h-4 w-full"
					/>
					<span aria-label="Skeleton for home button" className="h-4 w-full" />
				</div>
			</div>
		</div>
	);
}
