import { busRoutes } from "@/data/busRoutes";
import Button from "@/components/ui/Button";

const SelectRouteContainer = ({
  showRouteDetails,
  selectedRoute,
  onSelectedRoute,
  onShowRouteDetails,
}) => {
  const routeKeys = Object.keys(busRoutes);

  function handleToggleRouteValue() {
    console.log(showRouteDetails);
    onShowRouteDetails((prev) => !prev);
  }

  return (
    <section className="bg-neutral-800 p-4 text-neutral-100 rounded-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold ">Select Route</h3>

        {selectedRoute !== "" && selectedRoute && (
          <Button
            onClick={handleToggleRouteValue}
            className="text-sm"
            title={showRouteDetails ? "Hide Stops" : "Show Stops"}
          />
        )}
      </div>

      <select
        onChange={(e) => {
          onSelectedRoute(e.target.value);
        }}
        name="routeSelect"
        id="routeSelect"
        className="text-sm rounded-lg cursor-pointer block w-full p-2.5 bg-neutral-900 border-neutral-600 placeholder-neutral-400 text-text"
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
