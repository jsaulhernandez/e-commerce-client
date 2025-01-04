import qs from "query-string";
// interfaces
import { IProduct } from "@/data/interfaces/product.interface";
import { Query } from "@/data/ui/query.interface";
// constants
import { productURL } from "@/data/constants";

const getProducts = async (q: Query): Promise<IProduct[]> => {
  const url = qs.stringifyUrl({
    url: productURL,
    query: {
      size: q.size,
      category: q.category,
      cuisine: q.cuisine,
      kitchen: q.kitchen,
      isFeatured: q.isFeatured,
      isArchived: q.isArchived,
    },
  });

  const res = await fetch(url);
  return res.json() as Promise<IProduct[]>;
};

export default getProducts;
