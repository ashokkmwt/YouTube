import React from 'react'
import { useNavigate } from 'react-router-dom';
import More from '../../assets/icons/more.svg'
import styles from './Video.module.css'

const Video = ({ v, i, style, styleHeight }) => {

    const navigate = useNavigate();

    const sendParams = (id, title, channelTitle, thumbnail) => {
        navigate('/video', {
            state: {
                videoId: id,
                videoTitle: title,
                channelTitle: channelTitle,
                thumbnail: thumbnail
            }
        })
    }

    return (
        <div
            style={style && style}
            className={styles.video}
            onClick={() =>
                sendParams(
                    v.id,
                    v.snippet.title,
                    v.snippet.channelTitle,
                    v.snippet.thumbnails.default.url
                )}
        >
            <div style={styleHeight && styleHeight} className={styles.thumbnail}>
                <img
                    width="100%"
                    height="100%"
                    src={v.snippet.thumbnails.high.url}
                    alt={v.snippet.title}
                />
            </div>
            <div className={styles.videoDetail}>
                <div className={styles.videoLogo}>
                    <img
                        width="100%"
                        height="100%"
                        src={v.snippet.thumbnails.default.url}
                        alt={v.snippet.title}
                    />
                </div>
                <div className={styles.heading}>
                    <h1>{v.snippet.title}</h1>
                    <h5>{v.snippet.channelTitle}</h5>
                    <p>3.4k views {i % 2 === 0 ? <span>32 minutes</span> : <span>1hour</span>}</p>
                </div>
                <div className={styles.threeDotLogo}>
                    <img width='100%' height='100%' src={More} alt='more' />
                </div>
            </div>
        </div >
    )
}

export default Video