import React from 'react';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalBadge } from '../components/BrutalBadge';
import { SEO } from '../components/SEO';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="TABLEGUY Terms of Use"
        description="Terms of Use for TABLEGUY free online table generator and editor."
        canonicalPath="/terms"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col gap-8">
        {/* Top Header */}
        <div className="border-b-2 sm:border-b-[3px] border-black pb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <BrutalBadge variant="yellow" size="md">
              Legal
            </BrutalBadge>
            <BrutalBadge variant="white" size="md">
              Effective September 2026
            </BrutalBadge>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mb-3">
            Terms of Use
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            Terms and conditions governing the use of the TABLEGUY website.
          </p>
        </div>

        {/* Content Card */}
        <BrutalCard shadow="lg" className="p-6 sm:p-10 bg-white flex flex-col gap-8 text-black">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              1. Free Use of TABLEGUY
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              TABLEGUY provides free, browser-based table creation, editing, and formatting tools. You are welcome to use TABLEGUY for personal, educational, or commercial projects without subscription fees or licensing costs.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              2. User Responsibility for Content
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              You retain full ownership of any data, text, or figures you input into TABLEGUY. You are solely responsible for ensuring you have the right to input and process your data, and that your content complies with applicable laws and regulations.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              3. Acceptable Use
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              You agree not to use the service in any way that disrupts, damages, or impairs the functionality of the website, or attempts to circumvent technical safeguards, reverse engineer unauthorized services, or overload infrastructure.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              4. Availability & Disclaimer of Warranty
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              TABLEGUY is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied. While we strive for high reliability and accurate formatting outputs, we do not warrant that the service will be uninterrupted, bug-free, or suitable for critical automated pipelines without user verification.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              5. Intellectual Property
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              The design, branding, logo, and user interface software of TABLEGUY are protected by copyright and intellectual property laws. You may not copy, replicate, or rebrand the TABLEGUY interface without prior permission. However, any tables and data generated or exported by you remain entirely your property.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              6. Changes to the Service
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              We reserve the right to update, modify, or enhance features of TABLEGUY at any time. Continued use of the website following any updates constitutes acceptance of the revised Terms of Use.
            </p>
          </section>
        </BrutalCard>
      </div>
    </>
  );
};
