import Image from "next/image";
import { FunctionComponent, useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block5.module.css";

interface Props {
}

const Block5: FunctionComponent<Props> = ({ }) => {
  const {language} = useContext(AppContext)
  return (
    <div className={styles["container"] + ' contentWrapper'}>
      <Title1>
        {
          language === 'RUS'
          ?
          'Классы автомобилей'
          :
          'Classes of NFT Veemans'
        }</Title1>
      <ul className={styles.list}>
        {
          [1, 2, 3, 4, 5, 6].map(index => (
            <li key={index} className={styles.listItem}>
              <img src={`/images/b5-${index}.png`} className={styles.item} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Block5;
