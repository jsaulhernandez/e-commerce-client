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
        "shadow-lg relative rounded-md border-none flex flex-col items-center justify-center h-96 md:h-[520px] bg-hero/30 overflow-hidden",
        className
      )}
    >
      <Image
        src={pathImage}
        alt={alt ?? "Chef Image"}
        fill
        className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-110 hover:translate-y-10"
      />
    </Card>
  );
};

export default ChefImage;
