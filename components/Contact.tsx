import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Leaf, Users, Gift, CheckCircle, ArrowRight } from 'lucide-react';
import { ContactMessage } from '../types';

export default function Contact() {
  const [form, setForm] = useState<ContactMessage>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'buyer'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Harap isi kolom Nama, Email, dan Pesan yang wajib diisi.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      type: 'buyer'
    });
    setSubmitted(false);
  };

  const partnerRewards = [
    {
      icon: Gift,
      title: 'Tukarkan Poin e-Wallet',
      desc: 'Setiap kilogram plastik bersih yang Anda setorkan bernilai poin yang dapat ditukar saldo GoPay, OVO, atau ShopeePay.'
    },
    {
      icon: Leaf,
      title: 'Diskon Produk GreenLoop',
      desc: 'Dapatkan diskon eksklusif hingga 30% untuk membeli kriya estetik premium kami menggunakan voucer kemitraan.'
    },
    {
      icon: Users,
      title: 'Sertifikat Pahlawan Sirkularitas',
      desc: 'Penghargaan resmi berkala atas kontribusi Anda dalam menekan angka kebocoran sampah plastik di daerah pantai.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fade-in text-left" id="contact-workspace">
      
      {/* Header section */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-sm font-extrabold text-emerald-600 uppercase tracking-widest block">Kemitraan & Kolaborasi</span>
        <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-emerald-900">Mari Bertemu & Berdampak Bersama</h1>
        <p className="text-stone-550 text-sm md:text-base leading-relaxed">
          Ada pertanyaan seputar produk kami, pesanan kustom korporasi, atau ingin menjadi kontributor penyetoran sampah plastik mandiri? Hubungi tim pendamping kami.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Contact details & Partner rewards */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-emerald-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full" />
            <h3 className="font-sans font-bold text-xl mb-6 text-emerald-50">Informasi Kantor & Studio Pusat</h3>
            
            <div className="space-y-5 text-xs text-emerald-100">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Alamat Studio Kreatif</h4>
                  <p className="mt-1 leading-relaxed">Jl. Raya Balunijuk. 42B, Kec. Merawang, Kota Bangka 60111</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Surat Elektronik (Email)</h4>
                  <p className="mt-1 font-mono text-emerald-250">halo@greenloopcreations.id</p>
                  <p className="text-[10px] text-emerald-305 text-emerald-300">Respons dalam 24 jam kerja</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Layanan Telepon & WhatsApp</h4>
                  <p className="mt-1 font-mono text-emerald-250">+62 877-5916-0616</p>
                  <p className="text-[10px] text-emerald-300">Senin - Sabtu (08.00 - 17.00 WIB)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recyclers Benefit Guideline */}
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-3">
              <h3 className="font-sans font-bold text-lg text-emerald-900">Program Penyetoran Sampah Mandiri</h3>
              <p className="text-stone-500 text-xs">Ubah tumpukan botol sabun & tutup kemasan di rumah Anda menjadi bernilai komersial.</p>
            </div>

            <div className="space-y-4">
              {partnerRewards.map((reward, idx) => {
                const IconComponent = reward.icon;
                return (
                  <div key={idx} className="flex items-start space-x-3 text-left">
                    <div className="bg-emerald-50 text-emerald-700 p-2.5 rounded-xl border border-emerald-100">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800 text-sm">{reward.title}</h4>
                      <p className="text-stone-500 text-xs leading-relaxed mt-0.5">{reward.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Interactive Forms */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-stone-100 shadow-sm">
          
          {submitted ? (
            <div className="py-12 text-center space-y-6 animate-fade-in" id="contact-success-panel">
              <CheckCircle className="h-14 w-14 text-emerald-600 mx-auto" />
              <div className="space-y-2">
                <h3 className="font-sans font-bold text-xl text-emerald-900">Pesan Anda Berhasil Terkirim!</h3>
                <p className="text-stone-650 text-stone-600 text-xs max-w-md mx-auto">
                  Terima kasih telah berkomunikasi dengan GreenLoop Creations. Tim hubungan masyarakat kami telah menerima surat Anda dan akan segera menghubungi Anda kembali dalam maksimal 1-2 hari kerja.
                </p>
              </div>
              <div className="flex justify-center pt-2">
                <button
                  id="btn-contact-reset"
                  onClick={handleReset}
                  className="bg-emerald-750 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-6 py-3 rounded-full transition-all"
                >
                  Kirim Pesan Baru
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left" id="contact-form">
              <div className="border-b border-stone-100 pb-3">
                <h3 className="font-sans font-bold text-emerald-900 text-base">Hubungi Formulir Pesan</h3>
                <p className="text-stone-400 text-xs mt-0.5">Harap lengkapi detail berikut untuk menanggapi urusan Anda dengan tepat.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-600">Nama Lengkap Anda *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Fiqih Nur Alisa"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none focus:bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-600">Alamat Email Aktif *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="greenloopcreations@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-600">Nomor Telepon / WA (Opsional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0812XXXXXXXX"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-600">Tujuan Pesan / Kemitraan *</label>
                  <select
                    required
                    name="type"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  >
                    <option value="buyer">Hubungan Pelanggan (Saya ingin membeli)</option>
                    <option value="contributor">Penyetoran Sampah Plastik Rumah Tangga</option>
                    <option value="partnership">Kerja Sama Korporat / Suvenir Kustom Kantor</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-600">Judul Subjek Pesan *</label>
                <input
                  type="text"
                  required
                  name="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Pengajuan Setoran Tutup Botol HDPE 50Kg"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none focus:bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-600">Isi Tulisan Pesan Anda *</label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tuliskan keterangan detail seputar sampah plastik Anda (jumlah, berat perkiraan) atau spesifikasi kustom suvenir kantor yang Anda minati."
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none focus:bg-white"
                />
              </div>

              <div className="pt-2 text-left">
                <button
                  id="btn-contact-submit"
                  type="submit"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-8 rounded-full text-xs transition-all shadow-md shadow-emerald-700/10 flex items-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Kirim Formulir Sekarang</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>

      {/* Preparation instructions for waste depositors */}
      <section className="bg-stone-50 border border-stone-200/50 rounded-3xl p-8 text-left space-y-6">
        <div className="flex items-center space-x-2 text-emerald-850">
          <Leaf className="h-5 w-5 text-emerald-600 fill-emerald-100" />
          <h3 className="font-sans font-bold text-lg text-emerald-900">Petunjuk Penyetoran Plastik ke Studio GreenLoop</h3>
        </div>
        <p className="text-stone-600 text-xs md:text-sm">
          Untuk menjaga keamanan kesehatan para staf pengrajin kami dan kualitas daur ulang premium, harap lakukan 3 langkah persiapan sederhana ini sebelum mengirimkan paket plastik bekas Anda ke kantor kami:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-600">
          <div className="bg-white p-5 rounded-xl border border-stone-150 space-y-2">
            <h4 className="font-bold text-emerald-850 text-sm">1. Cuci Bersih & Keringkan</h4>
            <p className="leading-relaxed">Bilas sisa cairan sabun, sampo, minyak, atau saus kosmetik hingga bersih sepenuhnya dari botol plastik. Jemur sejenak hingga benar-benar kering.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-stone-150 space-y-2">
            <h4 className="font-bold text-emerald-850 text-sm">2. Lepaskan Label & Kertas</h4>
            <p className="leading-relaxed">Kelupas label stiker kertas atau plastik pembungkus luar botol jika memungkinkan. Perekat stiker dapat menurunkan mutu lelehan plastik di tungku cetak.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-stone-150 space-y-2">
            <h4 className="font-bold text-emerald-850 text-sm">3. Kelompokkan Jenis Plastik</h4>
            <p className="leading-relaxed">Pisahkan plastik berkode HDPE angka 2 (botol susu cair/sabun) dengan plastik PP angka 5 (tutup botol/wadah makanan). Masukkan ke kantong berbeda.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
