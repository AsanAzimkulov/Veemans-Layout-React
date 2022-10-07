import Image from "next/image";
import { FunctionComponent, useContext } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block2.module.css";
import Cart1 from "../../carts/cart1/cart1";
import AppContext from "../../../contexts/AppContext";

const Block2: FunctionComponent = () => {
  const { language } = useContext(AppContext);

  return (
    <div className={styles["container"] + ' contentWrapper'}>
      <div className={styles["top-border"]}></div>
      <div className={styles.content}>
        <Title1>{
          language === 'RUS'
            ?
            'Что такое Veemans?'
            :
            'What is Veemans ?'
        }</Title1>
        <div className={styles["columns1"]}>
          <div className={styles["video-block"]}>
            <video autoPlay={true} muted loop>
              <source src="/videos/1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles["info"]}>
            <div>
              <p className={styles["info__paragraph"]}>
                {
                  language === 'RUS'
                    ?
                    'Это игра, в которой вы зарабатываете токены, передвигаясь на транспорте. Это просто.'
                    :
                    'Its a game where you get tokens while you moving with a transport. It&apos;s simple.'

                }

              </p>
              <p className={styles["info__paragraph"]}>
                {
                  language === 'RUS'
                    ?
                    'Побеждайте других игроков в соревнованиях, улучшайте свой игровой автомобиль и захватывайте территории, чтобы получить больше токенов и наград.'
                    :
                    ' Win other players in competitions, upgrade your car and capture territories to get more tokens and rewards.'
                }              </p>
            </div>
          </div>
        </div>
        <Title1>
          {
            language === 'RUS'
              ?
              'Игровая механика'
              :
              'Mechanics'
          }
        </Title1>
        <div className={styles["columns2"]}>
          <Cart1>
            <div>
              <img src="/images/icon1.svg" alt="X" className={styles.columns2__cartIcon} />
              <img src="/icons/cart1-icon1-mobile.svg" alt="X" className={styles.columns2__cartIcon_mobile} />
            </div>
            <p className={styles.columns2__cartContent}>
              {
                language === 'RUS'
                  ?
                  <>
                    Активируйте свой GPS-трекер<br />
                    в приложении перед началом поездки <br /> и двигайтесь со скоростью <br />от 10 до 60 км/ч.
                  </>
                  :
                  <>
                    Activate your GPS tracker in the <br />
                    app before starting your trip and
                    <br />
                    move at a speed of 10 to 60 km/h.{" "}
                  </>
              }
            </p>

            <p className={styles.columns2__cartContentMobile}>

              {
                language === 'RUS'
                  ?
                  <>
                    <strong>Активируйте свой GPS-трекер</strong><br />
                    в приложении перед началом поездки и <br />двигайтесь со скоростью от 10 до 60 км/ч.
                  </>
                  :
                  <>
                    <strong>Activate your GPS tracker in the
                      app</strong> <br />before starting your trip and
                    move at <br /> a speed of 10 to 60 km/h.{" "}
                  </>
              }

            </p>
          </Cart1>
          <Cart1>
            <div>
              <img src="/images/icon2.svg" alt="X" className={styles.columns2__cartIcon} />
              <img src="/icons/cart1-icon2-mobile.svg" alt="X" className={styles.columns2__cartIcon_mobile} />
            </div>
            <p className={styles.columns2__cartContent}>

              {
                language === 'RUS'
                  ?
                  <>
                    За каждый километр вы получаете токены <br /> VMS /VMS, которые вы можете <br /> использовать как для внутриигровых<br /> покупок, так и для обмена<br /> на реальные деньги.
                  </>
                  :
                  <>
                    For every km you get VMS/VMN<br />
                    tokens, which you can use both for <br />
                    in-game purchases and for <br />
                    exchange for real money.
                  </>
              }
            </p>
            <p className={styles.columns2__cartContentMobile}>
              {
                language === 'RUS'
                  ?
                  <>
                    <strong>За каждый километр вы получаете токены<br /> VMS /VMS,</strong> которые вы можете <br /> использовать как для внутриигровых <br />покупок, так и для обмена на реальные <br /> деньги.
                  </>
                  :
                  <>
                    <strong>For every km you get VMS/VMN
                      tokens,<br /> which you can use</strong> both for
                    in-game <br /> purchases and for
                    exchange for real money.
                  </>
              }

            </p>
          </Cart1>
          <Cart1>
            <div>
              <img src="/images/icon3.svg" alt="X" className={styles.columns2__cartIcon} />
              <img src="/icons/cart1-icon3-mobile.svg" alt="X" className={styles.columns2__cartIcon_mobile} />
            </div>
            <p className={styles.columns2__cartContent}>
              {
                language === 'RUS'
                  ?
                  <>
                    Создавайте альянсы и захватывайте <br /> территории для получения дополнительных <br /> наград за проезд по вашим территориям <br />другими игроками.
                  </>
                  :
                  <>
                    Form alliances to capture <br />
                    territories and to get additional <br />
                    rewards for passing through your <br />
                    territories with other players.
                  </>
              }
            </p>
            <p className={styles.columns2__cartContentMobile}>
              {
                language === 'RUS'
                  ?
                  <>
<strong>Создавайте альянсы и захватывайте<br/> территории</strong> для получения <br/> дополнительных наград за проезд по <br/> вашим территориям другими игроками.
                  </>
                  :
                  <>
                    <strong>Form alliances to capture
                      territories</strong><br /> and to get additional
                    rewards for passing <br /> through your
                    territories with other players.
                  </>
              }
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
