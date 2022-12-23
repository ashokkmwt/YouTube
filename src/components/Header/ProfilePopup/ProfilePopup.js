import React, { useRef } from 'react'
import styles from './ProfilePopup.module.css'
import { beforeSignintabs, tabs } from './data'

const ProfilePopup = ({ _ref, isSignIn, setIsSignIn }) => {

    const photoURL = localStorage.getItem('photoURL');

    const scrollRef = useRef(null);

    const userSignOut = () => {
        localStorage.removeItem('photoURL');
        setIsSignIn(false);
    }

    return (
        <div
            ref={_ref}
            className={styles.container}
            style={{ height: !isSignIn && '43rem' }}
        >
            {isSignIn &&
                <div className={styles.profileBar}>
                    <img width='100%' height='100%' src={JSON.parse(photoURL)} alt='user' />
                    <div className={styles.accountDetail}>
                        <h2>User Name</h2>
                        <p>User@gmail.com</p>
                        <span>Manage your Google Account</span>
                    </div>
                </div>
            }
            {isSignIn && <hr />}
            <div
                className={styles.bottom}
                ref={scrollRef}
                onMouseEnter={() => isSignIn ?
                    scrollRef.current.style.overflowY = 'scroll' :
                    scrollRef.current.style.overflowY = 'hidden'}
                style={{ height: !isSignIn && '100%' }}
            >
                {(isSignIn ? tabs : beforeSignintabs).map((tab, index) => {
                    return (
                        <div key={index} className={styles.tabBar} onClick={() => userSignOut(tab.title)}>
                            <img width='100%' height='100%' src={tab.logo} alt={tab.title} />
                            <p>{tab.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProfilePopup