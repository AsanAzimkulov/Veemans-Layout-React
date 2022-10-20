import React, { useState } from 'react';
import classNames from '../../customs/classNames';
import styles from './index.module.css';

type TProps = {
  onAccept: () => void,
  text: string,
  buttonText: string,
  href: string,
  linkText: string
}

const AcceptPopup: React.FC<TProps> = ({ onAccept, text, buttonText, href, linkText }) => {
  const [visible, setIsVisible] = useState<boolean>(true);

  function handleAccept(){
    setIsVisible(false);
    onAccept();
  }

  return (
    <div className={styles.root + classNames({
      className: styles.root_visible,
      condition: visible
    })}>
      <button className={styles.close} onClick={() => setIsVisible(false)}>
        <svg className={styles.closeIcon} width="10px" height="10px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <desc>Close</desc> <g stroke="none" strokeWidth="1" fill="#000000" fillRule="evenodd"> <rect transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect> <rect transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect> </g> </svg>
      </button>
      <div className={styles.container}>
        <p className={styles.text}>{text}<a className={styles.link} href={href}>{' '}{linkText}</a></p>
        <button className={styles.button} onClick={handleAccept}>{buttonText}</button>
      </div>
    </div>
  )
}

export default AcceptPopup
