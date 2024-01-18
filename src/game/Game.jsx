import Menu from "../components/Menu";
import Header from "../components/Header";
import { useState } from "react";
const Game = () => {
  const [fetchStart, setFetchStart] = useState(false);
  return (
    <div>
      <div>
        <Header setFetchStart={setFetchStart} />
        <Menu fetchStart={fetchStart} setFetchStart={setFetchStart} />
      </div>
    </div>
  );
};

export default Game;
