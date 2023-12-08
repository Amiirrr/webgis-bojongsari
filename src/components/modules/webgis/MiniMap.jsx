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
