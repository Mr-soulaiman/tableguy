import React, { ButtonHTMLAttributes } from 'react';

interface BrutalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'black';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const BrutalButton: React.FC<BrutalButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold tracking-tight transition-all duration-100 select-none cursor-pointer border-2 sm:border-[3px] border-black disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs sm:text-sm shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none min-h-[36px]',
    md: 'px-5 py-2.5 text-sm sm:text-base shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none min-h-[44px]',
    lg: 'px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg shadow-[5px_5px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none min-h-[52px]',
  };

  const variantStyles = {
    primary: 'bg-[#FFDE00] text-black hover:bg-[#FFE633]',
    secondary: 'bg-white text-black hover:bg-[#F3F0E6]',
    outline: 'bg-transparent text-black hover:bg-black/5',
    black: 'bg-black text-white hover:bg-[#222222]',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
