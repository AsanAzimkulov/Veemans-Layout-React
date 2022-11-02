import Image from "next/image";
import { FunctionComponent, useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import Cart2 from "../../carts/cart2/cart2";
import classNames from "../../customs/classNames";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block31.module.css";

const Block31: FunctionComponent = () => {
  const { language } = useContext(AppContext);
  return (
    <div className={styles["container"] + classNames({ className: styles['container_rus'], condition: language === 'RUS' })}>
      <div className={styles["columns1"]}>
        <div style={{ 'textAlign': 'center' }} className={styles.columns1__picture_desctop}>
          <picture>
            <source srcSet="/images/block31_img1.webp" type="image/webp" />
            <img src="/images/block31_img1.png" className={styles.phonne} />
          </picture>
        </div>
        <div className={styles["info"]}>
          <div>
            <Title1>{
              language === 'RUS'
                ?
                'Что такое Drive to earn?'
                :
                'What is DRIVE 2 EARN?'
            }
            </Title1>
            <div style={{ 'textAlign': 'center' }} className={styles.columns1__picture_mobile}>
              <picture>
                <source srcSet="/images/block31_img1.webp" type="image/webp" />
                <img src="/images/block31_img1.png" className={styles.phonne} />
              </picture>
            </div>
            <p className={styles["info__paragraph"]}>
              {
                language === 'RUS'
                  ?
                  'Это новая концепция, дающая возможность заработка токенов за действия, которые пользователь совершает в реальном мире.'
                  :
                  'It is a new concept that suggests the possibility of virtual earnings for the actions a user performs in the real world.'
              }
            </p>
            <p className={styles["info__paragraph"]}>
              {
                language === 'RUS'
                  ?
                  'Для этого вам необходимо "привязать" свой аккаунт к мобильному устройству. Каждый пользователь зарабатывает за ежедневные передвижения на любом виде транспорта, развивающем скорость от 10 до 60 км/ч.'
                  :
                  'To enroll, you need to link your account with a mobile device. Each user earns tokens for daily movements by any type of transport with a speed from 10 to 60 km/h.'
              }
            </p>
            <div className={styles["info__buttons"]}>
              <Button1 variant="1" wide={language === 'RUS'} src={'https://discord.com/invite/Veemans'} >{
                language === 'RUS'
                  ?
                  'Присоединиться'
                  :
                  'Join The Community'
              }</Button1>
              {/* <a className={styles["info__rm"]} href="">
                Read More
                <Image
                  src="/icons/arrow1.svg"
                  width="14"
                  height="14"
                  alt="->"
                ></Image>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles["columns1"]}>
        <div>
          <Cart2>
            <Title1 type="h3">
              {
                language === 'RUS'
                  ?
                  'Миссия'
                  :
                  'Mission'
              }
            </Title1>
            <p>
              {
                language === 'RUS'
                  ?
                  <>
                    Мы стремимся сделать поездки на частном <br /> транспорте более безопасными и экологичными, вводя <br /> поощрения за скорость до 60 км/ч при одновременном <br /> снижении расхода топлива и выбросов.
                  </>
                  :
                  <>
                    We are committed to making trips by private <br /> transport safer
                    and greener by introducing speed <br /> rewards up to 60 km/h
                    while reducing fuel <br /> consumption and emissions.</>
              }
            </p>
          </Cart2>
        </div>
        <div style={{ 'textAlign': 'center' }} className={styles.orderPrefer}>
          <img src="/videos/v73.gif" style={{ 'width': '320px', 'height': '320px', 'marginTop': '20px', transform: 'scale(1.3)' }} />
        </div>
      </div>
      <div className={styles["columns1"]}>
        <div style={{ 'textAlign': 'center' }}>
          {/* <picture> */}
            {/* <source srcSet="/videos/r81.webp" type="video/quicktime" /> */}
            <img src="/videos/r81.gif" style={{ 'width': '450px', 'marginTop': '50px', transform: 'scale(1.3) translateY(-40px)' }} />
          {/* </picture> */}
        </div>
        <div>
          <Cart2>
            <Title1 type="h3">NFT Veeman</Title1>
            <p>
              {
                language === 'RUS'
                  ?
                  'Цифровой аватар вашего автомобиля.'
                  :
                  'Digital avatar of your car.'
              }</p>
          </Cart2>
        </div>
      </div>
      <div className={styles["columns1"]}>
        <div>
          <Cart2>
            <Title1 type="h3">Mystery Box</Title1>
            <p>
              {
                language === 'RUS'
                  ?
                  <>
                    Найдите Таинственную коробку во время <br /> езды и улучшите технические <br /> характеристики машины.
                  </>
                  :
                  <>
                    Find the Mystery box while driving and <br /> enhance  characteristics<br />  of the
                    machine.
                  </>
              }
            </p>
          </Cart2>
        </div>
        <div style={{ 'textAlign': 'center' }} className={styles.orderPrefer}>
          <picture>
            <source srcSet="/images/block31_img4.webp" type="image/webp" />
            <img src="/images/block31_img4.png" style={{ 'width': '500px', 'marginTop': '50px' }} />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Block31;
