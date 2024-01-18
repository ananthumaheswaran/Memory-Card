const Header = ({ setFetchStart }) => {
  const handleExit = () => {
    setFetchStart(false);
  };

  return (
    <header className="header">
      <h1 className="header-title-1" onClick={handleExit}>
        Poké
      </h1>
      <h1 className="header-title-2" onClick={handleExit}>
        Mem
        <img
          className="header-image"
          src=".\images\pokeball.png"
          alt="poke-ball"
        />
        ry
      </h1>
    </header>
  );
};

export default Header;
