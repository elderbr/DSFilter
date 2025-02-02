import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { ContextProducts } from "../../utils/context-product";

export default function Menu() {
  const { contextProducts } = useContext(ContextProducts);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(contextProducts.length);
  }, [contextProducts]);

  return (
    <header>
      <div className="container dsf-menu">
        <h1>DSFilter</h1>
        <div className="filter-count">
          <span className="dsf-count">{count}</span>
          <span> produto(s)</span>
        </div>
      </div>
    </header>
  );
}
