import React, { useContext } from "react";
import styles from "./VideoSection.module.css";
import Video from "../../../../reusable/Video/Video";
import VideoContext from "../../../context/VideoContext/VideoContext";

export default function VideoSection() {

  const videos = useContext(VideoContext);

  return (
    <div className={styles.videoContainer}>
      {videos.map((v, i) => <Video v={v} i={i} key={i} />)}
    </div>
  );
}