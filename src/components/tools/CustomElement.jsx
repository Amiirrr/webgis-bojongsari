import React, { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';

const CustomElement = () => {
    const map = useMap();
    const customElementRef = useRef(null);

    useEffect(() => {
        // Ketika komponen dimount, tambahkan elemen HTML kustom ke peta
        const customElement = document.createElement('div');
        customElement.innerHTML = '<p style="font-size: 18px; font-weight: bold;">Maps</p>';
        customElement.style.position = 'absolute';
        customElement.style.top = '20px';
        customElement.style.left = '50%';
        customElement.style.transform = 'translateX(-50%)';
        customElement.style.backgroundColor = 'white';
        customElement.style.padding = '10px';
        customElement.style.borderRadius = '5px';

        map.getContainer().appendChild(customElement);
        customElementRef.current = customElement;

        // Ketika komponen di-unmount, hapus elemen HTML kustom dari peta
        return () => {
            if (customElementRef.current) {
                map.getContainer().removeChild(customElementRef.current);
            }
        };
    }, [map]);

    return null;
};

export default CustomElement;
