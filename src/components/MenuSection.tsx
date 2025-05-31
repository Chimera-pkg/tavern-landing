
const MenuSection = () => {
  const menuCategories = [
    {
      title: "Hearty Meals",
      icon: "🍖",
      items: [
        { name: "Dragon's Feast Roast", description: "Slow-roasted beef with herbs and root vegetables", price: "12 gold" },
        { name: "Traveler's Stew", description: "Rich lamb stew with fresh bread and butter", price: "8 gold" },
        { name: "Hunter's Pie", description: "Game meat pie with flaky crust and gravy", price: "10 gold" },
        { name: "Fisherman's Catch", description: "Fresh trout with lemon and seasonal greens", price: "9 gold" }
      ]
    },
    {
      title: "Tavern Ales",
      icon: "🍺",
      items: [
        { name: "Hearthkeeper's Brew", description: "Our signature amber ale, smooth and malty", price: "3 gold" },
        { name: "Warrior's Strength", description: "Dark stout with rich coffee notes", price: "4 gold" },
        { name: "Golden Harvest", description: "Light wheat beer perfect for any season", price: "3 gold" },
        { name: "Mystic Mead", description: "Honey wine infused with magical properties", price: "6 gold" }
      ]
    },
    {
      title: "Fine Spirits",
      icon: "🍷",
      items: [
        { name: "Ancient Vintage", description: "Aged red wine from the northern vineyards", price: "8 gold" },
        { name: "Fire Whiskey", description: "Smooth spirits with a warming finish", price: "5 gold" },
        { name: "Elven Wine", description: "Delicate white wine with floral notes", price: "10 gold" },
        { name: "Dwarven Rum", description: "Strong dark rum aged in oak barrels", price: "6 gold" }
      ]
    },
    {
      title: "Sweet Treats",
      icon: "🥧",
      items: [
        { name: "Honey Cakes", description: "Traditional cakes drizzled with golden honey", price: "4 gold" },
        { name: "Apple Tart", description: "Fresh apple tart with cinnamon and cream", price: "5 gold" },
        { name: "Berry Pie", description: "Mixed berry pie with buttery crust", price: "5 gold" },
        { name: "Chocolate Pudding", description: "Rich chocolate pudding with whipped cream", price: "4 gold" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 parchment-texture relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tavern-parchment/80 to-tavern-parchment-dark/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-tavern-wood-dark mb-6">
            Tavern Menu
          </h2>
          <div className="h-1 bg-tavern-wood mx-auto w-24 mb-8"></div>
          <p className="text-xl text-tavern-wood-dark font-crimson italic max-w-2xl mx-auto">
            Fresh ingredients prepared daily by our skilled kitchen staff. 
            Prices listed in standard gold pieces.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-white/90 border-3 border-tavern-wood rounded-lg shadow-xl p-8 ember-glow"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-2xl font-cinzel font-bold text-tavern-wood-dark">
                  {category.title}
                </h3>
                <div className="h-0.5 bg-tavern-wood-light mx-auto w-16 mt-3"></div>
              </div>

              {/* Menu Items */}
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={item.name}
                    className="border-b border-tavern-wood-light/30 pb-4 last:border-b-0 hover:bg-tavern-fire/5 p-3 rounded transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-cinzel font-semibold text-tavern-wood-dark">
                        {item.name}
                      </h4>
                      <span className="text-lg font-cinzel font-bold text-tavern-red">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-tavern-wood-dark/80 font-crimson leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Notice */}
        <div className="mt-16 text-center">
          <div className="bg-tavern-wood/20 wood-texture border-2 border-tavern-wood-dark rounded-lg p-6 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-xl font-cinzel font-bold text-tavern-wood-dark mb-3">
              Daily Specials
            </h3>
            <p className="text-tavern-wood-dark font-crimson">
              Ask your server about today's special dishes and seasonal offerings. 
              We're always happy to accommodate dietary needs and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
