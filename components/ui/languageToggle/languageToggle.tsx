import React, { useContext } from 'react'
import AppContext from '../../../contexts/AppContext'
import classNames from '../../customs/classNames';
import styles from './languageToggle.module.css';

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(AppContext);

  const onChangeLanguage = (e: any) => {
    setLanguage(language === 'ENG' ? 'RUS' : 'ENG')
  }

  return (
    <div className={styles.root + classNames({ className: styles.root_second, condition: language === "RUS" })}>
      <p className={styles.variantText}>ENG</p>
      <div className={styles.button}>
        <button className={styles.wrap} onClick={onChangeLanguage}>
          <input type="radio" className={styles.radioButton} id="languageFirst" name='language' value={"ENG"} checked={language === 'ENG'} />
          <div className={styles.ball}></div>
          <input type="radio" className={styles.radioButton} id="languageSecond" name='language' value={"RUS"} checked={language === 'RUS'} />
        </button>
      </div>
      <p className={styles.variantText}>RUS</p>
    </div>
  )
}

export default LanguageToggle;
