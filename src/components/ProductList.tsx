import { Product } from "../App";
import cartIcon from "/product-list-with-cart/images/icon-add-to-cart.svg";
import minusIcon from "/product-list-with-cart/images/icon-decrement-quantity.svg";
import plusIcon from "/product-list-with-cart/images/icon-increment-quantity.svg";

interface ProductListProps {
  products: Product[];
  cartItems: { product: Product; quantity: number }[];
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
}

const ProductList = ({
  products,
  cartItems,
  addToCart,
  removeFromCart,
}: ProductListProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => {
      const cartItem = cartItems.find(
        (item) => item.product.name === product.name
      );
      const quantity = cartItem ? cartItem.quantity : 0;

      return (
        <div key={product.name} className="product-card">
          <img
            className="w-[220px] rounded-md"
            srcSet={`${product.image.mobile} 375w, ${product.image.desktop} 1440w`}
            sizes="(max-width: 375px) 375px, 1280px"
            src={product.image.desktop}
            alt={product.name}
          />

          {quantity === 0 ? (
            <button onClick={() => addToCart(product)}>
              <img src={cartIcon} alt="Cart Icon" />
              Add to Cart
            </button>
          ) : (
            <div className="quantity-controls">
              <button onClick={() => removeFromCart(product.name)}>
                <img src={minusIcon} alt="Minus Icon" />
              </button>
              <span>{quantity}</span>
              <button onClick={() => addToCart(product)}>
                <img src={plusIcon} alt="Plus Icon" />
              </button>
            </div>
          )}

          <p>{product.category}</p>
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      );
    })}
  </div>
);

export default ProductList;
