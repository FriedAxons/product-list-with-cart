interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="header">
      <h1>Desserts</h1>
      <div>
        <h2>Your Cart ({cartCount})</h2>
      </div>
    </header>
  );
};

export default Header;
