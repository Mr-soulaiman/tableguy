import React from 'react';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalBadge } from '../components/BrutalBadge';
import { SEO } from '../components/SEO';

export const TermsPage: React.FC = () => {
  const lastUpdated = 'September 14, 2026';
  const contactEmail = 'martah.soulaiman10@gmail.com';

  return (
    <>
      <SEO
        title="TABLEGUY Terms of Use"
        description="Read the Terms of Use for TABLEGUY, a free online table creation and formatting tool."
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
              Last updated: {lastUpdated}
            </BrutalBadge>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mb-3">
            Terms of Use
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            Terms governing the use of the TABLEGUY online table generator utility.
          </p>
        </div>

        {/* Content Card */}
        <BrutalCard shadow="lg" className="p-6 sm:p-10 bg-white flex flex-col gap-8 text-black">
          {/* Section 1: Use of TABLEGUY */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              1. Use of TABLEGUY
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              TABLEGUY is provided as a free, web-based utility for creating, editing, formatting, and exporting tables. You are welcome to use TABLEGUY for personal, academic, organizational, or commercial purposes without fees, licensing subscriptions, or account requirements.
            </p>
          </section>

          {/* Section 2: User Responsibility */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              2. User Responsibility
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              You are responsible for the data, text, numbers, and content you enter, edit, or paste into TABLEGUY. You agree to ensure that your use of the tool and the data you process comply with all laws, confidentiality agreements, and regulations applicable to you.
            </p>
          </section>

          {/* Section 3: User-Generated Content */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              3. User-Generated Content &amp; Ownership
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              You retain complete ownership and all rights to the tables, data, and exported files you produce using TABLEGUY. TABLEGUY claims no ownership, copyright, or intellectual property rights over any table content created, edited, or exported by users.
            </p>
          </section>

          {/* Section 4: Acceptable Use */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              4. Acceptable Use
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              You agree to use TABLEGUY only for lawful purposes. You agree not to attempt to disrupt, exploit, overload, or compromise the technical availability or security of the website or its hosting infrastructure.
            </p>
          </section>

          {/* Section 5: Intellectual Property */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              5. Intellectual Property
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              The TABLEGUY name, website design, visual identity, logos, icons, and interface code are protected by intellectual property and copyright laws. You may not duplicate, redistribute, or clone the TABLEGUY website or brand identity without prior permission. This does not restrict your rights to your own table data and exports.
            </p>
          </section>

          {/* Section 6: Availability of the Service */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              6. Availability of the Service
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              TABLEGUY is provided as a free utility. While we make every effort to ensure reliable performance and consistent availability, we do not guarantee continuous, uninterrupted, or error-free operation of the website at all times.
            </p>
          </section>

          {/* Section 7: Disclaimer */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              TABLEGUY is provided &quot;as is&quot; and &quot;as available,&quot; without express or implied warranties of any kind, including but not limited to warranties of fitness for a particular purpose, merchantability, or non-infringement. You are encouraged to verify exported table calculations, syntax, and formatting prior to relying on them for critical applications.
            </p>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              8. Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              To the fullest extent permitted by law, TABLEGUY and its creator shall not be liable for any direct, indirect, incidental, consequential, or special damages resulting from the use or inability to use the service, including data loss or formatting inaccuracies.
            </p>
          </section>

          {/* Section 9: Changes to the Service */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              9. Changes to the Service
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              We reserve the right to modify, add, or update features of the table tool at any time without prior notice in order to improve usability and maintain technical standards.
            </p>
          </section>

          {/* Section 10: Changes to the Terms */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              10. Changes to These Terms
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              We may revise these Terms of Use periodically. Any changes will be published on this page with an updated &quot;Last updated&quot; date. Continued use of TABLEGUY following the posting of updated terms constitutes acceptance of those revisions.
            </p>
          </section>

          {/* Section 11: Contact */}
          <section className="flex flex-col gap-3 pt-4 border-t-2 border-black">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              11. Contact
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              For any questions regarding these Terms of Use, please get in touch by email:
            </p>
            <p className="text-sm sm:text-base font-bold text-black">
              Email:{' '}
              <a
                href={`mailto:${contactEmail}`}
                className="underline hover:text-gray-700"
              >
                {contactEmail}
              </a>
            </p>
          </section>
        </BrutalCard>
      </div>
    </>
  );
};
