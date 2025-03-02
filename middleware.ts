import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

//protecting selecting route
//const isProtectedRoute = createRouteMatcher(['/user-profile'])
//unprotect selecting route
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)'])

const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
	//logic admin route
	if (
		isAdminRoute(req) &&
		(await auth()).sessionClaims?.metadata?.role !== 'admin'
	) {
		const url = new URL('/', req.url)
		return NextResponse.redirect(url)
	}

	//for custom logic
	const { userId, redirectToSignIn } = await auth()
	if (!userId && !isPublicRoute(req)) {
		//add custom logic to run before redirecting
		return redirectToSignIn()
	}
	//protecting selecting route
	//if (isProtectedRoute(req)) await auth.protect()
	//unprotect selecting route
	//if (!isPublicRoute(req)) await auth.protect()
})
//
export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run for API routes
		'/(api|trpc)(.*)',
	],
}

// export function middleware(request: NextRequest) {
// 	if (request.nextUrl.pathname === '/profile') {
// 		return NextResponse.redirect(new URL('/hello', request.nextUrl))
// 	}
// 	//set cookie
// 	const response = NextResponse.next()
// 	const themePreference = request.cookies.get('theme')
// 	if (themePreference) {
// 		response.cookies.set('theme', 'light')
// 	}
// 	//set headers
// 	response.headers.set('custom-header', 'custom-value')
// 	//don't forget to return it
// 	return response

// 	//Rewrite URL, url still profile but content is /hello
// 	// if (request.nextUrl.pathname === '/profile') {
// 	// 	return NextResponse.rewrite(new URL('/hello', request.nextUrl))
// 	// }

// 	// return NextResponse.redirect(new URL('/', request.url))
// }

// export const config = {
// 	matcher: '/profile',
// }
