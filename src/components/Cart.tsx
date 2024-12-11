import { Product } from "../App";
import removeIcon from "/product-list-with-cart/images/icon-remove-item.svg";
import carbonNeutralIcon from "/product-list-with-cart/images/icon-carbon-neutral.svg";
import emptyCartIcon from "/product-list-with-cart/images/illustration-empty-cart.svg";

interface CartProps {
  cartItems: { product: Product; quantity: number }[];
  total: string;
  removeFromCart: (productName: string) => void;
  confirmOrder: () => void;
}

const Cart = ({
  cartItems,
  total,
  removeFromCart,
  confirmOrder,
}: CartProps) => (
  <div className="cart ml-14">
    {cartItems.length === 0 ? (
      <div className="empty-cart flex flex-col justify-center items-center text-center pr-40">
        <img
          src={emptyCartIcon}
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
            className="cart-item flex flex-row w-full justify-between pr-32"
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
              className="remove-button flex justify-center items-center w-[16px] h-[15px] rounded-full border border-rose-400 mt-auto mb-auto"
            >
              <img src={removeIcon} alt="Remove Icon" width={10} height={10} />
            </button>
          </div>
        ))}
        <div className="total mt-10 mb-10">
          <p className="flex flex-row justify-between items-center pr-32 text-sm">
            Order Total <span className="font-bold text-2xl">${total}</span>
          </p>
        </div>
        <p className="mb-8 ml-9 flex flex-row items-center font-medium text-sm text-rose-500">
          <img
            src={carbonNeutralIcon}
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
          className="w-[313.31px] bg-red text-rose-50 p-3 rounded-full hover:bg-red-hover"
        >
          Confirm Order
        </button>
      </>
    )}
  </div>
);

export default Cart;
