import { useState } from "react";
import productData from "./data/data.json";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
// import Cart from "./components/Cart";
// import Modal from "./components/Modal";

export interface Product {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

const App = () => {
  const [products] = useState<Product[]>(productData);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>(
    []
  );
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.name === product.name
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productName: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateCartCount = (): number => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotal = () =>
    cart
      .reduce((total, item) => total + item.product.price * item.quantity, 0)
      .toFixed(2);

  const handleConfirmOrder = () => setShowModal(true);

  const handleStartNewOrder = () => {
    setCart([]);
    setShowModal(false);
  };

  return (
    <div className="app-container">
      <Header cartCount={calculateCartCount()} />
      <div className="main-content">
        <ProductList products={products} addToCart={handleAddToCart} />
        {/* <Cart
          cartItems={cart}
          total={calculateTotal()}
          removeFromCart={handleRemoveFromCart}
          confirmOrder={handleConfirmOrder}
        /> */}
      </div>
      {/* {showModal && <Modal onNewOrder={handleStartNewOrder} />} */}
    </div>
  );
};

export default App;