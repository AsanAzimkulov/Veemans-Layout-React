import Image from "next/image";
import { FunctionComponent, useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import classNames from "../../customs/classNames";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block4.module.css";

interface Props {
}

const Block4: FunctionComponent<Props> = ({ }) => {
  const {language} = useContext(AppContext);
  return (
    <div className={styles["container"] + " contentWrapper" + classNames({className: styles.container_rus, condition: language === 'RUS'})}>
      <Title1>
        {
          language === 'RUS'
          ?
          'Как это работает?'
          :
          'How does it work'
        }</Title1>
      <div className={styles["blockRow"]} style={{ 'marginTop': '70px' }}>
        <div className={styles["blockItem"]}>
          <div className={styles["blockCount"]}>
            <div className={styles["countBox"]}>
              <span>01</span>
            </div>
          </div>
          <div className={styles["blockTitle"]}>
            <h4>
            {
          language === 'RUS'
          ?
          'Выберите свой NFT автомобиль Veeman в магазине '
          :
          'Choose your NFT Veeman car from the NFT store'
        }</h4>
          </div>
          <div className={styles["blockDesc"]}>
          {
          language === 'RUS'
          ?
          'Существует 5 различных типов автомобилей с уникальными характеристиками'
          :
          'There are 5 different types of cars with unique characteristics '
        }
          </div>
        </div>

        <div className={styles["blockItem"]}>
          <div className={styles["blockItemConnect"]}>
            <img src="/images/group4Line.svg" />
          </div>
        </div>

        <div className={styles["blockItem"]}>
          <div className={styles["blockCount"]}>
            <div className={styles["countBox"]}>
              <span>02</span>
            </div>
          </div>
          <div className={styles["blockTitle"]}>
            <h4>
            {
          language === 'RUS'
          ?
          'Перемещайтесь на любом виде транспорта'
          :
          'Drive any type of transport'
        }</h4>
          </div>
          <div className={styles["blockDesc"]}>
          {
          language === 'RUS'
          ?
          'Со скоростью от 10 до 60 км/ ч'
          :
          'With speed from 10 to 60 km/h.'
        }
          </div>
        </div>

        <div className={styles["blockItem"]}>
          <div className={styles["blockItemConnect"]}>
            <img src="/images/group4Line.svg" />
          </div>
        </div>

        <div className={styles["blockItem"]}>
          <div className={styles["blockCount"]}>
            <div className={styles["countBox"]}>
              <span>03</span>
            </div>
          </div>
          <div className={styles["blockTitle"]}>
            <h4>
            {
          language === 'RUS'
          ?
          'Получайте вознаграждение за каждый километр поездки'
          :
          'Get rewards for driving'
        }</h4>
          </div>
          <div className={styles["blockDesc"]}>
          {
          language === 'RUS'
          ?
          'Зарабатывайте токены и находите таинственные коробки во время поездки'
          :
          'Earn tokens and find mysterious boxes during the trip'
        }

          </div>
        </div>
      </div>

      <div className={styles["blockRow"]} style={{ 'marginTop': '70px' }}>
        <div className={styles["blockItem"]}>
          <div className={styles["blockCount"]}>
            <div className={styles["countBox"]}>
              <span>04</span>
                </div>
          </div>
          <div className={styles["blockTitle"]}>
            <h4>
            {
          language === 'RUS'
          ?
          'Прокачивайте ваш Veeman автомобиль'
          :
          'Upgrade your NFT Veeman'
        }</h4>
          </div>
          <div className={styles["blockDesc"]}>
          {
          language === 'RUS'
          ?
          'Покупайте детали, улучшайте свой автомобиль, производительность и характеристики чтобы получить больше наград и токенов.'
          :
          'Buy details, upgrade your car, improve performance and characteristics by leveling up to get more rewards.'
        }

          </div>
        </div>

        <div className={styles["blockItem"]}>
          <div className={styles["blockItemConnect"]}>
            <img src="/images/group4Line.svg" />
          </div>
        </div>

        <div className={styles["blockItem"]}>
          <div className={styles["blockCount"]}>
            <div className={styles["countBox"]}>
              <span>05</span>
            </div>
          </div>
          <div className={styles["blockTitle"]}>
            <h4>
            {
          language === 'RUS'
          ?
          'Создавайте альянсы чтобы захватывать улицы'
          :
          'Form alliances and capture streets'
        }</h4>
          </div>
          <div className={styles["blockDesc"]}>
          {
          language === 'RUS'
          ?
          'и взимать плату за проезд по ним другими пользователями'
          :
          'Make other players pay for driving through your territory.'
        }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Block4;
