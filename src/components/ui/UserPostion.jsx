import L from "leaflet";
import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";

function UserPostion({ position, DEFAULT_ZOOM }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 18);
  }, [DEFAULT_ZOOM, position, map]);

  const customMarker = L.divIcon({
    className: "custom-marker",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
    html: `
      <i
        class="w-8 aspect-square rounded-full bg-blue-400 outline-blue-800 text-white outline-2 grid place-items-center fi fi-rr-marker"
        style="background-color: #60a5fa; outline-color: #1e40af;"
      ></i>
    `,
  });
  return <Marker position={position} icon={customMarker} />;
}

export default UserPostion;
