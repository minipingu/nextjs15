//force caching
export const dynamic = 'force-static'
//revalidate cache every 10 sec
export const revalidate = 10

export async function GET() {
	return Response.json({ time: new Date().toLocaleTimeString() })
}
