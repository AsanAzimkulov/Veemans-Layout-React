import Image from "next/image";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useWindowSize } from "../../customs/useWindowDimensions";
import Button1 from "../../ui/button1/button1";
import classNames from "../../customs/classNames";
import styles from "./block1.module.css";
import AppContext from "../../../contexts/AppContext";

const Block1: FunctionComponent = () => {
  const { language } = useContext(AppContext);
  const windowSize = useWindowSize();
  const [isSmallHeight, setIsSmallHeight] = useState<boolean>(false);

  useEffect(() => {
    if (windowSize.height !== undefined) {
      setIsSmallHeight(windowSize.height <= 800);
    }
  }, [windowSize])



  return (
    <div className={`${styles["wrapper"]} ${classNames({ className: styles["wrapper_smallHeight"], condition: isSmallHeight })}`}>
      <div className={styles["video-bg"]}>
        <video autoPlay={true} muted loop>
          <source src="/videos/2.mp4" type="video/mp4" />
        </video>
      </div>
      {/* <div className={styles["bottom-border"]}>

      </div> */}
      <div className={styles.first}>
        <div className={styles.firstWrapper}>
          <div className={styles.mainCC}>
            <div className={styles.first__top}>
              <div className={styles.first__title1 + classNames({ className: styles["first__title1_rus"], condition: language === 'RUS' })}>
                {
                  language === 'RUS'
                    ?
                    'Veemans - это Web 3.0 приложение '
                    :
                    'Veemans is a web3.0 APP'
                }
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
            <img src="/icons/title-m.png" className={styles.topLogo + ' ' + styles.topLogo_mobile} alt="" />
            <div className={styles.first__title1 + ' ' + styles.first__title1_mobile + classNames({ className: styles["first__title1_mobile_rus"], condition: language === 'RUS' })}>
              {
                language === 'RUS'
                  ?
                  'Veemans - это Web 3.0 приложение '
                  :
                  'Veemans is a web3.0 APP'
              }
            </div>

            <div className={styles["first__block2"]}>
              <div>
                <Image src="/icons/el1.svg" width="72" height="44" alt=""></Image>
                <Image src="/icons/el1.svg" width="72" height="44" alt=""></Image>
                <Image src="/icons/el1.svg" width="72" height="44" alt=""></Image>
                <Image src="/icons/el1.svg" width="72" height="44" alt=""></Image>
                <Image src="/icons/el1.svg" width="72" height="44" alt=""></Image>
              </div>
              <div className={styles["first__text"]}>
                {
                  language === 'RUS'
                    ?
                    <>
                      Сделайте свои ежедневные перемещения<br />
                      прибыльным с помощью NFT игры Veemans
                    </>
                    :
                    <>
                      Make your daily travel profitable
                      < br />
                      with NFT game Veemans
                    </>
                }

              </div>
            </div>
            <div className={styles["first__block3"]}>
              <Button1 variant="1">Join The Community</Button1>
              <div className={styles.whitePaperIcon}>
                <Button1 variant="2"> Paper</Button1>
              </div>
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
