import React from 'react'
import { useState, useEffect, useRef } from 'react';
import L from 'leaflet';



import { MapContainer, TileLayer, useMap, Marker, Popup, GeoJSON, LayersControl, FeatureGroup, Tooltip, ZoomControl } from 'react-leaflet'

import Header from '../../components/layout/Header.jsx';
import AsideBar from '../../components/asidebar/AsideBar.jsx';
import Search from '../../components/tools/Search.jsx';

// import MiniMap from '../../components/modules/webgis/MiniMap.jsx';

import petaDepokData from '../../utils/peta_depok.json';
import koordinatCafe from "../../utils/koordinat_cafe.json"
import jalanBojongsari from "../../utils/jalan_bojongsari.json"
import petaKecamatanBojongsari from "../../utils/kecamatan_bojongsari.json"

import style from '../../styles/webgis/map.module.css'

const index = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const [inputSearch, setInputSearch] = useState("")
    const mapContainerRef = useRef();


    const animateRef = useRef(false)
    // const map = useMap();
    const redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        iconSize: [15, 25],
    });

    // const handleCenterMap = () => {
    //     map.setView([-6.40673123685437, 106.81567576657505], 12); // Ganti koordinat dan zoom sesuai kebutuhan
    // };

    return (
        <>
            <Search show={openSidebar} setShow={setOpenSidebar} setInputSearch={setInputSearch} />
            <AsideBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} inputSearch={inputSearch} />
            <MapContainer center={[-6.40673123685437, 106.81567576657505]} zoom={12} scrollWheelZoom={true} zoomControl={false}>
                {/* <AnimatedPanning animateRef={animateRef} /> */}
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="OpenStreetMap">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Stadia Outdoor">
                        <TileLayer
                            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.Overlay checked name="Peta Kota Depok">
                        <FeatureGroup >
                            <GeoJSON pathOptions={{ color: '#5F6F52', weight: "1.5" }} className={style.peta_kota} data={petaDepokData} />
                        </FeatureGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay checked name="Peta Kecamatan Bojongsari">
                        <GeoJSON pathOptions={{ color: '#5F6F52', weight: "1.5" }} className={style.peta_kecamatan} data={petaKecamatanBojongsari} />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Jalan Kecamatan Bojongsari">
                        <GeoJSON pathOptions={{ color: '#d2691e', weight: "1" }} className={style.peta_jalan} data={jalanBojongsari} />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay checked name="Cafe">
                        <FeatureGroup>
                            {koordinatCafe.features.map((feature) => (
                                <Marker
                                    icon={redIcon}
                                    key={feature.properties.No}
                                    position={[
                                        feature.geometry.coordinates[1],
                                        feature.geometry.coordinates[0],
                                    ]}
                                >
                                    <Tooltip className={style.tooltip}>
                                        <strong>{feature.properties['Nama Cafe']}</strong>
                                        <br />
                                        {feature.properties['Alamat']}
                                    </Tooltip>
                                </Marker>
                            ))}
                        </FeatureGroup>
                    </LayersControl.Overlay>
                    {/* <CustomElement /> */}
                </LayersControl>
                <ZoomControl position="bottomright" />
                {/* <MiniMap mainMap={mapContainerRef} /> */}
            </MapContainer>
        </>
    )
}

export default index