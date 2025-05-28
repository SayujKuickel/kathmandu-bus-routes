import { useState } from "react";
import Button from "@/components/ui/Button";
import { mapTileOptions } from "@/constants/mapTileOptions";

function LayerToggleContainer({ mapTileType, onMapTileType }) {
  const [isShownLayerSelector, setIsShownLayerSelector] = useState(false);

  function handleToggleLayerSelector() {
    setIsShownLayerSelector((prev) => !prev);
  }

  function handdleChangeTilemapLayer(item) {
    localStorage.setItem("default-tile-layer", item);

    onMapTileType(item);
  }

  return (
    <div className="relative">
      <Button
        onClick={handleToggleLayerSelector}
        iconStyle={`text-xl fi fi-rr-layers`}
        aria-label="Toggle map layers"
      />

      {isShownLayerSelector && (
        <div className="absolute bg-surface top-0 right-full -translate-x-2 text-text px-2 py-3 rounded-lg w-48">
          <h3 className="text-lg mb-4">Select Theme</h3>

          <ul className="space-y-2">
            {Object.keys(mapTileOptions).map((item) => {
              const itemData = mapTileOptions[item];

              return (
                <li
                  key={item}
                  className={`bg-surface-1 flex items-center gap-2 p-2 rounded-lg outline-2 cursor-pointer ${
                    item === mapTileType
                      ? "outline-green-800"
                      : "outline-transparent"
                  } `}
                  onClick={() => handdleChangeTilemapLayer(item)}
                >
                  <img
                    className={`w-12 rounded-lg aspect-square object-cover`}
                    src={itemData?.icon}
                    alt={item}
                  />
                  <div>
                    <p className="capitalize text-sm font-bold -mb-1">
                      {itemData?.mapTypeLabel}
                    </p>
                    <span className="capitalize text-xs">{itemData?.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LayerToggleContainer;
