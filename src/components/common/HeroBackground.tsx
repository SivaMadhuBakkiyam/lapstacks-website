import { ReactNode } from "react";

interface HeroBackgroundProps {
  children: ReactNode;
  className?: string;
  showDecoration?: boolean;
}

export const HeroBackground = ({ children, className = "", showDecoration = true }: HeroBackgroundProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* SVG Background for dark gradient pages */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Home_Screen_BG.svg')" }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Decorative Purple Wave at bottom right */}
      {showDecoration && (
        <div className="absolute bottom-0 right-0 w-1/3 h-32 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 400 100"
            className="absolute bottom-0 right-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.4)" />
              </linearGradient>
            </defs>
            <path
              d="M0 100 L0 60 Q100 20 200 40 T400 20 L400 100 Z"
              fill="url(#purpleGradient)"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export const LightHeroBackground = ({ children, className = "", showDecoration = true }: HeroBackgroundProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Subpage background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-subpage.svg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-background/90 to-purple-100/50 dark:from-background dark:via-background dark:to-purple-900/20" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Decorative Purple Wave at bottom right */}
      {showDecoration && (
        <div className="absolute bottom-0 right-0 w-1/3 h-32 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 400 100"
            className="absolute bottom-0 right-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="purpleGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
              </linearGradient>
            </defs>
            <path
              d="M0 100 L0 60 Q100 20 200 40 T400 20 L400 100 Z"
              fill="url(#purpleGradientLight)"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
