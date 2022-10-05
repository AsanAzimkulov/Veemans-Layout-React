import Image from "next/image";
import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block7.module.css";
import { useIsVisible } from 'react-is-visible';
import classNames from "../../customs/classNames";
import { useWindowSize } from "../../customs/useWindowDimensions";

interface Props {
}



const Block7: FunctionComponent<Props> = ({ }) => {

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
    }

  }
  const isAnimated = useRef<boolean>(false);

  const anchorRef = useRef<HTMLLIElement>(null);

  const isChartVisible = useIsVisible(anchorRef);

  if (isChartVisible) isAnimated.current = true;
  return (

    <div className={styles["container"] + ' contentWrapper'}>
      <div className={styles.block}>

        <Title1>Elements of the Veemans Ecosystem</Title1>
        <div className={styles.contentB}>
        <div className={styles.content} >
          <div className={styles.listWrap} onScroll={onScroll} ref={scrollElement}>
            <ol className={styles.list}>
              <li className={styles.listItem}>
                <h3 className={styles.listItemTitle}>Alliances</h3>
                <p className={styles.listItemDesc}>Create your own alliances in your city, capture the streets of the territory and charge other players for travel.</p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.listItemTitle}>Car Dealers</h3>
                <p className={styles.listItemDesc}>Become a car dealer and sell NFT cars to other users on our marketplace.</p>
              </li>
              <li className={styles.listItem} ref={anchorRef}>
                <h3 className={styles.listItemTitle}>Augmented reality</h3>
                <p className={styles.listItemDesc}>Enjoy your amazing car through your phone.</p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.listItemTitle}>Garage</h3>
                <p className={styles.listItemDesc}>Upgrade your veeman in your personal garage to raise more tokens from travelling.</p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.listItemTitle}>Quests</h3>
                <p className={styles.listItemDesc}>Find tasks on the map and complete quests in augmented reality.</p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.listItemTitle}>Car Sharing</h3>
                <p className={styles.listItemDesc}>You don&rsquo;t have your own car or you don&rsquo;t travel much? No problem, just buy NFT Veeman, rent it out and earn income.</p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.listItemTitle}>PvP - Competitions</h3>
                <p className={styles.listItemDesc}>Take part in tourmament races and get prizes and bonuses.</p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.listItemTitle}>Marketplace</h3>
                <p className={styles.listItemDesc}>The marketplace and wallet built into the application allow you to buy and sell NFTs.</p>
              </li>
            </ol>
          </div>
          <div className={styles.picture + classNames({ className: styles.picture_animated, condition: isChartVisible || isAnimated.current })} >
            <img src="/images/revolution-car.png" alt="Красивая тесла с зеленой подсветкой " className={styles.car} />
          </div>
        </div>
        </div>
      </div>
    </div >

  );
};

export default Block7;
