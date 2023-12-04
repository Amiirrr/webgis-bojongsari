import React from 'react'
import { useState } from 'react'

import searchIcon from '../../assets/image/search.png'

import style from '../../styles/tools/search.module.css'

const Search = ({ show, setShow, setInputSearch }) => {

    return (
        <div className={style.search_wrapper}
            onClick={() => setShow(true)}
        >
            <div className={style.search_input}>
                <input type="text" onChange={(e) => setInputSearch(e.target.value)} />
            </div>
            <div className={style.search_icon}>
                <img src={searchIcon} alt="icon-search" />
            </div>
        </div>
    )
}

export default Search