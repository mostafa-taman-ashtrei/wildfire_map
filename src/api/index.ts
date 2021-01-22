import axios from 'axios';
import { apiData } from '../interfaces/apiData';

const fetchData = async (): Promise<apiData[]> => {
    try {
        const res = await axios.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8');
        const fires = res.data.events;


        const finalData = fires.map((e: typeof fires) => (
            {
                title: e.title,
                coordinates: [e.geometries[0].coordinates[0], e.geometries[0].coordinates[1]],
                date: e.geometries[0].date,
            }
        ));

        return finalData;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to fetch Data ):');
    }

}


export default fetchData;