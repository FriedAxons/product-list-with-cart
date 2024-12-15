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
      <div className="bg-rose-50 rounded-xl pt-9 lg:pr-9 pr-12 pb-9 lg:pl-9 pl-6 shadow-lg lg:w-3/4 lg:max-w-xl lg:h-auto h-[calc(100vh-3rem)] lg:mt-0 mt-28">
        <img
          src={confirmedIcon}
          alt="Confirmed Icon"
          className="lg:w-11 lg:h-11 w-14 h-14 mb-6"
        />
        <h2 className="lg:text-4xl text-[40px] text-rose-900 lg:font-bold font-extrabold mb-2">
          Order Confirmed
        </h2>
        <p className="lg:text-sm text-rose-500 lg:mb-8 mb-12">
          We hope you enjoy your food!
        </p>
        <div className="bg-rose-100 rounded-t-lg pl-4 pb-7 lg:pt-5 lg:pl-5 lg:pr-6">
          {cartItems.map(({ product, quantity }) => (
            <div key={product.name} className="flex items-center lg:mb-4 mb-9">
              <img
                src={product.image.thumbnail}
                alt={product.name}
                className="object-cover w-13 lg:h-12 h-[55px] rounded-md mr-4"
              />
              <div className="flex-1">
                <p className="lg:text-xs text-[15px] text-rose-900 font-semibold mb-1 truncate">
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
        <div className="bg-rose-100 rounded-b-lg flex justify-between items-center">
          <p className="text-sm text-rose-500 lg:pl-5 pl-[16px] font-medium">
            Order Total
          </p>
          <p className="text-2xl text-rose-900 font-extrabold lg:pr-6">
            ${total}
          </p>
        </div>
        <button
          onClick={onNewOrder}
          className="lg:right-2 right-5 bg-red lg:w-full lg:w-[105%] w-[90%] text-rose-50 lg:p-3 pt-4 pb-4 mt-7 rounded-full"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default Modal;
