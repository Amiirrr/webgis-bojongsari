
const ZoomControl = () => {
    // Instantiate your leaflet map object..
    //
    var map = L.map('map', {
        minZoom: 13,
        maxZoom: 18,
        zoomControl: false                // set to false !
    }).setView([34.00, -81.035], 14);   // sets the reusable home position

    // Instantiate the ZoomBar control..
    //
    var zoom_bar = new L.Control.ZoomBar({ position: 'topright' }).addTo(map);
    return
}

export default ZoomControl