import { cn } from "@/lib/utils"

export function HkMark({
  className,
  alt = "Logo",
  ...props
}: React.ComponentProps<"img">) {
  return (
    <>
      <img
        src="/logo-light.png"
        alt={alt}
        className={cn("block h-6 w-auto object-contain dark:hidden", className)}
        {...props}
      />
      <img
        src="/logo-dark.png"
        alt={alt}
        className={cn("hidden h-6 w-auto object-contain dark:block", className)}
        {...props}
      />
    </>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="currentColor" d="M0 0h32v128H0zM32 48h64v32H32zM96 0h32v128H96zM160 0h32v128h-32zM192 32h32v32h-32zM224 0h32v32h-32zM192 64h32v32h-32zM224 96h32v32h-32z"/></svg>`
}
