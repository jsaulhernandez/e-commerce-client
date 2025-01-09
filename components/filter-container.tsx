// components
import Box from "./box";
// types
import { FilterContainerProps } from "@/data/types";
// utils
import { cn } from "@/lib/utils";

const FilterContainer = ({ children, className }: FilterContainerProps) => {
  return <Box className={cn("flex flex-col gap-4", className)}>{children}</Box>;
};

export default FilterContainer;
