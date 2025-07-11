
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import RoomsSection from '../components/RoomsSection';
import EventsSection from '../components/EventsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <RoomsSection />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Index;
