import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === '/profile') {
		return NextResponse.redirect(new URL('/hello', request.nextUrl))
	}
	//set cookie
	const response = NextResponse.next()
	const themePreference = request.cookies.get('theme')
	if (themePreference) {
		response.cookies.set('theme', 'light')
	}
	//set headers
	response.headers.set('custom-header', 'custom-value')
	//dont forget to return it
	return response

	//Rewrite URL, url still profile but content is /hello
	// if (request.nextUrl.pathname === '/profile') {
	// 	return NextResponse.rewrite(new URL('/hello', request.nextUrl))
	// }

	// return NextResponse.redirect(new URL('/', request.url))
}

// export const config = {
// 	matcher: '/profile',
// }
