const Header = ({ setFetchStart }) => {
  const handleQuit = () => {
    // Function to return back to menu
    setFetchStart(false);
  };
  return (
    <header className="header">
      <h1 className="header-title-1" onClick={handleQuit}>
        Poké
      </h1>
      <h1 className="header-title-2" onClick={handleQuit}>
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
