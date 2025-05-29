import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { busStops } from "@/data/busStops";
import { useMap } from "react-leaflet";
import { DEFAULT_FLY_TO_POSITION_ZOOM } from "@/constants/mapSettings";

const ShowSelectedStop = () => {
  const [searchParams] = useSearchParams();
  const stop = searchParams.get("stop");

  const map = useMap();

  useEffect(() => {
    if (!stop) {
      return;
    }

    const stopData = busStops.find((item) => item.id === stop);

    if (!stopData) {
      console.info("[W] Invalid stop id found in url");
      return;
    }

    map.flyTo(stopData.pos, DEFAULT_FLY_TO_POSITION_ZOOM);
  }, [stop, map]);

  return null;
};

export default ShowSelectedStop;
