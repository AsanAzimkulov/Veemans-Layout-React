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
    <li className={styles.root + classNames({className: styles.root_visible, condition: isVisible})} style={{ '--color': color } as React.CSSProperties}>
      <div className={styles.top}>
        <div className={styles.top__text}>
          <h4 className={styles.date}>{date}</h4>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <button className={styles.top__button} onClick={() => setIsVisible(prev => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <circle cx="17.5" cy="17.5" r="17" fill="var(--color)" fillOpacity="0.2" stroke="var(--color)" />
            <path d="M11.666 18.5048V16.4948H16.4944V11.6665H18.5043V16.4948H23.3327V18.5048H18.5043V23.3332H16.4944V18.5048H11.666Z" fill="var(--color)" className={styles.top__buttonCrosshair}/>
          </svg>
        </button>
      </div>
      <div className={styles.content}>
        <ul>
          {
            description.map(item => (
              <li key={item}>{item}</li>
            ))
          }
        </ul>
      </div>
    </li>
  )
}



const Block10: FunctionComponent<Props> = ({ }) => {
  const items: Array<TFaq> = [
    {
      date: 'September-October 2022',
      title: 'Private investment round',
      description: ['l', 'j'],
      color: 'blue'
    }
  ]
  return (
    <div className={styles["container"] + ' contentWrapper'}>
      <Title1>Roadmap</Title1>
      <img className={styles["imgLine"]} src="/images/block10.svg" />
      <ul className={styles.list}>
        {
          items.map(item => (
            <FaqItem date={item.date} title={item.title} description={item.description} color={item.color} key={item.title + item.description} />
          ))
        }
      </ul>
    </div>
  );
};

export default Block10;