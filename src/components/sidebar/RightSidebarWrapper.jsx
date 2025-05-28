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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Link to={"/bus"}>
          <Button
            iconStyle={`text-xl fi fi-rr-bus-alt`}
            aria-label="Bus Routes"
          />
        </Link>

        <Link to={"/contact"}>
          <Button
            iconStyle={`text-xl fi fi-rr-comment-alt`}
            aria-label="Contact"
          />
        </Link>

        <LayerToggleContainer
          mapTileType={mapTileType}
          onMapTileType={onMapTileType}
        />

        <Button
          onClick={onLocateUser}
          iconStyle={`text-xl ${
            isSearchingLocation
              ? "fi fi-rr-loading animate-spin"
              : "fi fi-rr-marker"
          }`}
          aria-label="Locate me"
        />

        {/*  */}
      </div>
    </section>
  );
};

export default RightSidebarWrapper;
