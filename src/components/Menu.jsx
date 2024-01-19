import { useState } from "react";
import Button from "./Button";
import Core from "./Core";
const Menu = ({ fetchStart, setFetchStart }) => {
  const [cardLimit, setCardLimit] = useState(null); // New state for set card limit in game play

  const handleLevelDifficulty = (limit) => {
    setCardLimit(limit);
    setFetchStart(true); // Toggled fectchStart as true for start displaying fetched data from API
  };

  return (
    <>
      {!fetchStart ? (
        <div className="flex items-center justify-center mx-20 my-10 bg-black/20 rounded-xl ">
          <div className="bg-white/70  p-10 rounded-xl flex items-center justify-center flex-col">
            <h1 className="text-black text-4xl">Let's Start!</h1>
            <div className="flex items-center justify-center mt-5 rounded-xl">
              <div className="w-40 h-20 flex items-center justify-center">
                <Button
                  buttonText="Easy"
                  classForStyling="btn-easy"
                  typeOf="button"
                  onClick={() => handleLevelDifficulty(4)}
                />
              </div>
              <div className="w-40 h-20 flex items-center justify-center">
                <Button
                  buttonText="Medium"
                  classForStyling="btn-medium"
                  typeOf="button"
                  onClick={() => handleLevelDifficulty(8)}
                />
              </div>
              <div className="w-40 h-20 flex items-center justify-center">
                <Button
                  buttonText="Hard"
                  classForStyling="btn-hard"
                  typeOf="button"
                  onClick={() => handleLevelDifficulty(16)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-10">
          <Core cardLimit={cardLimit} setFetchStart={setFetchStart} />
        </div>
      )}
    </>
  );
};

export default Menu;
