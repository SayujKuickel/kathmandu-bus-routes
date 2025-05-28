import { busRoutes } from "@/data/busRoutes";
import Button from "@/components/ui/Button";

const SelectRouteContainer = ({
  showRouteStops,
  selectedRoute,
  onSelectedRoute,
  onShowRouteDetails,
}) => {
  const routeKeys = Object.keys(busRoutes);

  function handleToggleRouteValue() {
    onShowRouteDetails((prev) => !prev);
  }

  return (
    <section className="bg-surface p-4 text-on-surface rounded-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold ">Select Route</h3>

        {selectedRoute !== "" && selectedRoute && (
          <Button
            onClick={handleToggleRouteValue}
            className="text-sm"
            title={showRouteStops ? "Hide Stops" : "Show Stops"}
          />
        )}
      </div>

      <select
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
            <option key={key} value={item}>
              {busRoutes[item].name}
            </option>
          ))}
      </select>
    </section>
  );
};
export default SelectRouteContainer;
