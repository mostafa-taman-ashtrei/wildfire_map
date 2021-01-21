import React from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({ accessToken: process.env.REACT_APP_MAPBOX_TOKEN! });

const App: React.FC = () => (
  <Map
    containerStyle={{
      height: "100vh",
      width: "100vw",
    }}
    center={[139.74803, 35.70543]}
    zoom={[6]}
    // eslint-disable-next-line react/style-prop-object
    style="mapbox://styles/mapbox/streets-v8"
  />
);

export default App;
