import { busRoutes } from "@/data/busRoutes";
import { busStops } from "@/data/busStops";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { useState, useEffect } from "react";

const ViewBusStops = ({ selectedRouteId, viewAll = false }) => {
  const [error, setError] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    try {
      if (!selectedRouteId) {
        setSelectedRoute(null);
        setError("No route selected.");
        return;
      }

      const route = busRoutes[selectedRouteId];

      console.log(route);

      if (!route || !route.name) {
        setSelectedRoute(null);
        setError("Selected route not found or invalid.");
        return;
      }

      setSelectedRoute(route);
      setError(null);
    } catch (err) {
      setSelectedRoute(null);
      setError("An unexpected error occurred.");
      console.error(err);
    }
  }, [selectedRouteId]);

  if (error) {
    return (
      <div className="text-red-500 p-2 border border-red-400 rounded bg-red-50">
        {error}
      </div>
    );
  }

  if (!selectedRoute) {
    return null;
  }

  const viewArray = !viewAll
    ? selectedRoute?.stopIds?.slice(0, 5)
    : selectedRoute?.stopIds;

  if (!viewArray || viewArray.length === 0) {
    return (
      <div className="text-yellow-700 p-2 border border-yellow-400 rounded bg-yellow-50">
        No bus stops available for this route.
      </div>
    );
  }

  return (
    <>
      <ul className={`overflow-y-scroll scrollbar-sa flex flex-col gap-4`}>
        {viewArray.map((item, index) => {
          const stop = busStops.find((el) => el.id === item);

          if (!stop) {
            return (
              <li key={item} className="text-red-500">
                Bus stop data missing for ID: {item}
              </li>
            );
          }

          return (
            <li
              key={item}
              className="flex items-center gap-1.5 relative no-scrollbar"
            >
              <i
                className={`${
                  index > 0 && index < selectedRoute?.stopIds?.length - 1
                    ? "fi fi-rr-circle"
                    : "fi fi-rr-dot-circle"
                } w-3 flex text-xs relative`}
              >
                {index > 0 && (
                  <span className="absolute left-1/2 -translate-x-1/2 translate-y-[-220%]">
                    <i className="fi fi-rr-menu-dots-vertical flex text-xs"></i>
                  </span>
                )}
              </i>

              <p className="flex-1 flex items-center gap-1  justify-between ml-2 px-2 py-2.5 bg-surface-1/25 border border-neutral-100/20 rounded-lg text-neutral-100/80 whitespace-nowrap overflow-scroll no-scrollbar">
                {stop.name}

                <Link to={`/?stop=${stop?.id}`}>
                  <Button
                    title={<span className="hidden md:block">View</span>}
                    className={"text-xs md:text-sm"}
                    iconStyle={"fi fi-rr-land-layer-location"}
                  />
                </Link>
              </p>
            </li>
          );
        })}
      </ul>

      {selectedRoute?.stopIds?.length > 5 && !viewAll && (
        <span className="block ml-1 mt-3 text-sm text-text/75">
          <Link to={`/bus/${selectedRouteId}`}>
            + {selectedRoute?.stopIds?.length - 5} More Stops{" "}
          </Link>
        </span>
      )}

      {viewAll && (
        <span className="block ml-1 mt-3 text-sm text-text/75">
          Total {selectedRoute?.stopIds?.length} Bus Stops.
        </span>
      )}
    </>
  );
};

export default ViewBusStops;
