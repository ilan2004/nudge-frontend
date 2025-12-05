import styles from './features.module.css'
import { Smartphone, Trophy, UserPlus, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export function Features() {
    return (
        <section className="py-36 bg-mint-500 text-green-900 px-4 mb-32">
            <div className={styles.mainContainer}>
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-display mb-6">Key Features</h2>
                    <p className="text-xl font-medium max-w-2xl mx-auto text-green-900/80">
                        Everything you need to turn productivity into a game you actually want to play.
                    </p>
                </div>

                {/* Bento Grid Container */}
                <div className={styles.container}>

                    {/* Item 1: Multiplayer Rooms (Pink, Span 2) */}
                    <div className={cn(styles.card, styles.span2, styles.pink, "group")}>
                        <div className="p-8 h-full flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className={cn(styles.iconBox, styles.iconBoxShadow, "bg-cream text-pink-500 shrink-0")}>
                                <UserPlus size={32} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-display mb-3 text-cream">Multiplayer Rooms</h3>
                                <p className="text-cream/90 text-lg font-medium leading-relaxed">
                                    Create rooms and invite friends. Compete to see who can stay focused the longest.
                                    Winner is chosen based on Screen Time, Breaks, and Daily Limits.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Item 2: App Blocking (Teal, Span 1) */}
                    <div className={cn(styles.card, styles.teal, "group")}>
                        <div className="p-8 h-full flex flex-col items-center justify-center text-center gap-6">
                            <div className={cn(styles.iconBox, styles.iconBoxShadowSoft, "bg-green-900 text-cream w-fit")}>
                                <Smartphone size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-display mb-3 text-green-900">App Blocking</h3>
                                <p className="text-green-900/80 font-medium leading-relaxed">
                                    We use the Screen Time API to block distractions. Your character reacts to your focus state.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Item 3: Celestial Characters (Yellow, Span 1) */}
                    <div className={cn(styles.card, styles.yellow, "group")}>
                        <div className="p-8 h-full flex flex-col items-center justify-center text-center gap-6">
                            <div className={cn(styles.iconBox, styles.iconBoxShadow, "bg-cream text-yellow-500 w-fit")}>
                                <Zap size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-display mb-3 text-green-900">Celestial Characters</h3>
                                <p className="text-green-900/80 font-medium leading-relaxed">
                                    Are you a Star, Cloud, Moon, or Sun? Your MBTI determines your character and animations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Item 4: Win Together (Mint/Cream, Span 2) */}
                    <div className={cn(styles.card, styles.span2, styles.cream, "group")}>
                        <div className="p-8 h-full flex flex-col md:flex-row-reverse items-center gap-6 text-center md:text-left">
                            <div className={cn(styles.iconBox, styles.iconBoxShadowSoft, "bg-green-900 text-cream shrink-0")}>
                                <Trophy size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl font-display mb-3 text-green-900">Win Together</h3>
                                <p className="text-green-900/80 text-lg font-medium leading-relaxed">
                                    Compare MBTI types with friends and see who balances whom.
                                    Gamified winning logic keeps everyone accountable and motivated.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
