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
      <input type="radio" className={styles.radioButton} id="languageFirst" name='language' value={"ENG"} checked={language === 'ENG'} onChange={onChangeLanguage} />
      <label className={styles.variantText} htmlFor="languageFirst">ENG</label>
      <div className={styles.button}>
        <div className={styles.wrap}>
          <div className={styles.ball}></div>
        </div>
      </div>
      <input type="radio" className={styles.radioButton} id="languageSecond" name='language' value={"RUS"} checked={language === 'RUS'} onChange={onChangeLanguage} />
      <label className={styles.variantText} htmlFor="languageSecond">RUS</label>
    </div>
  )
}

export default LanguageToggle;
