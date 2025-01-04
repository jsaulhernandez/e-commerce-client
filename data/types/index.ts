import { IProduct } from "@/data/interfaces/product.interface";

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
