import React from 'react'
import style from './Videos.module.css'
import Cards from '../Cards/Cards'

const Videos = () => {
    return (
        <div className={style.container}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
    )
}

export default Videos;