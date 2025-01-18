import { auth } from "@clerk/nextjs/server";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
// components
import Box from "@/components/box";
import Container from "@/components/container";
import OrdersContent from "./_components/orders-content";
//interfaces
import { IOrder } from "@/data/interfaces/order.interface";
// actions
import getOrders from "@/actions/get-orders";

export const revalidate = 0;

const OrdersPage = async () => {
  const orders: IOrder[] = await getOrders();
  const { userId } = await auth();

  const ordersFilteredByUserId = orders.filter((o) => o.userId === userId);

  return (
    <Container className="px-4 md:px-12 my-12 bg-white py-12 min-h-[88vhR">
      <Box className="text-neutral-700 text-sm items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Home className="w-4 h-4 " />
          Main Page
        </Link>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
        <p className="flex items-center gap-2 to-muted-foreground">My Orders</p>
      </Box>

      <h2 className="my-4 text-xl font-semibold text-neutral-700">My Orders</h2>

      <OrdersContent orders={ordersFilteredByUserId} />
    </Container>
  );
};

export default OrdersPage;
