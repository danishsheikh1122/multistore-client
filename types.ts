export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}
export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Sizes;
  color: Color;
  images: Image[];
}
export interface Image {
  id: string;
  url: string;
}
export interface Sizes {
  id: string;
  name: string;
  value: string;
}
export interface Color {
  id: string;
  name: string;
  value: string;
}
