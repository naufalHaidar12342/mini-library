"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";

export default function ThemeSwitch() {
	const [themeMounted, setThemeMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setThemeMounted(true);
	}, []);

	if (!themeMounted) {
		return null;
	}

	return (
		<div>
			{theme === "dark" ? (
				<button
					className="inline-flex items-center gap-x-2 font-(family-name:--font-tanker-regular) text-2xl p-2 w-[150px] h-[52px] rounded-md bg-lightmode text-darkmode"
					onClick={() => setTheme("light")}
				>
					<Icon icon={"mdi:desk-lamp-on"} size={24} />
					Light Mode
				</button>
			) : (
				<button
					className="inline-flex items-center gap-x-2 font-(family-name:--font-tanker-regular) text-2xl p-2 w-[150px] h-[52px] rounded-md bg-darkmode text-lightmode"
					onClick={() => setTheme("dark")}
				>
					<Icon icon={"mdi:desk-lamp-off"} size={24} />
					Dark Mode
				</button>
			)}
		</div>
	);
}
