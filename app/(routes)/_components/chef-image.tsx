import Image from "next/image";
// components
import { Card } from "@/components/ui/card";
// types
import { ChefImageProps } from "@/data/types";
// utils
import { cn } from "@/lib/utils";

const ChefImage = ({ pathImage, alt, className }: ChefImageProps) => {
  return (
    <Card
      className={cn(
        "shadow-lg relative rounded-md border-none flex flex-col items-center justify-center h-96 md:h-[520px] bg-hero/30",
        className
      )}
    >
      <Image
        src={pathImage}
        alt={alt ?? "Chef Image"}
        fill
        className="w-full h-full object-contain"
      />
    </Card>
  );
};

export default ChefImage;
