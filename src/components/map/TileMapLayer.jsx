import { DEFAULT_MAP_TILE, mapTileOptions } from "@/constants/mapTileOptions";
import { TileLayer } from "react-leaflet";

function TileMapLayer({ mapTileType }) {
  const mapOverlayDetails = mapTileOptions[mapTileType]
    ? mapTileOptions[mapTileType]
    : mapTileOptions[DEFAULT_MAP_TILE];

  return (
    <TileLayer
      attribution={mapOverlayDetails.attribution}
      url={mapOverlayDetails.url}
    />
  );
}
export default TileMapLayer;
