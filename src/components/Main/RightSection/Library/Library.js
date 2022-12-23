import React from 'react';
import styles from './Library.module.css';
import VideoCategory from '../../../../reusable/VideoCategory/VideoCategory';
import { useWindowSize } from 'react-use';

const Library = () => {

    const { width } = useWindowSize();

    const photoURL = localStorage.getItem('photoURL');

    return (
        <div className={styles.container}>
            <div>
                <VideoCategory category={"History"} firstIndex={0} lastIndex={9} />
                <VideoCategory category={"Watch Later"} firstIndex={9} lastIndex={16} />
                <VideoCategory category={"Liked Videos"} firstIndex={16} lastIndex={26} />
            </div>
            <div
                style={width <= 850 ? { display: 'none' } : { display: 'block' }}
                className={styles.userDetail}
            >
                <div className={styles.user}>
                    <div className={styles.logo}>
                        <img width='100%' height='100%' src={JSON.parse(photoURL)} alt='user' />
                    </div>
                    <p>User</p>
                </div>

                <div className={styles.line}></div>
                <div className={styles.activity}>
                    <span>Subscriptions</span>
                    <span>44</span>
                </div>

                <div className={styles.line}></div>
                <div className={styles.activity}>
                    <span>Uploads</span>
                    <span>0</span>
                </div>

                <div className={styles.line}></div>
                <div className={styles.activity}>
                    <span>Likes</span>
                    <span>4000</span>
                </div>

                <div className={styles.line}></div>
            </div>
        </div >
    )
}

export default Library