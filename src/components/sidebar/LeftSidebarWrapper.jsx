import { useState } from "react";
import SelectRouteContainer from "@/components/route/SelectRouteContainer";
import ViewRouteStops from "@/components/route/ViewRouteStops";

const LeftSidebarWrapper = ({ selectedRoute, onSelectedRoute }) => {
  const [showRouteStops, setShowRouteStops] = useState(false);

  return (
    <aside className="fixed bottom-0 md:top-0 left-0 p-4 h-fit z-[99999] w-full md:w-82">
      <div className="w-full flex flex-col md:flex-col gap-2 md:gap-4">
        <SelectRouteContainer
          showRouteStops={showRouteStops}
          onShowRouteDetails={setShowRouteStops}
          selectedRoute={selectedRoute}
          onSelectedRoute={onSelectedRoute}
        />

        {showRouteStops && <ViewRouteStops selectedRouteId={selectedRoute} />}
      </div>
    </aside>
  );
};

export default LeftSidebarWrapper;
