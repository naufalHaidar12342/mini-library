"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import darkModeImage from "../logo-darkmode.png";
import lightModeImage from "../logo-lightmode.png";
export default function Logo() {
	const { theme } = useTheme();
	return (
		<div className="w-[220px] h-16 relative">
			{theme === "dark" ? (
				<Image
					src={darkModeImage}
					alt="Dark mode variant of logo"
					style={{ objectFit: "contain" }}
					fill
					sizes="(max-width: 768px) 100vw, 55vw"
				/>
			) : (
				<Image
					src={lightModeImage}
					alt="Light mode variant of logo"
					style={{ objectFit: "contain" }}
					fill
					sizes="(max-width: 768px) 100vw, 55vw"
				/>
			)}
		</div>
	);
}
