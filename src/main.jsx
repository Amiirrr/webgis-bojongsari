import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router'
import './global.css'
// import "react-leaflet-fullscreen/dist/styles.css";
// import 'leaflet-minimap';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
