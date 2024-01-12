import { useState } from "react";
import Button from "../components/Button";
import Fetch from "../components/Fetch";

const EasyLevel = () => {
  const [fetchStart, setFetchStart] = useState(false);
  const handleButtonClick = () => {
    setFetchStart(true);
  };
  const handleResetButtonClick = () => {
    setFetchStart(false);
  };
  return (
    <div className="easy-level">
      {!fetchStart && (
        <Button
          typeOf="button"
          buttonText="Start"
          classForStyling="btn"
          onClick={handleButtonClick}
        />
      )}

      {fetchStart && (
        <div className="fetched-section">
          <div className="fetched-cards">
            <Fetch numberOfPokemon={5} />
          </div>
          <div className="exit-btn-container">
            <Button
              typeOf="button"
              buttonText={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              }
              classForStyling="btn-exit"
              onClick={handleResetButtonClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EasyLevel;
