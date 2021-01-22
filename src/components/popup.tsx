import React from 'react'
import { Popup } from 'react-mapbox-gl';
import { apiData } from '../interfaces/apiData';

interface props {
    point: apiData
    setShow: React.Dispatch<React.SetStateAction<Boolean>>
}

const MyPopUp: React.FC<props> = ({ point, setShow }: props) => {
    return (
        <Popup
            coordinates={point.coordinates}
            style={{ height: '50px', width: '150px', cursor: 'pointer' }}
            offset={{
                'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
            }}
            onClick={() => setShow(false)}
        >
            <span onClick={() => setShow(false)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>X</span>
            <h3>{point.title}</h3>
        </Popup>
    )
}

export default MyPopUp;
