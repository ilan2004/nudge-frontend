import styles from './philosophy.module.css'
import { cn } from "@/lib/utils"

export function Philosophy() {
    const philosophies = [
        {
            title: "Together",
            description: "Compete and collaborate with friends. Shared goals make hard work feel easier and more rewarding.",
            colorClass: styles.card1
        },
        {
            title: "Self-Aware",
            description: "Discover your natural strengths and weaknesses through the MBTI test. Know yourself to grow yourself.",
            colorClass: styles.card2
        },
        {
            title: "Alive",
            description: "Your character comes alive with Rive animations. They react to your focus—idle, focused, or depressed.",
            colorClass: styles.card3
        }
    ]

    return (
        <section className="py-32 bg-mint-500 px-4 mb-32">
            <div className={styles.mainContainer}>
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-green-900">
                        Core Philosophy
                    </h2>
                    <p className="mt-6 text-xl font-medium text-green-900/70 max-w-2xl mx-auto">
                        Three principles that make productivity feel natural
                    </p>
                </div>

                {/* Three Column Layout */}
                <div className="flex justify-between items-stretch gap-6">
                    {philosophies.map((philosophy, index) => (
                        <div
                            key={index}
                            className={cn(styles.card, philosophy.colorClass)}
                        >
                            <h3 className="text-3xl md:text-4xl font-display uppercase mb-6 tracking-wide">
                                {philosophy.title}
                            </h3>
                            <p className="text-base md:text-lg font-medium leading-relaxed opacity-90">
                                {philosophy.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
