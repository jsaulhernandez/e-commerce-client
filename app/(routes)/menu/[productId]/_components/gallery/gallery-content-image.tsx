import Image from "next/image";
// types
import { GalleryItemProps } from "@/data/types";

const GalleryContentImage = ({ url }: GalleryItemProps) => {
  return (
    <div className="w-full h-full aspect-square sm:rounded-lg overflow-hidden relative">
      <Image
        src={url}
        alt="image"
        className="w-full h-full object-contain"
        fill
      />
    </div>
  );
};

export default GalleryContentImage;
