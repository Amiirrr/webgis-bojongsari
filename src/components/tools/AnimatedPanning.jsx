// import React from 'react';
// import { useMapEvent } from 'react-leaflet';
// // import { useRef } from 'react';

// // const animateRef = useRef(true)

// function AnimatedPanning({ animateRef }) {
//     const map = useMapEvent('click', (e) => {
//         map.setView(e.latlng, map.getZoom(), {
//             animate: animateRef.current || false,
//         });
//     });

//     return null;
// }

// export default AnimatedPanning;
import React from 'react'
import { useMapEvent } from 'react-leaflet';

const AnimatedPanning = ({ animateRef }) => {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        });
    });
    return null
}

export default AnimatedPanning