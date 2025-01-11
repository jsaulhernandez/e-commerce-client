"use client";

//components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GalleryContentImage from "./gallery-content-image";
import GalleryTab from "./gallery-tab";
// types
import { GalleryProps } from "@/data/types";

const Gallery = ({ images }: GalleryProps) => {
  return (
    <Tabs defaultValue={images[0].url} className="w-full">
      {images.map((i) => (
        <TabsContent key={i.url} value={i.url}>
          <GalleryContentImage url={i.url} />

          <TabsList className="bg-transparent w-full">
            {images.map((i) => (
              <TabsTrigger key={i.url} value={i.url}>
                <GalleryTab url={i.url} />
              </TabsTrigger>
            ))}
          </TabsList>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Gallery;
