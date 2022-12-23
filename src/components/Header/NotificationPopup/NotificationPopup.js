import React from 'react'
import styles from './NotificationPopup.module.css'
import Setting from '../../../assets/icons/settings.svg'
import Notification from '../../../assets/icons/notification.svg'

const NotificationPopup = ({ _ref }) => {
    return (
        <div ref={_ref} className={styles.container}>
            <div className={styles.top}>
                <p>Notifications</p>
                <img width='100%' height='100%' src={Setting} alt='setting' />
            </div>
            <hr />
            <div className={styles.bottom}>
                <img width='100%' height='100%' src={Notification} alt='notification' />
                <h2>Your notifications live here</h2>
                <p>Subscribe to your favourite channels to receive notifications about their latest videos.</p>
            </div>
        </div>
    )
}

export default NotificationPopup