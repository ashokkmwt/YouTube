import React, { useContext, useRef } from "react";
import styles from "./MiniSideHeader.module.css";
import Home from "../../../assets/icons/home.svg";
import Shorts from "../../../assets/icons/shorts.svg";
import Subscriptions from "../../../assets/icons/subscriptions.svg";
import Library from "../../../assets/icons/library.svg";
import Downloads from "../../../assets/icons/downloads.svg";
import History from "../../../assets/icons/history.svg";
import SignInContext from "../../context/signInContext/SignInContext";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";

const MiniSideHeader = ({ currentTab, setCurrentTab }) => {

  const { width } = useWindowSize();

  const ref = useRef(null);

  const { isSignIn } = useContext(SignInContext);

  const navigate = useNavigate();

  const miniHeader = [
    { image: Home, p: "Home", },
    { image: Shorts, p: "Shorts", },
    { image: Subscriptions, p: "Subscriptions", },
    { image: Library, p: "Library", },
    { image: Downloads, p: "Downloads", },
  ];

  const visit = (index) => {
    // when we've signed in, then download-component should be opened.
    if (index === 4 && isSignIn) {
      setCurrentTab(6);
      navigate('/downloads');
      ref.current.style.background = 'rgba(255, 255, 255, 0.1)';
    } else {
      setCurrentTab(index);
      navigate('/history');
      ref.current.style.background = 'unset';
    }

    index === 0 && navigate('/');

    index === 1 && navigate('/shorts');

    index === 2 && navigate('/subscription');

    index === 3 && navigate('/library');
  }

  return (
    <>
      {width >= 800 &&
        <div className={styles.miniSideHeader}>
          {miniHeader.map((header, index) => {
            return (
              <div
                ref={ref}
                key={index}
                className={styles.logoBox}
                onClick={() => visit(index)}
                style={{ background: currentTab === index && 'rgba(255, 255, 255, 0.1)' }}
              >
                {/* if I'ven't signed in, History-tab should be at index 4. */}
                {(!isSignIn && index === 4) ?
                  <>
                    <img width="100%" height="100%" src={History} alt="home" />
                    <p>History</p>
                  </>
                  :
                  <>
                    <img width="100%" height="100%" src={header.image} alt="home" />
                    <p>{header.p}</p>
                  </>
                }

              </div>
            );
          })}
        </div>
      }
    </>
  );
};

export default MiniSideHeader;
