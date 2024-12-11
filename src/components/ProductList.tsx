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

          <div className="absolute bottom-[101px] left-1/2 transform -translate-x-1/2 z-10">
            {quantity === 0 ? (
              <button
                onClick={() => addToCart(product)}
                className="flex flex-row border border-rose-500 pt-2 pb-2 pl-6 pr-6 bg-white rounded-3xl text-rose-900 font-medium hover:text-red hover:border-red"
              >
                <img src={cartIcon} alt="Cart Icon" className="mr-2" />
                Add to Cart
              </button>
            ) : (
              <div className="quantity-controls flex flex-row items-center border border-red pt-2 pb-2 pl-3 pr-3 bg-red rounded-3xl text-rose-50">
                <button className="w-[18px] h-[18px] rounded-full border border-rose-50 hover:bg-rose-50 mr-12">
                  <img
                    src={minusIcon}
                    alt="Minus Icon"
                    className="ml-[3px] w-[10.5px] h-[10px]"
                    onClick={() => removeFromCart(product.name)}
                  />
                </button>
                <span>{quantity}</span>
                <button className="w-[18px] h-[18px] rounded-full border border-rose-50 hover:bg-rose-50 ml-12">
                  <img
                    src={plusIcon}
                    alt="Plus Icon"
                    className="ml-[3px] w-[10.5px] h-[10px]"
                    onClick={() => addToCart(product)}
                  />
                </button>
              </div>
            )}
          </div>

          <div className="product-info mt-10">
            <p className="text-[15px] text-rose-400">{product.category}</p>
            <h3 className="text-rose-900 font-semibold">{product.name}</h3>
            <p className="text-red font-semibold">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      );
    })}
  </div>
);

export default ProductList;
