import FallbackSkeleton from "./components/FallbackSkeleton";

export default function Loading() {
	return (
		<div className="w-full min-h-screen flex flex-col">
			<FallbackSkeleton />
		</div>
	);
}
