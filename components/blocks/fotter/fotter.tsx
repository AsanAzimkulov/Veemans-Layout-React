import Image from "next/image";
import { FunctionComponent, useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import classNames from "../../customs/classNames";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./fotter.module.css";

interface Props {
}

const Fotter: FunctionComponent<Props> = ({ }) => {
  const { language } = useContext(AppContext);

  return (
    <div className={styles.container + classNames({ className: styles.container_rus, condition: language === 'RUS' })}>
      <div className={styles.wrapper}>

        <div className={styles.topArea}>
          <img className={styles.logo} src="/logo.png" alt=""></img>
          <div className={styles.whitePaperIcon + " " + styles.topAreaButton} >
            <Button1 variant="2"> Paper</Button1>
          </div>
          <div className={styles.topAreaButton + " " + styles.discordButton}>
            <Button1 variant="2" src={'https://discord.com/invite/Veemans'}>{
              language === 'RUS'
                ?
                'DISCORD'
                :
                'JOIN DISCORD'
            }</Button1>
          </div>
        </div>

        <img className={styles.line} src="/images/line.svg" />

        <div className={styles.bottomArea}>
          <div className={styles.bottomCell + ' ' + styles.bottomCellFirst}>Copyright © 2022 Veemans</div>
          <div className={styles.bottomCell + ' ' + styles.bottomCellMiddle}>
            <div className={styles.block}>
              <a href="https://t.me/veemans" target={'_blank'} rel="noreferrer"><img src="/icons/ftelegram.svg" /></a>
              <a href="https://twitter.com/VeemansDev" target={'_blank'} rel="noreferrer">              <img src="/icons/ftwitter.svg" />
              </a>
              <a href="https://www.youtube.com/channel/UCctVthDOeCV1bCDLq-rfxEQ" target={'_blank'} rel="noreferrer">              <img src="/icons/fyoutube.png" style={{ width: 21, height: 17 }} />
              </a>

              <a href="https://discord.com/invite/Veemans" target={'_blank'} rel="noreferrer">              <img src="/icons/fdiscord.svg" />
              </a>

            </div>
          </div>
          <div className={styles.bottomCell + ' ' + styles.bottomCellLast}>
            <a href="#" target={'_blank'} rel="noreferrer">Cookies Policy</a>
            <a href="#" target={'_blank'} rel="noreferrer">{
              language === 'RUS'
                ?
                'Политика конфиденциальности'
                :
                'Privacy & Policy'
            }</a>
            <a href="#" target={'_blank'} rel="noreferrer">{
              language === 'RUS'
                ?
                'Правила и условия'
                :
                'Terms & Condition'
            }</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
