import { auth } from "@clerk/nextjs/server";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
// components
import Box from "@/components/box";
import Container from "@/components/container";
import CartContent from "./_components/cart-content";

const CartPage = async () => {
  const { userId } = await auth();

  return (
    <div className="">
      <Container className="bg-white py-12 my-4 h-full">
        <div className="w-full px-4 md:px-12 space-y-7 h-full">
          <Box className="text-neutral-700 text-sm items-center">
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
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
            <p className="flex items-center gap-2 to-muted-foreground">Cart</p>
          </Box>

          <CartContent userId={userId} />
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
