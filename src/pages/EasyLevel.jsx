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
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
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
