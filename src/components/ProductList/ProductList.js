// import { products } from "../Product/Product";
import ProductCard from "../ProductCard/ProductCard";

export function ProductList({ products }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div
          className="col-md-4 mb-4"
          style={{ marginTop: "100px" }}
          key={product.id}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
