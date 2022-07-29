import styles from "./BackgroundDecoration.module.scss";

export default function BackgroundDecoration({ src, justifyContent = "left" }) {
  return (
    <>
      <div
        className={`${styles.bgDecorationContainer} ${
          justifyContent === "left" ? styles.left : styles.right
        }`}
      >
        <img
          draggable="false"
          src={src}
          alt="icon-bg"
          className={styles.bgDecoration}
        ></img>
      </div>
    </>
  );
}
