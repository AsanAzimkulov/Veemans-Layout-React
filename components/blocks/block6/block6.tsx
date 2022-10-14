import Image from "next/image";
import { FunctionComponent, useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block6.module.css";

interface Props {
}

const Block6: FunctionComponent<Props> = ({ }) => {
  const items = [
    'car', 'taxi', 'train', 'skateboard', 'bicycle', 'scooter'
  ]
  const { language } = useContext(AppContext);
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
          items.map((title, index) => {
            return <div key={title} className={styles.itemWrapper + ' ' + styles.item}>
              <picture>
                <source srcSet='/icons/b6-block.webp' type="image/webp" />
                <img src='/icons/b6-block.png' alt="Transport" className={styles.item + ' ' + styles.targetItem} />
              </picture>
              <div className={styles.itemInnerWrapper}>
                <img src={`/icons/b6-${index}.svg`} alt={`${title} icon`} className={styles.itemIcon} />
                <p className={styles.itemTitle}>{title}</p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Block6;
