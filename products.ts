import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Gantungan Kunci Nusantara',
    category: 'Souvenir',
    price: 25000,
    stock: 120,
    plasticType: 'HDPE',
    wasteSavedGrams: 50,
    description: 'Gantungan kunci daur ulang eksklusif dengan pola marmer alami yang terinspirasi dari keindahan alam Nusantara. Setiap buah memiliki pola corak warna unik yang tidak akan pernah sama.',
    aestheticDescription: 'Corak abstrak marmer emerald-earthy dengan finis halus premium dan gantungan kuningan anti-karat.',
    image: '/src/assets/images/keychain_nusantara_1780395688172.png',
    rating: 4.8,
    reviewCount: 94
  },
  {
    id: 'p2',
    name: 'Plakat Penghargaan Selaras',
    category: 'Souvenir',
    price: 145000,
    stock: 25,
    plasticType: 'PP',
    wasteSavedGrams: 350,
    description: 'Plakat minimalis modern untuk penghargaan ramah lingkungan atau dekorasi kehormatan. Dibuat dengan presisi tinggi menggunakan teknik thermo-press.',
    aestheticDescription: 'Kombinasi warna terracotta hangat dengan tekstur terrazzo putih-hijau kontras yang elegan.',
    image: '/src/assets/images/award_selaras_1780395702422.png',
    rating: 4.9,
    reviewCount: 18
  },
  {
    id: 'p3',
    name: 'Vas Bunga Geometris "Aura"',
    category: 'Decor',
    price: 85000,
    stock: 45,
    plasticType: 'PP',
    wasteSavedGrams: 280,
    description: 'Vas bunga dengan bentuk faset geometris modern yang futuristik namun tetap membumi. Sangat cocok untuk menghiasi meja kerja, ruang tamu, atau sudut baca Anda.',
    aestheticDescription: 'Finis matte satin bertekstur micro-ribs berwarna hijau botol yang memantulkan cahaya dengan lembut.',
    image: '/src/assets/images/vase_aura_1780395716294.png',
    rating: 4.7,
    reviewCount: 56
  },
  {
    id: 'p4',
    name: 'Wadah Lilin Terrazzo Estetik',
    category: 'Decor',
    price: 65000,
    stock: 60,
    plasticType: 'HDPE',
    wasteSavedGrams: 180,
    description: 'Wadah lilin dekoratif dengan penutup kayu pinus bersertifikat FSC. Menghadirkan ketenangan aromaterapi sekaligus melestarikan alam sekitar.',
    aestheticDescription: 'Bintik warna-warni dinamis (terrazzo style) berpadu serasi dengan kehangatan serat kayu alami.',
    image: '/src/assets/images/candle_terrazzo_1780395732834.png',
    rating: 4.9,
    reviewCount: 42
  },
  {
    id: 'p5',
    name: 'Kotak Penyimpanan "Prisma"',
    category: 'Container',
    price: 95000,
    stock: 40,
    plasticType: 'HDPE',
    wasteSavedGrams: 500,
    description: 'Kotak penyimpanan serbaguna yang kuat, modular, dan dapat ditumpuk dengan rapi. Struktur kokohnya sangat ideal untuk menata pakaian, mainan, atau berkas penting.',
    aestheticDescription: 'Desain minimalis bergaris tegas dengan pegangan ergonomis bermotif abu semen modern.',
    image: '/src/assets/images/box_prisma_1780395748247.png',
    rating: 4.8,
    reviewCount: 31
  },
  {
    id: 'p6',
    name: 'Botol Dispenser Sabun Cair',
    category: 'Container',
    price: 42000,
    stock: 150,
    plasticType: 'PET',
    wasteSavedGrams: 120,
    description: 'Botol pump estetik untuk sabun cair, losion, atau sampo. Mengurangi penggunaan plastik sekali pakai dengan sistem isi ulang (refill) yang ramah kantong.',
    aestheticDescription: 'Siluet silinder ramping berwarna charcoal amber tembus pandang dengan kepala pump bambu alami.',
    image: '/src/assets/images/soap_dispenser_1780395762977.png',
    rating: 4.6,
    reviewCount: 112
  },
  {
    id: 'p7',
    name: 'Organizer Meja Modern "EcoDesk"',
    category: 'Office',
    price: 75000,
    stock: 80,
    plasticType: 'PP',
    wasteSavedGrams: 220,
    description: 'Solusi penyimpanan terbaik untuk meja kerja Anda. Menampung pena, klip kertas, nota, hingga dilengkapi dengan penyangga ponsel cerdas yang fungsional.',
    aestheticDescription: 'Pembagian kompartemen asimetris berliku yang dinamis dengan warna abu-muda netral yang menenangkan.',
    image: '/src/assets/images/desk_organizer_1780395777311.png',
    rating: 4.8,
    reviewCount: 73
  },
  {
    id: 'p8',
    name: 'Dudukan Laptop Lipat "FoldLoop"',
    category: 'Office',
    price: 185000,
    stock: 30,
    plasticType: 'HDPE',
    wasteSavedGrams: 650,
    description: 'Dudukan laptop ergonomis dengan tingkat kemiringan yang dapat disesuaikan. Membantu menjaga postur leher Anda sekaligus mencegah laptop mengalami panas berlebih (overheat).',
    aestheticDescription: 'Rangka lipat industrial ultra-kokoh, dilapisi pad anti-selip silikon berwarna abu arang berkelas.',
    image: '/src/assets/images/laptop_stand_1780395793957.png',
    rating: 4.9,
    reviewCount: 29
  }
];

export const CATEGORY_LABELS = {
  all: 'Semua Produk',
  Souvenir: 'Suvenir Premium',
  Decor: 'Dekorasi Rumah',
  Container: 'Wadah Ramah Lingkungan',
  Office: 'Aksesoris Meja Kerja'
};

export const PLASTIC_DETAILS = {
  HDPE: {
    name: 'HDPE (High-Density Polyethylene)',
    characteristics: 'Sangat kuat, tahan benturan, tahan bahan kimia, ramah daur ulang, ideal untuk produk berstruktur kokoh.',
    recyclingCode: 2,
    color: 'emerald-600'
  },
  PP: {
    name: 'PP (Polypropylene)',
    characteristics: 'Fleksibel namun kokoh, tahan panas tingkat tinggi, aman untuk makanan/minuman, memiliki ketahanan lelah yang baik.',
    recyclingCode: 5,
    color: 'teal-600'
  },
  PET: {
    name: 'PET (Polyethylene Terephthalate)',
    characteristics: 'Ringan, jernih berkilau, kuat, kedap udara, sangat populer sebagai botol isi ulang.',
    recyclingCode: 1,
    color: 'sky-600'
  },
  LDPE: {
    name: 'LDPE (Low-Density Polyethylene)',
    characteristics: 'Liat, elastis, kedap air, ideal untuk produk tipe fleksibel dan film pelindung.',
    recyclingCode: 4,
    color: 'indigo-600'
  }
};
