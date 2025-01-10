"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { Check } from "lucide-react";
// components
import Box from "@/components/box";
// types
import { CuisinesFilterProps } from "@/data/types";
// utils
import { cn } from "@/lib/utils";

const CuisinesFilter = ({ cuisines }: CuisinesFilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (value: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.cuisine === value) {
      delete currentParams.cuisine;
    } else {
      currentParams.cuisine = value;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });

    router.push(href);
  };

  return (
    <Box className="flex flex-col gap-2 border-b pb-4 cursor-pointer">
      <h2 className="text-xl font-semibold text-neutral-700">Cuisines</h2>

      <Box className="flex flex-col gap-2 mt-2">
        {cuisines.map((c) => (
          <div
            key={c.id}
            onClick={() => handleClick(c.value)}
            className={cn(
              "text-sm font-semibold text-neutral-500 flex items-center gap-2",
              c.value === searchParams.get("cuisine") && "text-hero"
            )}
          >
            <p>{c.name}</p>
            {c.value === searchParams.get("cuisine") && (
              <Check className="h-4 w-4 text-hero" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default CuisinesFilter;
