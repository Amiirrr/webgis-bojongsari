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
                            <a href="https://www.instagram.com/amirkholiluddin/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="instagram" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/amirkholiluddin/" target="_blank" rel="noopener noreferrer">
                                <img src={youtube} alt="youtube" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/amirkholiluddin/" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="twitter" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/Amiirrr" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="github" />
                            </a>
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