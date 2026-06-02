import { useState } from 'react';
import { ShoppingBag, Trash2, Plus, Minus, CreditCard, Leaf, MapPin, CheckCircle, ArrowRight, Award, Trophy } from 'lucide-react';
import { CartItem, CheckoutDetails, Product } from '../types';

interface CartProps {
  cart: CartItem[];
  updateCartQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  setActiveTab: (tab: string) => void;
}

export default function Cart({ cart, updateCartQuantity, removeFromCart, clearCart, setActiveTab }: CartProps) {
  // Step tracker: 'cart' | 'checkout' | 'success'
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [form, setForm] = useState<CheckoutDetails>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    shippingOption: 'regular',
    paymentMethod: 'qris'
  });
  
  // Track success order data
  const [orderId, setOrderId] = useState('');
  const [orderSummary, setOrderSummary] = useState<{
    items: CartItem[];
    total: number;
    wasteSaved: number;
    details: CheckoutDetails;
  } | null>(null);

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalWasteSaved = cart.reduce((acc, item) => acc + item.product.wasteSavedGrams * item.quantity, 0);

  // Shipping costs
  const shippingFees: Record<string, number> = {
    regular: 15000,
    express: 30000,
    super_eco: 5000 // Cargo, low emission
  };

  const shippingLabels: Record<string, string> = {
    regular: 'Kurir Reguler (3-5 Hari) - Rp 15.000',
    express: 'Kurir Kilat (1-2 Hari) - Rp 30.000',
    super_eco: 'Layanan Super Eco (6-9 Hari, Hemat Emisi) - Rp 5.000'
  };

  const paymentLabels: Record<string, string> = {
    qris: 'QRIS Ramah Lingkungan (Instan)',
    bca: 'Transfer Bank BCA',
    mandiri: 'Transfer Bank Mandiri',
    gopay: 'GoPay / OVO'
  };

  const shippingCost = step === 'cart' ? 0 : shippingFees[form.shippingOption];
  const grandTotal = subtotal + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleNextToCheckout = () => {
    if (cart.length === 0) return;
    setStep('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCart = () => {
    setStep('cart');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.address || !form.city || !form.postalCode) {
      alert('Harap lengkapi semua data pengiriman.');
      return;
    }

    // Generate a beautiful mock order ID
    const generatedId = `GLC-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    
    setOrderSummary({
      items: [...cart],
      total: grandTotal,
      wasteSaved: totalWasteSaved,
      details: { ...form }
    });

    setStep('success');
    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SUCCESS COMPONENT
  if (step === 'success' && orderSummary) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-8 animate-fade-in text-left" id="cart-success-view">
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center space-y-4">
          <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto animate-bounce-short" />
          <h1 className="font-sans font-extrabold text-2xl md:text-3xl text-emerald-900">Transaksi Sukses! Terma Kasih Komitmen Anda</h1>
          <p className="text-stone-600 text-sm max-w-lg mx-auto">
            Pembayaran dengan kode pesanan <strong className="text-emerald-950 font-semibold">{orderId}</strong> berhasil divalidasi. Paket Anda sedang dipersiapkan menggunakan kemasan kardus daur ulang tanpa bubble wrap plastik.
          </p>
          <div className="inline-block bg-white border border-emerald-200 px-4 py-2 rounded-xl text-xs font-mono font-bold text-emerald-800">
            Resi Pengiriman: GL-EXPRESS-{Math.floor(200000 + Math.random() * 800000)}
          </div>
        </div>

        {/* ECO-CONTRIBUTOR CERTIFICATE (Exclusive gamification feature) */}
        <div className="bg-gradient-to-tr from-emerald-900 to-teal-950 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden border border-emerald-800 shadow-xl" id="eco-certificate">
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-400/5 blur-2xl pointer-events-none" />
          
          <div className="text-center space-y-6">
            <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto border border-white/20">
              <Award className="h-8 w-8 text-emerald-300 fill-emerald-300" />
            </div>
            
            <div className="space-y-2">
              <span className="font-mono text-emerald-300 text-xs tracking-widest uppercase font-bold">PIAGAM PENGHARGAAN ECO-HERO</span>
              <h2 className="font-sans font-bold text-2xl md:text-3xl">Pahlawan Sirkularitas Bumi</h2>
            </div>

            <div className="max-w-xl mx-auto border-t border-b border-white/10 py-6 my-4 text-emerald-100 space-y-3">
              <p className="text-sm italic">Dengan hormat ditujukan kepada:</p>
              <h3 className="font-sans font-extrabold text-xl tracking-tight text-white">{orderSummary.details.fullName}</h3>
              <p className="text-xs leading-relaxed">
                Telah berkontribusi nyata dalam melestarikan lingkungan hidup dengan menyelamatkan seberat
              </p>
              <div className="inline-flex items-center gap-2 bg-emerald-800 text-white border border-emerald-500/30 px-6 py-2 rounded-full font-mono font-bold text-lg md:text-xl">
                <Leaf className="h-5 w-5 text-emerald-400 fill-emerald-400 animate-pulse" />
                {orderSummary.wasteSaved} Gram
              </div>
              <p className="text-[11px] text-emerald-250 block pt-1">
                Limbah plastik (HDPE/PP/PET) untuk didaur ulang kembali menjadi produk kriya berkinerja tinggi GreenLoop Creations.
              </p>
            </div>

            <div className="flex justify-between items-end pt-4 text-[10px] font-mono text-emerald-300">
              <div>
                <p>KODE SERTIFIKAT</p>
                <p className="text-white font-bold">{orderId}-CERT</p>
              </div>
              <div>
                <p>STATUS PENGHARGAAN</p>
                <p className="text-white font-bold">TER-VERIFIKASI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Summary Details */}
        <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/50 space-y-4">
          <h3 className="font-sans font-bold text-emerald-900 border-b border-stone-200 pb-2 text-sm">Rangkuman Pengiriman</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-stone-400 block">Penerima</span>
              <strong className="text-stone-800">{orderSummary.details.fullName}</strong>
              <span className="block text-stone-550 mt-1">{orderSummary.details.phone} | {orderSummary.details.email}</span>
            </div>
            <div>
              <span className="text-stone-400 block font-medium">Alamat Tujuan</span>
              <p className="text-stone-800">{orderSummary.details.address}, {orderSummary.details.city}, {orderSummary.details.postalCode}</p>
            </div>
          </div>

          <div className="border-t border-stone-200/50 pt-3 flex justify-between text-xs">
            <div>
              <span className="text-stone-4550 font-medium">Ekspedisi:</span>
              <p className="text-stone-800 mt-0.5">{shippingLabels[orderSummary.details.shippingOption]}</p>
            </div>
            <div>
              <span className="text-stone-4550 font-medium">Metode Bayar:</span>
              <p className="text-stone-800 mt-0.5">{paymentLabels[orderSummary.details.paymentMethod]}</p>
            </div>
          </div>

          <div className="border-t border-stone-200/50 pt-4 flex justify-between items-center bg-white p-4 rounded-xl border">
            <div>
              <span className="text-xs text-stone-400 font-mono block">TOTAL KESELURUHAN</span>
              <strong className="text-lg font-mono text-emerald-800">Rp {orderSummary.total.toLocaleString('id-ID')}</strong>
            </div>
            <button
              id="return-home-btn"
              onClick={() => setActiveTab('home')}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-5 py-2.5 rounded-full"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fade-in text-left" id="cart-workspace">
      
      {/* View Page Header */}
      <div>
        <span className="text-[13px] font-extrabold text-emerald-600 uppercase tracking-widest block">Proses Belanja</span>
        <h1 className="font-sans font-extrabold text-3xl text-emerald-900 mt-1">
          {step === 'cart' ? 'Keranjang Belanja Anda' : 'Lengkapi Pengiriman Premium'}
        </h1>
        <p className="text-stone-500 text-xs md:text-sm mt-1">Setiap kepuasan belanja Anda menyelamatkan ekosistem dari pencemaran lingkungan hidrokarbon.</p>
      </div>

      {cart.length === 0 ? (
        <div className="bg-stone-50 rounded-3xl py-20 px-4 text-center border border-dashed border-stone-200 space-y-4">
          <ShoppingBag className="h-12 w-12 text-stone-300 mx-auto animate-bounce-short" />
          <h3 className="font-sans font-bold text-lg text-emerald-900">Keranjang Belanja Anda Kosong</h3>
          <p className="text-stone-500 text-xs max-w-xs mx-auto">Anda belum menambahkan produk kriya ramah lingkungan ke dalam keranjang belanja.</p>
          <button
            id="cart-go-to-catalog"
            onClick={() => setActiveTab('catalog')}
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-5 py-2.5 rounded-full"
          >
            Mulai Cari Produk
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {step === 'cart' ? (
              /* Review Purchases list */
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-stone-100 w-12 h-12 rounded-xl overflow-hidden border border-stone-100 flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-base text-emerald-900">{item.product.name}</h4>
                        <div className="flex flex-wrap items-center gap-2 mt-0.5 text-[10px] font-mono">
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded uppercase font-bold">
                            {item.product.plasticType}
                          </span>
                          <span className="text-stone-400">|</span>
                          <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                            ♻ Menghemat {item.product.wasteSavedGrams}g
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between sm:justify-end items-center w-full sm:w-auto gap-6 border-t sm:border-t-0 pt-3 sm:pt-0">
                      {/* Quantity selector */}
                      <div className="flex items-center space-x-1 border border-stone-200 bg-stone-50/50 p-1.5 rounded-xl">
                        <button
                          id={`qty-minus-${item.product.id}`}
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 rounded bg-white hover:bg-stone-100 text-stone-600 border border-stone-200 transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-mono text-xs font-bold px-3 text-stone-800">{item.quantity}</span>
                        <button
                          id={`qty-plus-${item.product.id}`}
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded bg-white hover:bg-stone-100 text-stone-600 border border-stone-200 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      {/* Line Item Prices */}
                      <div className="text-right">
                        <span className="text-[10px] text-stone-400 font-mono block">SUBTOTAL</span>
                        <span className="font-mono font-bold text-emerald-800 text-sm">
                          Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                        </span>
                      </div>

                      {/* Remove button */}
                      <button
                        id={`remove-item-${item.product.id}`}
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-stone-300 hover:text-red-500 rounded-xl transition-colors border border-dashed border-stone-150 hover:border-red-100"
                        title="Hapus item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  id="btn-clear-cart"
                  onClick={clearCart}
                  className="text-stone-400 hover:text-emerald-700 border border-dashed border-stone-200 py-2.5 px-4 rounded-xl text-xs font-semibold hover:border-emerald-250 transition-colors"
                >
                  Kosongkan Keranjang Belanja
                </button>
              </div>
            ) : (
              /* Delivery Address Form */
              <form onSubmit={handlePlaceOrder} className="bg-white p-6 md:p-8 rounded-3xl border border-stone-100 shadow-sm space-y-6">
                <div className="flex items-center space-x-2 text-emerald-800 pb-3 border-b border-stone-100">
                  <MapPin className="h-5 w-5" />
                  <h3 className="font-sans font-bold text-base">Detail Alamat Pengiriman & Metode</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-600">Nama Lengkap Penerima</label>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleInputChange}
                      placeholder="Contoh: Prastika Amalia"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-600">Alamat Surat Elektronik (Email)</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="nama@email.com"
                      type="email"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-600">Alamat Lengkap Rumah</label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleInputChange}
                    placeholder="Nama Jalan, Blok, Kompleks, Nomor Rumah, RT/RW, Kelurahan dan Kecamatan"
                    rows={3}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-600">Kota / Kabupaten</label>
                    <input
                      name="city"
                      value={form.city}
                      onChange={handleInputChange}
                      placeholder="Contoh: Kota Surabaya"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-600">Kode Pos</label>
                    <input
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleInputChange}
                      placeholder="60111"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-600">Nomor Handphone (Aktif)</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="08123456789"
                      type="tel"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-600">Opsi Ekspedisi Pengiriman</label>
                    <select
                      name="shippingOption"
                      value={form.shippingOption}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    >
                      <option value="regular">Kurir Reguler (3-5 Hari) - Rp 15.000</option>
                      <option value="express">Kurir Kilat (1-2 Hari) - Rp 30.000</option>
                      <option value="super_eco">Super Eco Low-Emission (6-9 Hari) - Rp 5.000</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-600">Pilih Metode Pembayaran</label>
                    <select
                      name="paymentMethod"
                      value={form.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    >
                      <option value="qris">QRIS Ramah Lingkungan (Instan)</option>
                      <option value="bca">Transfer Bank BCA (Manual Verifikasi)</option>
                      <option value="mandiri">Transfer Bank Mandiri (Manual Verifikasi)</option>
                      <option value="gopay">GoPay / OVO instant</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex justify-between space-x-3">
                  <button
                    id="btn-back-to-cart"
                    type="button"
                    onClick={handleBackToCart}
                    className="bg-stone-100 hover:bg-stone-200 text-stone-600 font-semibold py-3 px-5 rounded-full text-xs transition-colors"
                  >
                    Kembali ke Keranjang
                  </button>
                  <button
                    id="btn-submit-order"
                    type="submit"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-8 rounded-full text-xs transition-all shadow-md shadow-emerald-700/10"
                  >
                    Selesaikan Pembayaran Sekarang
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Checkout / Summary Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-stone-50 border border-stone-200/50 rounded-3xl p-6 text-left space-y-6">
              <h3 className="font-sans font-bold text-emerald-900 border-b border-stone-200 pb-3 text-sm">Ringkasan Pembelian</h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-stone-550">
                  <span>Subtotal Produk ({cart.reduce((a,i)=>a+i.quantity,0)} item):</span>
                  <span className="font-mono text-stone-800">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                {step === 'checkout' && (
                  <div className="flex justify-between text-stone-550">
                    <span>Biaya Pengiriman:</span>
                    <span className="font-mono text-stone-800">Rp {shippingCost.toLocaleString('id-ID')}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-stone-550 pt-2 border-t border-stone-250 border-dashed">
                  <span className="text-emerald-800 font-semibold">Total Berbelanja:</span>
                  <strong className="font-mono text-emerald-900 text-base">
                    Rp {grandTotal.toLocaleString('id-ID')}
                  </strong>
                </div>
              </div>

              {/* Ecological impact visualization block */}
              <div className="bg-emerald-900 text-white p-5 rounded-2xl space-y-3 relative overflow-hidden shadow-inner">
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full" />
                <div className="flex items-center space-x-2">
                  <Leaf className="h-4.5 w-4.5 text-emerald-300" />
                  <span className="font-sans font-bold text-xs">Dampak Lingkungan Anda</span>
                </div>
                <div>
                  <span className="font-mono text-2xl font-extrabold text-emerald-300">
                    {totalWasteSaved.toLocaleString('id-ID')}g
                  </span>
                  <p className="text-[10px] text-emerald-100 leading-relaxed pt-1">
                    Limbah plastik diselamatkan dari ekosistem pantai dan sungai serta diawetkan selamanya menjadi instrumen berestetika fungsional.
                  </p>
                </div>
              </div>

              {step === 'cart' && (
                <button
                  id="checkout-advance-btn"
                  onClick={handleNextToCheckout}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 rounded-full text-xs transition-all shadow-md shadow-emerald-700/10 flex items-center justify-center space-x-2 group-hover"
                >
                  <span>Lanjutkan ke Pengiriman</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}

              {/* Back to Catalog Clicker */}
              <button
                id="cart-continue-buying"
                onClick={() => setActiveTab('catalog')}
                className="w-full block text-center text-xs font-semibold text-emerald-700 hover:text-emerald-900 pt-1 transition-colors"
              >
                ← Tambah Kriya Lainnya
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
