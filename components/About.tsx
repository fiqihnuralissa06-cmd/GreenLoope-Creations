import { Leaf, Award, Recycle, ShieldAlert, ArrowRight, Heart, Users2, ShieldCheck } from 'lucide-react';

interface AboutProps {
  setActiveTab: (tab: string) => void;
}

export default function About({ setActiveTab }: AboutProps) {
  const values = [
    {
      icon: Recycle,
      title: 'Hukum Sirkularitas Murni',
      desc: 'Bukan sekadar mendaur ulang sekali pakai. Produk kami dirancang sejak awal agar dapat dipilah, dicacah kembali, dan diproduksi ulang di akhir siklus pakainya tanpa menghasilkan limbah residu.'
    },
    {
      icon: ShieldCheck,
      title: 'Bebas Kontaminan Kimia',
      desc: 'Penyucian termal tingkat tinggi memastikan mikroorganisme dan kotoran hilang sepenuhnya. Kami tidak menambahkan pewarna kimia buatan berbahaya; warna murni produk berasal dari kombinasi warna asli limbah plastik yang disortir.'
    },
    {
      icon: Heart,
      title: 'Pemberdayaan Komunitas',
      desc: 'Kami bermitra dengan bank sampah lokal, pemulung mandiri, dan pengrajin tradisional Nusantara, memberikan mereka bagi hasil yang adil di atas rata-rata harga pasar untuk mendukung kesejahteraan sosiologis.'
    }
  ];

  const milestones = [
    { year: '2024', title: 'Studio Pengolahan Pertama didirikan', desc: 'Memulai eksperimen peleburan plastik HDPE manual di dapur kecil, memproduksi hiasan meja ramah lingkungan pertama kita.' },
    { year: '2025', title: 'Ekspansi Kemitraan Bank Sampah', desc: 'Berkolaborasi dengan 12 bank sampah di Bangka & Belitung untuk memproses 1 Ton limbah plastik setiap semester.' },
    { year: '2026', title: 'Sertifikasi Circular Premium', desc: 'Mendapatkan pengakuan lokal atas standarisasi ketahanan produk fungsional ramah lingkungan tanpa kandungan racun.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20 animate-fade-in text-left" id="about-view">
      
      {/* Introduction Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-sm font-extrabold text-emerald-600 uppercase tracking-widest block">Misi Kami</span>
          <h1 className="font-sans font-extrabold text-4xl md:text-5xl text-emerald-900 tracking-tight leading-tight">
            Menutup Sirkulasi Sampah,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Melahirkan Estetika Fungsional</span>
          </h1>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed">
            Sejak awal didirikan, <strong className="text-emerald-900 font-semibold">GreenLoop Creations</strong> bertekad untuk menjadi oase perubahan di tengah badai krisis plastik global. Kami tidak melihat botol sabun atau kemasan sampo bekas sebagai sampah yang mengotori sungai kita, melainkan sebagai bahan baku bernilai tinggi yang menunggu untuk dipahat menjadi kreasi premium.
          </p>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            Melalui riset desain geometris yang matang dan rekayasa temperatur pencetakan yang presisi, kami membuktikan bahwa daur ulang plastik dapat menghasilkan permukaan estetik yang menyaingi kualitas kayu eksklusif ataupun material marmer alam.
          </p>
          
          <div className="pt-2">
            <button
              id="about-partner-btn"
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-6 rounded-full text-sm transition-all shadow-md shadow-emerald-700/10 group"
            >
              Berkolaborasi Bersama Kami
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Brand visual collage or statement card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-800 to-teal-950 text-white p-10 rounded-3xl relative overflow-hidden shadow-xl border border-stone-100 flex flex-col justify-between min-h-[350px]">
          <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-bl-full border-l border-b border-white/5" />
          <div className="absolute bottom-4 left-4 text-emerald-300">
            <Recycle className="h-16 w-16 stroke-1 animate-spin-slow opacity-20" />
          </div>

          <div className="space-y-4">
            <span className="font-mono text-emerald-300 text-xs tracking-widest font-extrabold uppercase">PRINSIP UTAMA KAMI</span>
            <blockquote className="font-sans font-bold text-lg md:text-xl leading-relaxed text-emerald-50">
              "Bumi kita tidak memiliki tempat pembuangan tak terbatas. Satu-satunya jalan untuk menyelamatkan masa depan adalah dengan menghentikan model konsumsi linear dan merangkul kriya sirkular."
            </blockquote>
          </div>

          <div className="flex items-center space-x-3 pt-6 border-t border-white/10 mt-6 z-10">
            <div className="bg-emerald-500 p-2 rounded-full text-white">
              <Leaf className="h-4 w-4" />
            </div>
            <div>
              <p className="font-bold text-sm">Prastika Amalia</p>
              <p className="text-[11px] text-emerald-300">Founder & Chief Designer GreenLoop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-stone-550 bg-emerald-50/40 p-8 md:p-12 rounded-3xl border border-emerald-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-1">
            <span className="block font-sans font-extrabold text-3xl md:text-4xl text-emerald-800">1.820 Kg</span>
            <p className="text-stone-600 text-xs font-semibold uppercase font-mono tracking-wider">Limbah Plastik Terolah</p>
            <p className="text-stone-400 text-[10px] leading-relaxed">Tersebar dari daerah pesisir pantai dan sungai lokal Jawa-Bali.</p>
          </div>
          <div className="space-y-1">
            <span className="block font-sans font-extrabold text-3xl md:text-4xl text-emerald-800">42 Bank</span>
            <p className="text-stone-600 text-xs font-semibold uppercase font-mono tracking-wider">Mitra Bank Sampah</p>
            <p className="text-stone-400 text-[10px] leading-relaxed">Kolaborasi penyetoran terintegrasi dengan timbal-balik adil.</p>
          </div>
          <div className="space-y-1">
            <span className="block font-sans font-extrabold text-3xl md:text-4xl text-emerald-800">0% Zat</span>
            <p className="text-stone-600 text-xs font-semibold uppercase font-mono tracking-wider">Pewarna Kimia Buatan</p>
            <p className="text-stone-400 text-[10px] leading-relaxed">Menjaga kemurnian material tanpa mengancam biodiversitas tanah.</p>
          </div>
          <div className="space-y-1">
            <span className="block font-sans font-extrabold text-3xl md:text-4xl text-emerald-800">8 Pilihan</span>
            <p className="text-stone-600 text-xs font-semibold uppercase font-mono tracking-wider">Kriya Fungsional</p>
            <p className="text-stone-400 text-[10px] leading-relaxed">Seni kriya fungsional mewah berdaya tahan selamanya.</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="space-y-10">
        <div className="max-w-3xl">
          <span className="text-sm font-extrabold text-emerald-600 uppercase tracking-widest block">Filosofi Kerja</span>
          <h2 className="font-sans font-bold text-3xl text-emerald-900 mt-1">Prinsip Berbuat Baik untuk Pengguna dan Lingkungan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-start space-y-4">
                <div className="bg-emerald-50 text-emerald-700 p-3 rounded-xl w-12 h-12 flex items-center justify-center border border-emerald-100 shadow-sm">
                  <IconComp className="h-6 w-6" />
                </div>
                <h3 className="font-sans font-bold text-lg text-emerald-900">{val.title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Milestone/Timeline Section */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <span className="text-sm font-extrabold text-emerald-600 uppercase tracking-widest block">Perjalanan Greenloop</span>
          <h2 className="font-sans font-bold text-3xl text-emerald-900">Jejak Waktu Kriya Sirkular</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-12">
          {/* Subtle connecting connector bar on desktops */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-stone-200 z-0" />
          
          {milestones.map((mil, idx) => (
            <div key={idx} className="space-y-4 text-left md:text-center relative z-10 group">
              <span className="bg-emerald-700 text-white font-mono font-bold text-sm px-4 py-2 rounded-full inline-block group-hover:scale-110 transition-transform shadow-md">
                {mil.year}
              </span>
              <h3 className="font-sans font-bold text-base text-emerald-900 pt-2 lg:px-6">{mil.title}</h3>
              <p className="text-stone-550 text-xs md:text-xs leading-relaxed lg:px-6 text-stone-500">
                {mil.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainable Call to Action */}
      <section className="bg-stone-50 border border-stone-200/50 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6">
        <Users2 className="h-10 w-10 text-emerald-600 mx-auto" />
        <h3 className="font-sans font-bold text-2xl text-emerald-900">Tertarik Mengenal Alur Studio Kami Secara Virtual?</h3>
        <p className="text-stone-600 text-xs md:text-sm max-w-2xl mx-auto">
          Kami menyediakan kemitraan penyaluran sampah skala komunitas, pendampingan edukasi sekolah, sertifikat dampak hijau, hingga kolaborasi pengadaan suvenir kantor ramah lingkungan.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            id="about-cta-contact"
            onClick={() => {
              setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-6 py-3.5 rounded-full"
          >
            Hubungi Kemitraan Kami
          </button>
          <button
            id="about-cta-catalog"
            onClick={() => {
              setActiveTab('catalog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white hover:bg-stone-50 text-emerald-900 border border-stone-200 font-semibold text-xs px-6 py-3.5 rounded-full"
          >
            Eksplorasi Katalog Produk
          </button>
        </div>
      </section>

    </div>
  );
}
