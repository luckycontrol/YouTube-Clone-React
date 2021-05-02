import React from 'react'
import style from './App.module.css'
import { Header, Cards } from './components'

export default function App() {
    return (
        <div className={style.container}>
            <Header />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
    )
}