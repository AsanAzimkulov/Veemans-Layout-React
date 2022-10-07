import Image from "next/image";
import { FunctionComponent, useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block6.module.css";

interface Props {
}

const Block6: FunctionComponent<Props> = ({ }) => {
  const {language} = useContext(AppContext);
  return (
    <div className={styles["container"] + ' contentWrapper'}>
      <Title1>
        {
          language === 'RUS'
          ?
          'На чем вы можете перемещаться чтобы зарабатывать'
          :
          'The Motion Roller is looped'
        }</Title1>
      <div className={styles.items}>
        {
          [1, 2, 3, 4, 5, 6].map(i => {
            return <img src={`/icons/bb${i}.png`} alt="Transport" key={i} className={styles.item} />
          })
        }
      </div>
    </div>
  );
};

export default Block6;
