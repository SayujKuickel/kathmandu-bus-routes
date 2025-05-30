import L from "leaflet";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { busRoutes } from "@/data/busRoutes";
import BusStop from "@/components/map/BusStop";
import { busStops } from "@/data/busStops";
import { useNavigate } from "react-router-dom";

const BusRoute = ({ routeId, fitToScreen }) => {
  const map = useMap();
  const navigate = useNavigate();
  const [route, setRoute] = useState(null);
  const [waypoints, setWayPoints] = useState([]);

  useEffect(() => {
    const route = busRoutes[routeId];

    if (!route) {
      console.warn(`no route found with id: ${routeId}`);
      navigate("/");
      return;
    }

    const waypoints = route?.stopIds.map((stopId) =>
      busStops.find((stop) => stop.id === stopId)
    );

    setRoute(route);
    setWayPoints(waypoints);
  }, [routeId, navigate]);

  useEffect(() => {
    if (
      !map ||
      !route ||
      !route.stopIds.length ||
      waypoints.length !== route.stopIds.length ||
      waypoints.some((w) => !w || !w.pos)
    ) {
      return;
    }
    const routingControl = L.routing.control({
      waypoints: waypoints.map((point) => L.latLng(point.pos)),
      routeWhileDragging: false,
      fitSelectedRoutes: fitToScreen,
      addWaypoints: false,
      draggableWaypoints: false,
      show: false,
      createMarker: () => null,
      lineOptions: {
        styles: [{ color: route.lineColor, weight: 5, opacity: 0.75 }],
      },
      containerClassName: "hidden",
    });

    routingControl.addTo(map);

    return () => {
      routingControl.remove();
    };
  }, [map, waypoints, fitToScreen, route]);

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
