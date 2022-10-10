import React, { useContext } from 'react'
import AppContext from '../../../contexts/AppContext'
import classNames from '../../customs/classNames';
import styles from './languageToggle.module.css';

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(AppContext);

  const onChangeLanguage = (e: any) => {
    if (language !== e.currentTarget.value && e.currentTarget.value) {
      setLanguage(e.currentTarget.value)
    }
  }

  return (
    <div className={styles.root + classNames({ className: styles.root_second, condition: language === "RUS" })}>
      <p className={styles.variantText}>ENG</p>
      <div className={styles.button}>
        <div className={styles.wrap}>
          <input type="radio" className={styles.radioButton} id="languageFirst" name='language' value={"ENG"} checked={language === 'ENG'} onChange={onChangeLanguage} />
          <div className={styles.ball}></div>
          <input type="radio" className={styles.radioButton} id="languageSecond" name='language' value={"RUS"} checked={language === 'RUS'} onChange={onChangeLanguage} />
        </div>
      </div>
      <p className={styles.variantText}>RUS</p>
    </div>
  )
}

export default LanguageToggle;
