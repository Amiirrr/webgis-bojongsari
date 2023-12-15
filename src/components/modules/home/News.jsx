import React from 'react'
import { useNavigate } from 'react-router-dom'

import { news } from '../../../utils/data'
import style from '../../../styles/home/news.module.css'

const News = () => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/cdn-news/${id}`)
    }

    return (
        <div className={style.news_wrapper} id='news'>
            <div className={style.news}>
                <div className={style.news_header}>
                    <p className={style.title}>CDN News</p>
                </div>
                <div className={style.news_content}>
                    {
                        news.map((data, index) => (
                            <div key={index} className={style.card_news}
                                onClick={() => handleClick(data.id)}
                            >
                                <img src={data.image} alt="image" />
                                <div className={style.card_content}>
                                    <p className={style.news_title}>{data.judul}</p>
                                    <p className={style.news_desc}>{data.isi}</p>
                                    <p className={style.news_date}>{data.tanggal}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default News