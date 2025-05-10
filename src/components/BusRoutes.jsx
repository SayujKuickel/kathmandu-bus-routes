import React, { useEffect, useState } from "react";
import BusStops from "./BusStops";
import { busRoutes } from "@/data/busRoutes";
import { Polyline, useMap, useMapEvents } from "react-leaflet";
import Routing from "./Routing";

const BusRoutes = () => {
  // const map = useMap();
  // const [zoom, setZoom] = useState(0);

  // useEffect(() => {
  //   setZoom(map.getZoom());
  // }, [map]);

  // useMapEvents({
  //   zoomend: (e) => setZoom(e.target._zoom),
  //   move: (e) => setZoom(e.target._zoom),
  // });

  const routeNames = Object.keys(busRoutes);
  return (
    <>
      {routeNames.map((busRoute) => {
        const route = busRoutes[busRoute];
        const stops = route?.stopLocations;

        const points = stops.map((stop) => [stop.lat, stop.lng]);

        return (
          <>
            <Routing
              color={route.lineColor}
              // from={[fromLat, fromLng]}
              // to={[toLat, toLng]}
              coordinates={points}
            />

            {stops.map((stop) => (
              <>
                <BusStops
                  key={stop.lat}
                  lat={stop.lat}
                  lon={stop.lng}
                  popupText={`${stop.name}`}
                  lineColor={route?.lineColor}
                />
              </>
            ))}
          </>
        );
        // return
      })}
    </>
  );
};

export default BusRoutes;
