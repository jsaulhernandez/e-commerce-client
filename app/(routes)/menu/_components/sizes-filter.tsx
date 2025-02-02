"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { Check } from "lucide-react";
// components
import Box from "@/components/box";
// types
import { SizesFilterProps } from "@/data/types";
// utils
import { cn } from "@/lib/utils";

const SizesFilter = ({ sizes }: SizesFilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (value: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.size === value) {
      delete currentParams.size;
    } else {
      currentParams.size = value;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });

    router.push(href);
  };

  return (
    <Box className="flex flex-col gap-2 border-b pb-4 cursor-pointer">
      <h2 className="text-xl font-semibold text-neutral-700">Sizes</h2>

      <Box className="flex flex-col gap-2 mt-2">
        {sizes.map((s) => (
          <div
            key={s.id}
            onClick={() => handleClick(s.name)}
            className={cn(
              "text-sm font-semibold text-neutral-500 flex items-center gap-2",
              s.name === searchParams.get("size") && "text-hero"
            )}
          >
            <p>
              {s.name} ({s.value})
            </p>
            {s.name === searchParams.get("size") && (
              <Check className="h-4 w-4 text-hero" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default SizesFilter;
