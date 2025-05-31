
const EventsSection = () => {
  const events = [
    {
      title: "Bardic Tales Night",
      day: "Every Moonday",
      time: "After the evening meal",
      description: "Local bards and traveling storytellers share epic tales and ballads by the hearth",
      icon: "🎭"
    },
    {
      title: "Harvest Festival",
      day: "Once per season",
      time: "Dawn to midnight",
      description: "Celebrate the changing seasons with special foods, drinks, and entertainment",
      icon: "🎃"
    },
    {
      title: "Warrior's Tournament",
      day: "Monthly",
      time: "Afternoon",
      description: "Friendly competitions of skill and strength in our courtyard arena",
      icon: "⚔️"
    },
    {
      title: "Private Celebrations",
      day: "By appointment",
      time: "Flexible",
      description: "Host your special occasions in our private dining hall with custom catering",
      icon: "🎉"
    }
  ];

  const upcomingEvents = [
    { name: "Autumn Harvest Feast", date: "Next Sevenday", status: "Few spots left" },
    { name: "Midwinter Storytelling", date: "Two fortnights", status: "Open registration" },
    { name: "Spring Equinox Festival", date: "Next season", status: "Planning stage" }
  ];

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 wood-texture"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-tavern-wood-dark/60 to-tavern-wood/60"></div>
      
      {/* Animated flame effects */}
      <div className="absolute top-10 right-10 w-6 h-16 bg-tavern-fire candle-flicker rounded-t-full opacity-40"></div>
      <div className="absolute bottom-20 left-16 w-6 h-20 bg-tavern-fire candle-flicker rounded-t-full opacity-50" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-tavern-fire-bright mb-6">
            Events & Entertainment
          </h2>
          <div className="h-1 bg-tavern-fire mx-auto w-24 mb-8"></div>
          <p className="text-xl text-tavern-parchment font-crimson italic max-w-2xl mx-auto">
            Join us for regular events that bring our community together. 
            From intimate storytelling to grand celebrations, there's always something happening.
          </p>
        </div>

        {/* Regular Events */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {events.map((event, index) => (
            <div 
              key={event.title}
              className="bg-tavern-stone/30 stone-texture border-2 border-tavern-stone-light rounded-lg p-8 shadow-xl ember-glow"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{event.icon}</div>
                <h3 className="text-2xl font-cinzel font-bold text-tavern-fire-bright mb-2">
                  {event.title}
                </h3>
                <div className="text-tavern-fire font-cinzel font-semibold">
                  {event.day} • {event.time}
                </div>
              </div>
              
              <p className="text-tavern-parchment font-crimson text-lg leading-relaxed text-center">
                {event.description}
              </p>

              <div className="mt-6 text-center">
                <button className="bg-tavern-fire hover:bg-tavern-fire-bright text-white font-cinzel font-bold py-3 px-6 rounded-lg shadow-lg ember-glow transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events Schedule */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-tavern-parchment/95 parchment-texture border-3 border-tavern-wood-dark rounded-lg p-8 shadow-2xl">
            <h3 className="text-3xl font-cinzel font-bold text-tavern-wood-dark mb-8 text-center">
              Upcoming Special Events
            </h3>
            
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={event.name}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white/50 rounded-lg border border-tavern-wood-light hover:bg-tavern-fire/10 transition-colors duration-300"
                >
                  <div>
                    <h4 className="text-xl font-cinzel font-bold text-tavern-wood-dark mb-1">
                      {event.name}
                    </h4>
                    <p className="text-tavern-wood-dark/80 font-crimson">
                      {event.date}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-block bg-tavern-fire/20 text-tavern-wood-dark font-cinzel font-semibold px-3 py-1 rounded-full text-sm">
                      {event.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-tavern-red hover:bg-tavern-red-bright text-white font-cinzel font-bold py-4 px-8 rounded-lg shadow-lg ember-glow transition-all duration-300">
                Reserve Your Spot
              </button>
            </div>
          </div>
        </div>

        {/* Private Events CTA */}
        <div className="mt-16 text-center">
          <div className="bg-tavern-fire/20 border-2 border-tavern-fire rounded-lg p-8 max-w-3xl mx-auto shadow-xl">
            <h3 className="text-2xl font-cinzel font-bold text-tavern-fire-bright mb-4">
              Planning a Special Celebration?
            </h3>
            <p className="text-tavern-parchment font-crimson text-lg mb-6">
              Our private dining hall and experienced staff can help make your occasion memorable. 
              Weddings, guild meetings, birthday celebrations, and more.
            </p>
            <button className="bg-tavern-fire-bright hover:bg-tavern-fire text-white font-cinzel font-bold py-3 px-8 rounded-lg shadow-lg ember-glow transition-all duration-300">
              Contact Event Coordinator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
