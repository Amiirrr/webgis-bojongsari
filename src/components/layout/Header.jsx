import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import style from '../../styles/layout/header.module.css'

const Header = ({ fixedHeader }) => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 500);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${style.header} ${fixedHeader ? style.fixed_header : style.sticky_header} ${scrolled ? style.scrolled : ''}`}>
            <nav className={style.navigation}>
                <a className={`${(!fixedHeader || scrolled) ? style.nav_color : ""}`} onClick={() => { navigate('/home'), window.scrollTo(0, 0) }}>Home</a>
                <a className={`${(!fixedHeader || scrolled) ? style.nav_color : ""}`} onClick={() => navigate('/home')} href='#our_story'>Our Story</a>
                <a className={`${(!fixedHeader || scrolled) ? style.nav_color : ""}`} onClick={() => navigate('/home')} href='#news'>News</a>
                <a className={`${style.logo} ${(!fixedHeader || scrolled) ? style.nav_color : ""}`} onClick={() => navigate('/home')}>CDN</a>
                <a className={`${(!fixedHeader || scrolled) ? style.nav_color : ""}`} onClick={() => navigate('/home')} href='#testimoni'>Testimoni</a>
                <a className={`${(!fixedHeader || scrolled) ? style.nav_color : ""}`} onClick={() => navigate('/home')} href='#maps'>Maps</a>
                <a className={`${(!fixedHeader || scrolled) ? style.nav_color : ""}`} onClick={() => navigate('/about-us')}>About us</a>
            </nav>
        </div>
    )
}

export default Header

