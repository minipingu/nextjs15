import { NextRequest } from 'next/server'
import { comments } from './data'
//Handling GET
export async function GET(request: NextRequest) {
	//query are useful for search, sorting, pagination, etc.
	//get query from URL
	const searchParams = request.nextUrl.searchParams
	// ?query="", if multiple query, just add another one
	const query = searchParams.get('query')
	const filteredComments = query
		? comments.filter((comment) => comment.text.includes(query))
		: comments

	return Response.json(filteredComments)
}
//Handling POST
export async function POST(request: Request) {
	//taking comment from request
	const comment = await request.json()
	//add comment to comments array
	const newComment = {
		id: comments.length + 1,
		text: comment.text,
	}
	comments.push(newComment)
	//returning response
	return new Response(JSON.stringify(newComment), {
		headers: { 'Content-Type': 'application/json' },
		status: 201,
	})
}
