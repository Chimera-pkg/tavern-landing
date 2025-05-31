
const Footer = () => {
  return (
    <footer id="contact" className="py-16 wood-texture border-t-4 border-tavern-wood-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Tavern Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <div className="w-8 h-8 bg-tavern-fire rounded-full flex items-center justify-center candle-flicker">
                <div className="w-4 h-4 bg-tavern-fire-bright rounded-full"></div>
              </div>
              <h3 className="text-2xl font-cinzel font-bold text-tavern-fire-bright">
                The Cozy Hearth
              </h3>
            </div>
            <p className="text-tavern-parchment font-crimson leading-relaxed mb-4">
              Your home away from home in the realm. Whether seeking rest, 
              sustenance, or companionship, our doors are always open to weary travelers.
            </p>
            <p className="text-tavern-fire-bright font-cinzel italic">
              "Every stranger is but a friend we haven't met."
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-cinzel font-bold text-tavern-fire-bright mb-6">
              Visit Us
            </h3>
            <div className="space-y-3 text-tavern-parchment font-crimson">
              <div>
                <strong className="text-tavern-fire-bright">Location:</strong><br />
                The Crossroads Quarter<br />
                Main Trade Route, East Wing
              </div>
              <div>
                <strong className="text-tavern-fire-bright">Hours:</strong><br />
                Open from dawn to well past midnight<br />
                Kitchen closes at the witching hour
              </div>
              <div>
                <strong className="text-tavern-fire-bright">Rates:</strong><br />
                Rooms from 2-15 gold per night<br />
                Meals from 3-12 gold pieces
              </div>
            </div>
          </div>

          {/* Guild Membership */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-cinzel font-bold text-tavern-fire-bright mb-6">
              Join Our Guild
            </h3>
            <p className="text-tavern-parchment font-crimson mb-4">
              Become a regular patron and enjoy special benefits, discounts, 
              and early access to events.
            </p>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Your name, traveler"
                className="w-full p-3 rounded-lg bg-tavern-parchment text-tavern-wood-dark font-crimson border-2 border-tavern-wood-light focus:border-tavern-fire outline-none"
              />
              <button className="w-full bg-tavern-fire hover:bg-tavern-fire-bright text-white font-cinzel font-bold py-3 px-6 rounded-lg shadow-lg ember-glow transition-all duration-300">
                Join the Guild
              </button>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="border-t border-tavern-wood-light pt-8 mb-8">
          <h3 className="text-2xl font-cinzel font-bold text-tavern-fire-bright mb-8 text-center">
            Our Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-tavern-fire/20 rounded-lg border border-tavern-fire ember-glow">
              <div className="text-3xl mb-2">🛏️</div>
              <h4 className="font-cinzel font-semibold text-tavern-fire-bright">Lodging</h4>
            </div>
            <div className="p-4 bg-tavern-fire/20 rounded-lg border border-tavern-fire ember-glow">
              <div className="text-3xl mb-2">🍖</div>
              <h4 className="font-cinzel font-semibold text-tavern-fire-bright">Dining</h4>
            </div>
            <div className="p-4 bg-tavern-fire/20 rounded-lg border border-tavern-fire ember-glow">
              <div className="text-3xl mb-2">🍺</div>
              <h4 className="font-cinzel font-semibold text-tavern-fire-bright">Beverages</h4>
            </div>
            <div className="p-4 bg-tavern-fire/20 rounded-lg border border-tavern-fire ember-glow">
              <div className="text-3xl mb-2">🎭</div>
              <h4 className="font-cinzel font-semibold text-tavern-fire-bright">Events</h4>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-tavern-wood-light pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-tavern-parchment font-crimson mb-4 md:mb-0">
              © Three Centuries of Hospitality • The Cozy Hearth Tavern • Est. Ancient Times
            </p>
            <div className="flex space-x-4">
              <span className="text-tavern-fire-bright font-cinzel">🏰</span>
              <span className="text-tavern-fire-bright font-cinzel">⚔️</span>
              <span className="text-tavern-fire-bright font-cinzel">🛡️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
