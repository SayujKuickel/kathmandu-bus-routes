import { DEFAULT_MAP_TILE, mapLayerOptions } from "@/constants/mapLayerOptions";
import { TileLayer } from "react-leaflet";

function TileMapLayer({ mapTileType }) {
  const mapOverlayDetails = mapLayerOptions[mapTileType]
    ? mapLayerOptions[mapTileType]
    : mapLayerOptions[DEFAULT_MAP_TILE];

  return (
    <TileLayer
      attribution={mapOverlayDetails.attribution}
      url={mapOverlayDetails.url}
    />
  );
}
export default TileMapLayer;
