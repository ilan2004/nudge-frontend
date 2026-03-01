import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-mint-500">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-cream rounded-lg border-2 border-green-900 shadow-[4px_4px_0_rgb(3,89,77)] p-8 md:p-12">
          <h1 className="font-display uppercase text-4xl md:text-5xl text-green-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-green-900">
            <p className="text-sm text-teal-300">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Nudge. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you use our iOS application.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">2. Information We Collect</h2>
              <p className="leading-relaxed mb-3">We collect information that you provide directly to us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (name, email address)</li>
                <li>Task and goal data you create within the app</li>
                <li>Friend connections and social interactions</li>
                <li>Usage data and app interactions</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our service</li>
                <li>Enable social features and friend connections</li>
                <li>Send you notifications and updates</li>
                <li>Improve and personalize your experience</li>
                <li>Analyze usage patterns and optimize performance</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">4. Data Sharing</h2>
              <p className="leading-relaxed">
                We do not sell your personal information. We may share your data with friends you connect with 
                in the app, and with service providers who help us operate our service. All data sharing is done 
                with appropriate safeguards in place.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">6. Your Rights</h2>
              <p className="leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data</li>
                <li>Opt-out of certain data collection</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">7. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our service is not intended for children under 13. We do not knowingly collect personal 
                information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">8. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by 
                posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">9. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this privacy policy, please contact us at{' '}
                <a href="mailto:privacy@nudge.app" className="text-pink-500 hover:underline">
                  privacy@nudge.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
