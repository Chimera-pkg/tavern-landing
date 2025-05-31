
import { useState } from 'react';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Events', href: '#events' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 wood-texture border-b-4 border-tavern-wood-dark shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-tavern-fire rounded-full flex items-center justify-center candle-flicker">
              <div className="w-6 h-6 bg-tavern-fire-bright rounded-full"></div>
            </div>
            <h1 className="text-2xl font-cinzel font-bold text-tavern-fire-bright">
              The Cozy Hearth
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-tavern-parchment hover:text-tavern-fire-bright font-cinzel font-semibold transition-colors duration-300 ember-glow px-3 py-2 rounded"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-tavern-parchment hover:text-tavern-fire-bright p-2"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-tavern-wood-dark border-t border-tavern-wood-light">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-tavern-parchment hover:text-tavern-fire-bright font-cinzel font-semibold transition-colors duration-300 px-3 py-2 rounded w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
