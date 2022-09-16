import Image from "next/image";
import { FunctionComponent, useState } from "react";
import OutsideAlerter from "../../customs/OutsideAlerter";
import styles from "./burger-menu.module.css";

type PropsType = {
  cb?: (flag: boolean) => void
}


const BurgerMenu: FunctionComponent<PropsType> = ({ cb }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const onCloseMenu = () => {
    setIsOpened(false);
    if (cb) {
      cb(false);
    }
  }
  const onOpenMenu = () => {
    setIsOpened(true);
    if (cb) {
      cb(true);
    }
  }

  return (
    <OutsideAlerter cb={onCloseMenu} className={`${styles.containerBorder} ${styles.polygon} ${isOpened ? styles.containerBorder_opened : ''}`}>
      <div className={`${styles.container} ${isOpened ? styles.container_opened : ''} ${styles.polygon}`}>
        <div className={styles.menuIcon} onClick={onOpenMenu}>
          <img src="/icons/burger.svg" width={28} alt="" />
        </div>
        <div className={styles.menuArea}>
          <img src="/icons/crosshair-blue.svg" alt="Close menu" className={styles.close} onClick={onCloseMenu} />
          <a href="#" className={styles.menuLink}>About</a>
          <a href="#" className={styles.menuLink}>NFT Veeman</a>
          <a href="#" className={styles.menuLink}>EcoSystem</a>
          <a href="#" className={styles.menuLink}>PVP competition</a>
          <a href="#" className={styles.menuLink}>Road Map</a>
        </div>
        <div className={styles.socials}>
          <ul className={styles.socialsList}>
            <li className={styles.socialsItem}>
              <a href="#">
                <img src="/icons/sinstagram.svg" alt="Instagram icon" />
              </a>
            </li>
            <li className={styles.socialsItem}>
              <a href="#">
                <img src="/icons/stwitter.svg" alt="Twitter icon" />
              </a>
            </li>
            <li className={styles.socialsItem}>
              <a href="#">
                <img src="/icons/stelegram.svg" alt="Telegram icon" />
              </a>
            </li>
            <li className={styles.socialsItem}>
              <a href="#">
                <img src="/icons/sdiscord.svg" alt="Discord icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </OutsideAlerter>
  );
};

export default BurgerMenu;
