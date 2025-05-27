import React, { useState } from "react";
import RouteSelectSidebar from "@/components/sidebar/RouteSelectSidebar";
import ViewRouteStops from "@/components/sidebar/ViewRouteStops";

const LeftSidebarWrapper = ({ selectedRoute, setSelectedRoute }) => {
  const [showRouteDetails, setShowRouteDetails] = useState(false);

  return (
    <aside className="fixed bottom-0 md:top-0 left-0 h-fit z-[99999] p-4 w-full md:w-76">
      <div className="w-full flex flex-col md:flex-col gap-2 md:gap-4">
        <RouteSelectSidebar
          showRouteDetails={showRouteDetails}
          onShowRouteDetails={setShowRouteDetails}
          selectedRoute={selectedRoute}
          onSelectedRoute={setSelectedRoute}
        />

        {showRouteDetails && <ViewRouteStops selectedRouteId={selectedRoute} />}
      </div>
    </aside>
  );
};

export default LeftSidebarWrapper;
