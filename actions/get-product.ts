// interfaces
import { IProduct } from "@/data/interfaces/product.interface";
// constants
import { productsURL } from "@/data/constants";

const getProduct = async (id: string): Promise<IProduct[]> => {
  const res = await fetch(`${productsURL}/${id}`);
  return res.json() as Promise<IProduct[]>;
};

export default getProduct;
