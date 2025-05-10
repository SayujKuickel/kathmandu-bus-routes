import React, { useState } from "react";
import { useMapEvents } from "react-leaflet";

const GetStop = () => {
  const [routeName, setRouteName] = useState("");
  const [stops, setStops] = useState({});

  useMapEvents({
    click: (e) => {
      if (!routeName) {
        console.log("right click to start a route first");
        return;
      }

      const stopName = prompt("Enter Stop Name");

      const showOnMap = !stopName || !stopName.trim();

      if (showOnMap) {
        console.log("No name found, Added a point for route");
      }

      const coords = e.latlng;

      const keyName = stopName.trim().toLowerCase().replace(/\s+/g, "-");

      const stopValue = {
        name: stopName.trim(),
        lat: coords.lat,
        lng: coords.lng,
        showOnMap,
      };

      setStops((prevStops) => ({
        ...prevStops,
        [keyName]: stopValue,
      }));

      console.log(`Added Stop ${keyName} to ${routeName}`);
    },
    contextmenu: (e) => {
      if (!routeName) {
        const name = prompt("Enter Route Name");

        if (!name || !name.trim()) {
          console.error("[E] No Route Name Entered");
          return;
        }

        console.log(`Route Creation - ${name}`);

        setRouteName(name);
      } else {
        console.log(`Copying Route ${routeName} to clipboard`);

        console.log(stops);

        setStops(null);
        setRouteName(null);
      }
    },
  });

  return null;
};

export default GetStop;
