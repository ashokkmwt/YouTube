import React from 'react';
import VideoCategory from '../../../../reusable/VideoCategory/VideoCategory';
import styles from './Subscription.module.css';

const Subscription = () => {
    return (
        <div className={styles.container}>
            <VideoCategory category={"Today"} firstIndex={0} lastIndex={4} />
            <VideoCategory category={"Yesterday"} firstIndex={4} lastIndex={12} />
            <VideoCategory category={"This Week"} firstIndex={0} lastIndex={22} />
        </div>
    )
}

export default Subscription