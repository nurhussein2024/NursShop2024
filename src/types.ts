export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  brand: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}