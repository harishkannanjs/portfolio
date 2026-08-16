import { notFound } from "next/navigation"

import { getAllDocs } from "@/features/doc/data/documents"
import { getLLMText } from "@/features/doc/lib/get-llm-text"

// Converted from route.ts to page.tsx so @cloudflare/next-on-pages treats it
// as a static page (same as /blog/[slug] and /components/[slug]).
// Dynamic route handlers require runtime='edge' in @cloudflare/next-on-pages v1,
// which conflicts with generateStaticParams. Pages with generateStaticParams work.
export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  const docs = getAllDocs()

  return docs.map((doc) => ({
    slug: doc.slug,
  }))
}

export default async function DocMdxPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const allDocs = getAllDocs()
  const post = allDocs.find((doc) => doc.slug === slug)

  if (!post) {
    notFound()
  }

  const content = await getLLMText(post)

  return <pre style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{content}</pre>
}
