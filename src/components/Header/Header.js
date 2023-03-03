import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Humberg from "../../assets/icons/humberger.svg";
import YTPremium from "../../assets/icons/ytPremium.svg";
import CreateIcon from "../../assets/icons/createIcon.svg";
import Notification from "../../assets/icons/notification.svg";
import SignIn from "../../assets/icons/signIn.svg";
import More from "../../assets/icons/more.svg";
import Mic from "../../assets/icons/mic.svg";
import Search from "../../assets/icons/searchIcon.svg";
import Input from "../../reusable/Input/Input";
import HoverOn from "../../reusable/HoverOn/HoverOn";
import Popup from "../../reusable/Popup/Popup";
import Icons from "./Icons";
import ProfilePopup from "./ProfilePopup/ProfilePopup";
import SignInContext from "../context/signInContext/SignInContext";
import { auth } from '../../utils/firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useLocalStorage, useWindowSize } from "react-use";

export default function Header({ isHeader, setIsHeader }) {
  const [isHover, setIsHover] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isNotify, setIsNotify] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [photoURL, setPhotoURL] = useLocalStorage('photoURL', null);
  const [showInput, setShowInput] = useState(false);

  const { width } = useWindowSize();

  const { isSignIn, setIsSignIn } = useContext(SignInContext);

  // sign in
  const setSignIn = async () => {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setPhotoURL(user.photoURL);
        setIsSignIn(true);
      }).catch((error) => {
        console.log(error);
      });
  }

  const visit = useCallback((text) => {
    if (text === "Search with your voice") {
      setIsPopup(!isPopup)
    }
    if (text === "Create") {
      setIsCreate(!isCreate)
    }
    if (text === "Notifications") {
      setIsNotify(!isNotify)
    }
  }, [isPopup, isCreate, isNotify])

  const ref = useRef();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('photoURL'))) {
      setIsSignIn(true);
    }

    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsPopup();
        setIsCreate();
        setIsNotify();
        setIsProfile();
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    }
  }, [setIsSignIn, setIsPopup, setIsCreate, setIsNotify, setIsProfile]);

  return (
    <header style={{ justifyContent: width <= 600 ? 'center' : 'spaceBetween' }}>
      {!showInput &&
        <div className={styles.left}>
          <div className={styles.humberg}>
            <img
              onClick={() => setIsHeader(!isHeader)}
              width="100%"
              height="100%"
              src={Humberg}
              alt="humberg"
            />
          </div>
          <div
            className={styles.youtubeLogo}
          >
            <img width="100%" height="100%" src={YTPremium} alt="ytPremium" />
            <span
              className={styles.ytLogo}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >YouTube<span className={styles.inLogo}>IN</span>
            </span>

            {isHover && (
              <HoverOn
                text={"YouTube Home"}
                style={{
                  padding: "0.2rem",
                  backgroundColor: "#3c3c3c",
                  border: "1px solid white",
                  bottom: "-2rem",
                  right: "-6rem",
                  left: "unset",
                  borderRadius: "unset"
                }}
              />
            )}
          </div>
        </div>
      }
      <div
        style={showInput ? { width: '100%', marginRight: '9rem' } : null}
        className={styles.middle}
      >

        {/* reusable input */}
        {(width >= 600 || showInput) && <Input showInput={showInput} setShowInput={setShowInput} />}
        {(width <= 600 && !showInput) &&
          <img width="100%" height="100%" src={Search} alt="search" onClick={() => setShowInput(true)} />}

        {(width >= 600 || showInput) &&
          <div className={styles.mic}>
            <Icons text={"Search with your voice"} icon={Mic} style={{ width: "15rem" }} visit={visit} />
          </div>
        }
      </div>

      {isSignIn ?
        <>
          {!showInput &&
            <div className={styles.right}>

              <Icons text={"Create"} icon={CreateIcon} visit={visit} isCreate={isCreate} _ref={ref} />

              <Icons text={"Notifications"} icon={Notification} visit={visit} isNotify={isNotify} _ref={ref} />

              <div onClick={() => setIsProfile(true)} className={styles.profile}>
                <img width='100%' height='100%' src={photoURL && photoURL} alt='user' />
              </div>
            </div>
          }
        </>
        :
        <>
          {!showInput &&
            <div className={styles.right}>
              <img
                width='100%'
                height='100%'
                src={More}
                alt='more'
                onClick={() => setIsProfile(true)}
              />

              <div className={styles.signIn} onClick={setSignIn}>
                <img width='100%' height='100%' src={SignIn} alt='signIn' />
                <span>Sign In</span>
              </div>
            </div>
          }
        </>
      }

      {isPopup && <Popup setIsPopup={setIsPopup} _ref={ref} />}
      {isProfile && <ProfilePopup _ref={ref} isSignIn={isSignIn} setIsSignIn={setIsSignIn} />}
    </header>
  );
}