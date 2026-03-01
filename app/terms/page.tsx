import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-mint-500">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-cream rounded-lg border-2 border-green-900 shadow-[4px_4px_0_rgb(3,89,77)] p-8 md:p-12">
          <h1 className="font-display uppercase text-4xl md:text-5xl text-green-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="space-y-6 text-green-900">
            <p className="text-sm text-teal-300">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Nudge, you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">2. Description of Service</h2>
              <p className="leading-relaxed">
                Nudge is a productivity application designed for iOS that helps users manage tasks, set goals, 
                and connect with friends to make productivity engaging and social.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">3. User Accounts</h2>
              <p className="leading-relaxed mb-3">To use Nudge, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least 13 years old</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">4. User Conduct</h2>
              <p className="leading-relaxed mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the service for any illegal purpose</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Upload malicious code or viruses</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Impersonate others or misrepresent your identity</li>
                <li>Spam or send unsolicited messages to other users</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">5. Content Ownership</h2>
              <p className="leading-relaxed">
                You retain ownership of any content you create in Nudge. By using our service, you grant us 
                a license to use, store, and display your content as necessary to provide the service.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">6. Intellectual Property</h2>
              <p className="leading-relaxed">
                The Nudge app, including its design, features, and content, is protected by copyright, 
                trademark, and other intellectual property laws. You may not copy, modify, or distribute 
                our intellectual property without permission.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">7. Subscription and Payments</h2>
              <p className="leading-relaxed">
                Some features may require a paid subscription. Subscription fees are billed in advance and 
                are non-refundable except as required by law. You can cancel your subscription at any time 
                through your iOS device settings.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">8. Termination</h2>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate your account if you violate these terms or 
                engage in conduct that we deem harmful to other users or our service. You may also delete 
                your account at any time through the app settings.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">9. Disclaimers</h2>
              <p className="leading-relaxed">
                Nudge is provided "as is" without warranties of any kind. We do not guarantee that the 
                service will be uninterrupted, secure, or error-free. Use of the service is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">10. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, Nudge shall not be liable for any indirect, 
                incidental, special, or consequential damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">11. Changes to Terms</h2>
              <p className="leading-relaxed">
                We may modify these terms at any time. We will notify you of significant changes through 
                the app or via email. Continued use of the service after changes constitutes acceptance 
                of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">12. Governing Law</h2>
              <p className="leading-relaxed">
                These terms are governed by and construed in accordance with applicable laws. Any disputes 
                shall be resolved in the appropriate courts.
              </p>
            </section>

            <section>
              <h2 className="font-display uppercase text-2xl mb-3">13. Contact Information</h2>
              <p className="leading-relaxed">
                For questions about these Terms of Service, contact us at{' '}
                <a href="mailto:legal@nudge.app" className="text-pink-500 hover:underline">
                  legal@nudge.app
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
