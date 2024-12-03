import { Product } from "../App";
import confirmedIcon from "../../public/images/icon-order-confirmed.svg";

interface ModalProps {
  cartItems: { product: Product; quantity: number }[];
  total: string;
  onNewOrder: () => void;
}

const Modal = ({ cartItems, total, onNewOrder }: ModalProps) => {
  return (
    <div className="modal">
      <img
        src={confirmedIcon}
        alt="Confirmed Icon"
        className="confirmed-icon"
      />
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      {cartItems.map(({ product, quantity }) => (
        <div key={product.name} className="cart-item-details">
          <div className="item">
            <p>{product.name}</p>
            <p>
              {quantity}x @ ${product.price.toFixed(2)}
            </p>
          </div>
          <p>${(product.price * quantity).toFixed(2)}</p>
        </div>
      ))}
      <div className="total">
        <p>Order Total ${total}</p>
      </div>
      <button onClick={onNewOrder}>Start New Order</button>
    </div>
  );
};

export default Modal;
