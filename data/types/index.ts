import { IProduct } from "@/data/interfaces/product.interface";
import { ICategory } from "@/data/interfaces/category.interface";

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
