import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import burgerIcon from '../../assets/image/menu-burger.png'
import homeIcon from '../../assets/image/home.png'
import closeIcon from '../../assets/image/cross.png'
import cafe from '../../assets/image/jumbotron2.jpg'
import data from '../../utils/koordinat_cafe.json'

import Style from "./asideBar.module.css"

const AsideBar = ({ openSidebar, setOpenSidebar, inputSearch, setInputSearch }) => {
    const navigate = useNavigate()
    const dataCafe = data.features.map(feature => feature.properties)
    // const [openSidebar, setOpenSidebar] = useState(false)

    const handleSearch = () => {
        const seacrhCafe = inputSearch.toLowerCase();

        return dataCafe.filter(
            (cafe) =>
                cafe["Nama Cafe"].toLowerCase().includes(seacrhCafe) ||
                cafe.Alamat.toLowerCase().includes(seacrhCafe)
        );
    };

    const filteredCafeData = inputSearch === null || inputSearch === "" ? dataCafe : handleSearch();


    return (
        <div className={Style.container_asidebar}>
            <div className={Style.menu}>
                <img src={burgerIcon} alt="menu"
                    onClick={() => setOpenSidebar(!openSidebar)}
                />
            </div>
            <div className={Style.home}>
                <img src={homeIcon} alt="home"
                    onClick={() => navigate('/')}
                />
            </div>
            {
                openSidebar && (
                    <div className={`${Style.asidebar} ${!openSidebar ? Style.aside_close : ""}`}>
                        <div className={Style.header}>
                            <h3 className={Style.title}>Daftar Coffee Shop</h3>
                            <div className={Style.close}>
                                <img src={closeIcon} alt="close" onClick={() => setOpenSidebar(!openSidebar)} />
                            </div>
                        </div>
                        <div className={Style.content}>
                            {
                                filteredCafeData.map((data, index) => (
                                    <div key={index} className={Style.content_item}>
                                        <div className={Style.content_img}>
                                            <img src={cafe} alt="cafe" />
                                        </div>
                                        <div className={Style.content_isi}>
                                            <p>{data["Nama Cafe"]}</p>
                                            <p>{data.Alamat}</p>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default AsideBar