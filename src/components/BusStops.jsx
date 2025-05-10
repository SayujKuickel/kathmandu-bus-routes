import { Circle, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

const BusStops = ({ lat, lon, popupText, lineColor = "#ff0000" }) => {
  const map = useMap();
  const [zoom, setZoom] = useState(0);

  useEffect(() => {
    setZoom(map.getZoom());
  }, [map]);

  useMapEvents({
    zoomend: (e) => setZoom(e.target._zoom),
    move: (e) => setZoom(e.target._zoom),
  });

  const customMarker = L.divIcon({
    className: "custom-marker",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
    html: `<i style="background-color: ${lineColor}88; outline-color: ${lineColor}" class="w-6 aspect-square rounded-full text-white outline-2 grid place-items-center fi fi-rr-bus-alt"></i>`,
  });

  return zoom > 15 ? (
    <Marker position={[lat, lon]} icon={customMarker}>
      {popupText && <Popup>{popupText}</Popup>}
    </Marker>
  ) : (
    <Circle center={[lat, lon]} radius={20} pathOptions={{ color: lineColor }}>
      {popupText && <Popup>{popupText}</Popup>}
    </Circle>
  );
};

export default BusStops;
