// interfaces
import { IKitchen } from "@/data/interfaces/kitchen.interface";
// constants
import { kitchensURL } from "@/data/constants";

const getKitchens = async (): Promise<IKitchen[]> => {
  const res = await fetch(kitchensURL);
  return res.json() as Promise<IKitchen[]>;
};

export default getKitchens;
