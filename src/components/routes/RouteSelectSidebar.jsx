import React from "react";
import { busRoutes } from "@/data/busRoutes";

const RouteSelectSidebar = ({ selectedRoute, setSelectedRoute }) => {
  const routeKeys = Object.keys(busRoutes);

  return (
    <aside className="fixed top-0 left-0 h-fit z-[99999] p-4 w-full md:w-72">
      <div className="bg-neutral-800 p-4 text-white rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Select Route</h3>

        <select
          onChange={(e) => {
            setSelectedRoute(e.target.value);
          }}
          name="routeSelect"
          id="routeSelect"
          className=" text-sm rounded-lg cursor-pointer block w-full p-2.5 bg-neutral-900 border-neutral-600 placeholder-neutral-400 text-white"
        >
          <option value="">Select Route</option>
          {routeKeys
            .filter((key) => key !== "")
            .map((item, key) => (
              <option key={key} value={item}>
                {busRoutes[item].name}
              </option>
            ))}
        </select>
      </div>
    </aside>
  );
};

export default RouteSelectSidebar;
