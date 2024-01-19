const Header = ({ setFetchStart }) => {
  const handleExit = () => {
    setFetchStart(false);
  }; // handleExit fuction is declared for returning back to game menu

  return (
    <header className="header">
      <h1 className="header-title-1" onClick={handleExit}>
        Poké
      </h1>
      <h1 className="header-title-2" onClick={handleExit}>
        Mem
        <img
          className="header-image"
          src="public\images\pokeball.png"
          alt="poke-ball"
        />
        ry
      </h1>
    </header>
  );
};

export default Header;
