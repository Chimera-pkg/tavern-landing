
const AboutSection = () => {
  return (
    <section id="about" className="py-20 stone-texture relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tavern-stone/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-tavern-fire-bright mb-6">
              Our Story
            </h2>
            <div className="h-1 bg-tavern-fire mx-auto w-24 mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div className="space-y-6">
              <div className="bg-tavern-wood/30 wood-texture border-2 border-tavern-wood-light rounded-lg p-8 shadow-xl">
                <h3 className="text-2xl font-cinzel font-bold text-tavern-fire-bright mb-4">
                  A Haven for Adventurers
                </h3>
                <p className="text-tavern-parchment text-lg font-crimson leading-relaxed mb-4">
                  For over three centuries, The Cozy Hearth has stood as a beacon of warmth 
                  and hospitality in these lands. Founded by the legendary innkeeper Magnus 
                  Hearthkeeper, our tavern has welcomed countless souls seeking refuge from 
                  their journeys.
                </p>
                <p className="text-tavern-parchment text-lg font-crimson leading-relaxed">
                  Whether you're a traveling merchant, a weary warrior, or a curious scholar, 
                  our doors are always open. Come for the food, stay for the stories, and 
                  leave as family.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="bg-tavern-red/20 border-2 border-tavern-red rounded-lg p-6 shadow-lg ember-glow">
                <h4 className="text-xl font-cinzel font-bold text-tavern-fire-bright mb-3">
                  🔥 Always Warm Hearth
                </h4>
                <p className="text-tavern-parchment font-crimson">
                  Our central fireplace never dims, providing warmth and comfort year-round.
                </p>
              </div>
              
              <div className="bg-tavern-fire/20 border-2 border-tavern-fire rounded-lg p-6 shadow-lg ember-glow">
                <h4 className="text-xl font-cinzel font-bold text-tavern-fire-bright mb-3">
                  🍺 Finest Ales & Spirits
                </h4>
                <p className="text-tavern-parchment font-crimson">
                  Our cellar holds the region's finest brews and aged spirits from distant lands.
                </p>
              </div>
              
              <div className="bg-tavern-wood/20 border-2 border-tavern-wood-light rounded-lg p-6 shadow-lg ember-glow">
                <h4 className="text-xl font-cinzel font-bold text-tavern-fire-bright mb-3">
                  🛏️ Comfortable Lodging
                </h4>
                <p className="text-tavern-parchment font-crimson">
                  Clean beds, secure storage, and peaceful rest await weary travelers.
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <div className="bg-tavern-stone/30 stone-texture border-2 border-tavern-stone-light rounded-lg p-8 shadow-xl">
              <blockquote className="text-2xl font-crimson italic text-tavern-fire-bright mb-4">
                "At The Cozy Hearth, every stranger is but a friend we haven't met, 
                and every tale shared makes our community richer."
              </blockquote>
              <cite className="text-tavern-parchment font-cinzel font-semibold">
                — Magnus Hearthkeeper, Founder
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
