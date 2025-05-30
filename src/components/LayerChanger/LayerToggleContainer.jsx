import { useState, useRef, useEffect } from "react";
import Button from "@/components/ui/Button";
import LayerToggleOptions from "./LayerToggleOptions";

function LayerToggleContainer({ mapTileType, onMapTileType }) {
  const [isShownLayerSelector, setIsShownLayerSelector] = useState(false);
  const containerRef = useRef(null);

  const handleToggleLayerSelector = () => {
    setIsShownLayerSelector((prev) => !prev);
  };

  const handleChangeTilemapLayer = (item) => {
    localStorage.setItem("default-tile-layer", item);
    onMapTileType(item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsShownLayerSelector(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <Button
        onClick={handleToggleLayerSelector}
        iconStyle="text-xl fi fi-rr-layers"
        aria-label="Toggle map layers"
      />

      {isShownLayerSelector && (
        <div className="absolute bg-surface top-0 right-full -translate-x-2 text-text px-2 py-3 rounded-lg w-48 shadow-lg z-50">
          <h3 className="text-lg mb-4">Select Theme</h3>

          <LayerToggleOptions
            mapTileType={mapTileType}
            handleChangeTilemapLayer={handleChangeTilemapLayer}
          />
        </div>
      )}
    </div>
  );
}

export default LayerToggleContainer;
