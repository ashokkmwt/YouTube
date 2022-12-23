import React, { useContext } from 'react'
import styles from './VideoCategory.module.css';
import Video from '../Video/Video';
import VideoContext from '../../components/context/VideoContext/VideoContext';

const VideoCategory = ({ category, firstIndex, lastIndex }) => {

    const videos = useContext(VideoContext);

    return (
        <div>
            <h2 className={styles.time}>{category && category}</h2>
            <div className={styles.videos}>
                {videos.map((v, i) => {
                    return (
                        <React.Fragment key={i}>
                            {
                                (i > firstIndex && i < lastIndex) && <Video v={v} i={i} style={{ maxWidth: '22rem' }} styleHeight={{ height: '15rem' }} />
                            }
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    )
}

export default VideoCategory