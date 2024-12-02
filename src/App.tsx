import { useState } from "react";
import productData from "./data/data.json";
import Header from "./components/Header";
// import ProductList from "./components/ProductList";
// import Cart from "./components/Cart";
// import Modal from "./components/Modal";

interface Product {
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

const App: React.FC = () => {
  const [products] = useState<Product[]>(productData);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>(
    []
  );
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
