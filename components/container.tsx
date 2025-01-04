// types
import { ContainerProps } from "@/data/types";
// utils
import { cn } from "@/lib/utils";

const Container = ({ className, children }: ContainerProps) => {
  return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
};

export default Container;
