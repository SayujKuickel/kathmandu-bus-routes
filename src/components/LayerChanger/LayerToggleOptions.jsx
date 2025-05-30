import { mapLayerOptions } from "@/constants/mapLayerOptions";

function LayerToggleOptions(props) {
  return (
    <ul className="space-y-2">
      {Object.keys(mapLayerOptions).map((item) => {
        const { icon, name, mapTypeLabel } = mapLayerOptions[item];
        return (
          <li
            key={item}
            className={`bg-surface-1 flex items-center gap-2 p-2 rounded-lg outline-2 cursor-pointer transition-colors ${
              item === props.mapTileType
                ? "outline-green-800"
                : "outline-transparent"
            }`}
            onClick={() => props.handleChangeTilemapLayer(item)}
          >
            <img
              className="w-12 rounded-lg aspect-square object-cover"
              src={icon}
              alt={name}
            />

            <div>
              <p className="capitalize text-sm font-bold -mb-1">
                {mapTypeLabel}
              </p>
              <span className="capitalize text-xs">{name}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default LayerToggleOptions;
