import { useState } from "react";
import Button from "../components/Button";
import Fetch from "../components/Fetch";

const EasyLevel = () => {
  const [fetchStart, setFetchStart] = useState(false);
  const handleButtonClick = () => {
    setFetchStart(true);
  };
  const handleRestButtonClick = () => {
    setFetchStart(false);
  };
  return (
    <div className="easy-level">
      <Button
        typeOf="button"
        buttonText="Easy"
        classForStyling="btn"
        onClick={handleButtonClick}
      />
      {fetchStart && (
        <div>
          <div>
            <Fetch numberOfPokemon={5} />
          </div>
          <div>
            <Button
              typeOf="button"
              buttonText="Exit"
              classForStyling="btn"
              onClick={handleRestButtonClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EasyLevel;
