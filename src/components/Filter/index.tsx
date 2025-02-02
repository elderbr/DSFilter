import { useContext, useState } from "react";
import { Prices } from "../../models/Prices";
import { ContextPrice } from "../../utils/context-price";
import "./styles.css";

export default function Filter() {
  const [price, setPrice] = useState<Prices>({});
  const { setContextPrices } = useContext(ContextPrice);

  function handlePrice(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;
    setPrice({ ...price, [name]: value });    
  }

  function handleForm(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setContextPrices(price);    
  }

  return (
    <div className="container">
      <form onSubmit={handleForm} className="dsf-filter">
        <input
          type="text"
          name="priceMin"
          className="dsf-filter-input value-min"
          placeholder="Preço mínimo"
          value={price.priceMin || undefined}
          onChange={handlePrice}
        />
        <input
          type="text"
          name="priceMax"
          value={price.priceMax || undefined}
          className="dsf-filter-input value-max"
          placeholder="Preço máximo"
          onChange={handlePrice}
        />
        <button type="submit" className="dsf-filter-btn">
          Filtrar
        </button>
      </form>
    </div>
  );
}
