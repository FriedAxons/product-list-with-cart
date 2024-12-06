interface HeaderProps {
  cartCount: number;
}

const Header = ({ cartCount }: HeaderProps) => {
  return (
    <header className="header flex flex-row items-center justify-between">
      <h1 className="text-3xl font-bold text-rose-900">Desserts</h1>
      <div>
        <h2 className="text-[18px] font-bold text-red">
          Your Cart ({cartCount})
        </h2>
      </div>
    </header>
  );
};

export default Header;
