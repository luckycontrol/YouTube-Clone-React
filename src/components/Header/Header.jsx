import React from 'react'
import style from './Header.module.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import DashboardIcon from '@material-ui/icons/Dashboard'
import MicIcon from '@material-ui/icons/Mic'

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.icon_and_title}>
                    <div className={style.menu}>
                        <div className={style.menu_element}></div>
                        <div className={style.menu_element}></div>
                        <div className={style.menu_element}></div>
                    </div>
                    <img className={style.icon} src="https://seeklogo.com/images/Y/youtube-2017-icon-logo-D1FE045118-seeklogo.com.png" alt="icon"/>
                    <span className={style.title}>Premium</span>
                </div>

                <div className={style.searchBar_and_mic}>
                    <input className={style.searchBar} type="text" placeholder="검색" />
                    <MicIcon className={style.mic} />
                </div>

                <div className={style.search_and_user}>
                    <img className={style.search} src="search.png" alt="search"></img>
                    <VideocamIcon className={style.camera} />
                    <DashboardIcon className={style.dashboard} />
                    <span className={style.user}></span>
                </div>
            </div>
        </div>
    )
}

export default Header;