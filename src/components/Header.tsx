const Header: React.FC = () => {
  return (
    <header className="bg-blue-500">
      <h1 className="text-xl">Desserts</h1>
      {/* Cart section */}
      <div>
        <h2>Your Cart {/* dynamic item count here */}</h2>
      </div>
    </header>
  );
};

export default Header;
