{/*import { HeroSection } from './HeroSection';
import { ProblemSection } from './ProblemSection';
import { FeaturesSection } from './FeaturesSection';
import { TestimonialsSection } from './TestimonialsSection';
import { PricingSection } from './PricingSection';
import { CTASection } from './CTASection';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <ProblemSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}*/}

import { HeroSection } from './HeroSection';
import { ProblemSection } from './ProblemSection';
import { FeaturesSection } from './FeaturesSection';
import { TestimonialsSection } from './TestimonialsSection';
import { PricingSection } from './PricingSection';
import { CTASection } from './CTASection';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <ProblemSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection onNavigate={onNavigate} />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}
