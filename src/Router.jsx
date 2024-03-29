import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Map from './pages/webgis'
import Home from "./pages/home";
import AboutUs from "./components/modules/about_us/AboutUs";
import News from './pages/news/index'


function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/cdn-news/:id" element={<News />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
