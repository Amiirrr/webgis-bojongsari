import React from 'react'
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Make sure to import Leaflet CSS

import { MapContainer, TileLayer, useMap, Marker, Popup, GeoJSON, LayersControl, FeatureGroup, Tooltip, ZoomControl, useMapEvent, Rectangle } from 'react-leaflet'
import { useEventHandlers } from '@react-leaflet/core'

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
    const [selectedCafe, setSelectedCafe] = useState(null);
    const [center, setCenter] = useState([-6.40673123685437, 106.81567576657505]);
    const [zoom, setZoom] = useState(12);

    const mapRef = useRef()

    useEffect(() => {
        const map = mapRef.current;
        // Dapatkan referensi ke objek peta dari properti map

        if (selectedCafe) {
            // Periksa apakah map telah dimuat sebelumnya
            if (map) {
                map.flyTo([selectedCafe.Latitude, selectedCafe.Longitude], 15, {
                    animate: true,
                    duration: 1, // Sesuaikan durasi sesuai kecepatan animasi yang diinginkan
                });
            }
        }
        // if (!selectedCafe) {
        //     if (map) {
        //         map.flyTo(center, zoom, {
        //             animate: true,
        //             duration: 1, 
        //         });
        //     }
        // }

    }, [selectedCafe])


    const redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        iconSize: [15, 25],
    });
    // console.log(selectedCafe)

    // Classes used by Leaflet to position controls
    const POSITION_CLASSES = {
        bottomleft: 'leaflet-bottom leaflet-left',
        bottomright: 'leaflet-bottom leaflet-right',
        topleft: 'leaflet-top leaflet-left',
        topright: 'leaflet-top leaflet-right',
    }

    const BOUNDS_STYLE = { weight: 1 }

    function MinimapBounds({ parentMap, zoom }) {
        const minimap = useMap()

        // Clicking a point on the minimap sets the parent's map center
        const onClick = useCallback(
            (e) => {
                parentMap.setView(e.latlng, parentMap.getZoom())
            },
            [parentMap],
        )
        useMapEvent('click', onClick)

        // Keep track of bounds in state to trigger renders
        const [bounds, setBounds] = useState(parentMap.getBounds())
        const onChange = useCallback(() => {
            setBounds(parentMap.getBounds())
            // Update the minimap's view to match the parent map's center and zoom
            minimap.setView(parentMap.getCenter(), zoom)
        }, [minimap, parentMap, zoom])

        // Listen to events on the parent map
        const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [])
        useEventHandlers({ instance: parentMap }, handlers)

        return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />
    }

    function MinimapControl({ position, zoom }) {
        const parentMap = useMap()
        const mapZoom = zoom || 0

        // Memoize the minimap so it's not affected by position changes
        const minimap = useMemo(
            () => (
                <MapContainer
                    style={{ height: 150, width: 150 }}
                    center={parentMap.getCenter()}
                    zoom={mapZoom}
                    dragging={false}
                    doubleClickZoom={false}
                    scrollWheelZoom={false}
                    attributionControl={false}
                    zoomControl={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
                </MapContainer>
            ),
            [],
        )

        const positionClass =
            (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright
        return (
            <div className={positionClass}>
                <div className="leaflet-control leaflet-bar">{minimap}</div>
            </div>
        )
    }

    return (
        <>
            <Search
                show={openSidebar}
                setShow={setOpenSidebar}
                setInputSearch={setInputSearch} />
            <AsideBar
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
                inputSearch={inputSearch}
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
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="OpenStreetMap">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Stadia Outdoor">
                        <TileLayer
                            url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.Overlay checked name="Peta Kota Depok">
                        <FeatureGroup >
                            <GeoJSON
                                pathOptions={{ color: '#5F6F52', weight: "1.5" }}
                                className={style.peta_kota}
                                data={petaDepokData} />
                        </FeatureGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay checked name="Peta Kecamatan Bojongsari">
                        <GeoJSON pathOptions={{ color: '#5F6F52', weight: "1.5" }} className={style.peta_kecamatan} data={petaKecamatanBojongsari} />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Jalan Kecamatan Bojongsari">
                        <GeoJSON
                            pathOptions={{ color: '#d2691e', weight: "1" }}
                            className={style.peta_jalan}
                            data={jalanBojongsari} />
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
                                    ]}>
                                    <Tooltip direction='top' className={style.tooltip}>
                                        <div className={style.select_tooltip}>
                                            <div className={style.image}>
                                                <img src={feature.properties.image[0]} alt="" />
                                            </div>
                                            <div className={style.content}>
                                                <p>{feature.properties['Nama Cafe']}</p>
                                                <p>{feature.properties['Alamat']}</p>
                                            </div>
                                        </div>
                                    </Tooltip>
                                </Marker>
                            ))}
                        </FeatureGroup>
                    </LayersControl.Overlay>
                </LayersControl>
                <ZoomControl position="topright" style={{ top: '0px' }} />
                <MinimapControl position="bottomright" zoom={5} />
                {
                    selectedCafe && (
                        <Marker
                            icon={redIcon}
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


// const handleCenterMap = () => {
//     map.setView([-6.40673123685437, 106.81567576657505], 12); // Ganti koordinat dan zoom sesuai kebutuhan
// };