export interface IProduct {
  id: string;
  name: string;
  price: number;
  images: { url: string }[];
  isFeatured: boolean;
  isArchived: boolean;
  category: string;
  size: string;
  kitchen: string;
  cuisine: string;
  qty: number;
}
