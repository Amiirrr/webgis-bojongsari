import React from 'react'
import imgTestimoni from "../../../assets/image/jumbotron.jpg"

import style from '../../../styles/home/testimoni.module.css'

const Testimoni = () => {
    return (
        <div className={style.testimoni_wrapper}>
            <div className={style.testimoni}>
                <div className={style.testimoni_header}>
                    <p className={style.title}>Testimoni</p>
                </div>
                <img
                    className={style.img}
                    src={imgTestimoni} alt="img" />
                <div className={style.testimoni_content}>
                    <div className={style.testimoni_card}>
                        <div className={style.isi}>
                            <p>Saya selalu mencari tempat untuk berkumpul dan menikmati kopi dengan teman-teman. Caffeine Depok Network tidak hanya memberikan lokasi kedai-kedai kopi yang nyaman di Bojongsari, tetapi juga merangkul kita dalam cerita unik di balik setiap cangkir.</p>
                        </div>
                        <div className={style.mention}>
                            <p>@kimir</p>
                        </div>
                    </div>
                    <div className={style.testimoni_card}>
                        <div className={style.isi}>
                            <p>Caffeine Depok Network membantu Warung Kopi "Rasa Nusantara" tumbuh pesat. Cerita kami dan informasi mendalam tentang kopi menarik perhatian pelanggan, meningkatkan kunjungan, dan membuat kami lebih terhubung dengan komunitas. Terima kasih, Caffeine Depok Network!</p>
                        </div>
                        <div className={style.mention}>
                            <p>@kopi.nusantara</p>
                        </div>
                    </div>
                    <div className={style.testimoni_card}>
                        <div className={style.isi}>
                            <p>Sebagai pecinta kopi dan penikmat petualangan, Caffeine Depok Network adalah jawaban untuk hasrat saya. Dengan GIS mereka, saya dapat mengeksplorasi berbagai kedai kopi di sekitar Depok, menemukan tempat-tempat tersembunyi dengan cita rasa yang luar biasa.</p>
                        </div>
                        <div className={style.mention}>
                            <p>@irwanto</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimoni