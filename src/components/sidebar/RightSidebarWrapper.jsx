import Button from "@/components/ui/Button";
import LayerToggleContainer from "@/components/LayerChanger/LayerToggleContainer";
import { Link } from "react-router-dom";

const RightSidebarWrapper = ({
  onLocateUser,
  isSearchingLocation,
  mapTileType,
  onMapTileType,
}) => {
  return (
    <section className="fixed top-4 right-4 w-fit z-[99999]">
      <div className="flex flex-col gap-2">
        <Button
          onClick={onLocateUser}
          iconStyle={`text-xl ${
            isSearchingLocation
              ? "fi fi-rr-loading animate-spin"
              : "fi fi-rr-marker"
          }`}
          aria-label="Locate me"
        />

        <LayerToggleContainer
          mapTileType={mapTileType}
          onMapTileType={onMapTileType}
        />
        <Link to={"/bus"}>
          <Button
            iconStyle={`text-xl "fi fi-rr-bus-alt`}
            aria-label="Locate me"
          />
        </Link>
      </div>
    </section>
  );
};

export default RightSidebarWrapper;
