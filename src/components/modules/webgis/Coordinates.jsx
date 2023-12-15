import React from 'react'
import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from "leaflet";

function Coordinates() {
    const map = useMap();

    useEffect(() => {
        // Define the Coordinates Control class

        const CoordinatesControl = L.Control.extend({
            options: {
                position: 'bottomleft',
                decimals: 8, // Set the desired number of decimals
                decimalSeparator: ',',
                labelTemplateLat: 'Latitude: {y}',
                labelTemplateLng: 'Longitude: {x}',
                useDMS: false, // Use degrees, minutes, seconds format
            },

            onAdd: function (map) {
                const container = L.DomUtil.create('div', 'leaflet-control-coordinates');
                container.innerHTML = '<div id="leaflet-coordinates-latitude"></div><div id="leaflet-coordinates-longitude"></div>';
                return container;
            },

            onRemove: function (map) {
                // Clean up when the control is removed
                map.off('mousemove', this._updateCoordinates, this);
            },

            _updateCoordinates: function (e) {
                const lat = L.Util.formatNum(e.latlng.lat, this.options.decimals);
                const lng = L.Util.formatNum(e.latlng.lng, this.options.decimals);

                document.getElementById('leaflet-coordinates-latitude').innerHTML = this.options.labelTemplateLat.replace('{y}', lat);
                document.getElementById('leaflet-coordinates-longitude').innerHTML = this.options.labelTemplateLng.replace('{x}', lng);
            },
        });

        // Check if the control is already added to avoid duplicates
        if (!map.coordinatesControl) {
            // Create an instance of the Coordinates Control
            const coordinatesControl = new CoordinatesControl();

            // Add the control to the map
            coordinatesControl.addTo(map);

            // Attach the mousemove event to update coordinates
            map.on('mousemove', coordinatesControl._updateCoordinates, coordinatesControl);

            // L.control.scale({ metric: true, position: 'bottomleft' }).addTo(map);
            // Save the control reference to the map object
            map.coordinatesControl = coordinatesControl;

            // Remove the control when the component unmounts
            return () => {
                map.removeControl(coordinatesControl);
                map.coordinatesControl = null;
            };
        }
        // If the control is already added, no need to do anything
    }, [map]);

    return null; // You don't need to render anything for this component
}

export default Coordinates;



// function Coordinates() {
//     const map = useMap();

//     useEffect(() => {
//         // Check if the control is already added to avoid duplicates
//         if (!L.Control.Coordinates) {
//             // Add the Leaflet Coordinates Control after the map has been initialized
//             L.Control.Coordinates = L.Control.extend({
//                 options: {
//                     position: 'bottomleft',
//                     decimals: 2,
//                     decimalSeperator: ',',
//                     labelTemplateLat: 'Latitude: {y}',
//                     labelTemplateLng: 'Longitude: {x}',
//                     useDMS: true, // Use degrees, minutes, seconds format
//                 },

//                 onAdd: function (map) {
//                     const container = L.DomUtil.create('div', 'leaflet-control-coordinates');
//                     return container;
//                 },
//             });

//             L.control.coordinates = function (options) {
//                 return new L.Control.Coordinates(options);
//             };

//             L.control.coordinates().addTo(map);
//         }

//         // Add the Leaflet Scale Control
//         L.control.scale({ metric: true, position: 'bottomleft' }).addTo(map);
//     }, [map]);

//     return null; // You don't need to render anything for this component
// }

// export default Coordinates;