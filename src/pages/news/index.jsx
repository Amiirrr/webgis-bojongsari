import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/layout/Header'
import News from '../../components/modules/home/News'
import Footer from '../../components/layout/Footer'

import style from '../../styles/news/news.module.css'

import { news } from '../../utils/data'

const index = () => {

    const { id } = useParams()
    const data = news.find(news => news.id == id)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div >
            <Header />
            <div className={style.news_wrapper}>
                <div className={style.news}>
                    <div className={style.news_image}>
                        <img src={data.image} alt="image" />
                    </div>
                    <div className={style.news_header}>
                        <div className={style.news_categori}>
                            <p>news</p>
                            <p>event</p>
                        </div>
                        <p className={style.tanggal}>{data.tanggal}</p>
                    </div>
                    <div className={style.news_judul}>
                        <span>{data.judul}</span>
                    </div>
                    <div className={style.news_isi}>
                        <p>{data.isi}</p>
                    </div>
                </div>
            </div>
            <News />
            <Footer />
        </div>
    )
}

export default index