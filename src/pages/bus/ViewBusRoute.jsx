import ViewBusStops from "@/components/bus/ViewBusStops";
import Button from "@/components/ui/Button";
import Header from "@/components/global/Header";
import { Link, useParams } from "react-router-dom";
import { busRoutes } from "@/data/busRoutes";
import { useEffect, useState } from "react";
import Footer from "@/components/global/Footer";
import NotFound from "../NotFound";
import PageLayout from "../../layout/PageLayout";

const ViewBusRoute = () => {
  const { id } = useParams();
  const [route, setRoute] = useState(null);

  useEffect(() => {
    try {
      const route = busRoutes[id];

      if (!route || route === undefined) throw new Error("Invalid Route url");

      setRoute(route);
    } catch (err) {
      console.error(err.message);
    }
  }, [id]);

  if (!route) return <NotFound />;

  return (
    <PageLayout>
      <section className="container-small mx-auto px-5 my-8">
        <div className="p-4 bg-surface rounded-lg  border border-on-primary/25">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
            <h3 className="heading-3 font-semibold flex items-center">
              <span
                style={{ background: route?.lineColor }}
                className="inline-block w-6 aspect-square rounded-full mr-2"
              />

              {route.name}
            </h3>

            <Link to={`/?route=${id}`}>
              <Button
                className="px-4 border border-on-surface/25"
                title="View in Map"
                iconStyle="fi fi-rr-map"
              />
            </Link>
          </div>

          <div className="mb-4">
            {route?.timeMin && (
              <p className="flex items-center gap-2">
                <i className="fi fi-rr-clock-three flex"></i>{" "}
                <span> {route?.timeMin} </span>
                mins
              </p>
            )}
          </div>

          <ViewBusStops viewAll={true} selectedRouteId={id} />
        </div>
      </section>
    </PageLayout>
  );
};

export default ViewBusRoute;
