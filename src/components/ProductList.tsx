import { Product } from "../App";
import cartIcon from "/product-list-with-cart/images/icon-add-to-cart.svg";

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
  <div className="product-list w-full flex flex-wrap gap-y-6 pr-0 lg:pr-10">
    {products.map((product) => {
      const cartItem = cartItems.find(
        (item) => item.product.name === product.name
      );
      const quantity = cartItem ? cartItem.quantity : 0;

      return (
        <div
          key={product.name}
          className="product-card relative w-full sm:w-1/2 lg:w-1/3 pt-0 pl-5 pr-5 pb-0 lg:p-3"
        >
          <img
            className={`w-full rounded-lg h-[220px] object-cover${
              cartItem ? "outline outline-2 outline-red" : ""
            }`}
            src={product.image.desktop}
            alt={product.name}
          />

          <div className="absolute bottom-[91px] lg:bottom-[101px] left-1/2 transform -translate-x-1/2 z-10">
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
                <button
                  className="w-[18px] h-[18px] rounded-full border border-rose-50 hover:bg-rose-50 mr-12 hover:text-red"
                  onClick={() => removeFromCart(product.name)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="2"
                    fill="currentColor"
                    viewBox="0 0 10 2"
                    className="ml-[3px] w-[10.5px] h-[10px]"
                  >
                    <path d="M0 .375h10v1.25H0V.375Z" />
                  </svg>
                </button>
                <span>{quantity}</span>
                <button
                  className="w-[18px] h-[18px] rounded-full border border-rose-50 hover:bg-rose-50 ml-12 hover:text-red"
                  onClick={() => addToCart(product)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    viewBox="0 0 10 10"
                    className="ml-[3px] w-[10.5px] h-[10px]"
                  >
                    <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                  </svg>
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
