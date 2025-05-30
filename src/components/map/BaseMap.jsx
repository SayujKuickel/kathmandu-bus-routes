import { LatLngBounds } from "leaflet";
import { MapContainer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import UserPostion from "@/components/ui/UserPostion";
import {
  MAP_BOUNDS_BOTTOM_RIGHT,
  MAP_BOUNDS_TOP_LEFT,
} from "@/constants/mapSettings";
import BusRoute from "@/components/map/BusRoute";
import ShowAllRoutes from "@/components/map/ShowAllRoutes";
import TileMapLayer from "@/components/map/TileMapLayer";
import ShowSelectedStop from "@/components/stops/ShowSelectedStop";
import {
  DEFAULT_ZOOM,
  MAP_CENTER,
  MAX_ZOOM_OUT,
} from "@/constants/mapSettings";
import { useSearchParams } from "react-router-dom";

function checkIfNeedsTofit(searchParams) {
  const routeExists = searchParams.get("route");
  const stopExists = searchParams.get("stop");

  if (routeExists && stopExists) return false;

  return true;
}

const BaseMap = ({ userLocation, selectedRoute, mapTileType, setMap, map }) => {
  const [searchParams] = useSearchParams();

  const needsTofit = checkIfNeedsTofit(searchParams);

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

        {userLocation && <UserPostion map={map} position={userLocation} />}

        {selectedRoute ? (
          <BusRoute routeId={selectedRoute} fitToScreen={needsTofit} />
        ) : (
          <ShowAllRoutes fitToScreen={false} />
        )}

        <ShowSelectedStop />

        <ZoomControl position="topleft" />
        <ZoomControl position="bottomleft" />
      </MapContainer>
    </div>
  );
};

export default BaseMap;
