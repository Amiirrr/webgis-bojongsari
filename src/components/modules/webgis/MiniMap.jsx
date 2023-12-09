// import React, { useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-minimap/dist/Control.MiniMap.min.css';
// import 'leaflet-minimap';

// const MiniMap = ({ mainMap }) => {
//     useEffect(() => {
//         const osm2 = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             minZoom: 0,
//             maxZoom: 13,
//             attribution: '© OpenStreetMap contributors',
//         });

//         const miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(mainMap);

//         return () => {
//             miniMap.remove(); // Cleanup when component unmounts
//         };
//     }, [mainMap]);

//     return null; // MiniMap will be inserted into the main map
// };

// export default MiniMap;

// Contoh sederhana MiniMap.jsx
// import React from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';

// const MiniMap = ({ mainMap }) => {
//     return (
//         <MapContainer
//             center={[-6.40673123685437, 106.81567576657505]}
//             zoom={12}
//             style={{ height: '100px', width: '100px' }}  // Sesuaikan ukuran sesuai kebutuhan
//         >
//             <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//         </MapContainer>
//     );
// };

// export default MiniMap;

// MiniMap.jsx
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';
import 'leaflet-minimap';

const MiniMap = ({ mainMap }) => {
    useEffect(() => {
        const osm2 = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 0,
            maxZoom: 13,
            attribution: '© OpenStreetMap contributors'
        });

        const miniMap = new L.Control.MiniMap(osm2, { position: 'bottomright' }).addTo(mainMap);

        return () => {
            // Cleanup code if needed
            mainMap.removeControl(miniMap);
        };
    }, [mainMap]);

    return null;
};

export default MiniMap;
