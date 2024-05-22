// import { Typography } from "@material-ui/core"
import React, {useState, useEffect, useRef} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

function Mapcomp(){
  const mapContainer = useRef(null);
  const [viewState, setViewState] = useState({
    center:[-100.43,35],
    zoom: 3,
    pitch: 50,
  });

  React.useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_key',
      ...viewState
    });
    
    return () => {
      map.remove();
      
    };
  },[]);

  return (
    <>
    <div ref={mapContainer} 
    style={{width: '100%', height: '100vh', position: 'absolute'}} >
    </div>
    </>
  );
}


export default Mapcomp