import "./styles.css";

export default function Filter() {
  return (
    <div className="container">
      <form className="dsf-filter">
        <input type="text" className="dsf-filter-input value-min" placeholder="Preço mínimo" />
        <input type="text" className="dsf-filter-input value-max" placeholder="Preço máximo" />
        <button type="submit" className="dsf-filter-btn">Filtrar</button>
      </form>
    </div>
  );
}
