"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// components
import { Button } from "./ui/button";
// hooks
import useCart from "@/hooks/use-cart.hook";

const CartAction = () => {
  const [mounted, setIsMounted] = useState<boolean>(false);
  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="ml-4 flex items-center justify-center gap-x-4">
      <Button className="rounded-full" onClick={() => router.push("/cart")}>
        <ShoppingBag className="w-4 h-4 text-white" />
        <span className="text-sm font-medium text-white ml-2">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default CartAction;
