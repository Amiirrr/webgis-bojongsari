import React from 'react'
import style from '../../styles/layout/footer.module.css'
import instagram from '../../assets/image/instagram.png'
import youtube from '../../assets/image/youtube.png'
import twitter from '../../assets/image/twitter.png'
import github from '../../assets/image/github.png'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer_container}>
                <div className={style.footer_content}>
                    <div className={style.content_logo}>
                        <p>CDN</p>
                        <p>Caffeine Depok Network</p>
                    </div>
                    <div className={style.content_info}>
                        <p>Jl. Raya Ciputat – Parung Km. 24 Bojongsari, Kota Depok, Jawa Barat</p>
                    </div>
                    <div className={style.content_sosmed}>
                        <div>
                            <img src={instagram} alt="instagram" />
                        </div>
                        <div>
                            <img src={youtube} alt="youtube" />
                        </div>
                        <div>
                            <img src={twitter} alt="twitter" />
                        </div>
                        <div>
                            <img src={github} alt="github" />
                        </div>
                    </div>
                </div>
                <div className={style.footer_copyright}>
                    <p>© 2023 Kelompok 6 QGIS, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer