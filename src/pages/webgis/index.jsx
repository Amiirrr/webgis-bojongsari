import React from 'react'
import { useState, useEffect, useRef } from 'react';

import { MapContainer, TileLayer, useMap, Marker, Popup, GeoJSON, LayersControl, FeatureGroup, Tooltip, ZoomControl } from 'react-leaflet'

import AnimatedPanning from '../../components/tools/AnimatedPanning';

import CustomElement from '../../components/tools/CustomElement';
import AsideBar from '../../components/asidebar/AsideBar';
import Header from '../../components/layout/header';

import petaDepokData from '../../utils/peta_depok.json';
import koordinatCafe from "../../utils/koordinat_cafe.json"
import jalanBojongsari from "../../utils/jalan_bojongsari.json"
import petaKecamatanBojongsari from "../../utils/kecamatan_bojongsari.json"

const index = () => {
    const animateRef = useRef(false)
    // const map = useMap();


    // const handleCenterMap = () => {
    //     map.setView([-6.40673123685437, 106.81567576657505], 12); // Ganti koordinat dan zoom sesuai kebutuhan
    // };
    return (
        <>
            {/* <div className='cont'>
                <div className='test'>
                    <button
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            padding: '8px',
                            backgroundColor: 'white',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                        onClick={handleCenterMap}
                    >
                        Center Map
                    </button>
                </div>
            </div> */}

            {/* <AsideBar /> */}
            <Header />
            <MapContainer center={[-6.40673123685437, 106.81567576657505]} zoom={12} scrollWheelZoom={true} zoomControl={false}>
                {/* <AnimatedPanning animateRef={animateRef} /> */}
                {/*   */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LayersControl position="topright">
                    <LayersControl.Overlay checked name="Peta Kota Depok">
                        <FeatureGroup pathOptions={{ color: 'purple' }}>
                            <GeoJSON data={petaDepokData} />
                        </FeatureGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Peta Kecamatan Bojongsari">
                        <GeoJSON data={petaKecamatanBojongsari} />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Jalan Kecamatan Bojongsari">
                        <GeoJSON data={jalanBojongsari} />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Cafe">
                        <FeatureGroup>
                            {koordinatCafe.features.map((feature) => (
                                <Marker
                                    key={feature.properties.No}
                                    position={[
                                        feature.geometry.coordinates[1],
                                        feature.geometry.coordinates[0],
                                    ]}
                                >
                                    <Tooltip>
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
            </MapContainer>
        </>
    )
}

export default index