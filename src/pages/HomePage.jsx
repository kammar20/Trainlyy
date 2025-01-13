import BenefitsSection from '../components/BenefitsSection';
import CategoriesSection from '../components/CategoriesSection';
import DisplayExerciseSection from '../components/DisplayExerciseSection';
import FeaturedSection from '../components/FeaturedSection';
import FindExerciseSection from '../components/FindExerciseSection';
import HeroSection from '../components/HeroSection';
import HowItWorkSection from '../components/HowItWorkSection';

export default function HomePage() {
  return (
    <div>
      <div id="hero">
        <HeroSection />
      </div>
      <FeaturedSection />
      <BenefitsSection />
      <div id="howItWorks">
        <HowItWorkSection />
      </div>
      <div id="categories">
        <CategoriesSection />
      </div>
      <div id="findExercise">
        <FindExerciseSection />
      </div>
      <DisplayExerciseSection />
    </div>
  );
}
