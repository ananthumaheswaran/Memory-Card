import Button from "./Button";
const GameMenu = () => {
  return (
    <div className="flex items-center justify-center">
      <div class="bg-black bg-black/10 m-20 p-44 rounded-xl flex items-center justify-center flex-col w-[500px] h-[200px]">
        <div className="flex items-center justify-center mt-5">
          <div class="w-40 h-20 flex items-center justify-center">
            <Button buttonText="Easy" classForStyling="btn" typeOf="button" />
          </div>
          <div class="w-40 h-20 flex items-center justify-center">
            <Button buttonText="Medium" classForStyling="btn" typeOf="button" />
          </div>
          <div class="w-40 h-20 flex items-center justify-center">
            <Button buttonText="Hard" classForStyling="btn" typeOf="button" />
          </div>
        </div>
        <div class="flex items-center justify-center mb-5">
          <div class="w-40 h-20 flex items-center justify-center">
            <Button buttonText="Start" classForStyling="btn" typeOf="button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMenu;
