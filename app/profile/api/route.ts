//We are doing about headers here
import { type NextRequest } from 'next/server'
import { headers } from 'next/headers'

export async function GET(request: NextRequest) {
	//with Headers class
	const requestHeaders = new Headers(request.headers)
	console.log(requestHeaders.get('Authorization'))
	//with headers function
	const headersList = await headers()
	console.log(headersList.get('Accept'))

	return new Response('<h1>Profile API data</h1>', {
		headers: { 'Content-Type': 'text/html' },
	})
}
