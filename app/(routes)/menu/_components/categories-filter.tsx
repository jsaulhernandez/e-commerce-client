"use client";

import { useRouter, useSearchParams } from "next/navigation";
// components
import Box from "@/components/box";
// types
import { CategoriesFilterProps } from "@/data/types";
// utils
import { cn } from "@/lib/utils";

const CategoriesFilter = ({ categories }: CategoriesFilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <Box className="flex flex-col gap-2 border-b pb-4 cursor-pointer">
      <h2 className="text-xl font-semibold text-neutral-700">Categories</h2>

      <Box className="flex flex-col gap-2 mt-2">
        {categories.map((c) => (
          <div
            key={c.id}
            className={cn(
              "text-sm font-semibold text-neutral-500 flex items-center gap-2",
              c.name === searchParams.get("category") && "text-hero"
            )}
          >
            <p>{c.name}</p>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesFilter;
