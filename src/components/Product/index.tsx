import { ProductDTO } from "../../models/ProductDTO";
import "./styles.css";

type Props = {
    product: ProductDTO;
}

export default function Product({product}: Props) {
  return (
    <div className="dsf-product">
      <p>{product.name}</p>
      <h2>R$ {product.price.toFixed(2)}</h2>
    </div>
  );
}
