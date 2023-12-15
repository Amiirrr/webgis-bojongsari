import React from 'react'
import { useState, useEffect } from 'react';
import style from '../../styles/layout/header.module.css'
import { useNavigate } from 'react-router-dom';

const Header = ({ fixedHeader }) => {
    const [scrolled, setScrolled] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            // Periksa posisi scroll
            const scrollPosition = window.scrollY;

            // Atur state 'scrolled' berdasarkan posisi scroll
            setScrolled(scrollPosition > 500);
        };

        // Tambahkan event listener untuk peristiwa scroll
        window.addEventListener('scroll', handleScroll);

        // Membersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Efek ini hanya dijalankan sekali pada saat komponen di-mount

    return (
        <div className={`${style.header} ${fixedHeader ? style.fixed_header : style.sticky_header} ${scrolled ? style.scrolled : ''}`}>
            <nav className={style.navigation}>
                <a className={`${(!fixedHeader || scrolled) ? style.nav_color : ""}`} onClick={() => { navigate('/home'), window.scrollTo(0, 0) }}>Home</a>
                <a className={`${(!fixedHeader || scrolled) ? style.nav_color : ""}`} onClick={() => navigate('/home')} href='#news'>News</a>
                <a className={`${style.logo} ${(!fixedHeader || scrolled) ? style.nav_color : ""}`} onClick={() => navigate('/home')}>CDN</a>
                <a className={`${(!fixedHeader || scrolled) ? style.nav_color : ""}`} onClick={() => navigate('/home')} href='#maps'>Maps</a>
                <a className={`${(!fixedHeader || scrolled) ? style.nav_color : ""}`} onClick={() => navigate('/about-us')}>About us</a>
            </nav>
        </div>
    )
}

export default Header

