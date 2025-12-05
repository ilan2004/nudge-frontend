import { Mail, Twitter, Instagram, Github } from "lucide-react"
import styles from './footer.module.css'

export function Footer() {
    return (
        <footer className="bg-mint-500 py-0 pb-0">
            <div className={styles.footerContainer}>
                <div className={styles.footerGrid}>
                    {/* Brand Section */}
                    <div className={styles.brandSection}>
                        <h2 className={`${styles.logo} font-display uppercase`}>NUDGE</h2>
                        <p className={styles.tagline}>
                            Designed for iOS. Built for friends. Turn productivity into a game you actually want to play.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className={styles.linksSection}>
                        <h3 className={`${styles.sectionTitle} font-display uppercase`}>Quick Links</h3>
                        <div className={styles.linksList}>
                            <a href="#features" className={styles.footerLink}>Features</a>
                            <a href="#philosophy" className={styles.footerLink}>Philosophy</a>
                            <a href="#journey" className={styles.footerLink}>Our Journey</a>
                            <a href="#download" className={styles.footerLink}>Download</a>
                        </div>
                    </div>

                    {/* Connect Section */}
                    <div className={styles.connectSection}>
                        <h3 className={`${styles.sectionTitle} font-display uppercase`}>Connect</h3>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialIcon} aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="Github">
                                <Github size={20} />
                            </a>
                            <a href="mailto:hello@nudge.app" className={styles.socialIcon} aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                        <div className={styles.linksList}>
                            <a href="#" className={styles.footerLink}>Privacy Policy</a>
                            <a href="#" className={styles.footerLink}>Terms of Service</a>
                            <a href="#" className={styles.footerLink}>Contact Us</a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Bottom Section */}
                <div className={styles.bottomSection}>

                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Nudge. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
