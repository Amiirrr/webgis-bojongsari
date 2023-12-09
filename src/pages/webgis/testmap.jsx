// import React, { useEffect, useRef, useState } from "react";
// import L from "leaflet";
// import MiniMap from "leaflet-minimap";

// const style = {
//     width: "100%",
//     height: window.innerHeight,
// };

// const Map = () => {
//     const [markerPosition, setMarkerPosition] = useState({ lat: 49.8419, lng: 24.0315 });
//     const osmUrl = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";

//     // useRef for storing map instance and marker
//     const mapRef = useRef(null);
//     const minimapLayerRef = useRef(null);
//     const minimapControlRef = useRef(null);
//     const markerRef = useRef(null);

//     useEffect(() => {
//         console.log("Create Map");

//         // Check if the map is already initialized
//         if (!mapRef.current) {
//             // create map
//             console.log('tidak dirender')
//             mapRef.current = L.map("map", {
//                 center: [49.8419, 24.0315],
//                 zoom: 16,
//                 layers: [
//                     L.tileLayer(osmUrl, {
//                         attribution:
//                             '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//                     }),
//                 ],
//             });

//             // add minimap
//             minimapLayerRef.current = new L.TileLayer(osmUrl, {
//                 minZoom: 0,
//                 maxZoom: 13,
//             });
//             minimapControlRef.current = new L.Control.MiniMap(minimapLayerRef.current, {
//                 width: 200,
//                 height: 150,
//                 toggleDisplay: true,
//             }).addTo(mapRef.current);

//             // add marker
//             markerRef.current = L.marker(markerPosition).addTo(mapRef.current);
//         }
//     }, [markerPosition]);

//     useEffect(() => {
//         console.log("update component");
//         // check if position has changed
//         if (markerRef.current && markerPosition !== markerRef.current.getLatLng()) {
//             markerRef.current.setLatLng(markerPosition);
//         }
//     }, [markerPosition]);

//     return <div id="map" style={style} />;
// };

// export default Map;

// // import React, { useState, useRef, useEffect } from 'react';
// // import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

// // const Map = () => {
// //     const [markerPosition, setMarkerPosition] = useState({ lat: 49.8419, lng: 24.0315 });
// //     const osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

// //     const mapRef = useRef(null);

// //     useEffect(() => {
// //         // Create the map
// //         const map = L.map(mapRef.current, {
// //             center: markerPosition,
// //             zoom: 16,
// //             layers: [L.tileLayer(osmUrl, { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' })],
// //         });

// //         // Add the minimap
// //         const minimapLayer = new L.TileLayer(osmUrl, { minZoom: 0, maxZoom: 13 });
// //         const minimapControl = new L.Control.MiniMap(minimapLayer, { width: 200, height: 150, toggleDisplay: true });
// //         minimapControl.addTo(map);

// //         // Add the marker
// //         const marker = L.marker(markerPosition).addTo(map);

// //         // Update the marker position when needed
// //         if (marker && markerPosition !== marker.getLatLng()) {
// //             marker.setLatLng(markerPosition);
// //         }
// //     }, [markerPosition]);

// //     return (
// //         <div id="map">
// //             <MapContainer ref={mapRef} center={markerPosition} zoom={16}>
// //                 <TileLayer url={osmUrl} attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
// //                 <Marker position={markerPosition} />
// //             </MapContainer>
// //         </div>
// //     );
// // };

// // export default Map;

