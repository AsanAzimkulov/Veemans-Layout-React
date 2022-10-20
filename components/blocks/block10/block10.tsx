import Image from "next/image";
import React, { FunctionComponent, useContext, useState } from "react";
import AppContext from "../../../contexts/AppContext";
import classNames from "../../customs/classNames";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block10.module.css";

interface Props {
}

type TFaq = {
  date: string,
  description: Array<string>,
  color: string
}


const FaqItem = ({ date, description, color }: TFaq) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <li className={styles.rootWrapper} style={{ '--color': color } as React.CSSProperties}>
      <div className={styles.root + classNames({ className: styles.root_visible, condition: isVisible })}>
        <div className={styles.top}>
          <div className={styles.top__text}>
            <h4 className={styles.date}>{date}</h4>
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
  const { language } = useContext(AppContext);
  // const items: Array<TFaq> = [
  //   {
  //     date: 'September-October 2022',
  //     title: 'Private investment round',
  //     description: [
  //       'Launching the website and social networks',
  //       'Creating a Light paper of the project',
  //       'Development of NFT collection',
  //       'Development of NFT upgrades and accessories',
  //       'Writing smart contracts for listing NFT collections',
  //       'Integration with bloggers',
  //       'Launching a community of the project',
  //       'UX/UI application development',
  //     ],
  //     color: '#C03DD5'
  //   },
  //   {
  //     date: 'November 2022',
  //     title: 'Private investment round',
  //     description: [
  //       'Start of alfa-version of the APP',
  //       'Testing the system for bugs and finalizing technical solutions',
  //       'The first drop of the NFT collection, start of sales',
  //       'Launch of a trading platform for buying and selling Veeman and upgrades',
  //       'Publication of the White paper of the project',
  //       'Publication of tokenomics',
  //     ],
  //     color: '#A849DE'
  //   },
  //   {
  //     date: 'December 2022',
  //     title: 'Launching 1.0 version of the APP',
  //     description: [
  //       'Meeting of the new Veemans',
  //       'Adding game mechanics of battles in turn-based mini-games PVP',
  //       'Signing exchanges for token listing',
  //       'Listing of the token on DEX and CEX',
  //       'A public round of selling tokens - pre-sale',
  //       'Creation of brand NFT collections with bloggers and influencers',
  //     ],
  //     color: '#7562F2'
  //   },
  //   {
  //     date: 'January 2023',
  //     title: 'Launching 2.0 version of the APP',
  //     description: [
  //       'Adding game mechanics: creating alliances, capturing territories ',
  //       'Adding autodealers into the Veemans ecosystem',
  //       'Launching the staking ',
  //       'Adding an augmented reality algorithm to work with artifacts on a real map',
  //       'Adding game quests',
  //       'Creating a free Veeman Academy for all the users of the APP',
  //     ],
  //     color: '#4B83FB'
  //   },
  //   {
  //     date: 'February 2023',
  //     title: 'Adding a fuction of creating an NFT avatar of a user',
  //     description: [
  //       'The appearance of new artifacts for your NFT avatar, enhanced tracking capabilities and WEB 3 interactions',
  //       'We will add more updates soon'
  //     ],
  //     color: '#33A9F8'
  //   },
  //   {
  //     date: 'March 2023',
  //     title: 'More updates soon',
  //     description: [
  //       'Launching beta-version of the product',
  //       'Ceating a full-fledged NFT navigator in order to encourage people to drive carefully',
  //     ],
  //     color: '#1DCEF5'
  //   },
  // ];
  // const rusItems: Array<TFaq> = [
  //   {
  //     date: 'Сентябрь-октябрь 2022',
  //     title: 'Раунд частных инвестиций #1',
  //     description: [
  //       'Запуск веб-сайта и социальных сетей',
  //       'Создание light версии проекта',
  //       'Разработка коллекции NFT',
  //       'Разработка обновлений и аксессуаров для NFT',
  //       'Написание смарт-контрактов для листинга коллекций NFT',
  //       'Интеграция с блоггерами',
  //       'Запуск сообщества проекта',
  //       'Разработка приложений UX/UI',
  //     ],
  //     color: '#C03DD5'
  //   },
  //   {
  //     date: 'Ноябрь 2022',
  //     title: 'Раунд частных инвестиций #2',
  //     description: [
  //       'Запуск альфа-версии приложения',
  //       'Тестирование системы на наличие ошибок и доработка технических решений',
  //       'Первый выпуск коллекции NFT, начало продаж',
  //       'Запуск торговой платформы для покупки и продажи Veeman и апгрейдов',
  //       'Публикация White paper проекта',
  //       'Публикация токеномики',
  //     ],
  //     color: '#A849DE'
  //   },
  //   {
  //     date: 'Декабрь 2022',
  //     title: 'Запуск версии приложения 1.0',
  //     description: [
  //       'Встреча новых Veemans',
  //       'Добавление игровой механики сражений в пошаговых мини-играх PVP',
  //       'Подписание бирж для листинга токенов',
  //       'Листинг токена на DEX и CEX',
  //       'Публичный раунд продажи токенов - предварительная продажа',
  //       'Создание коллекций бренда NFT совместно с блогерами и инфлюенсерами',
  //     ],
  //     color: '#7562F2'
  //   },
  //   {
  //     date: 'Январь 2023',
  //     title: 'Запуск версии приложения 2.0',
  //     description: [
  //       'Добавление игровой механики: создание альянсов, захват территорий',
  //       'Добавление автодилеров в экосистему Veemans',
  //       'Запуск процесса размещения ставок',
  //       'Добавление алгоритма дополненной реальности для работы с артефактами на реальной карте',
  //       'Добавление игровых квестов',
  //       'Создание бесплатной академии Veeman для всех пользователей приложения',
  //     ],
  //     color: '#4B83FB'
  //   },
  //   {
  //     date: 'Февраль 2023',
  //     title: 'Добавление функции создания NFT аватара пользователя',
  //     description: [
  //       'Появление новых артефактов для вашего аватара NFT, расширенные возможности отслеживания и взаимодействия с WEB 3',
  //       'Мы добавим больше обновлений в ближайшее время',
  //     ],
  //     color: '#33A9F8'
  //   },
  //   {
  //     date: 'Март 2023',
  //     title: 'Появление новых обновлений',
  //     description: [
  //       'Запуск бета-версии продукта',
  //       'Создание полноценного навигатора NFT для того, чтобы побудить людей к осторожному вождению',
  //     ],
  //     color: '#1DCEF5'
  //   },
  // ];


  const items: Array<TFaq> = [
    {
      date: 'September',
      description: [
        'Launching site and social media ',
        'Creating and publishing lightpaper of the project',
        'Creating NFT collection',
        'Developing NFT upgrades and accessories',
      ],
      color: '#C03DD5'
    },
    {
      date: 'November',
      description: [
        'Launching Community Project',
        'Writing smart-contract for listing NFT collection',
        'Publishing tokenomics',
        'Launching marketing campaign',
        'Developing UX/UI for the app',
      ],
      color: '#A849DE'
    },
    {
      date: 'December',
      description: [
        'Publishing whitepaper of the project',
        'Starting sales of the NFT collection',
        'Bloggers integration',
        'Making arrangements with DEX/CEX marketplaces about token listing',
      ],
      color: '#7562F2'
    },
    {
      date: 'January',
      description: [
        'Launching Alpha version of the app: Garage, GPS Tracker, City Map, Minting',
        'Creating free Veemans Academy for all community members',
      ],
      color: '#4B83FB'
    },
    {
      date: 'February',
      description: [
        'TCreating free Veemans Academy for all community members Launching Beta version of the app',
        'Testing app for bugs and finalizing tech decisions',
        'Launching our own NFT Marketplace for buying and selling veeman vehicles and tuning',
        'Adding gameplay mechanics for turn-based PvP mini-battles'
      ],
      color: '#33A9F8'
    },
    {
      date: 'March',
      description: [
        'Launching 1.0 version of the app',
        'Adding gameplay mechanics: creating alliances, capturing territories',
        'Listing token on DEX and CEX',
        'Adding function of creating an NFT user avatar',
        'More updates are coming soon!'
      ],
      color: '#1DCEF5'
    },
  ];
  const rusItems: Array<TFaq> = [
    {
      date: 'Сентябрь-октябрь 2022',
      description: [
        'Запуск веб-сайта и социальных сетей',
        'Создание light версии проекта',
        'Разработка коллекции NFT',
        'Разработка обновлений и аксессуаров для NFT',
        'Написание смарт-контрактов для листинга коллекций NFT',
        'Интеграция с блоггерами',
        'Запуск сообщества проекта',
        'Разработка приложений UX/UI',
      ],
      color: '#C03DD5'
    },
    {
      date: 'Ноябрь 2022',
      description: [
        'Запуск альфа-версии приложения',
        'Тестирование системы на наличие ошибок и доработка технических решений',
        'Первый выпуск коллекции NFT, начало продаж',
        'Запуск торговой платформы для покупки и продажи Veeman и апгрейдов',
        'Публикация White paper проекта',
        'Публикация токеномики',
      ],
      color: '#A849DE'
    },
    {
      date: 'Декабрь 2022',
      description: [
        'Встреча новых Veemans',
        'Добавление игровой механики сражений в пошаговых мини-играх PVP',
        'Подписание бирж для листинга токенов',
        'Листинг токена на DEX и CEX',
        'Публичный раунд продажи токенов - предварительная продажа',
        'Создание коллекций бренда NFT совместно с блогерами и инфлюенсерами',
      ],
      color: '#7562F2'
    },
    {
      date: 'Январь 2023',
      description: [
        'Добавление игровой механики: создание альянсов, захват территорий',
        'Добавление автодилеров в экосистему Veemans',
        'Запуск процесса размещения ставок',
        'Добавление алгоритма дополненной реальности для работы с артефактами на реальной карте',
        'Добавление игровых квестов',
        'Создание бесплатной академии Veeman для всех пользователей приложения',
      ],
      color: '#4B83FB'
    },
    {
      date: 'Февраль 2023',
      description: [
        'Появление новых артефактов для вашего аватара NFT, расширенные возможности отслеживания и взаимодействия с WEB 3',
        'Мы добавим больше обновлений в ближайшее время',
      ],
      color: '#33A9F8'
    },
    {
      date: 'Март 2023',
      description: [
        'Запуск бета-версии продукта',
        'Создание полноценного навигатора NFT для того, чтобы побудить людей к осторожному вождению',
      ],
      color: '#1DCEF5'
    },
  ];


  return (
    <div className={styles["container"] + ' contentWrapper' + classNames({ className: styles['container_rus'], condition: language === 'RUS' })} >
      <div className={styles.anchor} id="road-map"></div>
      <Title1>{
        language === 'RUS'
          ?
          'Дорожная карта'
          :
          'Roadmap'
      }</Title1>
      <ol className={styles.list}>
        {
          (language === 'RUS' ?
            rusItems
            :
            items).map(item => (
              <FaqItem date={item.date}  description={item.description} color={item.color} key={item.description[0]} />
            ))
        }
      </ol>
    </div>
  );
}



export default Block10;