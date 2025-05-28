import { Header } from "@/components/global/Header";
import ViewBusStops from "@/components/bus/ViewBusStops";
import { busRoutes } from "@/data/busRoutes";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";

const ViewAllBusRoutes = () => {
  return (
    <main className="bg-background text-text min-h-screen">
      <Header />

      <div className="container-small mx-auto px-5 pt-8 pb-32">
        <h1 className="heading-1 font-bold mb-4">All Bus Routes</h1>

        <ul className="space-y-4">
          {Object.keys(busRoutes).map((item) => {
            const route = busRoutes[item];

            if (route.name === "") return null;

            return (
              <li className="p-4 bg-surface rounded-lg  border border-on-primary/25">
                <h3 className="heading-3 font-semibold mb-4 flex items-center">
                  <span
                    style={{ background: route?.lineColor }}
                    className="inline-block w-6 aspect-square rounded-full mr-2"
                  />

                  {route.name}
                </h3>

                <ViewBusStops selectedRouteId={item} />

                <br />
                <div className="flex items-center gap-2">
                  <Link to={`/bus/${item}`}>
                    <Button
                      className="px-4 border border-on-surface/25"
                      title="View all Stops"
                    />
                  </Link>

                  <Link to={`/?route=${item}`}>
                    <Button
                      className="px-4 border border-on-surface/25"
                      title="View in Map"
                    />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ViewAllBusRoutes;
