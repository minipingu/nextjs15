import { comments } from '../data'

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
