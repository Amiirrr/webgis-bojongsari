import React from 'react'

import searchIcon from '../../assets/image/search.png'

import style from '../../styles/tools/search.module.css'

const Search = ({ show, setShow, inputSearch, setInputSearch }) => {

    return (
        <div className={style.search_wrapper}
            onClick={() => setShow(true)}
        >
            <div className={style.search_input}>
                <input type="text"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)} />
            </div>
            <div className={style.search_icon}>
                <img src={searchIcon} alt="icon-search" />
            </div>
        </div>
    )
}
export default Search