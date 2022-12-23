import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import VideoContext from './VideoContext';
import { API_KEY } from '../../../utils/helper'
import InputValueContext from '../inputValueContext/InputValueContext';

const VideoState = (props) => {

    const [videos, setVideos] = useState([]);

    const _value = useContext(InputValueContext);

    useEffect(() => {
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