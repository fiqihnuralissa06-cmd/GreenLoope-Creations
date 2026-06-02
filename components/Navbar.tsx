import { Recycle, ShoppingBag, Menu, X, Leaf } from 'lucide-react';
import { CartItem } from '../types';
import { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cart: CartItem[];
}

export default function Navbar({ activeTab, setActiveTab, cart }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'catalog', label: 'Katalog Produk' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'contact', label: 'Kemitraan & Kontak' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')} id="nav-logo">
            <div className="bg-emerald-50 p-2 md:p-2.5 rounded-full mr-3 text-emerald-600 border border-emerald-100 flex items-center justify-center transition-transform hover:scale-115">
              <Recycle className="h-6 w-6 animate-spin-slow text-emerald-600" />
            </div>
            <div>
              <span className="font-sans font-bold text-xl md:text-2xl text-emerald-900 tracking-tight flex items-center gap-1">
                GreenLoop <Leaf className="h-4.5 w-4.5 text-emerald-500 inline fill-emerald-500" />
              </span>
              <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 -mt-0.5">Creations</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 relative ${
                  activeTab === item.id
                    ? 'text-emerald-900 bg-emerald-50/80 font-semibold'
                    : 'text-stone-600 hover:text-emerald-700 hover:bg-stone-50'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-600" />
                )}
              </button>
            ))}
          </div>

          {/* Cart & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button
              id="nav-cart-btn"
              onClick={() => handleNavClick('cart')}
              className={`p-3 rounded-full relative transition-all duration-300 ${
                activeTab === 'cart'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-100 hover:bg-emerald-100'
              }`}
              title="Keranjang Belanja"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-terracotta bg-amber-600 text-white rounded-full text-xs font-bold w-5 h-5 flex items-center justify-center animate-bounce-short border border-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-full bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-emerald-100 animate-slide-down">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-5 py-3 rounded-xl font-medium text-base transition-colors duration-200 block ${
                  activeTab === item.id
                    ? 'text-emerald-900 bg-emerald-50 font-semibold border-l-4 border-emerald-600'
                    : 'text-stone-600 hover:text-emerald-700 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
