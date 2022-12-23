import React from 'react'
import styles from './CreatePopup.module.css'
import Upload from '../../../assets/icons/library.svg'
import Live from '../../../assets/icons/live.svg'

const CreatePopup = ({ _ref }) => {
    return (
        <div ref={_ref} className={styles.container}>
            <div className={styles._bar}>
                <img width='100%' height='100%' src={Upload} alt='upload' />
                <p>Upload Video</p>
            </div>
            <div className={styles._bar}>
                <img width='100%' height='100%' src={Live} alt='upload' />
                <p>Go Live</p>
            </div>
        </div>
    )
}

export default CreatePopup