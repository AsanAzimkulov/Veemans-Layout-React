import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block2.module.css";
import Cart1 from "../../carts/cart1/cart1";

const Block2: FunctionComponent = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["top-border"]}></div>
      <div className={styles.content + ' contentWrapper'}>
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
                This is a game app, using which you earn tokens for every km of
                riding any type of transport, at a speed of 10 to 60 km/h.
              </p>
              <p className={styles["info__paragraph"]}>
                It is simple: buy a Veeman NFT car, travel by any type of
                transport and earn VMS tokens. Increase your game fleet, capture
                territories and increase the number of tokens you get.
              </p>
            </div>
          </div>
        </div>
        <Title1>Mechanics</Title1>
        <div className={styles["columns2"]}>
          <Cart1>
            <div>
              <img src="/images/icon1.svg" alt="X" />
            </div>
            <p>
              Activate your GPS tracker in the <br />
              app before starting your trip and
              <br />
              move at a speed of 10 to 60 km/h.{" "}
            </p>
          </Cart1>
          <Cart1>
            <div>
              <img src="/images/icon2.svg" alt="X" />
            </div>
            <p>
              For every km you get VMS/VMN <br />
              tokens, which you can use both for <br />
              in-game purchases and for <br />
              exchange for real money.
            </p>
          </Cart1>
          <Cart1>
            <div>
              <img src="/images/icon3.svg" alt="X" />
            </div>
            <p>
              Organize alliances to capture <br />
              territories and to get additional <br />
              rewards for passing through your <br />
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
