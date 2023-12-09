import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Layout from "./components/Layout";
import Map from './pages/webgis'
import Home from "./pages/home";
import AboutUs from "./components/modules/about_us/AboutUs";
import News from './pages/news/index'
import MapTest from './pages/webgis/testmap'


function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/cdn-news/:id" element={<News />} />
                <Route path="/map-test" element={<MapTest />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
