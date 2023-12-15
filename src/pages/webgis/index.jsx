import React from 'react'
import { useState, useEffect, useRef } from 'react';

import {
    MapContainer,
    Marker,
    Tooltip,
    ZoomControl,
} from 'react-leaflet'

import AsideBar from '../../components/asidebar/AsideBar.jsx';
import Search from '../../components/tools/Search.jsx';
import MinimapControl from '../../components/modules/webgis/MiniMap.jsx';
import Coordinates from '../../components/modules/webgis/Coordinates.jsx';
import Kompas from '../../components/modules/webgis/Kompas.jsx';
import LayerControl from '../../components/modules/webgis/LayerControl.jsx';
import CenteredMap from '../../components/modules/webgis/CenteredMap.jsx';

import { marker } from '../../components/tools/IconTooltip.js';

import style from '../../styles/webgis/map.module.css'

const index = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const [inputSearch, setInputSearch] = useState("")
    const [selectedCafe, setSelectedCafe] = useState(null);
    const [center, setCenter] = useState([-6.40673123685437, 106.81567576657505]);
    const [zoom, setZoom] = useState(12);

    const mapRef = useRef()

    useEffect(() => {
        const map = mapRef.current;

        if (selectedCafe) {
            if (map) {
                map.flyTo([selectedCafe.Latitude, selectedCafe.Longitude], 15, {
                    animate: true,
                    duration: 1,
                });
            }
        }
    }, [selectedCafe])

    return (
        <>
            <Search
                show={openSidebar}
                setShow={setOpenSidebar}
                inputSearch={inputSearch}
                setInputSearch={setInputSearch} />
            <AsideBar
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
                selectedCafe={selectedCafe}
                setSelectedCafe={setSelectedCafe}
            />

            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
                zoomControl={false}
                ref={mapRef}
            >
                <CenteredMap map={mapRef} />
                <ZoomControl position="topright" />
                {!openSidebar && (<Coordinates />)}
                <Kompas />
                <LayerControl />
                <MinimapControl position="bottomright" zoom={5} />
                {
                    selectedCafe && (
                        <Marker
                            icon={marker}
                            key={selectedCafe.No}
                            position={[
                                selectedCafe.Latitude,
                                selectedCafe.Longitude,
                            ]}>
                            <Tooltip permanent direction='top' className={style.tooltip}>
                                <div className={style.select_tooltip}>
                                    <div className={style.image}>
                                        <img src={selectedCafe.image[0]} alt="" />
                                    </div>
                                    <div className={style.content}>
                                        <p>{selectedCafe['Nama Cafe']}</p>
                                        <p>{selectedCafe['Alamat']}</p>
                                    </div>
                                </div>
                            </Tooltip>
                        </Marker>
                    )
                }
            </MapContainer>
        </>
    )
}

export default index


