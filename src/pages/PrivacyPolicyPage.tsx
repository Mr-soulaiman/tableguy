import React from 'react';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalBadge } from '../components/BrutalBadge';
import { SEO } from '../components/SEO';
import { ShieldCheck, Lock, EyeOff, ServerOff, FileCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = 'September 14, 2026';
  const contactEmail = 'martah.soulaiman10@gmail.com';

  return (
    <>
      <SEO
        title="TABLEGUY Privacy Policy"
        description="Read the TABLEGUY Privacy Policy and learn how the website handles information and table data."
        canonicalPath="/privacy-policy"
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
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            How TABLEGUY handles your table data and respects your privacy.
          </p>
        </div>

        {/* Content Card */}
        <BrutalCard shadow="lg" className="p-6 sm:p-10 bg-white flex flex-col gap-8 text-black">
          {/* Key Privacy Highlights Box */}
          <div className="p-4 sm:p-5 bg-[#FAF8F5] border-2 border-black flex flex-col gap-3">
            <div className="flex items-center gap-2 font-black text-black">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              <span className="text-base uppercase">Summary: Browser-Local Processing</span>
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              TABLEGUY runs entirely in your web browser. When you create, paste, format, or export tables, your data is processed locally in your browser&apos;s memory and is not sent to, stored on, or analyzed by remote servers.
            </p>
          </div>

          {/* Section 1: Table Data and Content */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              1. Table Data &amp; Content Entered Into the Tool
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              When you use the table generator or editor:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base font-medium text-gray-800 space-y-2 pl-2">
              <li>
                <strong>Client-Side Execution:</strong> All text input, cell edits, merges, sorts, styling choices, and transformations happen entirely within your local browser session using client-side JavaScript.
              </li>
              <li>
                <strong>No Server Storage:</strong> Your table data is never uploaded to, saved on, or synchronized with any remote server, database, or cloud storage service.
              </li>
              <li>
                <strong>Ephemeral Session State:</strong> Table content lives in temporary browser memory. When you close or refresh the page, the in-memory data resets.
              </li>
            </ul>
          </section>

          {/* Section 2: User Accounts & Information Provided */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              2. User Accounts &amp; Information You Provide
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              TABLEGUY does not require or offer user account registration, login credentials, or profiles. You do not need to provide an email address, name, or password to use any table creation or export features.
            </p>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              If you choose to contact us directly via email at <a href={`mailto:${contactEmail}`} className="font-bold underline">{contactEmail}</a>, we receive your email address and any information you include in your message solely to respond to your question or feedback.
            </p>
          </section>

          {/* Section 3: Exports and Downloads */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              3. Table Exports &amp; Downloads
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              When you copy or download your tables in HTML, Markdown, CSV, Plain Text, or PDF formats, the exported files and clipboard data are generated locally on your device using browser APIs (such as Blob URLs, client-side PDF rendering, and the Clipboard API). No export data is routed through external conversion servers.
            </p>
          </section>

          {/* Section 4: Cookies and Tracking */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              4. Cookies, Analytics &amp; Third-Party Tracking
            </h2>
            <ul className="list-disc list-inside text-sm sm:text-base font-medium text-gray-800 space-y-2 pl-2">
              <li>
                <strong>No Cookies:</strong> TABLEGUY does not set or use cookies for tracking, advertising, or profiling.
              </li>
              <li>
                <strong>No Analytics Networks:</strong> We do not integrate third-party analytics trackers, advertising pixels, or cross-site tracking tools on this website.
              </li>
              <li>
                <strong>Technical Hosting Logs:</strong> Like standard web infrastructure, basic network request logs (such as request timestamps and IP addresses) may be processed by the underlying hosting provider for essential technical delivery, DDoS protection, and server security.
              </li>
            </ul>
          </section>

          {/* Section 5: Data Sharing & Selling */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              5. Data Sharing &amp; Monetization
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              We do not sell, rent, trade, or monetize user data. Because table content is processed locally and never stored on our servers, there is no user table dataset to share with third parties.
            </p>
          </section>

          {/* Section 6: User Rights */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              6. Your Data Rights
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              Because TABLEGUY does not store personal information or table data on servers, you have full control over your data directly in your browser. You can clear your table at any time using the in-app &quot;Clear table&quot; button or by refreshing your browser tab.
            </p>
          </section>

          {/* Section 7: Changes to this Policy */}
          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              We may update this Privacy Policy from time to time if the tool&apos;s features or legal requirements change. Any updates will be posted directly on this page with an updated &quot;Last updated&quot; date at the top.
            </p>
          </section>

          {/* Section 8: Contact Information */}
          <section className="flex flex-col gap-3 pt-4 border-t-2 border-black">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              8. Contact Us
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              If you have any questions about this Privacy Policy or how TABLEGUY operates, please contact us by email:
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
