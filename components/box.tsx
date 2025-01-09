// types
import { BoxProps } from "@/data/types";
// utils
import { cn } from "@/lib/utils";

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={cn("mx-auto w-full flex items-start justify-start", className)}
    >
      {children}
    </div>
  );
};

export default Box;
