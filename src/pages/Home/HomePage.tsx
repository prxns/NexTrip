import HeroSection from '../../components/homepage/HeroSection';
import PopularDestinations from '../../components/homepage/PopularDestinations';
import OffersSection from '../../components/homepage/OffersSection';
import TravelInspiration from '../../components/homepage/TravelInspiration';

/**
 * NexTrip homepage.
 */
function HomePage() {
  return (
    <>
      <HeroSection />

      <PopularDestinations />

      <OffersSection />

      <TravelInspiration />
    </>
  );
}

export default HomePage;