import { IProduct } from "@/data/interfaces/product.interface";
import { ICategory } from "@/data/interfaces/category.interface";
import { ISize } from "@/data/interfaces/size.interface";
import { IKitchen } from "@/data/interfaces/kitchen.interface";
import { ICuisine } from "@/data/interfaces/cuisine.interface";

export type GenericLayoutProps = {
  children: React.ReactNode;
};

export type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export type HeaderProps = {
  userId?: string | null;
};

export type PopularContentProps = {
  data: IProduct;
};

export type WhyChooseUProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

export type ChefImageProps = {
  pathImage: string;
  className?: string;
  alt?: string;
};

export type MenuPageProps = {
  searchParams: {
    size?: string;
    cuisine?: string;
    category?: string;
    kitchen?: string;
    isFeatured?: boolean;
    isArchived?: boolean;
  };
};

export type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

export type FilterContainerProps = BoxProps;

export type CategoriesFilterProps = {
  categories: ICategory[];
};

export type SizesFilterProps = {
  sizes: ISize[];
};

export type KitchensFilterProps = {
  kitchens: IKitchen[];
};

export type CuisinesFilterProps = {
  cuisines: ICuisine[];
};

export type PageContentProps = {
  products: IProduct[];
};

export type ProductPageProps = {
  params: {
    productId: string;
  };
};

export type GalleryProps = {
  images: {
    url: string;
  }[];
};

export type GalleryItemProps = {
  url: string;
};

export type InfoProps = {
  product: IProduct;
};

export type SuggestedListProps = {
  products: IProduct[];
};
