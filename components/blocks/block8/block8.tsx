import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block8.module.css";

interface Props {
}

const Block8: FunctionComponent<Props> = ({ }) => {
  return (
    <div className={styles["container"] + ' contentWrapper'}>
      <div className={styles.main}>
        <Title1><>Sport PvP competitions<br /> with real users</></Title1>
        <ul className={styles.markedList}>
          <li className={styles.markedListItem}>
            <h3 className={styles.markedListItemTitle}>            Compete
            </h3>
            <p className={styles.markedListItemDesc}>
              using your Veeman and receive VMN tokens
            </p>
          </li>
          <li className={styles.markedListItem}>
            <h3 className={styles.markedListItemTitle}>            Selection of an opponent
            </h3>
            <p className={styles.markedListItemDesc}>
              in each game is carried out in accordance with your level and characteristics
            </p>
          </li>
          <li className={styles.markedListItem}>
            <h3 className={styles.markedListItemTitle}>
              Win battles
            </h3>
            <p className={styles.markedListItemDesc}>
              by upgrading your Veeman stats and level to earn more
            </p>
          </li>
        </ul>
        <Title1 type="h3" size="35px">Game Types:</Title1>
        <ul className={styles.cardList}>
          <li className={styles.cardListItem}>
            <img src="/images/cardList1.png" className={styles.cardListItemImage} />
            <div>
              <h3 className={styles.cardListItemTitle}>Luck</h3>
              <p className={styles.cardListItemDesc}>competition for luck</p>
            </div>
          </li>
          <li className={styles.cardListItem}>
            <img src="/images/cardList2.png" className={styles.cardListItemImage} />
            <div>            <h3 className={styles.cardListItemTitle}>drag racing</h3>
              <p className={styles.cardListItemDesc}>speed competition</p></div>
          </li>
          <li className={styles.cardListItem}>
            <img src="/images/cardList3.png" className={styles.cardListItemImage} />
            <div>
              <h3 className={styles.cardListItemTitle}>crash test</h3>
              <p className={styles.cardListItemDesc}>strength competition</p>
            </div>
          </li>
        </ul>
      </div>
    </div >
  );
};

export default Block8;
