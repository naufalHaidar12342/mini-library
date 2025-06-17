"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogOverlay } from "./shadcn-ui/dialog";

export default function BookModal({ children }: { children: React.ReactNode }) {
	const bookModalRouter = useRouter();
	const handleOpenBookModal = () => {
		bookModalRouter.back();
	};
	return (
		<Dialog defaultOpen={true} open={true} onOpenChange={handleOpenBookModal}>
			<DialogOverlay>
				<DialogContent className="overflow-y-hidden">{children}</DialogContent>
			</DialogOverlay>
		</Dialog>
	);
}
