import { createContext } from "react";
import { ProductDTO } from "../models/ProductDTO";

export type ContextProductType = {
  contextProducts: ProductDTO[];
  setContextProducts: (products: ProductDTO[]) => void;
};
export const ContextProducts = createContext<ContextProductType>(
  {} as ContextProductType
);
