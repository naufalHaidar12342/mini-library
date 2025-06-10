import { createClient } from "@supabase/supabase-js";

export default function supabaseJSClient() {
	const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
	const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

	if (!supabaseURL || !supabaseAnonKey) {
		throw new Error("Supabase URL or Anon Key is not defined");
	}

	return createClient(supabaseURL, supabaseAnonKey);
}
