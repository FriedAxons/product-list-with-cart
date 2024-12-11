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
      <div className="empty-cart flex flex-col justify-center items-center text-center">
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
          <div key={product.name} className="cart-item">
            <div className="cart-item-details">
              <p className="text-[14px] text-rose-900 font-semibold mb-2">
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
              className="remove-button"
            >
              <img src={removeIcon} alt="Remove Icon" width={24} height={24} />
            </button>
          </div>
        ))}
        <div className="total">
          <p>Order Total ${total}</p>
        </div>
        <p>
          <img src={carbonNeutralIcon} alt="Carbon neutral icon" />
          This is a <span>carbon-neutral</span> delivery
        </p>
        <button onClick={confirmOrder} disabled={cartItems.length === 0}>
          Confirm Order
        </button>
      </>
    )}
  </div>
);

export default Cart;
