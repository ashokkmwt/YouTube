import React, { useContext } from 'react'
import styles from './Popup.module.css'
import Close from '../../assets/icons/close.svg'
import Mic from '../../assets/icons/mic.svg'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MicValueContext from '../../components/context/micValueContext/MicValueContext';

const Popup = ({ setIsPopup, _ref }) => {

  const value = useContext(MicValueContext)

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  !browserSupportsSpeechRecognition && <span>Browser doesn't support speech recognition.</span>;

  const closePopup = () => {
    setIsPopup(false);
    value.setMicValue(transcript);
  }

  return (
    <div className={styles.container}>
      <div className={styles.popup} ref={_ref}>
        <span>{listening && "Listening..."}</span>
        <img
          className={styles.closeImg}
          onClick={closePopup}
          width='100%'
          height='100%'
          src={Close}
          alt='close'
        />
        <div className={styles.micBar}>
          <img
            width='100%'
            height='100%'
            onClick={SpeechRecognition.startListening}
            className={styles.micImg}
            src={Mic}
            alt='mic'
          />
        </div>
        <p>{transcript}</p>
      </div>
    </div>
  )
}

export default Popup