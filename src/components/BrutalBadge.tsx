import React, { ReactNode } from 'react';

interface BrutalBadgeProps {
  children: ReactNode;
  variant?: 'yellow' | 'white' | 'black' | 'gray';
  size?: 'sm' | 'md';
  className?: string;
}

export const BrutalBadge: React.FC<BrutalBadgeProps> = ({
  children,
  variant = 'yellow',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    yellow: 'bg-[#FFDE00] text-black',
    white: 'bg-white text-black',
    black: 'bg-black text-white',
    gray: 'bg-[#E5E0D8] text-black',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs font-bold',
    md: 'px-3 py-1 text-xs sm:text-sm font-extrabold uppercase tracking-wider',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border-2 border-black shadow-[2px_2px_0px_0px_#000] select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
