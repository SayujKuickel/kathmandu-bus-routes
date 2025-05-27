const Button = ({ onClick, title, iconStyle, className }) => {
  return (
    <button
      aria-label={title}
      onClick={onClick}
      className={`flex items-center gap-2 px-2 py-2 bg-slate-900 hover:bg-zinc-900 shadow-lg text-sa-yellow hover:bg-gray transition-all text-white rounded-lg cursor-pointer ${className}`}
    >
      {iconStyle && <i className={`flex ${iconStyle}`} />}

      {title && title}
    </button>
  );
};

export default Button;
