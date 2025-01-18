"use client";

import Image from "next/image";
// components
import Box from "@/components/box";
// types
import { OrderItemProps } from "@/data/types";
// utils
import { cn, formatter } from "@/lib/utils";

const OrderItem = ({ order }: OrderItemProps) => {
  const totalPrice: number = order.orderItems.reduce((total, item) => {
    if (item && item.qty !== undefined)
      return total + Number(item.price * item.qty);

    return total;
  }, 0);

  return (
    <Box>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-6 px-4 py-2 rounded-md border border-gray-100">
        <div className="flex items-center gap-2">
          {order.orderItems.map((oi) => (
            <div
              key={oi.id}
              className="aspect-square w-16 min-w-16 min-h-16 rounded-md relative overflow-hidden bg-gray-100"
            >
              <Image
                src={oi.images[0].url}
                alt={oi.name}
                fill
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <p className="text-lg font-semibold text-muted-foreground capitalize">
          {order.orderItems.map((oi) => oi.name).join(", ")}
        </p>

        <p
          className={cn(
            "text-lg font-semibold",
            (order.order_status === "Delivering" && "text-yellow-500") ||
              (order.order_status === "Processing" && "text-orange-500") ||
              (order.order_status === "Delivered" && "text-emerald-500") ||
              (order.order_status === "Canceled" && "text-red-500")
          )}
        >
          {order.order_status}
        </p>

        <p
          className={cn(
            "text-lg font-semibold",
            order.isPaid ? "text-emerald-500" : "text-red-500"
          )}
        >
          {order.isPaid ? "Paid" : "Not Paid"}
        </p>

        <p className="text-neutral-700 text-lg font-semibold">
          Total: {formatter.format(totalPrice)}
        </p>
      </div>
    </Box>
  );
};

export default OrderItem;
