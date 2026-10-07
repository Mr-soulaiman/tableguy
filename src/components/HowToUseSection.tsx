import React from 'react';
import { BrutalCard } from './BrutalCard';
import { BrutalBadge } from './BrutalBadge';
import { HelpCircle } from 'lucide-react';

export interface HowToUseStep {
  title: string;
  description: string;
}

interface HowToUseSectionProps {
  title: string;
  badgeText?: string;
  steps: HowToUseStep[];
  className?: string;
}

export const HowToUseSection: React.FC<HowToUseSectionProps> = ({
  title,
  badgeText = 'Step-by-Step Guide',
  steps,
  className = '',
}) => {
  return (
    <section
      aria-label={title}
      className={`max-w-4xl mx-auto px-4 sm:px-6 w-full ${className}`}
    >
      <BrutalCard shadow="md" className="p-6 sm:p-8 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6 border-b-2 border-black/15 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-black">
              <HelpCircle className="w-4 h-4 stroke-[2.5]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              {title}
            </h2>
          </div>
          <BrutalBadge variant="yellow" size="sm">
            {badgeText}
          </BrutalBadge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] border-2 border-black p-3.5 sm:p-4 shadow-[2px_2px_0px_0px_#000] flex flex-col justify-start gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 bg-[#FFDE00] text-black font-black text-xs border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_0px_#000] shrink-0">
                  {idx + 1}
                </span>
                <span className="text-[10px] font-mono font-black uppercase text-gray-500">
                  Step 0{idx + 1}
                </span>
              </div>
              <h3 className="font-black text-xs sm:text-sm uppercase text-black leading-snug mt-1">
                {step.title}
              </h3>
              <p className="text-xs text-gray-700 font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </BrutalCard>
    </section>
  );
};
