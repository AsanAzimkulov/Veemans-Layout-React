import Image from "next/image";
import React, { FunctionComponent, useState, useRef, useEffect, useContext } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block7.module.css";
import { useIsVisible } from 'react-is-visible';
import classNames from "../../customs/classNames";
import { useWindowSize } from "../../customs/useWindowDimensions";
import AppContext from "../../../contexts/AppContext";

interface Props {
}



const Block7: FunctionComponent<Props> = ({ }) => {

  const { language } = useContext(AppContext);

  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (windowSize.width !== undefined) {
      setIsMobile(windowSize.width <= 991);
    }
  }, [windowSize])


  const scrollElement = useRef<HTMLDivElement>(null);

  const bottomEl = useRef<HTMLDivElement>(null);

  const onScroll = (e: any) => {
    const bottom = e.target.scrollHeight - Math.ceil(e.target.scrollTop) === e.target.clientHeight;

    const top = e.target.scrollTop === 0;


    if (bottom && scrollElement.current && isMobile) {
      window.scrollTo({
        top: -document.body.getBoundingClientRect().y + 120,
        behavior: 'smooth'
      })
      setTimeout(() => {
        window.scrollTo({
          top: -document.body.getBoundingClientRect().y + 120,
          behavior: 'smooth'
        })
      }, 100)
    } else if (top && scrollElement.current && isMobile) {
      window.scrollTo({
        top: -document.body.getBoundingClientRect().y - 120,
        behavior: 'smooth'
      })
      setTimeout(() => {
        window.scrollTo({
          top: -document.body.getBoundingClientRect().y - 120,
          behavior: 'smooth'
        })
      }, 100)
    }

  }
  const isAnimated = useRef<boolean>(false);

  const anchorRef = useRef<HTMLLIElement>(null);

  const isChartVisible = useIsVisible(anchorRef);

  if (isChartVisible) isAnimated.current = true;
  return (

    <div className={styles["container"] + ' contentWrapper' + classNames({ className: styles['container_rus'], condition: language === 'RUS' })} >
      <div id="ecosystem" className={styles.anchor}></div>
      <div className={styles.block}>

        <Title1>
          {
            language === 'RUS'
              ?
              'Элементы экосистемы Veemans '
              :
              'Elements of the Veemans Ecosystem'
          }
        </Title1>
        <div className={styles.contentB}>
          <div className={styles.content} >
            <div className={styles.listWrap} onScroll={onScroll} ref={scrollElement}>
              <ol className={styles.list}>
                <li className={styles.listItem}>
                  <h3 className={styles.listItemTitle}>
                    {
                      language === 'RUS'
                        ?
                        'Альянсы'
                        :
                        'Alliances'
                    }</h3>
                  <p className={styles.listItemDesc}>
                    {
                      language === 'RUS'
                        ?
                        'Объединения с другими пользователями для захвата территорий.'
                        :
                        'Create your own alliances in your city, capture the streets of the territory and charge other players for travel.'
                    }</p>
                </li>
                <li className={styles.listItem}>
                  <h3 className={styles.listItemTitle}>
                    {
                      language === 'RUS'
                        ?
                        'Автодилеры'
                        :
                        'Car Dealers'
                    }</h3>
                  <p className={styles.listItemDesc}>          {
                    language === 'RUS'
                      ?
                      'Станьте автодилером и продавайте автомобили NFT другим пользователям на нашей внутреннем маркетплейсе.'
                      :
                      'Become a car dealer and sell NFT cars to other users on our marketplace.'
                  }</p>
                </li>
                <li className={styles.listItem} ref={anchorRef}>
                  <h3 className={styles.listItemTitle}>          {
                    language === 'RUS'
                      ?
                      'Дополненная реальность'
                      :
                      'Augmented reality'
                  }</h3>
                  <p className={styles.listItemDesc}>          {
                    language === 'RUS'
                      ?
                      'Наслаждайтесь своим удивительным автомобилем через свой телефон.'
                      :
                      'Enjoy your amazing car through your phone.'
                  }</p>
                </li>
                <li className={styles.listItem}>
                  <h3 className={styles.listItemTitle}>          {
                    language === 'RUS'
                      ?
                      'Гараж'
                      :
                      'Garage'
                  }</h3>
                  <p className={styles.listItemDesc}>          {
                    language === 'RUS'
                      ?
                      'Обновите свой veeman в вашем личном гараже, чтобы получать больше токенов от поездок.'
                      :
                      'Upgrade your veeman in your personal garage to raise more tokens from travelling.'
                  }</p>
                </li>
                <li className={styles.listItem}>
                  <h3 className={styles.listItemTitle}>          {
                    language === 'RUS'
                      ?
                      'Квесты'
                      :
                      'Quests'
                  }</h3>
                  <p className={styles.listItemDesc}>          {
                    language === 'RUS'
                      ?
                      'Находите задания на карте и выполняйте квесты в дополненной реальности.'
                      :
                      'Find tasks on the map and complete quests in augmented reality.'
                  }</p>
                </li>
                <li className={styles.listItem}>
                  <h3 className={styles.listItemTitle}>          {
                    language === 'RUS'
                      ?
                      'Каршеринг'
                      :
                      'Car Sharing'
                  }</h3>
                  <p className={styles.listItemDesc}>          {
                    language === 'RUS'
                      ?
                      'Вы мало перемещаетесь на транспорте? Нет проблем, просто купите NFT Veeman, сдайте его в аренду и получайте доход.'
                      :
                      'You don&rsquo;t have your own car or you don&rsquo;t travel much? No problem, just buy NFT Veeman, rent it out and earn income.'
                  }</p>
                </li>
                <li className={styles.listItem}>
                  <h3 className={styles.listItemTitle}>          {
                    language === 'RUS'
                      ?
                      'PvP - Соревнования'
                      :
                      'PvP - Competitions'
                  }</h3>
                  <p className={styles.listItemDesc}>          {
                    language === 'RUS'
                      ?
                      'Участвуйте в турнирных гонках и получайте призы и бонусы.'
                      :
                      'Take part in tourmament races and get prizes and bonuses.'
                  }</p>
                </li>
                <li className={styles.listItem}>
                  <h3 className={styles.listItemTitle}>          {
                    language === 'RUS'
                      ?
                      'Маркетплейс'
                      :
                      'Marketplace'
                  }</h3>
                  <p className={styles.listItemDesc}>          {
                    language === 'RUS'
                      ?
                      'Торговая площадка и кошелек, встроенные в приложение, позволяют вам покупать и продавать NFT.'
                      :
                      'The marketplace and wallet built into the application allow you to buy and sell NFTs.'
                  }</p>
                </li>
              </ol>
            </div>
            <div className={styles.picture + classNames({ className: styles.picture_animated, condition: isChartVisible || isAnimated.current })} >
              <picture>
                <source srcSet="/images/revolution-car.webp" type="image/webp" />
                <img src="/images/revolution-car.png" alt="Красивая тесла с зеленой подсветкой " className={styles.car} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
};

export default Block7;
