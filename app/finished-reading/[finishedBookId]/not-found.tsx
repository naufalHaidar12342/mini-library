import Link from "next/link";

export default function NotFound() {
	return (
		<div className="w-full min-h-screen flex flex-col font-(family-name:--font-tanker-regular)">
			<h1 className="text-5xl tracking-wide">404</h1>
			<span className="text-2xl tracking-wider">
				This specific book can not be found on my list of finished book.
			</span>
			<Link
				href={"/finished-reading"}
				className="mt-5 font-(family-name:--font-bespoke-serif-medium) text-xl"
			>
				Back to finished reading
			</Link>
		</div>
	);
}
