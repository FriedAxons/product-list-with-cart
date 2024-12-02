import { Product } from "../App";
interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList = ({ products, addToCart }: ProductListProps) => (
  <div className="product-list">
    {products.map((product) => (
      <div key={product.name} className="product-card">
        <img src={product.image.thumbnail} alt={product.name} />
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
      </div>
    ))}
  </div>
);

export default ProductList;