import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './PlayVideo.module.css'
import NavBar from '../RightSection/NavBar/NavBar'
import { useLocation, useNavigate } from 'react-router-dom';
import VideoContext from '../../context/VideoContext/VideoContext';
import { useWindowSize } from 'react-use';

// working here
const PlayVideo = () => {

    const { width } = useWindowSize();

    const btnRef = useRef(null);

    const commentBtnRef = useRef(null);

    const [comment, setComment] = useState("");

    const [isComment, setIsComment] = useState(false);

    const [myComments, setMyComments] = useState([]);

    const commentBtn = () => {
        setIsComment(true);
        let tempComments = myComments;
        tempComments.push(comment);
        setMyComments(tempComments);
        setComment("");
    }

    const { state } = useLocation();

    const videos = useContext(VideoContext);

    const photoURL = localStorage.getItem('photoURL');

    const navigate = useNavigate();

    const sendParams = (id, title, channelTitle, thumbnail) => {
        navigate('/video', {
            state: {
                videoId: id,
                videoTitle: title,
                channelTitle: channelTitle,
                thumbnail: thumbnail
            }
        })
    }

    useEffect(() => {
        if (comment) {
            commentBtnRef.current.style.background = 'blue';
            commentBtnRef.current.style.color = 'black';
            commentBtnRef.current.style.cursor = 'pointer';
        } else {
            commentBtnRef.current.style.background = 'rgb(49, 49, 49)';
            commentBtnRef.current.style.color = 'gray';
            commentBtnRef.current.style.cursor = 'default';
        }
    })

    const scrollRef = useRef(null);

    const handleClick = () => scrollRef.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <div className={styles.container}>
            <section ref={scrollRef} className={styles.leftSection}>
                <div className={styles.videoScreen}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube-nocookie.com/embed/${state.videoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        allowFullScreen>
                    </iframe>
                </div>
                <h1>{state.videoTitle}</h1>
                <div className={styles.logoBar}>
                    <div className={styles.channelLogo}>
                        <img width='100%' height='100%' src={state.thumbnail} alt='thumbnail' />
                    </div>
                    <p>{state.channelTitle}</p>
                </div>

                <div className={styles.videoDetails}>
                    <div className={styles.userComment}>
                        <div className={styles.channelLogo}>
                            {photoURL ?
                                <img width='100%' height='100%' src={JSON.parse(photoURL)} alt='thumbnail' /> :
                                <p className={styles.noUser}>no user</p>}
                        </div>
                        <div style={{ width: '90%' }}>
                            <input
                                onFocus={() => btnRef.current.style.display = 'flex'}
                                className={styles.commentInput}
                                placeholder='Add a comment'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <div className={styles.line}></div>
                            <div className={styles.comment} ref={btnRef}>
                                <button onClick={() => btnRef.current.style.display = 'none'} >Cancle</button>
                                <button
                                    onClick={commentBtn}
                                    ref={commentBtnRef}
                                >Comment
                                </button>
                            </div>
                        </div>
                    </div>
                    {isComment && myComments.map((comment, i) => {
                        return (
                            <div className={styles.myComments} key={i}>
                                <div className={styles.channelLogo}>
                                    {photoURL ?
                                        <img width='100%' height='100%' src={JSON.parse(photoURL)} alt='thumbnail' /> :
                                        <p className={styles.noUser}>no user</p>}
                                </div>
                                <p>{comment}</p>
                            </div>
                        )
                    })}

                    {videos.map((v, i) => {
                        const comments = v.snippet.localized.description.slice(0, 200);
                        return (
                            <div className={styles.myComments} key={i}>
                                <div className={styles.channelLogo}>
                                    <img
                                        width="100%"
                                        height="100%"
                                        src={v.snippet.thumbnails.default.url}
                                        alt={v.snippet.title}
                                    />
                                </div>
                                <p>{comments}</p>
                            </div>
                        )
                    })}
                </div>
            </section >

            <section className={styles.rightSection}>
                {width >= 600 &&
                    <div className={styles.chatHistory}>
                        <p>Show chat reply</p>
                    </div>
                }

                <NavBar />

                {videos.map((v, i) => {
                    return (
                        <div key={i} className={styles.rcmdVideo} onClick={handleClick}>
                            <div
                                className={styles.videoLogo}
                                onClick={() =>
                                    sendParams(
                                        v.id,
                                        v.snippet.title,
                                        v.snippet.channelTitle,
                                        v.snippet.thumbnails.default.url
                                    )}
                            >
                                <img
                                    width="100%"
                                    height="100%"
                                    src={v.snippet.thumbnails.default.url}
                                    alt={v.snippet.title}
                                />
                            </div>
                            <div className={styles.videoHeading}>
                                <h3>{v.snippet.title}</h3>
                                <p>{v.snippet.channelTitle}</p>
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '1.2rem' }}>
                                    <span>2.5k views</span>
                                    <div>10 days ago</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div >
    )
}

export default PlayVideo