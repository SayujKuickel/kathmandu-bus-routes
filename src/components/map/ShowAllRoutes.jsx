import BusRoute from "@/components/map/BusRoute";
import { busRoutes } from "@/data/busRoutes";

function ShowAllRoutes() {
  const routeIds = Object.keys(busRoutes).filter((item) => item !== "");
  return (
    <>
      {routeIds.map((route) => (
        <BusRoute key={route} routeId={route} />
      ))}
    </>
  );
}
export default ShowAllRoutes;
