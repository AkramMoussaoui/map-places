import React, { useState, useEffect, useRef } from "react";
import ReactMapGl from "react-map-gl";
import Markers from "./MyMarkers";
import { useSelector } from "react-redux";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 36.699729399999995,
    longitude: 3.0576198999999997,
    width: "fit",
    height: "calc(100vh - 4rem)",
    zoom: 15,
  });

  const { markers } = useSelector((state) => state.markers);

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle="mapbox://styles/akram25/cjyummsdt092r1cs4fsivp0tu"
    >
      {markers?.map((marker) => (
        <Markers marker={marker} viewport={viewport} />
      ))}
    </ReactMapGl>
  );
};

export default Map;
