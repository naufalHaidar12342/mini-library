// import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export default function supabaseMiddleware(request: NextRequest) {
	const supabaseResponse = NextResponse.next({
		request: {
			// This is required to ensure that the cookies are sent with the request
			headers: request.headers,
		},
	});

	// const supabase = createServerClient(
	// 	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	// 	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
	// 	{
	// 		cookies: {
	// 			getAll() {
	// 				return request.cookies.getAll();
	// 			},
	// 			setAll(cookiesToSet) {
	// 				cookiesToSet.forEach(({ name, value }) =>
	// 					request.cookies.set(name, value)
	// 				);
	// 				supabaseResponse = NextResponse.next({
	// 					request,
	// 				});
	// 				cookiesToSet.forEach(({ name, value, options }) =>
	// 					supabaseResponse.cookies.set(name, value, options)
	// 				);
	// 			},
	// 		},
	// 	}
	// );

	return supabaseResponse;
}
