import { useState } from "react";
import Image from "next/image";
import { Trash } from "lucide-react";
// components
import Box from "@/components/box";
import { Button } from "@/components/ui/button";
// hooks
import useCart from "@/hooks/use-cart.hook";
// types
import { CartItemProps } from "@/data/types";
// utils
import { cn } from "@/lib/utils";

const CartItem = ({ product }: CartItemProps) => {
  const [qty, setQty] = useState<number>(product.qty ?? 1);
  const cart = useCart();

  const handleQty = (value: number) => {
    setQty(value);
    cart.updateItemQuantity(product.id, value);
  };

  return (
    <Box className="flex items-center gap-4 border border-gray-200 p-3 rounded-lg">
      <div className="aspect-square w-24 min-w-24  h-4 min-h-24 rounded bg-gray-100 flex items-center justify-center relative overflow-hidden">
        <Image
          src={product.images[0].url}
          alt="product image"
          fill
          className="w-full h-full object-contain p-2"
        />
      </div>

      <div>
        <h2 className="w-full min-w-44  whitespace-nowrap truncate font-semibold text-2xl text-neutral-700">
          {product.name}
        </h2>

        <div className="w-full flex items-center justify-start gap-2 flex-wrap mt-4">
          {product.cuisine && (
            <div className="rounded-md bg-emerald-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {product.cuisine}
            </div>
          )}

          {product.category && (
            <div className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {product.category}
            </div>
          )}

          {product.kitchen && (
            <div className="rounded-md bg-red-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {product.kitchen}
            </div>
          )}

          {product.size && (
            <div className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {product.size}
            </div>
          )}
        </div>
      </div>

      <Box className="flex items-center justify-center h-full">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((q) => (
            <div
              key={q}
              onClick={() => handleQty(q)}
              className={cn(
                "w-8 h-8 cursor-pointer rounded-full flex items-center justify-center border border-hero",
                qty === q
                  ? "bg-hero shadow-md text-white"
                  : "bg-transparent shadow-none"
              )}
            >
              {q}
            </div>
          ))}
        </div>
      </Box>

      <Box>
        <h2>${product.price * product.qty}</h2>
      </Box>

      <Button
        className="w-auto m-auto"
        onClick={() => cart.removeItem(product.id)}
      >
        <Trash className="h-4 w-4" />
      </Button>
    </Box>
  );
};

export default CartItem;
