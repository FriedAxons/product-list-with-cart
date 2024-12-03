import { Product } from "../App";
import removeIcon from "images/icon-remove-item.svg";

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
  <div className="cart">
    {cartItems.map(({ product, quantity }) => (
      <div key={product.name} className="cart-item">
        <div className="cart-item-details">
          <p>{product.name}</p>
          <p>
            {quantity}x @ ${product.price.toFixed(2)} $
            {(product.price * quantity).toFixed(2)}
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
    <button onClick={confirmOrder} disabled={cartItems.length === 0}>
      Confirm Order
    </button>
  </div>
);

export default Cart;
