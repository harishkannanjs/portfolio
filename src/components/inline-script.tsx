export function InlineScript({ id, html }: { id?: string; html: string }) {
  return (
    <script
      id={id}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
