import { useState } from "react";
import Button from "./Button";
import Core from "./Core";
const Menu = () => {
  const [cardLimit, setCardLimit] = useState(null);
  const handleLevelDifficulty = (limit) => {
    setCardLimit(limit);
  };
  const handleFetching = () => {
    setFetchStart(true);
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-white bg-white/40 m-20 p-10 rounded-xl flex items-center justify-center flex-col">
          <div className="flex items-center justify-center mt-5 border-2 border-black/30 rounded-xl">
            <div className="w-40 h-20 flex items-center justify-center">
              <Button
                buttonText="Easy"
                classForStyling="btn"
                typeOf="button"
                onClick={() => handleLevelDifficulty(4)}
              />
            </div>
            <div className="w-40 h-20 flex items-center justify-center">
              <Button
                buttonText="Medium"
                classForStyling="btn"
                typeOf="button"
                onClick={() => handleLevelDifficulty(8)}
              />
            </div>
            <div className="w-40 h-20 flex items-center justify-center">
              <Button
                buttonText="Hard"
                classForStyling="btn"
                typeOf="button"
                onClick={() => handleLevelDifficulty(16)}
              />
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className="w-40 h-20 flex items-center justify-center">
              <Button
                buttonText="Start"
                classForStyling="btn"
                typeOf="button"
                onClick={handleFetching}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Core cardLimit={cardLimit} />
      </div>
    </>
  );
};

export default Menu;
