import { busRoutes } from "@/data/busRoutes";
import { busStops } from "@/data/busStops";

const ViewBusStops = ({ selectedRouteId, viewAll = false }) => {
  const selectedRoute = busRoutes[selectedRouteId];

  if (!selectedRoute || selectedRouteId === "" || selectedRoute.name === "")
    return null;

  const viewArray = !viewAll
    ? selectedRoute?.stopIds?.slice(0, 5)
    : selectedRoute?.stopIds;

  return (
    <ul className={`overflow-y-scroll scrollbar-sa space-y-2`}>
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

            <i className=""></i>

            <span className="flex-1 px-2 py-2.5 bg-surface-1/25 border border-neutral-100/20 rounded-lg text-neutral-100/80 whitespace-nowrap overflow-scroll no-scrollbar">
              {stop.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ViewBusStops;
