const Button = ({ onClick, title, iconStyle, className }) => {
  return (
    <button
      aria-label={title}
      onClick={onClick}
      className={`flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer bg-surface-2 hover:bg-surface-3 transition-all hover:text-on-primary text-on-surface transition-all  ${className}`}
    >
      {iconStyle && <i className={`flex ${iconStyle}`} />}

      {title && <span className="leading-5">{title}</span>}
    </button>
  );
};

export default Button;
