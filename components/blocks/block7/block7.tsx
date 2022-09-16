import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block7.module.css";

interface Props {
}

const Block7: FunctionComponent<Props> = ({ }) => {
  return (
    <div className={styles["container"] + ' contentWrapper'}>
      <img className={styles["imgLine"]} src="/images/block7.svg" />
    </div>
  );
};

export default Block7;
