// components
import Box from "@/components/box";
import Container from "@/components/container";
import FilterContainer from "@/components/filter-container";
import CategoriesFilter from "./_components/categories-filter";
import SizesFilter from "./_components/sizes-filter";
import KitchensFilter from "./_components/kitchens-filter";
import CuisinesFilter from "./_components/cuisines-filter";
import PageContent from "./_components/page-content";
// interfaces
import { ICategory } from "@/data/interfaces/category.interface";
import { ISize } from "@/data/interfaces/size.interface";
import { IKitchen } from "@/data/interfaces/kitchen.interface";
import { ICuisine } from "@/data/interfaces/cuisine.interface";
import { IProduct } from "@/data/interfaces/product.interface";
// types
import { MenuPageProps } from "@/data/types";
// actions
import getCategories from "@/actions/get-categories";
import getSizes from "@/actions/get-sizes";
import getKitchens from "@/actions/get-kitchens";
import getCuisines from "@/actions/get-cuisines";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const MenuPage = async (props: MenuPageProps) => {
  const { category, size, kitchen, cuisine, isArchived, isFeatured } =
    await props.searchParams;

  const categories: ICategory[] = await getCategories();
  const sizes: ISize[] = await getSizes();
  const kitchens: IKitchen[] = await getKitchens();
  const cuisines: ICuisine[] = await getCuisines();
  const products: IProduct[] = await getProducts({
    category: category,
    size: size,
    kitchen: kitchen,
    cuisine: cuisine,
    isFeatured: isFeatured,
    isArchived: isArchived,
  });

  return (
    <Container className="px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 py-12 gap-2">
        <div className="hidden md:block col-span-2 border-r border-gray-100 top-24">
          <FilterContainer>
            <CategoriesFilter categories={categories} />
            <SizesFilter sizes={sizes} />
            <KitchensFilter kitchens={kitchens} />
            <CuisinesFilter cuisines={cuisines} />
          </FilterContainer>
        </div>
        <Box className="col-span-12 md:col-span-10 flex flex-col  items-start justify-start">
          <PageContent products={products} />
        </Box>
      </div>
    </Container>
  );
};

export default MenuPage;
