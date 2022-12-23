import React from "react";
import styles from "./HoverOn.module.css";

export default function HoverOn({ style, text }) {
  return (
    <div className={styles.container} style={style && style}>
      <h6>{text}</h6>
    </div>
  );
}
