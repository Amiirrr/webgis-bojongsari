import React from 'react'
import kompas from '../../../assets/image/arah-mataangin.png'

const Kompas = () => {
    return (
        <div style={{ position: 'absolute', width: "180px", zIndex: "997", bottom: "80px", left: "40px" }}>
            <img style={{ objectFit: "contain", width: "100%" }} src={kompas} alt="kompas" />
        </div>
    )
}

export default Kompas