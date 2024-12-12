import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for iShot-It App</h1>
      <p className="mb-4">Effective Date: December 9, 2024</p>

      <p className="mb-4">
        iShot-It App Integrated ("we," "us," "our") is committed to protecting the privacy of users ("you," "your") of our mobile application and website, collectively referred to as the "iShot-It App." This Privacy Policy explains how we collect, use, and disclose your information when you use our services.
      </p>

      <p className="mb-6">
        By using the iShot-It App, you consent to the practices outlined in this Privacy Policy.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-2">We collect the following personal information from you:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal Information: Name, username, phone number, email address, password, and profile picture.</li>
          <li>Device and Technical Information: Geolocation, device ID, IP address, and device operating system.</li>
          <li>Payment Information: Details necessary for subscription payments, processed through secure third-party payment gateways.</li>
          <li>Camera and Contacts Access: Access to your camera and contacts to enable app features.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-2">We use your information to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide, personalize, and improve the iShot-It App experience.</li>
          <li>Verify your account through email during sign-up.</li>
          <li>Display advertisements tailored to your preferences.</li>
          <li>Enable geolocation-based features and services.</li>
          <li>Facilitate subscriptions and process payments.</li>
          <li>Communicate with you regarding updates, services, or support.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
        <p className="mb-2">We may share your information in the following circumstances:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Service Providers: With third-party providers for payment processing, advertising, and analytics.</li>
          <li>Legal Requirements: To comply with applicable laws or legal processes.</li>
          <li>Business Transfers: In the event of a merger, acquisition, or sale of assets.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
        <h3 className="text-xl font-semibold mb-2">Under the General Data Protection Regulation (GDPR)</h3>
        <p className="mb-2">If you are located in the European Union, you have the following rights:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access, correct, or delete your personal information.</li>
          <li>Withdraw consent for data processing.</li>
          <li>Lodge a complaint with your local data protection authority.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Under the California Consumer Privacy Act (CCPA)</h3>
        <p className="mb-2">If you are a California resident, you have the following rights:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Know what personal information we collect, use, and share.</li>
          <li>Request deletion of your personal information.</li>
          <li>Opt-out of the sale of personal information (we do not sell personal data).</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Under the California Online Privacy Protection Act (CalOPPA)</h3>
        <p className="mb-4">We honor "Do Not Track" signals and allow users to manage cookies and tracking preferences.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Children's Privacy</h2>
        <p className="mb-4">
          The iShot-It App is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13 without parental consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Security of Your Information</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your personal information. However, no method of electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Subscription and Payment Information</h2>
        <p className="mb-4">
          Your subscription is recurrent and billed periodically. You may cancel your subscription at any time through your account settings or by contacting us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. User Controls and Account Management</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Access and Updates: You can view and update your personal information within the app or website.</li>
          <li>Camera and Geolocation Access: You can enable or disable camera and geolocation permissions through your device settings.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services</h2>
        <p className="mb-4">
          The iShot-It App may link to third-party services for ads and analytics. We are not responsible for the privacy practices of these services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p className="mb-2">For any privacy-related inquiries, you can contact us:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Website: <Link href="https://www.ishot-it.com" className="text-blue-600 hover:underline">www.ishot-it.com</Link></li>
          <li>Email: <a href="mailto:ishotitapp@gmail.com" className="text-blue-600 hover:underline">ishotitapp@gmail.com</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Updates to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted with a new effective date.
        </p>
      </section>
    </div>
  )
}

