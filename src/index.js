import React from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

import "./styles.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZGFpbWsiLCJhIjoiY2ttbmt2dzc2MXZ1bjJwcGZsZndoaGdkbiJ9.KzEXKpaGb0yYkV8Npdg65g"
});

function App() {
  const onDrawCreate = ({ features }) => {
    console.log(features);
    //console.log(features[0].geometry.coordinates);
    let k = features[0].geometry.coordinates;
    console.log(k[0]);
  };

  const onDrawUpdate = ({ features }) => {
    console.log(features);
  };

  return (
    <div>
      <h2>Draw Polygon</h2>
      <Map
        style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
        containerStyle={{
          height: "600px",
          width: "100vw"
        }}
      >
        <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
      </Map>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));