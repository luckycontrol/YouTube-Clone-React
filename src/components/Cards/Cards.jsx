import React from 'react'
import style from './Cards.module.css'

const Cards = () => {
    return (
        <div className={style.container}>
            <img className={style.thumnail} src="CardImage.jpg" alt="영상 이미지"></img>
            <div className={style.userIcon_and_videoInfo}>
                <div className={style.userIcon}></div>
                <div className={style.video_info}>
                    <div className={style.title_and_dot}>
                        <div className={style.title}>영상 제목</div>
                        <img className={style.dot} src="dot.jpeg" alt="도트"/>
                    </div>

                    <div className={style.username_and_viewers}>
                        <div className={style.username}>LuckyControl</div>
                        <div className={style.viewers_and_hours}>
                            <span>조회수 100만회</span>
                            <span>•</span>
                            <span>2시간 전</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards