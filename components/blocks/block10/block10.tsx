import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block10.module.css";

interface Props {
}

const Block10: FunctionComponent<Props> = ({ }) => {
  return (
    <div className={styles["container"]}>
    	<Title1>Roadmap</Title1>
        <img className={styles["imgLine"]} src="/images/block10.svg"/>
    </div>
  );
};

export default Block10;