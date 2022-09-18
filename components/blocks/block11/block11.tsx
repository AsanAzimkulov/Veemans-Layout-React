import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block11.module.css";

interface Props {
}

const Block11: FunctionComponent<Props> = ({ }) => {
  return (
    <div className={styles["container"] + " contentWrapper"}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img src="/images/partner1.svg" className={styles.itemImage} />
        </li>
        <li className={styles.item}>
          <img src="/images/partner2.svg" className={styles.itemImage} />
        </li>
        <li className={styles.item}>
          <img src="/images/partner3.svg" className={styles.itemImage} />
        </li>
        <li className={styles.item}>
          <img src="/images/partner4.svg" className={styles.itemImage} />
        </li>
        <li className={styles.item}>
          <img src="/images/partner5.svg" className={styles.itemImage} />
        </li>
      </ul>
    </div>
  );
};

export default Block11;
