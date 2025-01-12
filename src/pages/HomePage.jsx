import BenefitsSection from '../components/BenefitsSection';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedSection from '../components/FeaturedSection';
import FindExerciseSection from '../components/FindExerciseSection';
import HeroSection from '../components/HeroSection';
import HowItWorkSection from '../components/HowItWorkSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <BenefitsSection />
      <HowItWorkSection />
      <CategoriesSection />
      <FindExerciseSection />
    </div>
  );
}
