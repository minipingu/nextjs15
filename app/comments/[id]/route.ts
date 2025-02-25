import { comments } from '../data'
//to use params, u need to use request: Request, also
export async function GET(
	request: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	//extract id from parameters
	const { id } = await params
	//finding match comment
	const comment = comments.find((comment) => comment.id === Number(id))
	//returning response
	return Response.json(comment)
}

export async function PATCH(
	request: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	//1. take id from parameters
	const { id } = await params
	//2. take body from request
	const body = await request.json()
	//3. extract text from body
	const { text } = body
	//4. finding index of comment based on id
	const index = comments.findIndex((comment) => comment.id === Number(id))
	//5. replacing text of comment with text from request body
	comments[index].text = text
	//6. returning response
	return Response.json(comments[index])
}

export async function DELETE(
	request: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	//extract id from parameters
	const { id } = await params
	//finding index
	const index = comments.findIndex((comment) => comment.id === Number(id))
	//removing comment from comments array
	comments.splice(index, 1)
	//returning response
	return Response.json({
		message: `Comment deleted successfully`,
		comments,
	})
}
