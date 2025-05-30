import { busRoutes } from "@/data/busRoutes";
import Button from "@/components/ui/Button";
import SelectMenu from "../ui/SelectMenu";

const SelectRouteContainer = ({
  showRouteStops,
  selectedRoute,
  onSelectedRoute,
  onShowRouteDetails,
}) => {
  const routeDetails = Object.keys(busRoutes)
    ?.filter((route) => route !== "")
    ?.map((route) => {
      const item = busRoutes[route];
      return { key: route, value: item.name, lineColor: item.lineColor };
    });

  function handleToggleRouteValue() {
    onShowRouteDetails((prev) => !prev);
  }

  return (
    <section className="bg-background p-4 text-on-surface rounded-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold ">Select Route</h3>

        {selectedRoute !== "" && selectedRoute && (
          <Button
            onClick={handleToggleRouteValue}
            className="text-xs"
            iconStyle={showRouteStops ? "fi fi-rr-eye-crossed" : "fi fi-rr-eye"}
            title={showRouteStops ? "Hide Stops" : "Show Stops"}
          />
        )}
      </div>

      <SelectMenu
        selectedRoute={selectedRoute}
        onSelectedRoute={onSelectedRoute}
        options={routeDetails}
      />

      {/* <select
        onChange={(e) => {
          onSelectedRoute(e.target.value);
        }}
        name="routeSelect"
        id="routeSelect"
        className="text-sm rounded-lg cursor-pointer block w-full p-2.5 bg-surface-2 hover:bg-surface-3 transition-all hover:text-on-primary text-on-surface"
      >
        <option value="">View All Routes</option>

         {routeKeys
          .filter((key) => key !== "")
          .map((item, key) => (
            <option key={key} value={item} selected={selectedRoute === item}>
              {busRoutes[item].name}
            </option>
          ))} 
      </select> */}
    </section>
  );
};
export default SelectRouteContainer;
