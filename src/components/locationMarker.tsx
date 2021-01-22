import React from 'react';
import { Marker } from 'react-mapbox-gl';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';

import { apiData } from '../interfaces/apiData';

interface props {
    piont: apiData,
}

const LocationMarker: React.FC<props> = ({ piont }: props) => {
    return (
        <Marker
            coordinates={piont.coordinates}
            anchor="bottom"
        >
            <WhatshotSharpIcon color="secondary" style={{ fontSize: 40 }} />
        </Marker>
    )
}

export default LocationMarker;
