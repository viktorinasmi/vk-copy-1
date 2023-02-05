import React, {FC, useState} from "react";
import {Search} from "@mui/icons-material";
import vk from './vkIcon.png'

import styles from './Header.module.css'

export const Header:FC =() =>{
    const [isSearchActive, setIsSearchActive] = useState(false);

    return(
        <header className={styles.header}>
            <div className={styles.imgWrapper}>
            <img src={vk} alt="logo"/>
            </div>
            <div className={styles.wrapper}>
                {!isSearchActive && <Search />}
            <input type="text" placeholder="Поиск" onClick={() => setIsSearchActive(true)}/>
            </div>
        </header>
    )
}
