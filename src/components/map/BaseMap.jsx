import { LatLngBounds } from "leaflet";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import UserPostion from "@/components/ui/UserPostion";
import {
  MAP_BOUNDS_BOTTOM_RIGHT,
  MAP_BOUNDS_TOP_LEFT,
} from "@/constants/mapSettings";
import BusRoute from "@/components/map/BusRoute";
import { busRoutes } from "@/data/busRoutes";

const BaseMap = ({
  MAP_CENTER,
  DEFAULT_ZOOM,
  MAX_ZOOM_OUT,
  userLocation,
  selectedRoute,
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
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        />
        {/* - Tilemap from openstreet map
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

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

        <ZoomControl position="bottomleft" />
      </MapContainer>
    </div>
  );
};

export default BaseMap;
