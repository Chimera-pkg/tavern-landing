import TavernScene3D from "./TavernScene3D";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Enhanced background layers for 3D depth */}
      <div className="absolute inset-0 stone-texture"></div>
      <div className="absolute inset-0 fire-glow opacity-40"></div>
      
      {/* Additional atmospheric layers */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-tavern-wood/10 to-tavern-wood-dark/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      
      {/* Enhanced animated elements inspired by 3D scene */}
      <div className="absolute top-20 left-10 w-6 h-24 bg-gradient-to-t from-tavern-fire to-tavern-fire-bright candle-flicker rounded-t-full opacity-70 shadow-lg shadow-tavern-fire/50"></div>
      <div className="absolute top-32 right-16 w-5 h-20 bg-gradient-to-t from-tavern-fire to-tavern-fire-bright candle-flicker rounded-t-full opacity-80 shadow-lg shadow-tavern-fire/50" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-20 w-6 h-28 bg-gradient-to-t from-tavern-fire to-tavern-fire-bright candle-flicker rounded-t-full opacity-60 shadow-lg shadow-tavern-fire/50" style={{ animationDelay: '1s' }}></div>
      
      {/* Fireplace glow simulation */}
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-radial from-tavern-fire-bright/60 via-tavern-fire/40 to-transparent rounded-full candle-flicker opacity-70 blur-xl"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tavern-fire-bright rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-tavern-fire rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-tavern-fire-bright rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 3D scene container - ready for your 3D files */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div id="tavern-3d-scene" className="w-full h-full opacity-20 hover:opacity-30 transition-opacity duration-1000">
          {/* 3D scene will be mounted here */}
          <TavernScene3D/>
          <div className="w-full h-full bg-gradient-radial from-tavern-wood/20 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Enhanced content with better 3D positioning */}
      <div className="relative z-20 flex items-center justify-center min-h-screen perspective-1000">
        <div className="text-center px-4 max-w-4xl transform-gpu">
          {/* Enhanced tavern sign with 3D effects */}
          <div className="bg-gradient-to-br from-tavern-wood via-tavern-wood-light to-tavern-wood-dark wood-texture border-4 border-tavern-wood-dark rounded-lg p-8 mb-8 shadow-2xl transform hover:scale-105 hover:rotate-y-2 transition-all duration-500 backdrop-blur-sm bg-opacity-90">
            <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-tavern-fire-bright mb-4 drop-shadow-2xl transform hover:scale-105 transition-transform duration-300">
              The Cozy Hearth Tavern
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-tavern-fire to-transparent mx-auto w-48 mb-4 shadow-lg shadow-tavern-fire/50"></div>
            <p className="text-xl md:text-2xl text-tavern-parchment font-crimson italic drop-shadow-lg">
              Where weary travelers find warmth, good food, and fine ale
            </p>
          </div>

          {/* Enhanced call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button 
              onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-tavern-fire to-tavern-fire-bright hover:from-tavern-fire-bright hover:to-tavern-fire text-white font-cinzel font-bold py-4 px-8 rounded-lg shadow-2xl ember-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              View Our Menu
            </button>
            <button 
              onClick={() => document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-tavern-red to-tavern-red-bright hover:from-tavern-red-bright hover:to-tavern-red text-white font-cinzel font-bold py-4 px-8 rounded-lg shadow-2xl ember-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Book a Room
            </button>
          </div>

          {/* Enhanced atmospheric text */}
          <div className="mt-12 text-tavern-parchment/90 max-w-2xl mx-auto">
            <p className="text-lg font-crimson italic drop-shadow-md leading-relaxed">
              "Step through our heavy oak doors and leave the cold world behind. 
              Here, the fire always burns bright, the ale flows freely, and every 
              stranger becomes a friend by night's end."
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-tavern-fire-bright rounded-full flex justify-center shadow-lg shadow-tavern-fire/30 bg-black/20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-tavern-fire-bright rounded-full mt-2 animate-pulse shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
