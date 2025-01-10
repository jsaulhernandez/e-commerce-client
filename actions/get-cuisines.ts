// interfaces
import { ICuisine } from "@/data/interfaces/cuisine.interface";
// constants
import { cuisinesURL } from "@/data/constants";

const getCuisines = async (): Promise<ICuisine[]> => {
  const res = await fetch(cuisinesURL);
  return res.json() as Promise<ICuisine[]>;
};

export default getCuisines;
