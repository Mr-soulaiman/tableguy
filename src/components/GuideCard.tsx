import React from 'react';
import { Link } from '../router';
import { BrutalCard } from './BrutalCard';
import { BrutalBadge } from './BrutalBadge';
import { ArrowRight, Clock } from 'lucide-react';
import { GuideArticle } from '../data/guides';

interface GuideCardProps {
  guide: GuideArticle;
  className?: string;
}

export const GuideCard: React.FC<GuideCardProps> = ({ guide, className = '' }) => {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className={`block text-inherit no-underline ${className}`}
    >
      <BrutalCard
        shadow="md"
        className="h-full p-5 sm:p-6 bg-white flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#000] transition-all cursor-pointer group"
      >
        <div className="flex flex-col gap-3">
          {/* Category & Reading Time */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <BrutalBadge variant="yellow" size="sm">
              {guide.category}
            </BrutalBadge>
            {guide.readingTime && (
              <span className="text-[11px] font-mono font-bold text-gray-600 flex items-center gap-1">
                <Clock className="w-3 h-3 stroke-[2.5]" />
                {guide.readingTime}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black group-hover:underline leading-snug">
            {guide.title}
          </h3>

          {/* Description */}
          <p className="text-sm font-medium text-gray-700 line-clamp-3 leading-relaxed">
            {guide.description}
          </p>
        </div>

        {/* Action footer */}
        <div className="pt-4 mt-4 border-t-2 border-black flex items-center justify-between text-black font-black text-sm">
          <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
            Read guide
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </span>
        </div>
      </BrutalCard>
    </Link>
  );
};
