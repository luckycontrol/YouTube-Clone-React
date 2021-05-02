import React from 'react'
import style from './App.module.css'
import { Header, Videos, Menu } from './components'

export default function App() {
    return (
        <div className={style.container}>
            <Header />
            <div className={style.menu_and_videos}>
                <Menu />
                <Videos />
            </div>
        </div>
    )
}