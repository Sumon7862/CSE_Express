import Hero from "../../components/home/Hero";
import SearchSection from "../../components/home/SearchSection";
import Statistics from "../../components/home/Statistics";
import FeaturedSemesters from "../../components/home/FeaturedSemesters";
import PlatformHighlights from "../../components/home/PlatformHighlights";
import LatestPDFs from "../../components/home/LatestPDFs";
import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";
import CTASection from "../../components/home/CTASection";


const Home = () => {
  return (
    <>
      <Hero />

      <SearchSection />

      <Statistics />

      <FeaturedSemesters />

      <PlatformHighlights />

      <LatestPDFs />

      <Testimonials />

      <FAQ />

      <CTASection />
      
    </>
  );
};


export default Home;