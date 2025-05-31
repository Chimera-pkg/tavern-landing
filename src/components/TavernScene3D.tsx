import TavernScene3D from './TavernScene3D'

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* ...existing code... */}

      {/* 3D scene container - ready for your 3D files */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div id="tavern-3d-scene" className="w-full h-full opacity-20 hover:opacity-30 transition-opacity duration-1000">
          {/* 3D scene will be mounted here */}
          <TavernScene3D />
        </div>
      </div>

      {/* ...existing code... */}
    </section>
  );
};

export default HeroSection;