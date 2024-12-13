import { Product } from "../App";
import confirmedIcon from "/product-list-with-cart/images/icon-order-confirmed.svg";

interface ModalProps {
  cartItems: { product: Product; quantity: number }[];
  total: string;
  onNewOrder: () => void;
}

const Modal = ({ cartItems, total, onNewOrder }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-rose-50 rounded-lg pt-9 pr-14 pb-10 pl-9 shadow-lg w-3/4 max-w-xl">
        <img
          src={confirmedIcon}
          alt="Confirmed Icon"
          className="w-11 h-11 mb-5"
        />
        <h2 className="text-4xl text-rose-900 font-bold mb-2">
          Order Confirmed
        </h2>
        <p className="text-sm text-rose-500 mb-10">
          We hope you enjoy your food!
        </p>
        <div className="pl-5">
          {cartItems.map(({ product, quantity }) => (
            <div key={product.name} className="flex items-center mb-4">
              <img
                src={product.image.thumbnail}
                alt={product.name}
                className="w-13 h-12 rounded-md mr-4"
              />
              <div className="flex-1">
                <p className="text-xs text-rose-900 font-semibold mb-1">
                  {product.name}
                </p>
                <p className="text-red">
                  {quantity}x{" "}
                  <span className="text-rose-400 ml-3">
                    @ ${product.price.toFixed(2)}
                  </span>
                </p>
              </div>
              <p className="text-rose-900 font-semibold">
                ${(product.price * quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="total">
          <p>Order Total ${total}</p>
        </div>
        <button onClick={onNewOrder}>Start New Order</button>
      </div>
    </div>
  );
};

export default Modal;
