const Button = ({
  typeOf,
  onClick,
  buttonText,
  classForStyling,
  btnContainerStyle,
}) => {
  return (
    <div className={btnContainerStyle}>
      <button type={typeOf} onClick={onClick} className={classForStyling}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
