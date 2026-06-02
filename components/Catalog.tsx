import { useState } from 'react';
import { Search, Filter, Leaf, Info, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product, PlasticType } from '../types';
import { PRODUCTS, CATEGORY_LABELS, PLASTIC_DETAILS } from '../products';

interface CatalogProps {
  addToCart: (product: Product) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Catalog({ addToCart, selectedCategory, setSelectedCategory }: CatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlastic, setSelectedPlastic] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on Category, Plastic Type, and Search Query
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' ? true : product.category === selectedCategory;
    const matchesPlastic = selectedPlastic === 'all' ? true : product.plasticType === selectedPlastic;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPlastic && matchesSearch;
  });

  const categories = ['all', 'Souvenir', 'Decor', 'Container', 'Office'] as const;
  const plastics: ('all' | PlasticType)[] = ['all', 'HDPE', 'PP', 'PET'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in text-left" id="catalog-view">
      
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-stone-100">
        <div>
          <span className="text-sm font-extrabold text-emerald-600 uppercase tracking-widest block">Katalog Koleksi</span>
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-emerald-900 mt-1">Kriya Plastik Daur Ulang</h1>
          <p className="text-stone-500 text-sm mt-1">Gunakan penyaring untuk mendedikasikan kontribusi daur ulang Anda pada jenis plastik tertentu.</p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-80 relative">
          <input
            id="product-search-input"
            type="text"
            placeholder="Cari kreasi ramah lingkungan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
          />
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="space-y-6 lg:col-span-1 bg-stone-50/50 p-6 rounded-3xl border border-stone-150">
          <div className="flex items-center space-x-2 pb-4 border-b border-stone-200 text-emerald-990 font-bold text-emerald-900">
            <Filter className="h-4 w-4" />
            <h3 className="font-sans text-base">Penyaring Produk</h3>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400">Kategori</h4>
            <div className="flex flex-wrap lg:flex-col gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`cat-filter-${cat}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200/50'
                  }`}
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Plastic Type Filter */}
          <div className="space-y-2 pt-4 border-t border-stone-200/50">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400">Jenis Plastik</h4>
            <div className="flex flex-wrap lg:flex-col gap-1.5">
              {plastics.map((plastic) => (
                <button
                  key={plastic}
                  id={`plastic-filter-${plastic}`}
                  onClick={() => setSelectedPlastic(plastic)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    selectedPlastic === plastic
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-250 border-emerald-300'
                      : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200/50'
                  }`}
                >
                  {plastic === 'all' ? 'Semua Jenis Plastik' : `${plastic} Plastic`}
                </button>
              ))}
            </div>
          </div>

          {/* Educational Note about Recycled Plastic */}
          <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-2xl space-y-2 text-left">
            <div className="flex items-center space-x-2 text-emerald-800">
              <Info className="h-4 w-4" />
              <h5 className="font-sans font-bold text-xs">Pendidikan Lingkungan</h5>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              <strong>HDPE</strong> dan <strong>PP</strong> terkenal sebagai jenis plastik teraman untuk didaur ulang secara bertingkat dan tahan terhadap suhu pemrosesan ekstrim.
            </p>
          </div>
        </div>

        {/* Product Grid Area */}
        <div className="lg:col-span-3 space-y-6">
          {filteredProducts.length === 0 ? (
            <div className="bg-stone-50 rounded-3xl py-20 px-4 text-center border border-dashed border-stone-200 space-y-4">
              <Leaf className="h-12 w-12 text-stone-300 mx-auto animate-bounce-short" />
              <h3 className="font-sans font-bold text-lg text-emerald-900">Produk Tidak Ditemukan</h3>
              <p className="text-stone-500 text-xs max-w-sm mx-auto">Kami terus membuat kriya baru. Coba gunakan kata kunci pencarian lain atau penyaring kategori yang berbeda.</p>
              <button
                id="reset-filters"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPlastic('all');
                  setSearchQuery('');
                }}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-5 py-2.5 rounded-full"
              >
                Reset Semua Penyaring
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  id={`catalog-product-item-${product.id}`}
                  className="bg-white rounded-3xl border border-stone-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Media Header */}
                  <div
                    className="bg-stone-150 h-44 relative overflow-hidden flex flex-col justify-between cursor-pointer group"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-stone-900/10" />

                    <div className="flex justify-between items-center relative z-10 p-4">
                      <span className="bg-white/90 backdrop-blur-md text-[10px] uppercase font-mono font-bold tracking-wider text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-50">
                        {product.plasticType}
                      </span>
                      <span className="bg-emerald-800 text-white text-[10px] uppercase tracking-wide font-mono px-2.5 py-1 rounded-full font-bold">
                        ★ {product.rating}
                      </span>
                    </div>

                    <div className="relative z-10 px-4 pb-4">
                      <div className="bg-emerald-950/90 backdrop-blur-sm shadow-sm text-left text-white px-2.5 py-1.5 rounded-xl text-[10px] flex justify-between items-center">
                        <span className="font-mono flex items-center gap-1 font-semibold">
                          Impact
                        </span>
                        <span className="font-bold">
                          Hemat {product.wasteSavedGrams}g Plastik
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 text-left flex-grow flex flex-col justify-between">
                    <div>
                      <h4
                        className="font-sans font-bold text-base text-emerald-900 cursor-pointer hover:text-emerald-700 transition-colors line-clamp-1"
                        onClick={() => setSelectedProduct(product)}
                      >
                        {product.name}
                      </h4>
                      <p className="text-[11px] font-mono italic text-stone-550 mt-0.5 line-clamp-1 text-emerald-800">
                        {product.aestheticDescription}
                      </p>
                      <p className="text-stone-500 text-xs mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex justify-between items-end">
                      <div>
                        <span className="text-[9px] text-stone-400 font-mono block">STOK: {product.stock} pcs</span>
                        <span className="font-mono font-bold text-emerald-800 text-base">
                          Rp {product.price.toLocaleString('id-ID')}
                        </span>
                      </div>
                      
                      <div className="flex space-x-1.5">
                        <button
                          id={`btn-detail-prod-${product.id}`}
                          onClick={() => setSelectedProduct(product)}
                          className="bg-stone-50 hover:bg-stone-105 text-stone-600 border border-stone-200 text-xs px-2.5 py-2 rounded-xl transition-all"
                          title="Detail Produk"
                        >
                          Detail
                        </button>
                        <button
                          id={`btn-add-prod-${product.id}`}
                          onClick={() => addToCart(product)}
                          className="bg-emerald-700 hover:bg-emerald-850 text-white font-semibold text-xs px-3.5 py-2 rounded-xl transition-colors"
                        >
                          Beli +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recycled Plastic Codes Education Footer Banner */}
      <section className="bg-stone-50 border border-stone-200/50 p-8 rounded-3xl text-left space-y-6">
        <div className="flex items-center space-x-3 text-emerald-800">
          <Leaf className="h-6 w-6 stroke-1.5 text-emerald-600" />
          <h3 className="font-sans font-bold text-xl text-emerald-900">Materi Edukator: Kode & Karakteristik Plastik Daur Ulang</h3>
        </div>
        <p className="text-stone-600 text-sm max-w-4xl">
          Kami memilah plastik secara manual untuk menjamin keaslian material tanpa campuran zat berbahaya. Berikut adalah rincian plastik daur ulang berkode internasional yang kami gunakan di studio GreenLoop Creations:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(PLASTIC_DETAILS).map(([key, details]) => (
            <div key={key} className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-100 font-mono text-sm font-bold w-9 h-9 rounded-xl flex items-center justify-center shadow-inner">
                    ♵ {details.recyclingCode}
                  </span>
                  <h4 className="font-sans font-extrabold text-sm text-emerald-900 tracking-tight">{details.name}</h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {details.characteristics}
                </p>
              </div>
              <span className={`text-[10px] font-mono uppercase tracking-wider font-extrabold text-emerald-600 pt-3 border-t border-stone-100/50 mt-3 block`}>
                RECYCLABLE CODE {details.recyclingCode}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Modal - Expanded Product Details */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in" id="product-detail-modal">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-100 relative text-left">
            
            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 z-10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Body */}
            <div>
              {/* Media banner */}
              <div className="bg-stone-100 relative min-h-72 overflow-hidden border-b border-stone-100 flex flex-col justify-between">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-stone-900/10" />

                <div className="relative z-10 p-6">
                  <span className="font-mono text-xs uppercase bg-emerald-800 text-white font-bold px-3 py-1 rounded-full">
                    Kategori: {CATEGORY_LABELS[selectedProduct.category]}
                  </span>
                </div>
                
                {/* Environmental impact tag inside banner */}
                <div className="relative z-10 p-6">
                  <div className="bg-emerald-950/90 backdrop-blur-sm text-white p-4 rounded-2xl flex items-center justify-between shadow-lg">
                    <div className="flex items-center space-x-2 text-emerald-300">
                      <Leaf className="h-4 w-4 text-emerald-450 fill-emerald-400" />
                      <span className="text-xs font-mono font-bold">ECO-CONTRIBUTION</span>
                    </div>
                    <span className="text-xs font-bold font-mono">
                      Menyelamatkan {selectedProduct.wasteSavedGrams}g Plastik {selectedProduct.plasticType}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text content details */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 id="modal-product-name" className="font-sans font-extrabold text-2xl text-emerald-900">{selectedProduct.name}</h3>
                  <p className="text-emerald-700 font-mono text-sm font-semibold mt-1 italic">
                    {selectedProduct.aestheticDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-stone-100 py-4 font-mono text-xs">
                  <div>
                    <span className="text-stone-400 block font-medium">MATERIAL PLASTIK</span>
                    <span className="text-stone-800 font-bold font-sans text-sm inline-flex items-center gap-1.5 mt-0.5">
                      <span className="bg-emerald-100 text-emerald-850 px-2 py-0.5 rounded text-xs font-mono font-bold">♵ ID {PLASTIC_DETAILS[selectedProduct.plasticType].recyclingCode}</span>
                      {selectedProduct.plasticType}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 block font-medium">STATUS KETERSEDIAAN</span>
                    <span className={`font-sans font-bold text-sm block mt-0.5 ${selectedProduct.stock > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                      {selectedProduct.stock > 0 ? `Tersedia (${selectedProduct.stock} pcs)` : 'Habis'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-emerald-900 border-b border-stone-100 pb-1 text-sm">Deskripsi Keindahan & Detail Produk</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {selectedProduct.description}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Produk ini murni dibuat dengan memisahkan jenis plastik secara cermat, dicuci bersih dari sisa kontaminan, lalu dilelehkan tanpa zat pewarna kimia berbahaya demi mendapatkan corak organik murni alami. Sifat plastik daur ulang melingkar kami sangat fungsional, tahan retak, tahan air, dan mudah dibersihkan kembali.
                  </p>
                </div>

                {/* Footer buy action */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-stone-400 text-[10px] uppercase font-mono block font-medium">HARGA RESMI</span>
                    <span className="font-mono font-bold text-emerald-800 text-2xl">
                      Rp {selectedProduct.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      id="modal-add-to-cart"
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-emerald-700/10 flex items-center space-x-2"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>Tambahkan ke Keranjang</span>
                    </button>
                    <button
                      id="modal-close"
                      onClick={() => setSelectedProduct(null)}
                      className="bg-stone-100 hover:bg-stone-200 text-stone-600 font-semibold py-3.5 px-5 rounded-xl text-sm transition-colors"
                    >
                      Kembali
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
