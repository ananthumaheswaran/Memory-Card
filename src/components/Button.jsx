const Button = ({ typeOf, onClick, buttonText, classForStyling }) => {
  return (
    <button type={typeOf} onClick={onClick} className={classForStyling}>
      {buttonText}
    </button>
  );
};

export default Button;
