import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import burgerIcon from '../../assets/image/menu-burger.png'
import homeIcon from '../../assets/image/home.png'
import markIcon from '../../assets/image/marker.png'
import closeIcon from '../../assets/image/cross.png'
import cafe from '../../assets/image/jumbotron2.jpg'
import data from '../../utils/koordinat_cafe.json'

import img1 from '../../assets/image/cafe_konkow/Konkow caffe 1.jpg'
import img2 from '../../assets/image/cafe_konkow/Konkow caffe 2.jpg'
import img3 from '../../assets/image/cafe_konkow/Konkow caffe 3.jpg'
import img4 from '../../assets/image/cafe_konkow/Konkow caffe 4.jpg'
import img5 from '../../assets/image/cafe_konkow/Konkow caffe 5.jpg'

import Style from "./asideBar.module.css"

const AsideBar = ({ openSidebar, setOpenSidebar, inputSearch, setInputSearch }) => {
    const navigate = useNavigate()
    const dataCafe = data.features.map(feature => feature.properties)
    // const [openSidebar, setOpenSidebar] = useState(false)
    const [selectedCafe, setSelectedCafe] = useState(null)
    const [infoCafe, setInfoCafe] = useState(false)
    const [cardContentOption, setCardContentOption] = useState("Ringkasan");

    const handleCafeOption = (cafeName) => {
        const selectedCafe = dataCafe.find(cafe => cafe["Nama Cafe"] === cafeName);
        if (selectedCafe) {
            setSelectedCafe(selectedCafe)
            setInfoCafe(true)
        }
    }
    console.log(selectedCafe)

    const handleSearch = () => {
        const seacrhCafe = inputSearch.toLowerCase();

        return dataCafe.filter(
            (cafe) =>
                cafe["Nama Cafe"].toLowerCase().includes(seacrhCafe) ||
                cafe.Alamat.toLowerCase().includes(seacrhCafe)
        );
    };

    const filteredCafeData = inputSearch === null || inputSearch === "" ? dataCafe : handleSearch();


    const renderSidebar = () => {
        return (
            <div className={`${Style.asidebar} ${!openSidebar ? Style.aside_close : ""}`}>
                <div className={Style.header}>
                    <h3 className={Style.title}>Daftar Coffee Shop</h3>
                    <div className={Style.close}>
                        <img src={closeIcon} alt="close"
                            onClick={() => setOpenSidebar(!openSidebar)}
                        />
                    </div>
                </div>
                <div className={Style.content}>
                    {
                        filteredCafeData.map((data, index) => (
                            <div key={index} className={Style.content_item}
                                onClick={() => handleCafeOption(data["Nama Cafe"])}
                            >
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

    const renderSelectionCafe = (selectedData) => {
        return (
            <div className={`${Style.card_cafe} ${!infoCafe ? Style.aside_close : ""}`}>
                <div className={Style.card_image}>
                    <img src={cafe} alt="card-Image" />
                    <div className={Style.card_close}>
                        <img src={closeIcon} alt="close"
                            onClick={() => setInfoCafe(!infoCafe)} />
                    </div>
                </div>
                <div className={Style.card_header}>
                    <h3 className={Style.card_title}>{selectedData["Nama Cafe"]}</h3>
                    <p>{selectedData.Ulasan} <span className={Style.star_full}>&#9733;&#9733;&#9733;&#9733;</span><span className={Style.star_half}>&#9733;</span>(10050)</p>
                    <p>Coffee Shop</p>
                </div>
                <div className={Style.card_content_option}>
                    <p className={cardContentOption === "Ringkasan" ? Style.option_active : ""}
                        onClick={() => setCardContentOption("Ringkasan")}
                    >Ringkasan</p>
                    <p className={cardContentOption === "Tentang" ? Style.option_active : ""}
                        onClick={() => setCardContentOption("Tentang")}
                    >Tentang</p>
                </div>
                <div className={Style.card_content}>
                    {
                        cardContentOption === "Ringkasan" ? (
                            <React.Fragment>
                                <div className={Style.informasi_cafe}>
                                    <div className={Style.alamat_cafe}>
                                        <img src={markIcon} alt="marker" />
                                        <p>{selectedData.Alamat}</p>
                                    </div>
                                    <div className={Style.w_informasi}>
                                        <p className={Style.sub_title}>Longtitude</p>
                                        <p>{selectedData.Longitude}</p>
                                    </div>
                                    <div className={Style.w_informasi}>
                                        <p className={Style.sub_title}>Latitude</p>
                                        <p>{selectedData.Latitude}</p>
                                    </div>
                                    <div className={Style.w_informasi}>
                                        <p className={Style.sub_title}>Jadwal</p>
                                        <div>
                                            {
                                                selectedData["Jam Operas"].map((data) => (
                                                    <p>{data}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={Style.w_informasi}>
                                        <p className={Style.sub_title}>Contact</p>
                                        <p>{selectedData.Informasi}</p>
                                    </div>
                                </div>

                                <div className={Style.photos_cafe}>
                                    <p className={Style.section_title}>Photos</p>
                                    <div className={Style.photos}>
                                        <img src={img1} alt="img1" />
                                        <img src={img2} alt="img1" />
                                        <img src={img3} alt="img1" />
                                        <img src={img4} alt="img1" />
                                        <img src={img5} alt="img1" />
                                    </div>
                                </div>
                            </React.Fragment>
                        ) :
                            (cardContentOption === "Tentang" ? (
                                <React.Fragment>
                                    <div className={Style.w_tentang}>
                                        <p className={Style.tentang_title}>Opsi Layanan</p>
                                        <div className={Style.item_wrapper}>
                                            {
                                                selectedData["Opsi Layan"].map((data) => (
                                                    <p className={Style.tentang_item}>{data}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={Style.w_tentang}>
                                        <p className={Style.tentang_title}>Fasilitas</p>
                                        <div className={Style.item_wrapper}>
                                            {
                                                selectedData.Fasiltas.map((data) => (
                                                    <p className={Style.tentang_item}>{data}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={Style.w_tentang}>
                                        <p className={Style.tentang_title}>Pembayaran</p>
                                        <div className={Style.item_wrapper}>
                                            {
                                                selectedData.Pembayaran.map((data) => (
                                                    <p className={Style.tentang_item}>{data}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </React.Fragment>
                            ) : ""
                            )
                    }
                </div>
            </div>
        )

    }

    return (
        <div className={Style.container_asidebar}>
            <div className={Style.menu}>
                <img src={burgerIcon} alt="menu"
                    onClick={() => setOpenSidebar(!openSidebar)}
                // onClick={() => setInfoCafe(!infoCafe)}

                />
            </div>
            <div className={Style.home}>
                <img src={homeIcon} alt="home"
                    onClick={() => navigate('/')}
                />
            </div>
            {
                openSidebar && (
                    renderSidebar()
                )
            }

            {
                infoCafe && (
                    renderSelectionCafe(selectedCafe)
                )
            }





        </div>
    )
}

export default AsideBar