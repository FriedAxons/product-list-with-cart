interface HeaderProps {
  cartCount: number;
}

const Header = ({ cartCount }: HeaderProps) => {
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
