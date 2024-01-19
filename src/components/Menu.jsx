import { useState } from "react";
import Button from "./Button";
import Core from "./Core";
const Menu = ({ fetchStart, setFetchStart }) => {
  const [cardLimit, setCardLimit] = useState(null); // New state for set card limit in game play

  const handleLevelDifficulty = (limit) => {
    setCardLimit(limit);
  };
  const handleFetch = () => {
    // Arrow function created to toggle fetch data from api
    setFetchStart(true);
  };
  return (
    <>
      {!fetchStart ? (
        <div className="flex items-center justify-center mx-20 my-10 bg-black/30 rounded-xl ">
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
            <div className="flex items-center justify-center ">
              <div className="w-40 h-20 flex items-center justify-center">
                <Button
                  buttonText="Start"
                  classForStyling="btn"
                  typeOf="button"
                  onClick={handleFetch}
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
