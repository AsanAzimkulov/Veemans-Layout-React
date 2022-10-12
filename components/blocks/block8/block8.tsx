import Image from "next/image";
import { FunctionComponent, useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import classNames from "../../customs/classNames";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block8.module.css";

interface Props {
}

const Block8: FunctionComponent<Props> = ({ }) => {
  const { language } = useContext(AppContext);

  return (
    <div className={styles["container"] + ' contentWrapper' + classNames({ className: styles['container_rus'], condition: language === 'RUS' })} >
      <div className={styles.anchor} id="pvp-competition"></div>

      <div className={styles.main}>
        <div className={styles.m_rightB}></div>
        <div className={styles.m_rightC}></div>
        <Title1>{
          language === 'RUS'
            ?
            <>
              Спортивные PvP соревнования с реальными <br />пользователями
            </>
            :
            <>Sport PvP competitions<br /> with real users</>
        }</Title1>
        <ul className={styles.markedList}>
          <li className={styles.markedListItem}>
            <h3 className={styles.markedListItemTitle}>
              {
                language === 'RUS'
                  ?
                  'Соревнуйтесь'
                  :
                  'Compete'
              }
            </h3>
            <p className={styles.markedListItemDesc}>

              {
                language === 'RUS'
                  ?
                  'используя свой Veeman, и получайте токены VMN'
                  :
                  'using your Veeman and receive VMN tokens'
              }
            </p>
          </li>
          <li className={styles.markedListItem}>
            <h3 className={styles.markedListItemTitle}>
              {
                language === 'RUS'
                  ?
                  'Выбор соперника'
                  :
                  'Selection of an opponent'
              }
            </h3>
            <p className={styles.markedListItemDesc}>

              {
                language === 'RUS'
                  ?
                  'в каждой игре осуществляется в соответствии с вашим уровнем и характеристиками'
                  :
                  'in each game is carried out in accordance with your level and characteristics'
              }
            </p>
          </li>
          <li className={styles.markedListItem}>
            <h3 className={styles.markedListItemTitle}>
              {
                language === 'RUS'
                  ?
                  'Выигрывайте сражения'
                  :
                  'Win battles'
              }
            </h3>
            <p className={styles.markedListItemDesc}>

              {
                language === 'RUS'
                  ?
                  'улучшая свою статистику и уровень Veeman, чтобы зарабатывать больше'
                  :
                  'by upgrading your Veeman stats and level to earn more'
              }
            </p>
          </li>
        </ul>
        <Title1 type="h3" size="35px">
          {
            language === 'RUS'
              ?
              'Типы игры'
              :
              'Game Types:'
          }</Title1>
        <ul className={styles.cardList}>
          <li className={styles.cardListItem}>
            <img src="/images/CardList1.png" className={styles.cardListItemImage} />
            <div>
              <h3 className={styles.cardListItemTitle}>
                {
                  language === 'RUS'
                    ?
                    'Удача'
                    :
                    'Luck'
                }</h3>
              <p className={styles.cardListItemDesc}>
                {
                  language === 'RUS'
                    ?
                    'Соревнования на удачу'
                    :
                    'competition for luck'
                }</p>
            </div>
          </li>
          <li className={styles.cardListItem}>
            <img src="/images/CardList2.png" className={styles.cardListItemImage} />
            <div>
              <h3 className={styles.cardListItemTitle}>Drag racing</h3>
              <p className={styles.cardListItemDesc}>
                {
                  language === 'RUS'
                    ?
                    'Соревнования в скорости'
                    :
                    'speed competition'
                }</p></div>
          </li>
          <li className={styles.cardListItem}>
            <img src="/images/CardList3.png" className={styles.cardListItemImage} />
            <div>
              <h3 className={styles.cardListItemTitle}>Crash test</h3>
              <p className={styles.cardListItemDesc}>
                {
                  language === 'RUS'
                    ?
                    'Соревнование в силе'
                    :
                    'strength competition'
                }</p>
            </div>
          </li>
        </ul>
      </div>
    </div >
  );
};

export default Block8;
