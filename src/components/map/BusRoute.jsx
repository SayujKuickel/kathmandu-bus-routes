import L from "leaflet";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { busRoutes } from "@/data/busRoutes";
import BusStop from "@/components/map/BusStop";
import { busStops } from "@/data/busStops";

const BusRoute = ({ routeId }) => {
  const map = useMap();

  const [route, setRoute] = useState(null);
  const [waypoints, setWayPoints] = useState([]);

  useEffect(() => {
    const route = busRoutes[routeId];

    if (!route) {
      console.warn(`no route found with id: ${routeId}`);
      return;
    }

    const waypoints = route?.stopIds.map((stopId) =>
      busStops.find((stop) => stop.id === stopId)
    );

    setRoute(route);
    setWayPoints(waypoints);
  }, [routeId]);

  useEffect(() => {
    if (!route || !route.stopIds.length) return;

    const routingControl = L.routing.control({
      waypoints: waypoints.map((point) => L.latLng(point.pos)),
      routeWhileDragging: false,
      fitSelectedRoutes: false,
      addWaypoints: false,
      draggableWaypoints: false,
      show: false,
      createMarker: () => null,
      lineOptions: {
        styles: [{ color: route.lineColor, weight: 5, opacity: 0.8 }],
      },
      containerClassName: "hidden",
    });

    routingControl.addTo(map);

    return () => {
      routingControl.remove();
    };
  }, [map, waypoints, route]);

  if (!waypoints || !route) return null;

  return (
    <>
      {waypoints?.map((point, index) => {
        return (
          <BusStop
            key={index}
            lineColor={route?.lineColor}
            stopName={point?.name}
            position={point?.pos}
          />
        );
      })}
    </>
  );
};

export default BusRoute;
