import React, { useContext, useRef } from 'react';
import styles from './Shorts.module.css';
import Like from '../../../../assets/icons/like.svg';
import Dislike from '../../../../assets/icons/dislike.svg';
import Comment from '../../../../assets/icons/comment.svg';
import More from '../../../../assets/icons/more-hrz.svg';
import Play from '../../../../assets/icons/play.svg';
import Volume from '../../../../assets/icons/volume.svg';
import VideoContext from '../../../context/VideoContext/VideoContext';
import { useWindowSize } from 'react-use';

const Shorts = () => {
    const videos = useContext(VideoContext);
    const { width } = useWindowSize();
    const ref = useRef(null);

    const logos = [
        { logo: Like, p: "12k" },
        { logo: Dislike, p: "Dislike" },
        { logo: Comment, p: "500" },
        { logo: Comment, p: "Share" },
        { logo: More }
    ]

    return (
        <div className={styles.container}>
            {videos.map((v, index) => {
                return (
                    <React.Fragment key={index}>
                        {index <= 10 &&
                            <div className={styles.shortVideo} style={{ width: width <= 600 && '90%' }}>
                                <div
                                    style={{ width: width <= 600 && '100%' }}
                                    className={styles.video}
                                    onMouseEnter={() => ref.current.style.display = 'flex'}
                                    onMouseLeave={() => ref.current.style.display = 'none'}
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${v.id}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>

                                    <div
                                        style={{ display: 'none' }}
                                        ref={ref}
                                        className={styles.videoTop}
                                    >
                                        <img width='100%' height='100%' src={Play} alt='play' />
                                        <img width='100%' height='100%' src={Volume} alt='play' />
                                    </div>

                                    <div className={styles.videoBottom}>
                                        <h2>{v.snippet.title} #Shorts</h2>
                                        <div className={styles.bottomBar}>
                                            <div style={{ borderRadius: '50%' }} className={styles.profile}>
                                                <img
                                                    width="100%"
                                                    height="100%"
                                                    src={v.snippet.thumbnails.default.url}
                                                    alt={v.snippet.title}
                                                />
                                            </div>
                                            <p>{v.snippet.channelTitle}</p>
                                            <div className={styles.subscribeBtn}>Subscribe</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.navBar}>
                                    {logos.map((logo, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <div className={styles.img}>
                                                    <img width='100%' height='100%' src={logo.logo} alt={logo.logo} />
                                                </div>
                                                <p>{logo.p && logo.p}</p>
                                            </React.Fragment>
                                        )
                                    })}
                                    <div className={styles.profile}>
                                        <img
                                            width="100%"
                                            height="100%"
                                            src={v.snippet.thumbnails.default.url}
                                            alt={v.snippet.title}
                                        />
                                    </div>
                                </div>
                            </div>
                        }
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Shorts