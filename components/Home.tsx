import { ArrowRight, Leaf, Sparkles, TrendingUp, ShieldCheck, Heart, Recycle, Users, Sprout } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../products';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  addToCart: (product: Product) => void;
  setSelectedCategory: (category: string) => void;
}

export default function Home({ setActiveTab, addToCart, setSelectedCategory }: HomeProps) {
  // Take 3 high rating products as best sellers
  const bestSellers = PRODUCTS.slice(0, 3);

  const circularProcess = [
    {
      step: '01',
      title: 'Penyetoran Sampah',
      desc: 'Masyarakat dan pengumpul menyetorkan botol/kemasan bekas berbahan HDPE, PP, atau PET.',
      icon: Users,
      actionText: 'Daftar Jadi Mitra',
      targetTab: 'contact'
    },
    {
      step: '02',
      title: 'Pemilahan & Sanitasi',
      desc: 'Setiap jenis plastik dipisahkan dengan saksama dan dicuci steril sebelum diproses.',
      icon: Recycle,
      actionText: 'Lihat Karakter Plastik',
      targetTab: 'catalog'
    },
    {
      step: '03',
      title: 'Transformasi Estetik',
      desc: 'Plastik dicacah dan dilelehkan dengan suhu rendah untuk menjaga integritasnya, lalu dicetak secara artistik.',
      icon: Sprout,
      actionText: 'Eksplorasi Kreasi',
      targetTab: 'about'
    }
  ];

  const handleProcessClick = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = () => {
    setActiveTab('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-20 animate-fade-in" id="home-view">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-left" id="hero-text-block">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="h-4 w-4 text-emerald-500 animate-pulse" />
                Daur Ulang Premium • 100% Circular Economy
              </div>
              <h1 id="hero-headline" className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-emerald-990 tracking-tight leading-tight text-emerald-900">
                Ubah Limbah Plastik Menjadi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600">
                  Kemewahan Organik
                </span>
              </h1>
              <p className="text-stone-600 text-lg sm:text-xl max-w-2xl leading-relaxed">
                Selamat datang di <strong className="text-emerald-900 font-semibold">GreenLoop Creations</strong>. Kami menghadirkan karya seni kriya fungsional mewah berdaya tahan tinggi, yang lahir kembali dari 100% plastik daur ulang berkualitas premium.
              </p>
              
              {/* Stats highlights */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-stone-100 my-6">
                <div>
                  <span className="block font-sans font-extrabold text-2xl md:text-3xl text-emerald-800">1.8Kg+</span>
                  <span className="text-xs text-stone-500 font-medium">Sampah plastik terselamatkan</span>
                </div>
                <div>
                  <span className="block font-sans font-extrabold text-2xl md:text-3xl text-emerald-800">100%</span>
                  <span className="text-xs text-stone-500 font-medium">Kandungan daur ulang murni</span>
                </div>
                <div>
                  <span className="block font-sans font-extrabold text-2xl md:text-3xl text-emerald-800">Lokal</span>
                  <span className="text-xs text-stone-500 font-medium">Produksi pengrajin Nusantara</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  id="btn-hero-catalog"
                  onClick={() => handleProcessClick('catalog')}
                  className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-emerald-700/20 group"
                >
                  Belanja Produk Ramah Lingkungan
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  id="btn-hero-partnership"
                  onClick={() => handleProcessClick('contact')}
                  className="inline-flex items-center justify-center bg-stone-50 hover:bg-stone-100 text-emerald-900 border border-emerald-200 font-semibold px-8 py-4 rounded-full transition-all"
                >
                  Setor Plastik Bekas Anda
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative" id="hero-image-block">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-3xl blur-md opacity-20" />
              <div className="relative bg-white p-2.5 rounded-3xl shadow-xl border border-stone-100 overflow-hidden group">
                <img
                  src="/src/assets/images/greenloop_hero_1780380641926.png"
                  alt="GreenLoop recycled products exhibition"
                  className="rounded-2xl w-full object-cover aspect-[4/3] sm:aspect-[1.1] transition-transform duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float tag on image */}
                <div className="absolute bottom-6 right-6 left-6 md:left-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-emerald-50 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-500 text-white p-1.5 rounded-full">
                      <Leaf className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500">Koleksi Terbaru</p>
                      <h4 className="text-sm font-bold text-emerald-900">Vas Geometris Aura</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Circular Economy Process section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-sm text-emerald-600 font-extrabold uppercase tracking-widest block">Siklus Melingkar Kami</span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-emerald-900">Bagaimana Plastik Bertransformasi?</h2>
          <p className="text-stone-600">Setiap produk GreenLoop menutup siklus hidup sampah plastik menjadi benda seni bernilai tinggi serta fungsional melalui proses yang melingkar.</p>
        </div>

        {/* Process Flow Cards (Clickable to switch sections) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {circularProcess.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                id={`process-card-${idx}`}
                onClick={() => handleProcessClick(item.targetTab)}
                className="group cursor-pointer bg-stone-50/70 hover:bg-white border border-stone-100 hover:border-emerald-200 hover:shadow-xl p-8 rounded-3xl text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Glowing hover accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-tr-3xl transition-transform group-hover:scale-120" />
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-3xl font-extrabold text-emerald-100 group-hover:text-emerald-200 transition-colors">
                      {item.step}
                    </span>
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <h3 className="font-sans font-bold text-xl text-emerald-900 group-hover:text-emerald-800 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="inline-flex items-center text-xs font-semibold text-emerald-700 group-hover:text-emerald-900 border-b border-dashed border-emerald-400 pb-0.5 self-start transition-colors">
                  {item.actionText}
                  <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="bg-stone-50/50 py-16 -mx-4 sm:-mx-8 lg:-mx-12 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="text-left space-y-2">
              <span className="text-sm text-emerald-600 font-extrabold uppercase tracking-widest block">Favorit Pelanggan</span>
              <h2 className="font-sans font-bold text-3xl text-emerald-900">Produk Terlaris Saat Ini</h2>
              <p className="text-stone-500 text-sm">Produk premium yang paling disukai dan memiliki kontribusi daur ulang tertinggi.</p>
            </div>
            <button
              id="btn-view-all-bestsellers"
              onClick={handleProductClick}
              className="mt-4 md:mt-0 inline-flex items-center text-emerald-700 hover:text-emerald-900 font-semibold text-sm border-b-2 border-emerald-600 pb-0.5 transition-colors group"
            >
              Lihat Semua Koleksi
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <div
                key={product.id}
                id={`bestseller-product-${product.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Cover Header */}
                <div className="bg-stone-150 h-52 relative overflow-hidden flex flex-col justify-between group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-stone-900/10" />

                  <div className="flex justify-between items-center relative z-10 p-4">
                    <span className="bg-white/90 backdrop-blur-md text-[10px] uppercase font-mono font-bold tracking-wider text-emerald-800 px-3 py-1 rounded-full border border-emerald-50">
                      Material: {product.plasticType}
                    </span>
                    <span className="inline-flex items-center bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                      ★ {product.rating}
                    </span>
                  </div>

                  <div className="relative z-10 p-4">
                    <div className="bg-emerald-950/90 backdrop-blur-sm shadow-sm text-white px-3 py-2 rounded-xl text-xs flex justify-between items-center">
                      <span className="font-mono text-[11px] font-medium flex items-center gap-1">
                        <Leaf className="h-3.5 w-3.5 text-emerald-300 fill-emerald-450" />
                        Peduli Bumi
                      </span>
                      <span className="font-semibold text-[10px] uppercase tracking-wide">
                        Hemat {product.wasteSavedGrams}g Plastik
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 text-left flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-sans font-bold text-lg text-emerald-900 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-stone-500 text-xs text-stone-500 font-mono italic">
                      {product.aestheticDescription}
                    </p>
                    <p className="text-stone-600 text-xs leading-relaxed line-clamp-2 pt-1.5">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-stone-100">
                    <div>
                      <span className="text-stone-400 text-[10px] block font-medium">HARGA</span>
                      <span className="font-mono font-bold text-emerald-800 text-lg">
                        Rp {product.price.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <button
                      id={`btn-add-best-${product.id}`}
                      onClick={() => addToCart(product)}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2 px-4 rounded-full text-xs transition-colors"
                    >
                      Beli +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Values (Why Choose Us) Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-emerald-900 to-teal-950 text-white rounded-3xl p-8 md:p-14 text-left relative overflow-hidden">
          {/* Subtle eco design lines */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full border border-emerald-500/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-emerald-500/5 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-emerald-400 font-mono tracking-widest text-xs uppercase font-extrabold flex items-center gap-1.5">
                <Leaf className="h-4 w-4 text-emerald-400 fill-emerald-400" />
                KOMITMEN HIJAU BERKELANJUTAN
              </span>
              <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight">Setiap Pembelian Anda Memberi Hidup Baru Pada Laut & Sungai</h2>
              <p className="text-emerald-100 text-sm md:text-base leading-relaxed max-w-2xl">
                Setiap gram material daur ulang yang dihasilkan oleh GreenLoop Creations bersumber langsung dari inisiatif kemitraan penyetoran sampah lokal. Kami mengolah ulang sampah tersebut menggunakan metode hemat energi untuk mengurangi dampak karbon demi masa depan bumi.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-800 p-2.5 rounded-xl border border-emerald-500/20 text-emerald-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Finishing Berstandar Tinggi</h4>
                    <p className="text-xs text-emerald-200">Hasil akhir mulus, higienis, berdimensi estetik tanpa bau kimia.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-800 p-2.5 rounded-xl border border-emerald-500/20 text-emerald-400">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Dukungan Pengrajin Lokal</h4>
                    <p className="text-xs text-emerald-200">Pemberdayaan sosial dengan melibatkan komunitas pemilah sampah.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-4 items-center justify-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
              <span className="font-mono text-[10px] text-emerald-300 tracking-wider font-semibold uppercase">Mitra Pengumpul Kontributor</span>
              <p className="text-xs text-stone-200 leading-relaxed">Punya sampah plastik menumpuk di rumah? Kami hargai sampah Anda menjadi produk kriya atau saldo e-wallet!</p>
              <button
                id="btn-process-join"
                onClick={() => handleProcessClick('contact')}
                className="w-full bg-white hover:bg-stone-100 text-emerald-990 text-emerald-900 font-bold px-6 py-3 rounded-full text-xs transition-colors block text-center"
              >
                Gabung Program Kemitraan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
