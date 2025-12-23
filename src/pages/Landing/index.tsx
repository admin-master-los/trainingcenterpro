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
import { HowItWorksSection } from './HowItWorksSection';
import { TrustBenefitsSection } from './TrustBenefitsSection';
import { FeaturesSection } from './FeaturesSection';
import { TestimonialsSection } from './TestimonialsSection';
import { PricingSection } from './PricingSection';
import { ContactSection } from './ContactSection';
import { CTASection } from './CTASection';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <ProblemSection />
      <HowItWorksSection />
      <TrustBenefitsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection onNavigate={onNavigate} />
      <ContactSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}
