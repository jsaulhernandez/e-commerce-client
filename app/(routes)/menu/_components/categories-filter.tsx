"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { Check } from "lucide-react";
// components
import Box from "@/components/box";
// types
import { CategoriesFilterProps } from "@/data/types";
// utils
import { cn } from "@/lib/utils";

const CategoriesFilter = ({ categories }: CategoriesFilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (value: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.category === value) {
      delete currentParams.category;
    } else {
      currentParams.category = value;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });

    router.push(href);
  };

  return (
    <Box className="flex flex-col gap-2 border-b pb-4 cursor-pointer">
      <h2 className="text-xl font-semibold text-neutral-700">Categories</h2>

      <Box className="flex flex-col gap-2 mt-2">
        {categories.map((c) => (
          <div
            key={c.id}
            onClick={() => handleClick(c.name)}
            className={cn(
              "text-sm font-semibold text-neutral-500 flex items-center gap-2",
              c.name === searchParams.get("category") && "text-hero"
            )}
          >
            <p>{c.name}</p>
            {c.name === searchParams.get("category") && (
              <Check className="h-4 w-4 text-hero" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesFilter;
