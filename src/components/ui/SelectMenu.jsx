import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function StopName({ lineColor, value }) {
  return (
    <p className="flex gap-1 items-center">
      <span
        className="w-4 aspect-square block rounded-full"
        style={{
          background: lineColor,
        }}
      />

      <span className="truncate block w-full text-left">{value}</span>
    </p>
  );
}

const SelectMenu = ({ options, onSelectedRoute, selectedRoute }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const selectedRouteData = options.find((item) => item.key === selectedRoute);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsSelectOpen(false);
  }, [location]);

  return (
    <section ref={menuRef} className="relative">
      <button
        onClick={() => setIsSelectOpen((prev) => !prev)}
        className="p-2 bg-surface-3 hover:bg-surface-2 rounded-lg text-on-surface w-full flex items-center gap-2 justify-between"
        aria-haspopup="listbox"
        aria-expanded={isSelectOpen}
      >
        {selectedRoute ? (
          <div className="truncate">
            <StopName
              lineColor={selectedRouteData?.lineColor}
              value={selectedRouteData?.value}
            />
          </div>
        ) : (
          <>Select Route</>
        )}

        <i
          className={`fi fi-rr-angle-small-down flex transition-all ${
            isSelectOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isSelectOpen && (
        <ul className="md:absolute mt-2 md:m-0 z-[9999] md:left-1/2 md:-translate-x-1/2 top-[110%] bg-surface-1 w-full py-2 rounded-lg max-h-32 overflow-y-auto scrollbar-sa">
          {options.map((option) => (
            <li
              key={option?.key}
              onClick={() => onSelectedRoute(option.key)}
              className="border-y border-surface/25 cursor-pointer hover:bg-surface-2 p-2"
            >
              <Link to={`/?route=${option.key}`} className="block w-full">
                <StopName lineColor={option?.lineColor} value={option?.value} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SelectMenu;
