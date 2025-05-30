import BusRoute from "@/components/map/BusRoute";
import { busRoutes } from "@/data/busRoutes";

function ShowAllRoutes({ fitToScreen }) {
  const routeIds = Object.keys(busRoutes)
    .filter((item) => item !== "")
    .slice(0, 5);

  return (
    <>
      {routeIds.map((route) => (
        <BusRoute fitToScreen={fitToScreen} key={route} routeId={route} />
      ))}
    </>
  );
}
export default ShowAllRoutes;
