import React, { useContext } from 'react';
import styles from './WatchLater.module.css';
import More from '../../../../assets/icons/more.svg';
import Play from '../../../../assets/icons/playBlack.svg';
import Shuffle from '../../../../assets/icons/shuffle.svg';
import Sort from '../../../../assets/icons/sort.svg';
import Videos from './Videos/Videos';
import VideoContext from '../../../context/VideoContext/VideoContext';

const WatchLater = () => {

    const videos = useContext(VideoContext);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.thumbnail}>
                    <img
                        width="100%"
                        height="100%"
                        src={videos[0].snippet.thumbnails.high.url}
                        alt={videos[0].snippet.title}
                    />
                </div>
                <h1>Watch Later</h1>
                <p>Array.length</p>
                <div className={styles.moreIcon}>
                    <img width='100%' height='100%' src={More} alt='more' />
                </div>
                <div className={styles.buttonBar}>
                    <div className={styles.playBtn}>
                        <img width='100%' height='100%' src={Play} alt='play' />
                        <span>Play all</span>
                    </div>

                    <div className={styles.shuffle}>
                        <img width='100%' height='100%' src={Shuffle} alt='play' />
                        <span>Shuffle</span>
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.sortBtn}>
                    <img width='100%' height='100%' src={Sort} alt='Sort' />
                    <p>Sort</p>
                </div>

                {videos.map((v, i) => <Videos v={v} i={i} key={i} />)}
            </div>
        </div>
    )
}

export default WatchLater