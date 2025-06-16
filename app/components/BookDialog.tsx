"use client";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
// import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

export default function BookDialog({ children }: { children: ReactNode }) {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	return (
		<Dialog
			open={isDialogOpen}
			onClose={() => setIsDialogOpen(false)}
			transition
			className={
				"fixed inset-0 flex w-screen items-center justify-center bg-darkmode/30 p-4 transition duration-300 ease-out data-closed:opacity-0"
			}
		>
			<DialogBackdrop className={"fixed inset-0 bg-darkmode/15"} />
			<DialogPanel>{children}</DialogPanel>
		</Dialog>
	);
}
