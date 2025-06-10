import { createBrowserClient } from "@supabase/ssr";

export default function supabaseClientSide() {
	const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
	const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

	if (!supabaseURL || !supabaseAnonKey) {
		throw new Error("Supabase URL or Anon Key is not defined");
	}

	return createBrowserClient(supabaseURL, supabaseAnonKey, {
		realtime: {
			params: {
				eventsPerSecond: 10, // Limit the number of events per second
			},
		},
	});
}
