import React from 'react'
import markerIcon from '../../../assets/image/marker.png'

const CenteredMap = ({ map }) => {

    const handleCenterMap = () => {
        map.current.setView([-6.40673123685437, 106.81567576657505], 12);
    };
    return (
        <div
            style={{ position: 'absolute', zIndex: "997", width: "30px", left: "20px", top: "150px" }}>
            <img src={markerIcon} alt="markerIcon"
                style={{ width: "100%", objectFit: "contain", cursor: "pointer" }}
                onClick={() => handleCenterMap()}
            />
        </div>
    )
}

export default CenteredMap