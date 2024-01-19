import Menu from "../components/Menu";
import Header from "../components/Header";
import { useState } from "react";
const Game = () => {
  const [fetchStart, setFetchStart] = useState(false); // State for display fetched data
  return (
    <div>
      <div className="flex items-center flex-col justify-center">
        {/* Imported Header component and Menu Component to display  */}
        <Header setFetchStart={setFetchStart} />
        <Menu fetchStart={fetchStart} setFetchStart={setFetchStart} />
      </div>
    </div>
  );
};

export default Game;
