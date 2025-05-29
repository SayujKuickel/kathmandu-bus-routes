import { busRoutes } from "@/data/busRoutes";
import { busStops } from "@/data/busStops";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const ViewRouteStops = ({ selectedRouteId, sidebarMode = true }) => {
  const selectedRoute = busRoutes[selectedRouteId];

  if (!selectedRoute || selectedRouteId === "" || selectedRoute.name === "")
    return null;

  return (
    <div className="bg-background p-4 text-on-surface rounded-lg">
      <h4 className="text-lg font-semibold text-neutral-100  gap-2 mb-4">
        <span
          style={{ background: selectedRoute.lineColor }}
          className="inline-block w-4 aspect-square rounded-full"
        />
        <span className="ml-2">{selectedRoute.name}</span>
      </h4>

      <ul className={`${sidebarMode && "h-32 md:h-48"} relative`}>
        <div className="absolute left-[0px] bottom-[0px] z-10 w-full h-6 bg-gradient-to-t from-background to-transparent"></div>

        <section className="overflow-y-scroll scrollbar-sa h-full flex flex-col gap-2">
          {selectedRoute?.stopIds?.map((item, index) => {
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

                <span className="flex-1 ml-1.5 px-2 py-2.5 bg-surface border border-on-surface/25 hover:border-on-surface/50 transition-all rounded-lg text-neutral-100/80 whitespace-nowrap overflow-scroll no-scrollbar">
                  <Link
                    to={`/?stop=${stop.id}`}
                    className="flex items-center gap-2 text-on-surface"
                  >
                    <i className="fi fi-rr-land-layer-location flex" />

                    {stop.name}
                  </Link>
                </span>
              </li>
            );
          })}
        </section>
      </ul>
    </div>
  );
};

export default ViewRouteStops;
