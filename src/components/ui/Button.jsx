const Button = ({ onClick, title, iconStyle, className }) => {
  return (
    <button
      aria-label={title}
      onClick={onClick}
      className={`flex items-center gap-2 px-2 py-2 outline-2 outline-transparent hover:outline-neutral-900 bg-neutral-900 hover:bg-neutral-900/50 transition-all text-white rounded-lg cursor-pointer ${className}`}
    >
      {iconStyle && <i className={`flex ${iconStyle}`} />}

      {title && title}
    </button>
  );
};

export default Button;
