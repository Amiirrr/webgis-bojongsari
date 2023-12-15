import React from 'react'
import { useNavigate } from 'react-router-dom'

import prevMap from '../../../assets/image/preview_map.svg'
import iconNav from '../../../assets/image/illustration/nav_map.png'

import style from '../../../styles/home/navmap.module.css'

const NavMap = () => {

    const navigate = useNavigate();
    return (
        <div className={style.navmap_wrapper} id='maps'>
            <div className={style.container}>
                <div className={style.navmap}>
                    <div className={style.header}>
                        <span className={style.title}>Let's find out!</span>
                    </div>
                    <div className={style.preview}>
                        <img src={prevMap} alt="preview-map" className={style.mini_map} />
                        <div className={style.bg_wrapper}>
                            <div className={style.icon_wrapper}
                                onClick={() => navigate('/map')}>
                                <img src={iconNav} alt="icon" className={style.icon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMap