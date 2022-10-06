import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import classNames from "../../customs/classNames";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block10.module.css";

interface Props {
}

type TFaq = {
  date: string,
  title: string,
  description: Array<string>,
  color: string
}


const FaqItem = ({ date, title, description, color }: TFaq) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <li className={styles.rootWrapper} style={{ '--color': color } as React.CSSProperties}>
      <div className={styles.root + classNames({ className: styles.root_visible, condition: isVisible })}>
        <div className={styles.top}>
          <div className={styles.top__text}>
            <h4 className={styles.date}>{date}</h4>
            <h3 className={styles.title}>{title}</h3>
          </div>
          <button className={styles.top__button} onClick={() => setIsVisible(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
              <circle cx="17.5" cy="17.5" r="17" fill="var(--color)" fillOpacity="0.2" stroke="var(--color)" />
              <path d="M11.666 18.5048V16.4948H16.4944V11.6665H18.5043V16.4948H23.3327V18.5048H18.5043V23.3332H16.4944V18.5048H11.666Z" fill="var(--color)" className={styles.top__buttonCrosshair} />
            </svg>
          </button>
        </div>
        <div className={styles.content}>
          <ul className={styles.itemList}>
            {
              description.map(item => (
                <li key={item} className={styles.itemListItem}>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </li>
  )
}



const Block10 = () => {
  const items: Array<TFaq> = [
    {
      date: 'September-October 2022',
      title: 'Private investment round',
      description: [
        'Launching the website and social networks',
        'Creating a Light paper of the project',
        'Development of NFT collection',
        'Development of NFT upgrades and accessories',
        'Writing smart contracts for listing NFT collections',
        'Integration with bloggers',
        'Launching a community of the project',
        'UX/UI application development',
      ],
      color: '#C03DD5'
    },
    {
      date: 'November 2022',
      title: 'Private investment round',
      description: [
        'Start of alfa-version of the APP',
        'Testing the system for bugs and finalizing technical solutions',
        'The first drop of the NFT collection, start of sales',
        'Launch of a trading platform for buying and selling Veeman and upgrades',
        'Publication of the White paper of the project',
        'Publication of tokenomics',
      ],
      color: '#A849DE'
    },
    {
      date: 'December 2022',
      title: 'Launching 1.0 version of the APP',
      description: [
        'Meeting of the new Veemans',
        'Adding game mechanics of battles in turn-based mini-games PVP',
        'Signing exchanges for token listing',
        'Listing of the token on DEX and CEX',
        'A public round of selling tokens - pre-sale',
        'Creation of brand NFT collections with bloggers and influencers',
      ],
      color: '#7562F2'
    },
    {
      date: 'January 2023',
      title: 'Launching 2.0 version of the APP',
      description: [
        'Adding game mechanics: creating alliances, capturing territories ',
        'Adding autodealers into the Veemans ecosystem',
        'Launching the staking ',
        'Adding an augmented reality algorithm to work with artifacts on a real map',
        'Adding game quests',
        'Creating a free Veeman Academy for all the users of the APP',
      ],
      color: '#4B83FB'
    },
    {
      date: 'February 2023',
      title: 'Adding a fuction of creating an NFT avatar of a user',
      description: [
        'The appearance of new artifacts for your NFT avatar, enhanced tracking capabilities and WEB 3 interactions',
        'We will add more updates soon'
      ],
      color: '#33A9F8'
    },
    {
      date: 'March 2023',
      title: 'More updates soon',
      description: [
        'Launching beta-version of the product',
        'Ceating a full-fledged NFT navigator in order to encourage people to drive carefully',
      ],
      color: '#1DCEF5'
    },
  ];
  return (
    <div className={styles["container"] + ' contentWrapper'}>
      <Title1>Roadmap</Title1>
      <ol className={styles.list}>
        {
          items.map(item => (
            <FaqItem date={item.date} title={item.title} description={item.description} color={item.color} key={item.title + item.description} />
          ))
        }
      </ol>
    </div>
  );
}



export default Block10;