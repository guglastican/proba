import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Romantic Vacations Destinations",
  description: "Terms and conditions for using our services",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com'}/terms-of-service`,
  },
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, you agree to be bound by these Terms
          of Service and our Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
        <p>
          We provide hotel search and recommendation services for romantic vacation
          destinations. All information is provided for general informational purposes only.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You must be at least 18 years old to use our services</li>
          <li>You agree to provide accurate information</li>
          <li>You are responsible for maintaining the confidentiality of your account</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
        <p>
          We shall not be liable for any indirect, incidental, special, consequential
          or punitive damages resulting from your use of or inability to use the service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Your continued use
          of the service constitutes acceptance of the modified terms.
        </p>
      </section>
    </div>
  );
}
