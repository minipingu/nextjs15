//We are doing about headers here
import { type NextRequest } from 'next/server'
import { cookies, headers } from 'next/headers'

export async function GET(request: NextRequest) {
	//with Headers fetch API
	const requestHeaders = new Headers(request.headers)
	console.log(requestHeaders.get('Authorization'))
	//with headers function nextjs
	const headersList = await headers()
	console.log(headersList.get('Accept'))

	const theme = request.cookies.get('theme')
	console.log(theme)

	//set cookie using cookies function nextjs
	//damn this is good can set multiple cookies
	const cookieStore = await cookies()
	cookieStore.set('resultPerPage', '20')
	cookieStore.set('minipingu', '1')
	console.log(request.cookies.get('resultPerPage'))
	console.log(request.cookies.get('minipingu'))

	return new Response('<h1>Profile API data</h1>', {
		headers: { 'Content-Type': 'text/html', 'Set-Cookie': 'theme=dark' },
	})
}
