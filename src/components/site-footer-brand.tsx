"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

const VIEWBOX_WIDTH = 993

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(0.5)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 993 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 1H33V65H129V97H33V257H1V1ZM129 97H161V257H129V97ZM225 65H353V257H321V225H289V193H321V97H225V65ZM225 225H193V97H225V225ZM225 225V257H289V225H225ZM385 65H513V97H417V257H385V65ZM577 1H609V33H577V1ZM673 65H801V97H673V129H641V97H673V65ZM673 129H769V161H673V129ZM641 225H769V193H801V257H641V225ZM833 1H865V65H961V97H865V257H833V1ZM961 97H993V257H961V97Z"
              fill="url(#paint0_linear_1145_73)"
            />
            <path
              d="M545 65V97H577V257H609V65H545Z"
              fill="url(#paint0_linear_1145_73)"
            />
            <path
              className="stroke-foreground/10"
              d="M129 97V65H33V1H1V257H33V97H129ZM129 97H161V257H129V97ZM289 225H321V257H353V65H225V97M289 225V193H321V97H225M289 225V257H225V225M289 225H225M225 97H193V225H225M225 97V225M513 97V65H385V257H417V97H513ZM577 1H609V33H577V1ZM545 65V97H577V257H609V65H545ZM673 65H801V97H673V129H641V97H673V65ZM673 129H769V161H673V129ZM641 225H769V193H801V257H641V225ZM961 97V65H865V1H833V257H865V97H961ZM961 97H993V257H961V97Z"
              strokeWidth="2"
            />
            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="1"
                x2="496.5"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}
