import React from 'react';
import { useRouter } from '../router';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalButton } from '../components/BrutalButton';
import { BrutalBadge } from '../components/BrutalBadge';
import { SEO } from '../components/SEO';
import { Mail, HelpCircle, MessageSquare, Bug, Lightbulb, ArrowLeft, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { navigate } = useRouter();
  const contactEmail = 'martah.soulaiman10@gmail.com';

  return (
    <>
      <SEO
        title="Contact TABLABLE"
        description="Contact TABLABLE with questions, feedback, bug reports or suggestions about the free table generator."
        canonicalPath="/contact"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col gap-8">
        {/* Top Header */}
        <div className="border-b-2 sm:border-b-[3px] border-black pb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <BrutalBadge variant="yellow" size="md">
              Contact
            </BrutalBadge>
            <BrutalBadge variant="white" size="md">
              Get in Touch
            </BrutalBadge>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mb-3">
            Contact TABLABLE
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            Have a question, feedback, or a suggestion? We would love to hear from you.
          </p>
        </div>

        {/* Contact Info Card */}
        <BrutalCard shadow="lg" className="p-6 sm:p-10 bg-white flex flex-col gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-3">
              How to Reach Us
            </h2>
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              TABLABLE is an independent online tool. If you encounter an issue, need clarification, or have ideas on how to make table generation better, feel free to send an email directly.
            </p>
          </div>

          {/* Email Box */}
          <div className="p-5 sm:p-6 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-[#FFDE00] border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000]">
                <Mail className="w-6 h-6 text-black stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono font-black uppercase text-gray-600">
                  Direct Email Address
                </span>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-base sm:text-lg font-black text-black hover:underline hover:text-gray-900 break-all"
                  title="Send email to TABLABLE"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-black text-black bg-[#FFDE00] hover:bg-[#FFE633] border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              <span>Email Us</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

          {/* What you can contact us for */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-black uppercase tracking-tight text-black">
              What You Can Contact Us For
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 bg-[#FAF8F5] border-2 border-black flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-black stroke-[2.5] shrink-0 mt-0.5" />
                <div>
                  <span className="font-black text-sm uppercase block text-black">Questions</span>
                  <span className="text-xs font-medium text-gray-700">Need help with table formatting, imports, or export formats.</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border-2 border-black flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-black stroke-[2.5] shrink-0 mt-0.5" />
                <div>
                  <span className="font-black text-sm uppercase block text-black">Feedback</span>
                  <span className="text-xs font-medium text-gray-700">Share your thoughts on the user interface and overall experience.</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border-2 border-black flex items-start gap-3">
                <Bug className="w-5 h-5 text-black stroke-[2.5] shrink-0 mt-0.5" />
                <div>
                  <span className="font-black text-sm uppercase block text-black">Bug Reports</span>
                  <span className="text-xs font-medium text-gray-700">Let us know if a table feature or export didn&apos;t behave as expected.</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border-2 border-black flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-black stroke-[2.5] shrink-0 mt-0.5" />
                <div>
                  <span className="font-black text-sm uppercase block text-black">Suggestions</span>
                  <span className="text-xs font-medium text-gray-700">Propose new features or formats that would be useful to you.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back Navigation */}
          <div className="pt-4 border-t-2 border-black flex items-center justify-between">
            <BrutalButton
              id="contact-back-home-btn"
              variant="secondary"
              size="sm"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
              <span>Back to Home</span>
            </BrutalButton>

            <BrutalButton
              id="contact-open-generator-btn"
              variant="primary"
              size="sm"
              onClick={() => navigate('/table-generator')}
            >
              <span>Open Table Generator</span>
              <ArrowRight className="w-4 h-4 stroke-[3] ml-1.5" />
            </BrutalButton>
          </div>
        </BrutalCard>
      </div>
    </>
  );
};
