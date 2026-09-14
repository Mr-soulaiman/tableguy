import React from 'react';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalBadge } from '../components/BrutalBadge';
import { SEO } from '../components/SEO';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="TABLEGUY Privacy Policy"
        description="Privacy Policy for TABLEGUY. Table data is processed locally in your browser and is never stored, sold, or sent to external servers."
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
              Updated September 2026
            </BrutalBadge>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mb-3">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            How TABLEGUY respects your privacy and handles data.
          </p>
        </div>

        {/* Content Card */}
        <BrutalCard shadow="lg" className="p-6 sm:p-10 bg-white flex flex-col gap-8 text-black">
          {/* Key Privacy Highlights */}
          <div className="p-4 sm:p-5 bg-[#FAF8F5] border-2 border-black flex flex-col gap-3">
            <div className="flex items-center gap-2 font-black text-black">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              <span className="text-base uppercase">Summary: 100% Client-Side Processing</span>
            </div>
            <p className="text-sm font-medium text-gray-800 leading-relaxed">
              TABLEGUY runs entirely in your web browser. When you create, paste, edit, or export tables, your data remains on your device and is never transmitted to or stored on our servers.
            </p>
          </div>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              1. Information We Do Not Collect
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              We do not collect, store, sell, or share any personal information or content you enter into TABLEGUY. Specifically:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base font-medium text-gray-800 space-y-1.5 pl-2">
              <li>We do not store your table cells, headers, pasted data, or exported files on any server.</li>
              <li>We do not require you to create an account, log in, or provide personal identity details.</li>
              <li>We do not monetize your data or sell personal information to third parties.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              2. Browser-Local Operations
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              All table operations—including cell editing, merging, splitting, styling, CSV parsing, and exporting to HTML, Markdown, CSV, Plain Text, or PDF—are executed using standard client-side JavaScript APIs in your local browser runtime.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              3. Cookies and Local Storage
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              TABLEGUY does not use persistent tracking cookies to profile user behavior across other websites. Standard technical hosting logs (such as basic HTTP request logs provided by our hosting platform for security and uptime diagnostics) may process standard network IP information according to basic infrastructure requirements.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              4. External Links & Services
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              If our website links to external third-party resources or platforms, please note that those external websites operate under their own independent privacy policies.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              5. Changes to This Policy
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              We may periodically update this Privacy Policy to reflect technical or service updates. Any revisions will be published directly on this page with an updated revision date.
            </p>
          </section>
        </BrutalCard>
      </div>
    </>
  );
};
