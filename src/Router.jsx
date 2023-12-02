import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Layout from "./components/Layout";
import Map from './pages/webgis'
import Home from "./pages/home";
import AboutUs from "./components/modules/about_us/AboutUs";


function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/map" element={<Map />}
                />
            </Routes>
            <Routes>
                <Route path="/about-us" element={<AboutUs />}
                />
            </Routes>
        </Router>
    );
}

export default AppRouter;
