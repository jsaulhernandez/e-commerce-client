"use client";

import {
  CookingPot,
  ShoppingCart,
  Soup,
  SquareActivity,
  Utensils,
} from "lucide-react";
import { useState } from "react";
// components
import { Button } from "@/components/ui/button";
// hooks
import useCart from "@/hooks/use-cart.hook";
// interfaces
import { IProduct } from "@/data/interfaces/product.interface";
// types
import { InfoProps } from "@/data/types";
// utils
import { cn } from "@/lib/utils";

const Info = ({ product }: InfoProps) => {
  const [qty, setQty] = useState<number>(1);
  const cart = useCart();

  const handleQty = (value: number) => {
    setQty(value);
    cart.updateItemQuantity(product.id, value);
  };

  const addItem = (data: IProduct) => {
    cart.addItem({ ...data, qty: qty });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-neutral-800">{product.name}</h1>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-base text-left text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quasi,
          amet quisquam facilis, quas, enim sequi ullam eius ut necessitatibus
          obcaecati accusantium. Ratione incidunt, veritatis velit culpa ullam
          minus repudiandae.
        </p>
      </div>

      <div className="w-full flex items-center justify-start gap-2 flex-wrap px-2 mt-8">
        {product.cuisine && (
          <div className="rounded-md bg-emerald-500/10 px-3 py-1 text-base font-semibold capitalize flex items-center gap-2">
            <CookingPot className="w-5 h-5" />
            {product.cuisine}
          </div>
        )}

        {product.category && (
          <div className="rounded-md bg-blue-500/10 px-3 py-1 text-base font-semibold capitalize flex items-center gap-2">
            <Soup className="w-5 h-5" />
            {product.category}
          </div>
        )}

        {product.kitchen && (
          <div className="rounded-md bg-red-500/10 px-3 py-1 text-base font-semibold capitalize flex items-center gap-2">
            <Utensils className="w-5 h-5" />
            {product.kitchen}
          </div>
        )}

        {product.size && (
          <div className="rounded-md bg-yellow-500/10 px-3 py-1 text-base font-semibold capitalize flex items-center gap-2">
            <SquareActivity className="w-5 h-5" />
            {product.size}
          </div>
        )}
      </div>

      <div className="w-full grid grid-cols-4 my-12">
        <div className="col-span-1 space-y-8">
          <p className="text-lg font-semibold text-neutral-700">Price</p>
          <p className="text-lg font-semibold text-neutral-700">Serves</p>
        </div>

        <div className="col-span-3 space-y-8">
          <p className="text-xl font-bold text-black">${product.price}</p>

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
        </div>
      </div>

      <Button
        className="w-full  py-6 text-xl font-semibold hover:bg-hero hover:text-white flex items-center justify-center gap-3"
        onClick={() => addItem(product)}
      >
        Add to cart <ShoppingCart className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Info;
