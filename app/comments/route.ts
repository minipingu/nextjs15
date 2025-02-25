import { comments } from './data'
//Handling GET
export async function GET() {
	return Response.json(comments)
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
