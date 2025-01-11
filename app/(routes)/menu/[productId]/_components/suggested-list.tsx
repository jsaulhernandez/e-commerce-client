"use client";

import { useParams } from "next/navigation";
// components
import PopularContent from "@/components/popular-content";
import Box from "@/components/box";
// interfaces
import { IProduct } from "@/data/interfaces/product.interface";
// types
import { SuggestedListProps } from "@/data/types";

const SuggestedList = ({ products }: SuggestedListProps) => {
  const { productId } = useParams();
  const filteredProducts: IProduct[] = products.filter(
    (p) => p.id !== productId
  );

  return (
    <>
      <h2 className="text-3xl text-neutral-600 font-semibold">
        Related Products
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-20 md:gap-x-4 md:gap-y-24 my-6 py-12">
          {filteredProducts.map((p) => (
            <PopularContent key={p.id} data={p} />
          ))}
        </div>
      ) : (
        <Box className="items-center justify-center py-12 text-muted-foreground text-xl font-bold col-span-10">
          No products available!
        </Box>
      )}
    </>
  );
};

export default SuggestedList;
