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
import TileMapLayer from "@/components/map/TileMapLayer";

const BaseMap = ({
  MAP_CENTER,
  DEFAULT_ZOOM,
  MAX_ZOOM_OUT,
  userLocation,
  selectedRoute,
  mapTileType,
  setMap,
  map,
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
        whenCreated={setMap}
      >
        <TileMapLayer mapTileType={mapTileType} />

        {userLocation && (
          <UserPostion
            map={map}
            position={userLocation}
            DEFAULT_ZOOM={DEFAULT_ZOOM}
          />
        )}

        {selectedRoute ? (
          <BusRoute routeId={selectedRoute} fitToScreen={true} />
        ) : (
          <ShowAllRoutes fitToScreen={false} />
        )}

        <ZoomControl position="topleft" />
        <ZoomControl position="bottomleft" />
      </MapContainer>
    </div>
  );
};

export default BaseMap;
