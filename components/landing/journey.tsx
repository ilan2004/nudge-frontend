import styles from './journey.module.css'
import { cn } from "@/lib/utils"

export function Journey() {
    const steps = [
        {
            title: "Take MBTI Quiz",
            description: "Discover your personality type and unlock your celestial character.",
            icon: "1",
            colorClass: styles.step1
        },
        {
            title: "Get Character",
            description: "Meet your Star, Cloud, Moon, or Sun. See them come alive.",
            icon: "2",
            colorClass: styles.step2
        },
        {
            title: "Create Room",
            description: "Invite friends to a focus session. Set the stakes.",
            icon: "3",
            colorClass: styles.step3
        },
        {
            title: "Focus & Win",
            description: "Block apps, stay on track, and top the leaderboard.",
            icon: "4",
            colorClass: styles.step4
        }
    ]

    return (
        <section className="py-32 bg-mint-500 text-green-900 px-4 mb-32">
            <div className={styles.mainContainer}>
                <h2 className="text-5xl md:text-7xl font-display text-center mb-12">Your Journey</h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className={cn(styles.stepCard, step.colorClass, "group")}>
                            <div className={styles.iconCircle}>
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-display mb-3">{step.title}</h3>
                            <p className="font-medium leading-relaxed opacity-90">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
