import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block2.module.css";
import Cart1 from "../../carts/cart1/cart1";

const Block2: FunctionComponent = () => {
  return (
    <div className={styles["container"] + ' contentWrapper'}>
      <div className={styles["top-border"]}></div>
      <div className={styles.content}>
        <Title1>What is Veemans ?</Title1>
        <div className={styles["columns1"]}>
          <div className={styles["video-block"]}>
            <video autoPlay={true} muted loop>
              <source src="/videos/1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles["info"]}>
            <div>
              <p className={styles["info__paragraph"]}>
                Its a game where you get tokens while you moving with a transport. It&apos;s simple.
              </p>
              <p className={styles["info__paragraph"]}>
                Win other players in competitions, upgrade your car and capture territories to get more tokens and rewards.
              </p>
            </div>
          </div>
        </div>
        <Title1>Mechanics</Title1>
        <div className={styles["columns2"]}>
          <Cart1>
            <div>
              <img src="/images/icon1.svg" alt="X" className={styles.columns2__cartIcon} />
              <img src="/icons/cart1-icon1-mobile.svg" alt="X" className={styles.columns2__cartIcon_mobile} />
            </div>
            <p className={styles.columns2__cartContent}>
              Activate your GPS tracker in the <br />
              app before starting your trip and
              <br />
              move at a speed of 10 to 60 km/h.{" "}
            </p>

            <p className={styles.columns2__cartContentMobile}>
              <strong>Activate your GPS tracker in the
                app</strong> <br />before starting your trip and
              move at <br /> a speed of 10 to 60 km/h.{" "}
            </p>
          </Cart1>
          <Cart1>
            <div>
              <img src="/images/icon2.svg" alt="X" className={styles.columns2__cartIcon} />
              <img src="/icons/cart1-icon2-mobile.svg" alt="X" className={styles.columns2__cartIcon_mobile} />
            </div>
            <p className={styles.columns2__cartContent}>
              For every km you get VMS/VMN<br />
              tokens, which you can use both for <br />
              in-game purchases and for <br />
              exchange for real money.
            </p>
            <p className={styles.columns2__cartContentMobile}>
              <strong>For every km you get VMS/VMN
                tokens,<br /> which you can use</strong> both for
              in-game <br /> purchases and for
              exchange for real money.
            </p>
          </Cart1>
          <Cart1>
            <div>
              <img src="/images/icon3.svg" alt="X" className={styles.columns2__cartIcon} />
              <img src="/icons/cart1-icon3-mobile.svg" alt="X" className={styles.columns2__cartIcon_mobile} />
            </div>
            <p className={styles.columns2__cartContent}>
              Organize alliances to capture <br />
              territories and to get additional <br />
              rewards for passing through your <br />
              territories with other players.
            </p>
            <p className={styles.columns2__cartContentMobile}>
              <strong>Organize alliances to capture
                territories</strong><br /> and to get additional
              rewards for passing <br /> through your
              territories with other players.
            </p>
          </Cart1>
        </div>
        <div className={styles["columns3"]}>
          <Button1 variant="1">Join The Community</Button1>
          <div className={styles.whitePaperIcon}>
            <Button1 variant="2"> Paper</Button1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Block2;
