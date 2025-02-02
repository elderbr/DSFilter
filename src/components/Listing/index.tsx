import Product from "../Product";
import "./styles.css"

export default function Listing(){
    return(
        <div className="container">
            <div className="dsf-listing">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}