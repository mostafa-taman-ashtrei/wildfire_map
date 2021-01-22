import React, { useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import LinearProgress from '@material-ui/core/LinearProgress';

import fetchData from './api';
import { apiData } from './interfaces/apiData';
import Map from './components/map';

const App: React.FC = () => {
  const [points, setPoints] = useState<apiData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    setPoints(await fetchData());
    setLoading(false);
  };

  useEffect(() => { getData() }, []);

  if (loading) return <LinearProgress />

  return (
    <Map points={points} />
  )
};

export default App;
