export const dynamic = "force-static"

export async function GET() {
  return new Response("Not Found", { status: 404 })
}
