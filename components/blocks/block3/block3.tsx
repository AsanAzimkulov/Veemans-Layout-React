import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block3.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Block3: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={styles["container"] + ' contentWrapper'}>
      <div className={styles["top-border"]}></div>
      {children}
    </div>
  );
};

export default Block3;
