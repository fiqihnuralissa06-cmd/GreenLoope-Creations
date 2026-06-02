export type PlasticType = 'HDPE' | 'PP' | 'PET' | 'LDPE';

export interface Product {
  id: string;
  name: string;
  category: 'Souvenir' | 'Decor' | 'Container' | 'Office';
  price: number;
  stock: number;
  plasticType: PlasticType;
  wasteSavedGrams: number; // e.g., 200
  description: string;
  aestheticDescription: string;
  image: string; // fallback icon name or generated path
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: 'contributor' | 'buyer' | 'partnership';
}

export interface CheckoutDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  shippingOption: string;
  paymentMethod: string;
}
