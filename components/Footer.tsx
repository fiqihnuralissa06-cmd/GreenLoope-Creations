import { Leaf, Recycle, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-990 font-sans" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-8 border-b border-emerald-900">
          
          {/* Logo & Vision column */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => handleLinkClick('home')} id="footer-logo">
              <div className="bg-emerald-900 p-2 rounded-full text-emerald-300 flex items-center justify-center">
                <Recycle className="h-5 w-5 animate-spin-slow" />
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight flex items-center gap-1">
                  GreenLoop <Leaf className="h-3.5 w-3.5 text-emerald-400 inline fill-emerald-400" />
                </span>
                <p className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 -mt-0.5">Creations</p>
              </div>
            </div>
            
            <p className="text-xs text-emerald-250 leading-relaxed max-w-sm">
              GreenLoop Creations adalah pionir kriya daur ulang plastik modern tingkat atas yang didedikasikan sepenuhnya untuk membangun ekonomi sirkular melingkar murni demi bumi pertiwi.
            </p>
          </div>

          {/* Quick links & navigation */}
          <div className="md:col-span-3 text-left space-y-3">
            <h4 className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-extrabold">Navigasi Utama</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button id="foot-link-home" onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors">
                  Beranda Utama
                </button>
              </li>
              <li>
                <button id="foot-link-catalog" onClick={() => handleLinkClick('catalog')} className="hover:text-white transition-colors">
                  Katalog Kriya Plastik
                </button>
              </li>
              <li>
                <button id="foot-link-about" onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors">
                  Tentang Perjalanan Kami
                </button>
              </li>
              <li>
                <button id="foot-link-contact" onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors">
                  Kemitraan Setor Plastik
                </button>
              </li>
            </ul>
          </div>

          {/* Environmental commitments detail */}
          <div className="md:col-span-4 text-left space-y-3">
            <h4 className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-extrabold">Kontribusi Ekosistem</h4>
            <p className="text-xs text-emerald-300 leading-relaxed">
              Membeli 1 kriya GreenLoop berarti menyelamatkan minimal 250 gram sampah laut sekaligus memberdayakan komunitas pemilah lokal dengan kompensasi yang layak.
            </p>
            <div className="flex items-center space-x-2 text-[10px] text-emerald-400 font-mono">
              <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
              <span>Dibuat dengan cinta di Bangka Belitung, Indonesia</span>
            </div>
          </div>

        </div>

        {/* Legal copyright footer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-emerald-400 space-y-4 sm:space-y-0">
          <p>© 2026 GreenLoop Creations. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex space-x-4 font-mono">
            <span className="hover:text-white cursor-pointer">Syarat & Ketentuan Sirkular</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Kebijakan Privasi Bumi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
