import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-mint-500 p-4 pt-64">
            <div
                className="w-full max-w-6xl overflow-hidden flex flex-row"
                style={{
                    background: 'var(--surface)',
                    borderRadius: '48px',
                    border: '2px solid var(--border-color)',
                    boxShadow: '3px 3px 0 var(--border-color)',
                }}
            >
                {/* Left Side - Image */}
                <div className="w-1/2 min-h-[600px] flex items-center justify-center relative overflow-hidden">
                    <Image
                        src="/exercise and engineering.png"
                        alt="Exercise and Engineering"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-1/2 px-12 py-16 flex flex-col justify-center items-center text-center">
                    <h1
                        className="text-[8rem] font-display font-black leading-none tracking-tighter"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        NUDGE
                    </h1>
                </div>
            </div>
        </section>
    )
}
