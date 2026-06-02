import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ShoppingBag, Leaf, CheckCircle } from 'lucide-react';
import { CartItem, Product } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Persistence state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('greenloop_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('greenloop_cart', JSON.stringify(cart));
  }, [cart]);

  // Toast auto-closer
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex((item) => item.product.id === product.id);
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += 1;
        return copy;
      }
      return [...prev, { product, quantity: 1 }];
    });
    setToastMessage(`"${product.name}" berhasil dimasukkan ke keranjang belanja.`);
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Switch wrapper to route pages
  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home
            setActiveTab={setActiveTab}
            addToCart={addToCart}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'catalog':
        return (
          <Catalog
            addToCart={addToCart}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'about':
        return <About setActiveTab={setActiveTab} />;
      case 'cart':
        return (
          <Cart
            cart={cart}
            updateCartQuantity={updateCartQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            setActiveTab={setActiveTab}
          />
        );
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home
            setActiveTab={setActiveTab}
            addToCart={addToCart}
            setSelectedCategory={setSelectedCategory}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-stone-50/30">
      
      {/* Universal Sticky Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} cart={cart} />

      {/* Main Container */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Multi-section Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Floating Tactical Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-900 border border-emerald-800 text-white px-6 py-4 rounded-2xl shadow-xl shadow-emerald-900/10 flex items-center space-x-3 max-w-sm animate-slide-down text-left">
          <div className="bg-emerald-500 text-white p-1 rounded-full shrink-0">
            <CheckCircle className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="text-xs font-sans font-bold leading-none mb-1 text-emerald-300 uppercase tracking-wider">Berhasil ditambahkan</p>
            <p className="text-[11px] text-emerald-50 leading-tight">{toastMessage}</p>
          </div>
        </div>
      )}

    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
