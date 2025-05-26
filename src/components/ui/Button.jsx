import React from "react";

const Button = ({ onClick, title, iconStyle, className }) => {
  return (
    <button
      aria-label={title}
      onClick={onClick}
      className={`flex items-center gap-2 px-2 py-2 bg-neutral-800 text-white rounded-lg ${className}`}
    >
      {iconStyle && <i className={`flex ${iconStyle}`} />}

      {title && title}
    </button>
  );
};

export default Button;
