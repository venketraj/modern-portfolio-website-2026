import { config } from '@/data/config';
import GradientText from '@/components/ui/GradientText';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white/35 text-sm">{config.footerText}</span>

        <div className="flex items-center gap-4">
          {config.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 hover:text-purple-400 transition-colors duration-200"
                aria-label={social.label}
              >
                <Icon size={17} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
