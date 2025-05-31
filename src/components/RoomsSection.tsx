
const RoomsSection = () => {
  const rooms = [
    {
      name: "Cozy Single Room",
      description: "Perfect for the solo traveler seeking comfort and privacy",
      features: ["Single comfortable bed", "Writing desk", "Storage chest", "Window view"],
      price: "5 gold per night",
      image: "🛏️"
    },
    {
      name: "Shared Adventurer's Quarter",
      description: "Affordable lodging for groups and budget-conscious travelers",
      features: ["Multiple beds", "Shared common area", "Secure lockers", "Fellowship discount"],
      price: "2 gold per person",
      image: "👥"
    },
    {
      name: "Luxury Merchant Suite",
      description: "Premium accommodations for discerning guests",
      features: ["Large private room", "Fireplace", "Premium linens", "Personal service"],
      price: "15 gold per night",
      image: "👑"
    }
  ];

  return (
    <section id="rooms" className="py-20 stone-texture relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tavern-stone/40 to-tavern-stone-dark/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-tavern-fire-bright mb-6">
            Lodging & Rooms
          </h2>
          <div className="h-1 bg-tavern-fire mx-auto w-24 mb-8"></div>
          <p className="text-xl text-tavern-parchment font-crimson italic max-w-2xl mx-auto">
            Rest easy in our comfortable accommodations. Each room includes 
            basic amenities and the security of our trusted establishment.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rooms.map((room, index) => (
            <div 
              key={room.name}
              className="bg-tavern-wood/30 wood-texture border-2 border-tavern-wood-light rounded-lg shadow-xl overflow-hidden ember-glow"
            >
              {/* Room Image/Icon */}
              <div className="bg-tavern-fire/20 p-8 text-center">
                <div className="text-6xl mb-4">{room.image}</div>
                <h3 className="text-2xl font-cinzel font-bold text-tavern-fire-bright">
                  {room.name}
                </h3>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <p className="text-tavern-parchment font-crimson text-lg leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-cinzel font-semibold text-tavern-fire-bright mb-3">
                    Room Features:
                  </h4>
                  <ul className="space-y-2">
                    {room.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="text-tavern-parchment font-crimson flex items-center"
                      >
                        <span className="text-tavern-fire mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Booking */}
                <div className="border-t border-tavern-wood-light pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-tavern-parchment font-crimson">Price:</span>
                    <span className="text-xl font-cinzel font-bold text-tavern-fire-bright">
                      {room.price}
                    </span>
                  </div>
                  <button className="w-full bg-tavern-fire hover:bg-tavern-fire-bright text-white font-cinzel font-bold py-3 px-4 rounded-lg shadow-lg ember-glow transition-all duration-300">
                    Reserve Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Information */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-tavern-red/20 border-2 border-tavern-red rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-cinzel font-bold text-tavern-fire-bright mb-6 text-center">
              Booking Information
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-cinzel font-semibold text-tavern-fire-bright mb-3">
                  Amenities Included:
                </h4>
                <ul className="space-y-2 text-tavern-parchment font-crimson">
                  <li>• Fresh linens and towels</li>
                  <li>• Access to common areas</li>
                  <li>• Complimentary breakfast</li>
                  <li>• 24-hour tavern security</li>
                </ul>
              </div>
              <div>
                <h4 className="font-cinzel font-semibold text-tavern-fire-bright mb-3">
                  Policies:
                </h4>
                <ul className="space-y-2 text-tavern-parchment font-crimson">
                  <li>• Check-in: After sunset</li>
                  <li>• Check-out: Before noon</li>
                  <li>• No smoking in rooms</li>
                  <li>• Weapons peace-bonded</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
