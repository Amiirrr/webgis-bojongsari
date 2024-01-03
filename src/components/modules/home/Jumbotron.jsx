import React from 'react'
import { useNavigate } from 'react-router-dom'

import JumbotronImage from '../../../assets/image/jumbotron2.jpg'
import style from '../../../styles/home/jumbotron.module.css'

const Jumbotron = () => {

    const navigate = useNavigate();
    return (
        <div>
            <div className={style.jumbotron}>
                <div className={style.jumbotron_content}>
                    <p>WebGIS</p>
                    <h1>Caffeine Depok<br />Network</h1>
                    <p>Kecamatan Bojongsari, Kota Depok.</p>
                    <button
                        onClick={() => navigate('/map')}
                    >Location &#10132;</button>
                </div>
                <div className={style.jumbotron_image}>
                    <img src={JumbotronImage} alt="jumbotron_image" />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron