import { busRoutes } from "@/data/busRoutes";

import ViewStopItems from "./ViewStopItems";

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

        <ViewStopItems
          selectedRoute={selectedRoute}
          selectedRouteId={selectedRouteId}
        />
      </ul>
    </div>
  );
};

export default ViewRouteStops;
