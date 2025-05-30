import { busStops } from "@/data/busStops";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

function ViewStopItems(props) {
  return (
    <section className="overflow-y-scroll scrollbar-sa h-full flex flex-col gap-2 pb-4">
      {props.selectedRoute?.stopIds?.map((item, index) => {
        const stop = busStops.find((el) => el.id === item);
        return (
          <li
            key={item}
            className="flex items-center gap-1.5 relative no-scrollbar"
          >
            <i
              className={`${
                index > 0 && index < props.selectedRoute?.stopIds?.length - 1
                  ? "fi fi-rr-circle"
                  : "fi fi-rr-dot-circle"
              } w-3 flex text-xs relative`}
            >
              {index > 0 && (
                <span className="absolute left-1/2 -translate-x-1/2 translate-y-[-220%]">
                  <i className="fi fi-rr-menu-dots-vertical flex text-xs"></i>
                </span>
              )}
            </i>

            <span className="flex-1 ml-1.5 px-2 py-2.5 bg-surface border border-on-surface/25 hover:border-on-surface/50 transition-all rounded-lg text-neutral-100/80 whitespace-nowrap overflow-scroll no-scrollbar">
              <Link
                to={`/?stop=${stop.id}&route=${props.selectedRouteId}`}
                className="flex items-center gap-2 text-on-surface"
              >
                <i className="fi fi-rr-land-layer-location flex" />

                {stop.name}
              </Link>
            </span>
          </li>
        );
      })}
    </section>
  );
}

export default ViewStopItems;
