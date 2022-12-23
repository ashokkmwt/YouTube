import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import More from '../../../../../assets/icons/more.svg'
import styles from './Videos.module.css'

const Videos = ({ v, i }) => {

    const navigate = useNavigate();

    const ref = useRef(null);

    const displayRef = useRef(null);

    const sendParams = (id) => navigate('/rcmdVideo', { state: { videoId: id } });

    const mouseEnter = () => {
        ref.current.style.background = 'rgba(128, 128, 128, 0.2)';
        displayRef.current.style.display = 'flex';
    }

    const mouseLeave = () => {
        ref.current.style.background = 'unset';
        displayRef.current.style.display = 'none';
    }

    return (
        <div
            ref={ref}
            className={styles.video}
            onClick={() => sendParams(v.id)}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            <div className={styles.thumbnail}>
                <img
                    width="100%"
                    height="100%"
                    src={v.snippet.thumbnails.high.url}
                    alt={v.snippet.title}
                />
            </div>
            <div className={styles.videoDetail}>
                <div className={styles.heading}>
                    <h1>{v.snippet.title}</h1>
                    <h5>{v.snippet.channelTitle}</h5>
                    <p>3.4k views {i % 2 === 0 ? <span>32 minutes</span> : <span>1hour</span>}</p>
                </div>
                <div
                    ref={displayRef}
                    className={styles.threeDotLogo}>
                    <img width='100%' height='100%' src={More} alt='more' />
                </div>
            </div>
        </div >
    )
}

export default Videos;