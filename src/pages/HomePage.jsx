// HomePage.tsx
import BaseMap from "@/components/map/BaseMap";
import { useUserLocation } from "@/hooks/useUserLocation";
import { useHandleRoute } from "@/hooks/useHandleRoute";
import LeftSidebarWrapper from "@/components/sidebar/LeftSidebarWrapper";

import { DEFAULT_MAP_TILE } from "@/constants/mapLayerOptions";
import { useEffect, useState } from "react";
import RightSidebarWrapper from "@/components/sidebar/RightSidebarWrapper";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [mapTileType, setMapTileType] = useState(DEFAULT_MAP_TILE);

  const {
    userLocation,
    isSearchingLocation,
    setUserLocation,
    startLocationSearch,
    stopLocationSearch,
  } = useUserLocation();
  const { selectedRoute, setSelectedRoute } = useHandleRoute();

  useEffect(() => {
    const savedTile = localStorage.getItem("default-tile-layer");
    if (savedTile) {
      setMapTileType(savedTile);
    }
  }, []);

  function handleLocateUser() {
    startLocationSearch();

    if (isSearchingLocation) {
      console.warn("[W] Alerady Searcing for location.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserLocation([coords.latitude, coords.longitude]);
      },
      (err) => {
        console.error("Geolocation error:", err);
        stopLocationSearch();
        console.warn(
          "Failed to get your location. Please enable location services."
        );
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }

  return (
    <>
      <span className="fixed top-4 -translate-x-1/2 left-1/2 z-[99999] text-[9px] bg-surface-3 text-on-surface/70 text-center px-2 py-1 rounded-lg ">
        This site is under development. Data may be incomplete.{" "}
        <Link className="text-on-surface" to={"/contact"}>
          Contact
        </Link>
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
        userLocation={userLocation}
        selectedRoute={selectedRoute}
        mapTileType={mapTileType}
        setMapTileType={setMapTileType}
      />
    </>
  );
}
