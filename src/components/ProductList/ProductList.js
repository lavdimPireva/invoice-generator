// import { products } from "../Product/Product";
import ProductCard from "../ProductCard/ProductCard";

export function ProductList({ addToCart, products }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3 mb-4 mt-4 " key={product.id}>
          <ProductCard product={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
}
