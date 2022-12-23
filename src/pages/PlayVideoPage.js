import React from 'react';
import styles from './index.module.css';
import PlayVideo from '../components/Main/PlayVideo/PlayVideo';
import SideHeader from '../components/Main/SideHeader/SideHeader';

const PlayVideoPage = ({ isHeader, currentTab, setCurrentTab }) => {
    return (
        <div className={styles.videoContainer}>
            {isHeader && <SideHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />}
            <PlayVideo />
        </div>
    )
}

export default PlayVideoPage