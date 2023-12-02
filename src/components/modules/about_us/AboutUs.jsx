import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/Footer'

import amir from '../../../assets/image/Amir.jpg'

import { team } from '../../../utils/data'

import style from '../../../styles/about_us/aboutus.module.css'

const AboutUs = () => {
    return (
        <div>
            <Header />
            <div className={style.about}>
                <div className={style.about_container}>
                    <div className={style.about_title}>
                        <h3>-About us</h3>
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
                        <p>UNIVERSITAS ISLAM NEGERI SYARIF HIDAYATULLAH JAKARTA</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs