// HomePage.tsx
import BaseMap from "@/components/map/BaseMap";
import Button from "@/components/ui/Button";
import { useUserLocation } from "@/hooks/useUserLocation";
import { useHandleRoute } from "@/hooks/useHandleRoute";
import LeftSidebarWrapper from "@/components/sidebar/LeftSidebarWrapper";
import {
  DEFAULT_ZOOM,
  MAP_CENTER,
  MAX_ZOOM_OUT,
} from "@/constants/mapSettings";

export default function HomePage() {
  const {
    userLocation,
    isSearching,
    setUserLocation,
    startLocationSearch,
    stopLocationSearch,
  } = useUserLocation();

  const { selectedRoute, setSelectedRoute } = useHandleRoute();

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
      <div className="fixed top-5 right-5 md:bottom-8 md:right-8 z-[9999]">
        <Button
          onClick={handleLocateUser}
          iconStyle={`text-xl ${
            isSearching ? "fi fi-rr-loading animate-spin" : "fi fi-rr-marker"
          }`}
          aria-label="Locate me"
        />
      </div>

      {/* <span className="fixed top-4 -translate-x-1/2 left-1/2 z-[99999] text-[9px] bg-neutral-800 text-text text-center px-2 py-1 rounded-lg shadow-amber-300/25 shadow-lg">
        This site is under development. Data may be incomplete/wrong.
      </span> */}

      <LeftSidebarWrapper
        selectedRoute={selectedRoute}
        setSelectedRoute={setSelectedRoute}
      />

      <BaseMap
        MAP_CENTER={MAP_CENTER}
        DEFAULT_ZOOM={DEFAULT_ZOOM}
        MAX_ZOOM_OUT={MAX_ZOOM_OUT}
        userLocation={userLocation}
        selectedRoute={selectedRoute}
      />
    </>
  );
}
