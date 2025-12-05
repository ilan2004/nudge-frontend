'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
    return (
        <nav
            className="fixed z-50 w-full"
            style={{
                top: '-2px',
                left: 0,
                right: 0,
                background: 'var(--surface)',
                borderBottom: '2px solid var(--border-color)',
                boxShadow: '0 4px 0 var(--border-color)',
                borderBottomLeftRadius: '32px',
                borderBottomRightRadius: '32px',
            }}
        >
            <div className="w-full px-8 md:px-12 py-4">
                <div className="flex items-center justify-between max-w-[95%] mx-auto">
                    {/* Logo/Title */}
                    <h1
                        className="font-display text-3xl md:text-4xl uppercase tracking-wide select-none"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        NUDGE
                    </h1>


                </div>
            </div>
        </nav>
    )
}
