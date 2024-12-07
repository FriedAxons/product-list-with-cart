import { useState } from "react";
import productData from "./data/data.json";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

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

  const calculateCartCount = () => {
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

  /*
  Why the below works:
    The app-container class can be used to apply global styles (such as padding, margins, background color, etc.) for the entire app layout.
    Inside app-container, the main-content is structured to handle the responsive layout using Tailwind's flex utility classes (flex-col for mobile and flex-row for desktop).
    The product list and cart are still separate components but are positioned properly according to your grid structure.
  
  Styling Notes:
    You can still apply global styles to the .app-container class to style the outermost container.
    Tailwind's utility classes will handle the inner layout for the main-content, with the product list taking up 3/4 of the width on larger screens (lg:w-3/4), and the cart occupying 1/4 (lg:w-1/4).
    On mobile, both the product list and cart will stack vertically (flex-col).
    The layout is fully responsive, so the components will behave appropriately on mobile and desktop, and the app-container remains the overarching wrapper for all content.
  */
  return (
    <div className="app-container">
      <Header cartCount={calculateCartCount()} />
      <div className="main-content flex flex-col lg:flex-row gap-6">
        <div className="product-list w-full lg:w-3/4">
          <ProductList
            products={products}
            cartItems={cart}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </div>
        <div className="cart w-full lg:w-1/4">
          <Cart
            cartItems={cart}
            total={calculateTotal()}
            removeFromCart={handleRemoveFromCart}
            confirmOrder={handleConfirmOrder}
          />
        </div>
      </div>
      {showModal && (
        <Modal
          cartItems={cart}
          total={calculateTotal()}
          onNewOrder={handleStartNewOrder}
        />
      )}
    </div>
  );
};

export default App;
