import "./styles.css";
import { useContext, useEffect } from "react";
import Product from "../Product";
import { ContextProducts } from "../../utils/context-product";
import * as productService from "../../services/product-service";
import { ContextPrice } from "../../utils/context-price";

export default function Listing() {
  const { contextPrices } = useContext(ContextPrice);
  const { contextProducts, setContextProducts } = useContext(ContextProducts);

  useEffect(() => {
    let min = contextPrices.priceMin;
    if (min == undefined || (min < 0)) {
      min = 0;
    }
    let max = contextPrices.priceMax;
    if (max == undefined || max <= 0) {
      max = Number.MAX_VALUE;
    }
    setContextProducts(productService.findByPrice(min, max));
  }, [contextPrices]);

  return (
    <div className="container">
      <div className="dsf-listing">
        {contextProducts.length > 0 && contextProducts.map(product => <Product key={product.id} product={product} />)}
      </div>
    </div>
  );
}
