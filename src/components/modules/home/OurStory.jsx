import React from 'react'
import style from '../../../styles/home/ourStory.module.css'

import img_story from '../../../assets/image/img_story.png'

const OurStory = () => {
    return (
        <div className={style.story}>
            <div className={style.story_header}>
                <div className={style.title}>
                    <span>Our Story</span>
                </div>
            </div>
            <div className={style.story_content}>
                <img src={img_story} alt="img_story" />
                <p className={style.isi_story}>Diawali dengan kecintaannya terhadap citarasa kopi, hingga akhirnya terbentuklah <strong>"Caffeine Depok Network"</strong> sebuah platform yang didedikasikan untuk memenuhi hasrat pecinta kopi di kelurahan Bojongsari, Depok. Komunitas ini menjadi wadah bagi mereka yang ingin mengeksplorasi keanekaragaman kopi, dan untuk itu, tercipta layanan web GIS yang inovatif. Melalui platform ini, Caffeine Depok Network memberikan panduan informatif tentang kedai-kedai kopi di sekitar Depok, tidak hanya memberikan lokasi, tetapi juga menghadirkan cerita unik dan informasi mendalam tentang spesialisasi masing-masing tempat, mengajak para pecinta kopi dalam perjalanan rasa yang lebih dalam.</p>
            </div>
        </div>
    )
}

export default OurStory