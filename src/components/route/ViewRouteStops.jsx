import { busRoutes } from "@/data/busRoutes";
import { busStops } from "@/data/busStops";

const ViewRouteStops = ({ selectedRouteId }) => {
  const selectedRoute = busRoutes[selectedRouteId];

  if (!selectedRoute || selectedRouteId === "" || selectedRoute.name === "")
    return null;

  return (
    <div className="bg-surface p-4 text-on-surface rounded-lg">
      <h4 className="text-lg font-semibold text-neutral-100  gap-2 mb-4">
        <span
          style={{ background: selectedRoute.lineColor }}
          className="inline-block w-4 aspect-square outline-text bg-neutral-100 rounded-full leading-2"
        />
        <span className="ml-2">{selectedRoute.name}</span>
      </h4>

      <ul className="h-28 md:h-48 overflow-y-scroll scrollbar-sa space-y-2">
        {selectedRoute?.stopIds?.map((item, index) => {
          const stop = busStops.find((el) => el.id === item);

          return (
            <li
              key={item}
              className="flex items-center gap-1.5 relative no-scrollbar"
            >
              <i
                class={`${
                  index > 0 && index < selectedRoute?.stopIds?.length - 1
                    ? "fi fi-rr-circle"
                    : "fi fi-rr-dot-circle"
                } w-3 flex text-xs relative`}
              >
                {index > 0 && (
                  <span className="absolute left-1/2 -translate-x-1/2 translate-y-[-220%]">
                    <i class="fi fi-rr-menu-dots-vertical flex text-xs"></i>
                  </span>
                )}
              </i>

              <i class=""></i>

              <span className="flex-1 px-2 py-2.5 bg-neutral-900/25 border border-neutral-100/20 rounded-lg text-neutral-100/80 whitespace-nowrap overflow-scroll no-scrollbar">
                {stop.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ViewRouteStops;
