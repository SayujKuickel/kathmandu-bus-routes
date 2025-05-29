import { busRoutes } from "@/data/busRoutes";
import { busStops } from "@/data/busStops";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const ViewBusStops = ({ selectedRouteId, viewAll = false }) => {
  const selectedRoute = busRoutes[selectedRouteId];

  if (!selectedRoute || selectedRouteId === "" || selectedRoute.name === "")
    return null;

  const viewArray = !viewAll
    ? selectedRoute?.stopIds?.slice(0, 5)
    : selectedRoute?.stopIds;

  return (
    <>
      <ul className={`overflow-y-scroll scrollbar-sa flex flex-col gap-4`}>
        {viewArray.map((item, index) => {
          const stop = busStops.find((el) => el.id === item);

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
