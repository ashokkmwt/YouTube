import React from 'react';
import MiniSideHeader from '../components/Main/MiniSideHeader/MiniSideHeader';
import SideHeader from '../components/Main/SideHeader/SideHeader';
import styles from './index.module.css';

const Base = ({ isHeader, currentTab, setCurrentTab, children }) => {
    return (
        <div className={styles.mainContainer}>
            {isHeader ?
                <MiniSideHeader currentTab={currentTab} setCurrentTab={setCurrentTab} /> :
                <SideHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />
            }
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default Base