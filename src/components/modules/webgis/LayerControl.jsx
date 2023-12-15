import React from 'react'
import { TileLayer, Marker, GeoJSON, LayersControl, FeatureGroup, Tooltip } from 'react-leaflet'

import petaDepokData from '../../../utils/peta_depok.json'
import koordinatCafe from "../../../utils/koordinat_cafe.json"
import jalanBojongsari from "../../../utils/jalan_bojongsari.json"
import petaKecamatanBojongsari from "../../../utils/kecamatan_bojongsari.json"

import { marker } from '../../tools/IconTooltip'

import style from '../../../styles/webgis/layerControl.module.css'
const LayerControl = () => {
    return (
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
            <LayersControl.BaseLayer name="Nat Geo World Map">
                <TileLayer
                    attribution="Nat Geo World Map"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Google Satellite">
                <TileLayer
                    attribution="Google Satellite Hybrid"
                    url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer checked name="Google Maps">
                <TileLayer
                    attribution="Google Maps"
                    url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Google Roads">
                <TileLayer
                    attribution="Google Roads"
                    url="https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}"
                />
            </LayersControl.BaseLayer>

            <LayersControl.Overlay checked name="Peta Kota Depok">
                <FeatureGroup >
                    <GeoJSON
                        pathOptions={{ color: '#49108B', weight: "2" }}
                        className={style.peta_kota}
                        data={petaDepokData} />
                </FeatureGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay checked name="Peta Kecamatan Bojongsari">
                <GeoJSON pathOptions={{ color: '#C4317B', weight: "2" }} className={style.peta_kecamatan} data={petaKecamatanBojongsari} />
            </LayersControl.Overlay>

            <LayersControl.Overlay name="Jalan Kecamatan Bojongsari">
                <GeoJSON
                    pathOptions={{ color: '#000000', weight: "0.5" }}
                    className={style.peta_jalan}
                    data={jalanBojongsari} />
            </LayersControl.Overlay>

            <LayersControl.Overlay checked name="Cafe">
                <FeatureGroup>
                    {koordinatCafe.features.map((feature) => (
                        <Marker
                            icon={marker}
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
        </LayersControl>)
}

export default LayerControl