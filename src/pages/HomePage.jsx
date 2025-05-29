// HomePage.tsx
import BaseMap from "@/components/map/BaseMap";
import { useUserLocation } from "@/hooks/useUserLocation";
import { useHandleRoute } from "@/hooks/useHandleRoute";
import LeftSidebarWrapper from "@/components/sidebar/LeftSidebarWrapper";
import {
  DEFAULT_ZOOM,
  MAP_CENTER,
  MAX_ZOOM_OUT,
} from "@/constants/mapSettings";
import { DEFAULT_MAP_TILE } from "@/constants/mapTileOptions";
import { useState } from "react";
import RightSidebarWrapper from "@/components/sidebar/RightSidebarWrapper";

export default function HomePage() {
  const {
    userLocation,
    isSearchingLocation,
    setUserLocation,
    startLocationSearch,
    stopLocationSearch,
  } = useUserLocation();
  const { selectedRoute, setSelectedRoute } = useHandleRoute();

  const [mapTileType, setMapTileType] = useState(
    localStorage.getItem("default-tile-layer") || DEFAULT_MAP_TILE
  );

  function handleLocateUser() {
    startLocationSearch();

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserLocation([coords.latitude, coords.longitude]);
      },
      (err) => {
        console.error("Geolocation error:", err);
        stopLocationSearch();
        alert("Failed to get your location. Please enable location services.");
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }

  return (
    <>
      <span className="hidden md:block fixed top-4 -translate-x-1/2 left-1/2 z-[99999] text-[9px] bg-surface-3 text-on-surface text-center px-2 py-1 rounded-lg">
        This site is under development. Data may be incomplete/wrong.
      </span>

      <LeftSidebarWrapper
        selectedRoute={selectedRoute}
        onSelectedRoute={setSelectedRoute}
      />

      <RightSidebarWrapper
        onLocateUser={handleLocateUser}
        isSearchingLocation={isSearchingLocation}
        mapTileType={mapTileType}
        onMapTileType={setMapTileType}
      />

      <BaseMap
        MAP_CENTER={MAP_CENTER}
        DEFAULT_ZOOM={DEFAULT_ZOOM}
        MAX_ZOOM_OUT={MAX_ZOOM_OUT}
        userLocation={userLocation}
        selectedRoute={selectedRoute}
        mapTileType={mapTileType}
        setMapTileType={setMapTileType}
      />
    </>
  );
}
