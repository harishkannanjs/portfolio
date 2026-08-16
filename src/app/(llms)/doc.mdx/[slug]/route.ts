import { getAllDocs } from "@/features/doc/data/documents"
import { getLLMText } from "@/features/doc/lib/get-llm-text"

// Pre-render all doc routes at build time as static files.
// @cloudflare/next-on-pages will include these as static assets in .vercel/output/static.
// We intentionally do NOT set runtime = 'edge' here so that generateStaticParams
// can co-exist with the Node.js imports used during build (fs, process.cwd()).
export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  const docs = getAllDocs()

  return docs.map((doc) => ({
    slug: doc.slug,
  }))
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  const allDocs = getAllDocs()
  const post = allDocs.find((doc) => doc.slug === slug)

  if (!post) {
    return new Response("Not Found", { status: 404 })
  }

  const content = await getLLMText(post)

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  })
}
