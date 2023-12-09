import React from 'react'
import Header from '../../components/layout/Header'
import Jumbotron from '../../components/modules/home/Jumbotron'
import OurStory from '../../components/modules/home/OurStory'
import News from '../../components/modules/home/News'
import Testimoni from '../../components/modules/home/Testimoni'
import Footer from '../../components/layout/Footer'
import NavMap from '../../components/modules/home/NavMap'

import style from '../../styles/home/home.module.css'

const Home = () => {
    return (
        <div className={style.home}>
            <Header fixedHeader />
            <Jumbotron />
            <OurStory />
            <News />
            <Testimoni />
            <NavMap />
            <Footer />
        </div>
    )
}

export default Home