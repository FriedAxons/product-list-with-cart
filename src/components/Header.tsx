interface HeaderProps {
  cartCount: number;
}

const Header = ({ cartCount }: HeaderProps) => {
  return (
    <header className="header flex flex-row items-center justify-between mb-6">
      <h1 className="text-4xl font-bold text-rose-900">Desserts</h1>
      <div>
        <h2 className="text-[18px] font-bold text-red">
          Your Cart ({cartCount})
        </h2>
      </div>
    </header>
  );
};

export default Header;
