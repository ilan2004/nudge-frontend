import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "retro-btn inline-flex items-center justify-center rounded-xl font-bold uppercase tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-display",
                    {
                        'bg-green-900 text-cream border-green-900 hover:bg-green-800': variant === 'primary',
                        'bg-cream text-green-900 border-green-900 hover:bg-gray-50': variant === 'secondary',
                        'bg-transparent border-green-900 text-green-900 hover:bg-green-900/10': variant === 'outline',
                        'h-10 px-4 text-sm': size === 'sm',
                        'h-12 px-8 text-base': size === 'md',
                        'h-16 px-10 text-xl': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"
