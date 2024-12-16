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
      <div
        className="bg-rose-50 rounded-xl pt-9 pr-9 lg:pb-3 pb-9 lg:pl-9 pl-6 shadow-lg lg:w-3/4 lg:max-w-xl lg:h-auto h-[calc(100vh-3rem)] lg:mt-0 mt-28 flex flex-col"
        style={{
          maxHeight: "calc(100vh - 3rem)", // Ensure modal height adjusts dynamically
        }}
      >
        {/* Header Section */}
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

        {/* Scrollable Content Section */}
        <div
          className="rounded-t-lg flex-1 overflow-y-auto px-4 lg:pt-5 lg:pl-5 lg:pr-6 pb-0"
          style={{
            maxHeight: "calc(100vh - 15rem)", // Scrollable content constrained
          }}
        >
          {cartItems.map(({ product, quantity }) => (
            <div
              key={product.name}
              className="flex items-center lg:mb-4 mb-9 lg:pb-3"
            >
              <img
                src={product.image.thumbnail}
                alt={product.name}
                className="object-cover w-13 lg:h-12 h-[54px] rounded-md mr-4"
              />
              <div className="flex-1 min-w-0">
                <p className="lg:text-base text-[14.5px] text-rose-900 font-semibold mb-1 truncate lg:truncate-none">
                  {product.name}
                </p>
                <p className="text-red">
                  {quantity}x{" "}
                  <span className="text-rose-400 ml-3">
                    @ ${product.price.toFixed(2)}
                  </span>
                </p>
              </div>
              <p className="text-rose-900 font-semibold lg:ml-0 ml-2">
                ${(product.price * quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Total and Button Section */}
        <div className="rounded-b-lg flex justify-between items-center px-4 lg:px-6 py-4">
          <p className="text-sm text-rose-500 font-medium">Order Total</p>
          <p className="text-2xl text-rose-900 font-extrabold">${total}</p>
        </div>

        <button
          onClick={onNewOrder}
          className="bg-red w-full lg:mt-7 mt-5 mb-6 text-rose-50 py-4 rounded-full hover:bg-red-hover"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default Modal;
