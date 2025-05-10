import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { Marker, useMap } from "react-leaflet";

const UserLocation = () => {
  const map = useMap();
  const [location, setLocation] = useState(null);
  const animateRef = useRef(true); // enable animation once

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

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const userCoords = [coords.latitude, coords.longitude];
        setLocation(userCoords);
        map.setView(userCoords, 17, { animate: animateRef.current });
      },
      (err) => console.error("Error getting location:", err)
    );
  }, [map]);

  return location ? <Marker position={location} icon={customMarker} /> : null;
};

export default UserLocation;
