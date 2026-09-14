import React, { ReactNode } from 'react';

interface BrutalCardProps {
  children: ReactNode;
  className?: string;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
  bg?: string;
  bordered?: boolean;
}

export const BrutalCard: React.FC<BrutalCardProps> = ({
  children,
  className = '',
  shadow = 'md',
  bg = 'bg-white',
  bordered = true,
}) => {
  const shadowStyles = {
    none: 'shadow-none',
    sm: 'shadow-[2px_2px_0px_0px_#000]',
    md: 'shadow-[4px_4px_0px_0px_#000]',
    lg: 'shadow-[6px_6px_0px_0px_#000]',
  };

  const borderStyle = bordered ? 'border-2 sm:border-[3px] border-black' : '';

  return (
    <div
      className={`${bg} ${borderStyle} ${shadowStyles[shadow]} ${className}`}
    >
      {children}
    </div>
  );
};
