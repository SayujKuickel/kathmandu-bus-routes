import { LatLngBounds } from "leaflet";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import UserPostion from "@/components/ui/UserPostion";
import {
  MAP_BOUNDS_BOTTOM_RIGHT,
  MAP_BOUNDS_TOP_LEFT,
} from "@/constants/mapSettings";
import BusRoute from "@/components/map/BusRoute";
import ShowAllRoutes from "@/components/map/ShowAllRoutes";
import { DEFAULT_MAP_TILE, mapTileOptions } from "@/constants/mapTileOptions";

const BaseMap = ({
  MAP_CENTER,
  DEFAULT_ZOOM,
  MAX_ZOOM_OUT,
  userLocation,
  selectedRoute,
  mapTileType,
  onMapTileType,
}) => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <MapContainer
        center={MAP_CENTER}
        zoom={DEFAULT_ZOOM}
        minZoom={MAX_ZOOM_OUT}
        zoomControl={false}
        maxBounds={
          new LatLngBounds(MAP_BOUNDS_TOP_LEFT, MAP_BOUNDS_BOTTOM_RIGHT)
        }
        maxBoundsViscosity={1.0}
        style={{ height: "100%", width: "100%" }}
      >
        <TileMapLayer mapTileType={mapTileType} onMapTileType={onMapTileType} />

        {userLocation && (
          <UserPostion
            key={Date.now()}
            position={userLocation}
            DEFAULT_ZOOM={DEFAULT_ZOOM}
          />
        )}
        {selectedRoute ? (
          <BusRoute routeId={selectedRoute} />
        ) : (
          <ShowAllRoutes />
        )}

        <ZoomControl position="topleft" />

        <ZoomControl position="bottomleft" />
      </MapContainer>
    </div>
  );
};

function TileMapLayer({ mapTileType }) {
  const mapOverlayDetails = mapTileOptions[mapTileType]
    ? mapTileOptions[mapTileType]
    : mapTileOptions[DEFAULT_MAP_TILE];

  return (
    <>
      <TileLayer
        attribution={mapOverlayDetails.attribution}
        url={mapOverlayDetails.url}
      />
    </>
  );
}

export default BaseMap;
