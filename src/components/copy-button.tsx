"use client"

import { useState } from "react"
import { copyText } from "@/utils/copy"
import { CheckIcon, CopyIcon } from "lucide-react"

import type { Event } from "@/lib/events"
import { trackEvent } from "@/lib/events"
import { Button } from "@/components/base/ui/button"

export type CopyButtonProps = React.ComponentProps<typeof Button> & {
  value?: string
  text?: string | (() => string)
  idleIcon?: React.ReactNode
  onCopySuccess?: (copiedValue: string) => void
  event?: Event["name"]
}

export function CopyButton({
  size = "icon-sm",
  event,
  value,
  text,
  idleIcon,
  className,
  onCopySuccess,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  return (
    <Button
      variant="secondary"
      size={size}
      className={className}
      onClick={() => {
        const textToCopy =
          value || (typeof text === "function" ? text() : text) || ""
        copyText(textToCopy)
        setHasCopied(true)
        if (onCopySuccess) {
          onCopySuccess(textToCopy)
        }
        if (event) {
          trackEvent({
            name: event,
            properties: {
              code: textToCopy,
            },
          })
        }
        setTimeout(() => setHasCopied(false), 2000)
      }}
      {...props}
    >
      {hasCopied ? <CheckIcon /> : idleIcon || <CopyIcon />}
    </Button>
  )
}
