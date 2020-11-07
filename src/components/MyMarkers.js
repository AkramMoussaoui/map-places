import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";

const MyMarkers = ({ marker, viewport }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Marker
        key={marker.id}
        offsetTop={-48}
        offsetLeft={-24}
        latitude={marker.lat}
        longitude={marker.lon}
        onClick={() => setShow(true)}
      >
        <img src="https://img.icons8.com/color/48/000000/marker.png" />
      </Marker>
    </>
  );
};

export default MyMarkers;
