import styles from "./CompetitionCard.module.scss";
import Header from "../../../components/Header/Header";

export default function CompetitionCard({ title = "null", logo }) {
  return (
    <>
      <div className={styles.higherContainer}>
        <div className={styles.container}>
          <div className={styles.cardCompetitionLogo}>
            <img src={logo} alt="logo" />
          </div>
          <Header s wrap noLine mb>
            {title}
          </Header>
          <button className={styles.explore}>explore</button>
        </div>
      </div>
    </>
  );
}
