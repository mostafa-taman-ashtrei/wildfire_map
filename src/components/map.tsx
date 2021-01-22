import React from 'react';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';

import { apiData } from '../interfaces/apiData';
import LocationMarker from './locationMarker';

interface props {
    points: apiData[]
}

const Map: React.FC<props> = ({ points }: props) => {
    const Mapbox = ReactMapboxGl({ accessToken: process.env.REACT_APP_MAPBOX_TOKEN! });

    return (
        <Mapbox
            containerStyle={{
                height: "100vh",
                width: "100vw",
            }}
            center={[-95.7129, 37.0902]}
            zoom={[4]}
            // eslint-disable-next-line react/style-prop-object
            style="mapbox://styles/mapbox/streets-v8"
        >
            <>
                <ZoomControl position="top-left" />
                { points.map((p: apiData, i: number) => <LocationMarker point={p} key={i} />)}
            </>
        </Mapbox>
    )
}

export default Map;
