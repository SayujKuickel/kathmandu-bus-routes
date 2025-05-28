import { Header } from "@/components/global/Header";
import ViewBusStops from "@/components/bus/ViewBusStops";
import { busRoutes } from "@/data/busRoutes";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import Footer from "@/components/global/Footer";

const ViewAllBusRoutes = () => {
  return (
    <main className="bg-background text-text min-h-screen">
      <Header />

      <div className="container-small mx-auto px-5 my-8">
        <h1 className="heading-1 font-bold mb-4">All Bus Routes</h1>

        <ul className="space-y-4">
          {Object.keys(busRoutes).map((routeId) => {
            const route = busRoutes[routeId];

            if (route.name === "") return null;

            return (
              <li
                key={routeId}
                className="p-4 bg-surface rounded-lg  border border-on-primary/25"
              >
                <h3 className="heading-3 font-semibold mb-4 flex items-center">
                  <span
                    style={{ background: route?.lineColor }}
                    className="inline-block w-6 aspect-square rounded-full mr-2"
                  />

                  {route.name}
                </h3>

                <section className="mt-4 mb-6">
                  <ViewBusStops selectedRouteId={routeId} />
                </section>

                <div className="flex items-center gap-2">
                  <Link to={`/bus/${routeId}`}>
                    <Button
                      className="px-4 border border-on-surface/25 "
                      title="View all Stops"
                      iconStyle="fi fi-rr-eye"
                    />
                  </Link>

                  <Link to={`/?route=${routeId}`}>
                    <Button
                      className="px-4 border border-on-surface/25 "
                      iconStyle="fi fi-rr-map"
                      title="View in Map"
                    />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <Footer />
    </main>
  );
};

export default ViewAllBusRoutes;
