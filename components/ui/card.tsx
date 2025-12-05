import * as React from "react"
import { cn } from "@/lib/utils"

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("rounded-xl border-2 border-green-900 shadow-[4px_4px_0_#03594D] bg-cream text-green-900", className)}
            {...props}
        />
    )
)
Card.displayName = "Card"
