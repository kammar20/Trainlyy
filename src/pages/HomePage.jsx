import { useEffect } from 'react';
import BenefitsSection from '../components/BenefitsSection';
import CategoriesSection from '../components/CategoriesSection';
import DisplayExerciseSection from '../components/DisplayExerciseSection';
import FeaturedSection from '../components/FeaturedSection';
import FindExerciseSection from '../components/FindExerciseSection';
import HeroSection from '../components/HeroSection';
import HowItWorkSection from '../components/HowItWorkSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  // check if any save scroll position, so when user come from different page it scroll to saved position
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo({
        top: parseInt(savedPosition, 10),
        behavior: 'smooth',
      });
      sessionStorage.removeItem('scrollPosition'); // Optional: clear after using
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <FeaturedSection />
      <div id="benefits">
        <BenefitsSection />
      </div>
      <div id="howItWorks">
        <HowItWorkSection />
      </div>
      <div id="categories">
        <CategoriesSection />
      </div>
      <div id="findExercise">
        <FindExerciseSection />
      </div>
      {/* Display Preloaded Exercise */}
      <DisplayExerciseSection />
      <Footer />
    </div>
  );
}
