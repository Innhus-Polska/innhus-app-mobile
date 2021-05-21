import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN =
    'pk.eyJ1Ijoia3JlYXRvcnp5bWFyemVuIiwiYSI6ImNrb25pNWtqZDAxb2sybm81ems1dXFtdW8ifQ.qau0SMcJAXodVT1NC2u6Ug'; // Set your mapbox token here

export default function MapComponent() {
    const [viewport, setViewport] = useState({
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
        bearing: 0,
        pitch: 0,
    });

    return (
        <MapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
        />
    );
}

document.body.style.margin = 0;