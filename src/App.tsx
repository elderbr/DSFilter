import { useState } from "react";
import Filter from "./components/Filter";
import Listing from "./components/Listing";
import Menu from "./components/Menu";
import { Prices } from "./models/Prices";
import { ContextPrice } from "./utils/context-price";
import { ProductDTO } from "./models/ProductDTO";
import { ContextProducts } from "./utils/context-product";

export default function App() {
  const [contextPrices, setContextPrices] = useState<Prices>({} as Prices);
  const [contextProducts, setContextProducts] = useState<ProductDTO[]>(
    {} as ProductDTO[]
  );

  return (
    <ContextPrice.Provider value={{ contextPrices, setContextPrices }}>
      <ContextProducts.Provider value={{ contextProducts, setContextProducts }}>
        <Menu />
        <Filter />
        <Listing />
      </ContextProducts.Provider>
    </ContextPrice.Provider>
  );
}
