// interfaces
import { ICategory } from "@/data/interfaces/category.interface";
// constants
import { categoriesURL } from "@/data/constants";

const getCategories = async (): Promise<ICategory[]> => {
  const res = await fetch(categoriesURL);
  return res.json() as Promise<ICategory[]>;
};

export default getCategories;
