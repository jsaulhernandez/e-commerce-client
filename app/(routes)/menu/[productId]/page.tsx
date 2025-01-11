import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
// components
import Box from "@/components/box";
import Container from "@/components/container";
import Gallery from "./_components/gallery/gallery";
import Info from "./_components/info";
import SuggestedList from "./_components/suggested-list";
// interfaces
import { IProduct } from "@/data/interfaces/product.interface";
// types
import { ProductPageProps } from "@/data/types";
// actions
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";

const ProductPage = async (props: ProductPageProps) => {
  const { productId } = await props.params;
  const product: IProduct = await getProduct(productId);
  const suggestedProducts: IProduct[] = await getProducts({
    category: product.category ?? "",
  });

  return (
    <div>
      <Container className="bg-white rounded-lg my-4 px-4">
        <Box className="text-neutral-700 text-sm items-center m-t12">
          <Link href={"/"} className="flex items-center gap-2">
            <Home className="w-4 h-4 " />
            Main Page
          </Link>

          <ChevronRight className="w-5 h-5 text-muted-foreground" />
          <Link
            href={"/menu"}
            className="flex items-center gap-2 text-muted-foreground"
          >
            Products
          </Link>
        </Box>

        <div className="px-4 py-10 sm:px-6 lg:px-8  space-y-10">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* gallery section */}
            <Gallery images={product.images} />

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* info section */}
              <Info product={product} />
            </div>
          </div>

          <SuggestedList products={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
