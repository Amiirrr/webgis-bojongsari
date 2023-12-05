import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../layout/Header.jsx'
import Footer from '../../layout/Footer.jsx'
import JumbotronImage from '../../../assets/image/jumbotron2.jpg'
import style from '../../../styles/home/jumbotron.module.css'

const Jumbotron = () => {

    const navigate = useNavigate();
    return (
        <div>
            <Header fixedHeader />
            <div className={style.jumbotron}>
                <div className={style.jumbotron_content}>
                    <p>WebGIS</p>
                    <h1>Caffeine Depok <br />Network</h1>
                    <p>Kabupaten Bojongsari, Kota Depok.</p>
                    <button
                        onClick={() => navigate('/map')}
                    >Location</button>
                </div>
                <div className={style.jumbotron_image}>
                    <img src={JumbotronImage} alt="jumbotron_image" />
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Jumbotron