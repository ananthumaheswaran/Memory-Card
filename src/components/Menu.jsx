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
        <div className="menu-outer-container">
          <div className="menu-inner-container">
            <h1 className="menu-heading">Let's Start!</h1>
            <div className="md:flex items-center md:justify-center mt-5 rounded-xl sm:items-start">
              <Button
                buttonText="Easy"
                classForStyling="btn"
                btnContainerStyle="btn-container"
                typeOf="button"
                onClick={() => handleLevelDifficulty(4)}
              />

              <Button
                buttonText="Medium"
                classForStyling="btn"
                btnContainerStyle="btn-container"
                typeOf="button"
                onClick={() => handleLevelDifficulty(8)}
              />

              <Button
                buttonText="Hard"
                classForStyling="btn"
                btnContainerStyle="btn-container"
                typeOf="button"
                onClick={() => handleLevelDifficulty(16)}
              />
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
