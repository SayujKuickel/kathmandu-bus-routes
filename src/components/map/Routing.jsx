import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

const Routing = ({ coordinates = [], color = "#007aff" }) => {
  const map = useMap();

  useEffect(() => {
    if (!coordinates.length) return;

    const routingControl = L.Routing.control({
      waypoints: coordinates.map(([lat, lng]) => L.latLng(lat, lng)),
      routeWhileDragging: false,
      fitSelectedRoutes: false,
      addWaypoints: false,
      draggableWaypoints: false,
      show: false,
      createMarker: () => null,
      lineOptions: {
        styles: [{ color, weight: 5, opacity: 0.8 }],
      },
    });

    routingControl.onAdd(map);

    return () => {
      routingControl.onRemove(map);
    };
  }, [coordinates, color, map]);

  return null;
};

export default Routing;
