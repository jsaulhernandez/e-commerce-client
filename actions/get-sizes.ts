// interfaces
import { ISize } from "@/data/interfaces/size.interface";
// constants
import { sizesURL } from "@/data/constants";

const getSizes = async (): Promise<ISize[]> => {
  const res = await fetch(sizesURL);
  return res.json() as Promise<ISize[]>;
};

export default getSizes;
