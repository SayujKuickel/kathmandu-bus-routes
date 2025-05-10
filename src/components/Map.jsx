import React from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import BusRoutes from "./BusRoutes";
import UserLocation from "./UserLocation";
import GetStop from "./GetStop";

const ktmCenter = [27.7103, 85.3222];

const Map = () => {
  return (
    <>
      <MapContainer
        center={ktmCenter}
        zoom={16}
        minZoom={14}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}

        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        <BusRoutes />

        <UserLocation />

        {/* <GetStop /> */}

        <ZoomControl position="bottomleft" />
      </MapContainer>
    </>
  );
};

export default Map;
