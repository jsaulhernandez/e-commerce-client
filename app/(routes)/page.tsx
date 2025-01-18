import Image from "next/image";
import Link from "next/link";
import { FileHeart, Salad, Truck } from "lucide-react";
// components
import Container from "@/components/container";
import PopularContent from "@/components/popular-content";
import { Button } from "@/components/ui/button";
import WhyChooseUs from "./_components/why-choose-us";
import ChefImage from "./_components/chef-image";
// interfaces
import { IProduct } from "@/data/interfaces/product.interface";
// actions
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const products: IProduct[] = await getProducts({
    isFeatured: false,
  });

  return (
    <>
      <Container className="px-4 md:px-12">
        <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-500">
              Hungry?
            </p>

            <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
              Just Come To <span className="block py-4">Foodied & Order</span>
            </h2>

            <p className="text-base text-center md:text-left text-neutral-500 my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit aliquam consectetur provident harum architecto,
              laboriosam nemo, iusto at voluptas nisi, ea aspernatur doloribus
              nesciunt rem excepturi ab vel ipsam impedit!
            </p>

            <div className="my-4 flex text-center justify-center gap-6 w-full md:w-auto">
              <Link href={"/menu"}>
                <Button className="px-8 md:px-16 py-4 rounded-full bg-hero">
                  Order Now
                </Button>
              </Link>
              <Link href={"/"}>
                <Button
                  variant={"outline"}
                  className="px-8 md:px-16 py-4 rounded-full"
                >
                  Explore More
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="w-full relative h-[560px] flex items-center justify-center">
              <Image
                src="/img/Food.png"
                alt="Hero"
                className="object-contain w-full h-full absolute"
                fill
              />
            </div>
          </div>
        </section>

        {/* popular section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 md:gap-12 my-4 py-12">
          {(products ?? []).slice(0, 4).map((p) => (
            <PopularContent key={p.id} data={p} />
          ))}
        </section>

        {/* why choose us */}
        <section className="my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Why choose us?
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            commodi repellendus quod tempore reiciendis mollitia perferendis
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <WhyChooseUs
              icon={<Salad className="w-8 h-8 text-hero" />}
              title="Serve Healthy Food"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laudantium sunt"
            />
            <WhyChooseUs
              icon={<FileHeart className="w-8 h-8 text-hero" />}
              title="Best Quality"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laudantium sunt"
            />
            <WhyChooseUs
              icon={<Truck className="w-8 h-8 text-hero" />}
              title="Fast Delivery"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laudantium sunt"
            />
          </div>
        </section>

        {/* our chef sections */}
        <section className="my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Our Special Chefs
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            commodi repellendus quod tempore reiciendis mollitia perferendis
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <ChefImage pathImage="/img/chef1.png" />
            <ChefImage pathImage="/img/chef3.png" className="mt-20" />
            <ChefImage pathImage="/img/chef2.png" />
          </div>
        </section>
      </Container>
    </>
  );
};

export default HomePage;
