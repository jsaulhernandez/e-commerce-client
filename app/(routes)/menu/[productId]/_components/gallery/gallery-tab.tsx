import Image from "next/image";
// types
import { GalleryItemProps } from "@/data/types";

const GalleryTab = ({ url }: GalleryItemProps) => {
  return (
    <div className="w-24 h-24 aspect-square rounded-md relative">
      <Image
        src={url}
        alt="image"
        className="w-full h-full object-contain"
        fill
      />
    </div>
  );
};

export default GalleryTab;
