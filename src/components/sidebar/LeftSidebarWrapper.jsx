import React, { useState } from "react";
import SelectRouteContainer from "@/components/sidebar/SelectRouteContainer";
import ViewRouteStops from "@/components/sidebar/ViewRouteStops";

const LeftSidebarWrapper = ({ selectedRoute, onSelectedRoute }) => {
  const [showRouteDetails, setShowRouteDetails] = useState(false);

  return (
    <aside className="fixed bottom-0 md:top-0 left-0 p-4 h-fit z-[99999] w-full md:w-76">
      <div className="w-full flex flex-col md:flex-col gap-2 md:gap-4">
        <SelectRouteContainer
          showRouteDetails={showRouteDetails}
          onShowRouteDetails={setShowRouteDetails}
          selectedRoute={selectedRoute}
          onSelectedRoute={onSelectedRoute}
        />

        {showRouteDetails && <ViewRouteStops selectedRouteId={selectedRoute} />}
      </div>
    </aside>
  );
};

export default LeftSidebarWrapper;
