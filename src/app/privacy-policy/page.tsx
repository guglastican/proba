import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Romantic Vacations Destinations",
  description: "Read our privacy policy and learn how we protect your data",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com'}/privacy-policy`,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We collect information you provide directly when you use our services,
          including when you search for hotels, contact us, or subscribe to our newsletter.
        </p>
        <p>
          This may include your name, email address, and search preferences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide and improve our services</li>
          <li>To communicate with you about your account</li>
          <li>To personalize your experience</li>
          <li>For analytics and service improvements</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p>
          We implement appropriate security measures to protect against unauthorized
          access to or unauthorized alteration, disclosure, or destruction of data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>
    </div>
  );
}
