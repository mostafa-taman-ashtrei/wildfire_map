import React, { useState } from 'react';
import { Marker } from 'react-mapbox-gl';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';

import { apiData } from '../interfaces/apiData';
import MyPopUp from './popup';

interface props {
    point: apiData,
}

const LocationMarker: React.FC<props> = ({ point }: props) => {
    const [show, setShow] = useState<Boolean>(false);

    return (
        <>
            <Marker
                coordinates={point.coordinates}
                anchor="bottom"
                onClick={() => { setShow(!show) }}
            >
                <WhatshotSharpIcon style={{ fontSize: 40, color: 'red' }} />
            </Marker>
            {show ? <MyPopUp point={point} setShow={setShow} /> : null}
        </>
    )
}

export default LocationMarker;
