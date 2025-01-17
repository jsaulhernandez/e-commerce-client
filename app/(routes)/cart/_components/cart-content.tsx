"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { EraserIcon } from "lucide-react";
import axios from "axios";
// components
import { Button } from "@/components/ui/button";
import CartItem from "./cart-item";
import Box from "@/components/box";
import { Separator } from "@/components/ui/separator";
// hooks
import useCart from "@/hooks/use-cart.hook";
// types
import { CartContentProps } from "@/data/types";
// constants
import { checkoutURL } from "@/data/constants";

const CartContent = ({ userId }: CartContentProps) => {
  const cart = useCart();
  const searchParams = useSearchParams();

  const totalPrice = cart.items.reduce((total, item) => {
    return (total += Number(item.price * item.qty));
  }, 0);

  useEffect(() => {
    if (searchParams.get("success")) toast.success("Payment Completed");
    if (searchParams.get("canceled"))
      toast.error("Something went wrong, try again later!");
  }, [searchParams, cart.removeAll]);

  const onCheckOut = async () => {
    const response = await axios.post(checkoutURL, {
      products: cart.items,
      userId,
    });

    window.location = response.data.url;
  };

  return (
    <>
      <div className="w-full flex items-center justify-between gap-4">
        <h2 className="text-3xl font-semibold text-neutral-700">Cart Items</h2>
        {cart.items.length > 0 && (
          <Button onClick={() => cart.removeAll()} variant={"destructive"}>
            Clear <EraserIcon className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>

      <div className="w-full lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
        <div className="col-span-8">
          {cart.items.length === 0 && (
            <div className="w-full items-center justify-center">
              <p className="text-3xl text-neutral-600 font-semibold">
                No items added to cart
              </p>
            </div>
          )}

          {cart.items.length > 0 && (
            <div className="w-full space-y-4 overflow-auto h-full max-h-[70vh] lg:max-h-[56vh] ">
              {cart.items.map((i) => (
                <CartItem product={i} key={i.id} />
              ))}
            </div>
          )}
        </div>

        <div className="col-span-4 space-y-8">
          <Box className="flex-col items-start justify-start gap-2 shadow-lg rounded-lg p-3 space-y-2 bg-slate-50">
            <h2 className="text-lg text-neutral-700 font-semibold">
              Order Summary
            </h2>

            <Separator />

            <Box className="flex-col space-y-2">
              <div className="flex items-center justify-between w-full px-4 whitespace-nowrap text-muted-foreground">
                <p className="text-black font-bold text-base">Total</p>
                <p className="font-semibold text-2xl text-black">
                  $ {totalPrice}
                </p>
              </div>
            </Box>

            <Box className="flex-col items-start justify-start gap-2 shadow-lg rounded-lg p-3 space-y-2 bg-slate-50">
              <h2 className="text-lg text-neutral-700 font-semibold">
                Payment
              </h2>

              <Separator />
              <Button className="w-full" onClick={() => onCheckOut()}>
                Check Out
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default CartContent;
