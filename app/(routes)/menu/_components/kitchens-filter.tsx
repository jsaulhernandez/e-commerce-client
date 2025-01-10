"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { Check } from "lucide-react";
// components
import Box from "@/components/box";
// types
import { KitchensFilterProps } from "@/data/types";
// utils
import { cn } from "@/lib/utils";

const KitchensFilter = ({ kitchens }: KitchensFilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (value: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.kitchen === value) {
      delete currentParams.kitchen;
    } else {
      currentParams.kitchen = value;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });

    router.push(href);
  };

  return (
    <Box className="flex flex-col gap-2 border-b pb-4 cursor-pointer">
      <h2 className="text-xl font-semibold text-neutral-700">Kitchens</h2>

      <Box className="flex flex-col gap-2 mt-2">
        {kitchens.map((k) => (
          <div
            key={k.id}
            onClick={() => handleClick(k.value)}
            className={cn(
              "text-sm font-semibold text-neutral-500 flex items-center gap-2",
              k.value === searchParams.get("kitchen") && "text-hero"
            )}
          >
            <p>{k.name}</p>
            {k.value === searchParams.get("kitchen") && (
              <Check className="h-4 w-4 text-hero" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default KitchensFilter;
