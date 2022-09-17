import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block5.module.css";

interface Props {
}

const Block5: FunctionComponent<Props> = ({ }) => {
  return (
    <div className={styles["container"] + ' contentWrapper'}>
        <Title1>Сlasses of NFT Veemans</Title1>

        <img className={styles["imgLine"]} src="/images/block5_1.png"/>
        <img className={styles["imgLine"]} src="/images/block5_2.png"/>
    </div>
  );
};

export default Block5;
