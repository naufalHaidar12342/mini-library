"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function CustomThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<NextThemesProvider attribute={"class"} defaultTheme="dark">
			{children}
		</NextThemesProvider>
	);
}
