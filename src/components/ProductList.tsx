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
  <div className="product-list w-full flex flex-wrap gap-y-6">
    {products.map((product) => {
      const cartItem = cartItems.find(
        (item) => item.product.name === product.name
      );
      const quantity = cartItem ? cartItem.quantity : 0;

      return (
        <div
          key={product.name}
          className="product-card relative w-full sm:w-1/2 lg:w-1/3 p-3"
        >
          <img
            className="w-full rounded-lg"
            srcSet={`${product.image.mobile} 375w, ${product.image.desktop} 1440w`}
            sizes="(max-width: 375px) 375px, 1280px"
            src={product.image.desktop}
            alt={product.name}
          />

          <div className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 z-10">
            {quantity === 0 ? (
              <button
                onClick={() => addToCart(product)}
                className="flex flex-row border border-rose-500 pt-2 pb-2 pl-7 pr-7 bg-white rounded-3xl text-rose-900 font-medium"
              >
                <img src={cartIcon} alt="Cart Icon" className="mr-2" />
                Add to Cart
              </button>
            ) : (
              <div className="quantity-controls flex flex-row border border-red pt-2 pb-2 bg-red rounded-3xl text-rose-50">
                <button onClick={() => removeFromCart(product.name)}>
                  <img
                    src={minusIcon}
                    alt="Minus Icon"
                    className="mr-[57px] ml-4"
                  />
                </button>
                <span>{quantity}</span>
                <button onClick={() => addToCart(product)}>
                  <img
                    src={plusIcon}
                    alt="Plus Icon"
                    className="ml-[57px] mr-4"
                  />
                </button>
              </div>
            )}
          </div>

          <div className="product-info mt-4">
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        </div>
      );
    })}
  </div>
);

export default ProductList;
