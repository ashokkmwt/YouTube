import React, { useContext } from "react";
import styles from "./SideHeader.module.css";
import SignInContext from "../../context/signInContext/SignInContext";
import {
  topTabs,
  about,
} from "./data";
import { useNavigate } from "react-router-dom";

export default function SideHeader({ currentTab, setCurrentTab }) {

  const { isSignIn } = useContext(SignInContext);

  const navigate = useNavigate();

  const setRoutes = (index) => {
    setCurrentTab(index);

    index === 0 && navigate('/');

    index === 1 && navigate('/shorts');

    index === 2 && navigate('/subscription');

    index === 3 && navigate('/library');

    index === 4 && navigate('/history');

    index === 5 && navigate('/watchlater');

    index === 6 && navigate('/downloads');

    index === 7 && navigate('/like');

    index === 8 && navigate('/playlists');

    index === 10 && navigate('/trending');

    index > 10 && navigate('/404');
  }

  return (
    <div className={styles.sideHeaderComponent}>
      {topTabs.map((tab, index) => {
        return (
          <React.Fragment key={index}>
            {isSignIn ?
              <div
                className={styles.topTabs}
                onClick={() => setRoutes(index, tab.navigate)}
                style={{ background: currentTab === index && 'rgba(255, 255, 255, 0.1)' }}
              >
                <img width="100%" height="100%" src={tab.image} alt={tab.tabName} />
                <p>{tab.tabName}</p>
              </div> :
              <>
                {(index <= 4 || index >= 10) &&
                  <div
                    className={styles.topTabs}
                    onClick={() => setRoutes(index)}
                    style={{ background: currentTab === index && 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <img width="100%" height="100%" src={tab.image} alt={tab.tabName} />
                    <p>{tab.tabName}</p>

                  </div>
                }
              </>
            }
          </React.Fragment>
        );
      })}

      {about.map((about, index) => {
        return (
          <div key={index} className={styles.about}>
            <p>{about.p1}</p>
            <p>{about.p2}</p>
            <p>{about.p3}</p>
          </div>
        )
      })}
    </div>
  );
}
