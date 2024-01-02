import React from 'react'
import { useEffect } from 'react';

import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx'

import { team } from '../../../utils/data'
import style from '../../../styles/about_us/aboutUs.module.css'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header />
            <div className={style.about}>
                <div className={style.about_container}>
                    <div className={style.about_title}>
                        <h3>- The Founders by Kelompok 3</h3>
                    </div>
                    <div className={style.about_item}>
                        {
                            team.map((data) => (
                                <div className={style.item}>
                                    <div className={style.item_image}>
                                        <img src={data.img} alt="" />
                                    </div>
                                    <div className={style.item_desc}>
                                        <p>{data.nama}</p>
                                        <p>{data.nim}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className={style.about_desc}>
                        <p>7A</p>
                        <p>Aplikasi Sistem Informasi Geografis</p>
                        <p>Dosen Pengampu: Ibu Eva Khudzaeva, M.Si</p>
                        <p>UNIVERSITAS ISLAM NEGERI SYARIF HIDAYATULLAH JAKARTA</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs