import Image from "next/image";
import { FunctionComponent } from "react";

import styles from "./cart1.module.css";

interface Props {
  children: JSX.Element[] | string;
}

const Cart1: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles.icon}><div>{children[0]}</div></div>
      <div className={styles.text}>{children[1]}{children[2]}</div>
    </div>
  );
};

export default Cart1;
