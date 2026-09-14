import React, { useState } from 'react';
import { useRouter } from '../router';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalButton } from '../components/BrutalButton';
import { BrutalBadge } from '../components/BrutalBadge';
import { SEO } from '../components/SEO';
import { Mail, MessageSquare, Send, CheckCircle2, ArrowLeft } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { navigate } = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact TABLEGUY"
        description="Get in touch with TABLEGUY. Feedback, questions, and feature suggestions for our online table generator."
        canonicalPath="/contact"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col gap-8">
        {/* Top Header */}
        <div className="border-b-2 sm:border-b-[3px] border-black pb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <BrutalBadge variant="yellow" size="md">
              Contact
            </BrutalBadge>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mb-3">
            Contact TABLEGUY
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            Have feedback, questions, or ideas for improving TABLEGUY? Let us know.
          </p>
        </div>

        {/* Contact Form Card */}
        <BrutalCard shadow="lg" className="p-6 sm:p-10 bg-white">
          {submitted ? (
            <div className="text-center py-8 flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-[#FFDE00] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-black stroke-[2.5]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-black">
                Message Received
              </h2>
              <p className="text-base font-medium text-gray-700 max-w-md">
                Thank you for your feedback! We appreciate you taking the time to share your thoughts with us.
              </p>
              <div className="pt-4">
                <BrutalButton
                  id="contact-back-home-btn"
                  variant="primary"
                  size="md"
                  onClick={() => navigate('/')}
                >
                  <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
                  <span>Back to Home</span>
                </BrutalButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-black uppercase text-black mb-1.5"
                >
                  Name (Optional)
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 text-sm sm:text-base border-2 border-black font-medium focus:outline-none focus:ring-2 focus:ring-black bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-black uppercase text-black mb-1.5"
                >
                  Email (Optional)
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 text-sm sm:text-base border-2 border-black font-medium focus:outline-none focus:ring-2 focus:ring-black bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-black uppercase text-black mb-1.5"
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us what you think or how we can improve TABLEGUY..."
                  className="w-full px-3.5 py-2.5 text-sm sm:text-base border-2 border-black font-medium focus:outline-none focus:ring-2 focus:ring-black bg-white resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <p className="text-xs text-gray-500 font-medium">
                  TABLEGUY is a free independent utility.
                </p>
                <BrutalButton
                  id="contact-submit-btn"
                  variant="primary"
                  size="md"
                  type="submit"
                  className="group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 stroke-[2.5] ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </BrutalButton>
              </div>
            </form>
          )}
        </BrutalCard>
      </div>
    </>
  );
};
