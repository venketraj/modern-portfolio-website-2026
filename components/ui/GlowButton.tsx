import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function GlowButton({
  children,
  className,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
}: GlowButtonProps) {
  const base = cn(
    'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm',
    'border backdrop-blur-sm transition-all duration-300 cursor-pointer select-none',
    variant === 'primary' &&
      'bg-purple-600/20 border-purple-500/50 text-purple-200 hover:bg-purple-600/30 hover:border-purple-400/70 hover:shadow-[0_0_20px_rgba(124,58,237,.4)] hover:text-white',
    variant === 'secondary' &&
      'bg-blue-600/20 border-blue-500/50 text-blue-200 hover:bg-blue-600/30 hover:border-blue-400/70 hover:shadow-[0_0_20px_rgba(37,99,235,.4)] hover:text-white',
    variant === 'outline' &&
      'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20 hover:text-white',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className,
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
