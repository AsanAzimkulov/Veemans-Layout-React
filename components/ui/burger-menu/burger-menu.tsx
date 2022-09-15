import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./burger-menu.module.css";


const BurgerMenu: FunctionComponent = () => {

  const onCloseMenu = () => {
    const click = new Event('click', { bubbles: true });
    if (typeof window !== undefined) {
      window.dispatchEvent(click);
    }
  }
  return (
    <div className={`${styles.containerBorder} ${styles.polygon}`}>
      <div className={`${styles.container} ${styles.polygon}`}>
        <div className={styles.menuIcon} onClick={onCloseMenu}>
          <img src="/icons/burger.svg" width={28} alt="" />
        </div>
        <div className={styles.menuArea}>
          <img src="/icons/crosshair-blue.svg" alt="Close menu" className={styles.close} />
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
    </div>
  );
};

export default BurgerMenu;
