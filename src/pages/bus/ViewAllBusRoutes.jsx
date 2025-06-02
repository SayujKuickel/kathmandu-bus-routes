import ViewBusStops from "@/components/bus/ViewBusStops";
import { busRoutes } from "@/data/busRoutes";
import Button from "@/components/ui/Button";
import PageLayout from "@/layout/PageLayout";
import { useState } from "react";
import RouteDetails from "@/components/route/RouteDetails";

function formatSearchText(str) {
  if (typeof str !== "string") return "";
  return str.replace(/-/g, " ").trim().toLowerCase();
}

const ViewAllBusRoutes = () => {
  const [stopSearch, setStopSearch] = useState("");
  const [filteredRouteKeys, setFilteredRouteKeys] = useState(null);

  function handleSearchByStop(e) {
    e.preventDefault();

    if (stopSearch.trim() === "") {
      setFilteredRouteKeys(null);
      return;
    }

    try {
      const formattedSearch = formatSearchText(stopSearch);

      const matchedKeys = Object.keys(busRoutes).filter((routeKey) =>
        busRoutes[routeKey].stopIds.some((stop) =>
          formatSearchText(stop).includes(formattedSearch)
        )
      );

      setFilteredRouteKeys(matchedKeys);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  const routeKeysToDisplay =
    filteredRouteKeys !== null ? filteredRouteKeys : Object.keys(busRoutes);

  const hasResults = routeKeysToDisplay.length > 0;

  return (
    <PageLayout>
      <div className="container-small mx-auto px-5 my-8">
        <h1 className="heading-1 font-bold mb-4">All Bus Routes</h1>

        <section className="mb-4 grid md:grid-cols-2">
          <form
            onSubmit={handleSearchByStop}
            className="flex items-center gap-2"
          >
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search by Stop name"
              className="bg-surface-3 flex-1 outline-0 border border-on-surface/25 px-3 py-2 rounded-lg"
              value={stopSearch}
              onChange={(e) => setStopSearch(e.target.value)}
            />

            <Button type="search" title="Search" iconStyle="fi fi-rr-search" />
          </form>
        </section>

        {hasResults ? (
          <ul className="flex flex-col gap-4">
            {routeKeysToDisplay.map((routeId) => {
              const route = busRoutes[routeId];
              if (!route?.name || !routeId) return null;
              return <RouteDetails key={routeId} routeId={routeId} />;
            })}
          </ul>
        ) : (
          <p className="text-on-surface/60 mt-4 mb-32">
            No routes matched your search.
          </p>
        )}
      </div>
    </PageLayout>
  );
};

export default ViewAllBusRoutes;
