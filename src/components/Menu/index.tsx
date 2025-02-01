import "./styles.css";

export default function Menu() {
  return (    
      <header>
        <div className="container dsf-menu">
          <h1>DSFilter</h1>
          <div className="filter-count">
            <span className="dsf-count">0</span>
            <span> produto(s)</span>
          </div>
        </div>
      </header>    
  );
}
