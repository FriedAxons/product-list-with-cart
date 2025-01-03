import { Product } from "../App";

interface CartProps {
  cartItems: { product: Product; quantity: number }[];
  cartCount: number;
  total: string;
  removeFromCart: (productName: string) => void;
  confirmOrder: () => void;
}

const Cart = ({
  cartItems,
  total,
  cartCount,
  removeFromCart,
  confirmOrder,
}: CartProps) => (
  <div className="relative pt-28 pb-14 lg:pt-2 lg:ml-2">
    <h2 className="absolute left-[3.5rem] lg:left-[0rem] top-[3.5rem] lg:left-[-0.5rem] lg:top-[-3.1rem] text-[23px] lg:text-xl font-bold text-red lg:w-full">
      Your Cart ({cartCount})
    </h2>
    {cartItems.length === 0 ? (
      <div className="empty-cart flex flex-col justify-center items-center text-center lg:pr-40">
        <img
          src="/product-list-with-cart/images/illustration-empty-cart.svg"
          alt="Empty Cart Icon"
          className="empty-cart-icon mb-4"
        />
        <p className="text-rose-500 font-medium">
          Your added items will appear here
        </p>
      </div>
    ) : (
      <>
        {cartItems.map(({ product, quantity }) => (
          <div
            key={product.name}
            className="cart-item flex flex-row w-full justify-between pl-14 pr-11 pb-6 lg:pl-0 lg:pr-32 lg:pb-6"
          >
            <div className="cart-item-details">
              <p className="text-[14px] text-rose-900 font-semibold mb-1">
                {product.name}
              </p>
              <p>
                <span className="text-red font-semibold mr-3">{quantity}x</span>
                <span className="text-rose-400 text-[14px] mr-2">
                  @ ${product.price.toFixed(2)}
                </span>
                <span className="text-rose-500 text-[14px] font-semibold">
                  ${(product.price * quantity).toFixed(2)}
                </span>
              </p>
            </div>
            <button
              onClick={() => removeFromCart(product.name)}
              className="remove-button flex justify-center items-center w-[16px] h-[15px] rounded-full border border-rose-400 hover:border-rose-900 mt-auto mb-auto text-svgColor hover:text-rose-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                viewBox="0 0 10 10"
              >
                <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
              </svg>
            </button>
          </div>
        ))}
        <div className="total pl-14 mt-2 mb-9 lg:pl-0 lg:mt-10 lg:mb-10">
          <p className="flex flex-row justify-between items-center pr-11 lg:pr-32 text-sm">
            Order Total <span className="font-bold text-2xl">${total}</span>
          </p>
        </div>
        <p className="mb-8 ml-16 lg:ml-20 flex flex-row items-center font-medium text-sm text-rose-500">
          <img
            src="/product-list-with-cart/images/icon-carbon-neutral.svg"
            alt="Carbon neutral icon"
            className="mr-2"
          />
          This is a
          <span className="ml-[2px] mr-[2px] font-semibold text-rose-900">
            carbon-neutral
          </span>
          delivery
        </p>
        <button
          onClick={confirmOrder}
          disabled={cartItems.length === 0}
          className="w-[281px] ml-11 lg:w-[313.31px] bg-red text-rose-50 p-3 rounded-full hover:bg-red-hover"
        >
          Confirm Order
        </button>
      </>
    )}
  </div>
);

export default Cart;
