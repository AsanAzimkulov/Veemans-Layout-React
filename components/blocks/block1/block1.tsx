import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import styles from "./block1.module.css";

const Block1: FunctionComponent = () => {


  return (
      <div className={styles["wrapper"]}>
        <div className={styles["video-bg"]}>
          <video autoPlay={true} muted loop>
            <source src="/videos/2.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <div className={styles["bottom-border"]}>

      </div> */}
        <div className={styles.first}>
          <div className={styles.firstWrapper}>
            <div className={styles.first__top}>
              <div className={styles.first__title1}>
                Veemans is a web3.0 APP
              </div>
              <div className={styles["first__apps-block"]}>
                <a href="">
                  <Image
                    src="/icons/to-app-store.svg"
                    width="157"
                    height="46"
                    alt=""
                  ></Image>
                </a>
                <a href="">
                  <Image
                    src="/icons/to-google-play.svg"
                    width="157"
                    height="46"
                    alt=""
                  ></Image>
                </a>
              </div>
            </div>
            <img src="/icons/title.png" className={styles.topLogo} alt="" />
            <div className={styles["first__block2"]}>
              <div>
                <Image src="/icons/el1.svg" width="72" height="44" alt=""></Image>
                <Image src="/icons/el1.svg" width="72" height="44" alt=""></Image>
                <Image src="/icons/el1.svg" width="72" height="44" alt=""></Image>
                <Image src="/icons/el1.svg" width="72" height="44" alt=""></Image>
                <Image src="/icons/el1.svg" width="72" height="44" alt=""></Image>
              </div>
              <div className={styles["first__text"]}>
                Make your daily travel profitable
                <br />
                with NFT game Veemans
              </div>
            </div>
            <div className={styles["first__block3"]}>
              <Button1 variant="1">Join The Community</Button1>
              <div className={styles.whitePaperIcon}>
                <Button1 variant="2"> Paper</Button1>
              </div>
            </div>
            <div className={styles["first__solana"]}>
              <Image src="/icons/solana.svg" width="180" height="28" alt=""></Image>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Block1;
