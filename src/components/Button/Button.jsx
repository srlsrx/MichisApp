import PropTypes from "prop-types";

function Button({
  type = "button",
  text,
  className,
  onClick,
  bgColor = "bg-teal-500",
  bgColorHover = "hover:bg-green-400",
  txtColor = "text-white",
}) {
  return (
    <button
      type={type}
      className={`${bgColor} ${bgColorHover} ${txtColor} ${className} justify-self-end cursor-pointer text-white px-4 py-2 m-4 rounded-full shadow-md transition`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
