import { createContext } from "react";
import { Prices } from "../models/Prices";

export type ContextPriceType = {
    contextPrices: Prices;
    setContextPrices: (prices: Prices) => void;
}

export const ContextPrice = createContext({} as ContextPriceType);