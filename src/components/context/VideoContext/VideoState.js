import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import VideoContext from './VideoContext';
import InputValueContext from '../inputValueContext/InputValueContext';

const VideoState = (props) => {

    const [videos, setVideos] = useState([]);

    const _value = useContext(InputValueContext);

    useEffect(() => {

        const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

        axios({
            method: "get",
            url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&q=${_value.inputValue}&chart=mostPopular&maxResults=40&key=${API_KEY}`,
        })
            .then((res) => {
                setVideos(res.data.items);
            })
            .catch((err) => console.log(err));
    }, [setVideos, _value.inputValue]);

    return (
        <VideoContext.Provider value={videos}>
            {props.children}
        </VideoContext.Provider>
    )
}

export default VideoState;