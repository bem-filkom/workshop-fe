import React from "react";

import SpeakerPhoto from "../../../assets/PictureExample.png";

import styles from "./Speaker.module.scss";

const Speaker = () => {
  return (
    <div className={styles.item}>
      <img src={SpeakerPhoto} alt="" />
      <div className={styles.speakerInfo}>
        <p className={styles.text}>Name</p>
        <p className={styles.text}>Profession</p>
      </div>
    </div>
  );
};

export default Speaker;
