import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomThemeProvider from "./helpers/custom-theme-provider";

const tankerRegular = localFont({
	src: "./fonts/Tanker-Regular.woff",
	variable: "--font-tanker-regular",
	weight: "400",
});

const bespokeSerifLight = localFont({
	src: "./fonts/BespokeSerif-Light.woff",
	variable: "--font-bespoke-serif-light",
	weight: "300",
});

const bespokeSerifRegular = localFont({
	src: "./fonts/BespokeSerif-Regular.woff",
	variable: "--font-bespoke-serif-regular",
	weight: "400",
});

const bespokeSerifMedium = localFont({
	src: "./fonts/BespokeSerif-Medium.woff",
	variable: "--font-bespoke-serif-medium",
	weight: "500",
});

const bespokeSerifBold = localFont({
	src: "./fonts/BespokeSerif-Bold.woff",
	variable: "--font-bespoke-serif-bold",
	weight: "700",
});

const bespokeSerifExtraBold = localFont({
	src: "./fonts/BespokeSerif-Bold.woff",
	variable: "--font-bespoke-serif-extrabold",
	weight: "800",
});

// const bespokeSerif = localFont({
// 	src: "./fonts/BespokeSerif-Variable.woff",
// 	variable: "--font-bespoke-serif",
// 	weight: "300 700",
// });

export const metadata: Metadata = {
	title: {
		template: "%s | Mini Library",
		default: "Mini Library",
	},
	description: "My personal library of books",
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${tankerRegular.variable} ${bespokeSerifLight.variable} ${bespokeSerifRegular.variable} ${bespokeSerifMedium.variable} ${bespokeSerifBold.variable} ${bespokeSerifExtraBold.variable} antialiased bg-lightmode text-darkmode dark:bg-darkmode dark:text-lightmode transition-colors !duration-500`}
			>
				<main className="p-8 pb-20 gap-16 sm:p-20">
					<CustomThemeProvider>
						{children}
						{modal}
					</CustomThemeProvider>
				</main>
			</body>
		</html>
	);
}
