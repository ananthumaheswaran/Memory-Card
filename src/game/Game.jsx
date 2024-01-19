import Menu from "../components/Menu";
import Header from "../components/Header";
import { useState } from "react";
const Game = () => {
  const [fetchStart, setFetchStart] = useState(false);
  return (
    <div>
      <div className="flex items-center flex-col justify-center">
        {/* Imported Header component and Menu Component  */}
        <Header setFetchStart={setFetchStart} />
        <Menu fetchStart={fetchStart} setFetchStart={setFetchStart} />
      </div>
    </div>
  );
};

export default Game;
