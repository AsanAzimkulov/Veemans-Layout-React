import { FunctionComponent, useContext, useState } from "react";
import AppContext from "../../../contexts/AppContext";
import classNames from "../../customs/classNames";
import styles from "./button1.module.css";



interface Props {
  children: JSX.Element[] | JSX.Element | string;
  variant: '1' | '2' | '3';
  wide?: boolean,
  src?: string
}

const Button1: FunctionComponent<Props> = ({ children, variant, wide = false, src }) => {
  const { language } = useContext(AppContext);

  const [isHover, setIsHover] = useState<boolean>(false);
  const onHover = () => {
    setIsHover(true);
  }
  const onLeave = () => {
    setIsHover(false);
  }
  const defaultSrc = `./public/whitePaper/Veemans[${language === 'RUS'
    ?
    'rus'
    :
    'eng'
    }].pdf`;

  return (
    <a href={src || defaultSrc} target="_blank" rel="noreferrer">
      <div className={styles.container + classNames({ className: styles.container_hover, condition: isHover }) + classNames({ className: styles.container_wide, condition: wide })} onMouseEnter={onHover} onMouseLeave={onLeave}>
        <svg xmlns="http://www.w3.org/2000/svg" width={265} height={70} viewBox="0 0 265 70" fill="none" className={styles.bgsvg}>
          <path d="M1 51.1548L20 69.5203H1V51.1548Z" fill="url(#paint0_linear_1070_549)" fillOpacity="0.3" />
          <path d="M265 19.2566L246 0.891039H265V19.2566Z" fill="url(#paint1_linear_1070_549)" fillOpacity="0.3" />
          <path d="M7.5 30.1203L35.5624 6.22412H258.5V42.2243L232.708 64.1872H7.5V30.1203Z" stroke="#11D9EB" />
          <path d="M0.5 28.4937L30.0416 0.5H264.5V42.7686L237.346 68.5H0.5V28.4937Z" stroke="url(#paint2_linear_1070_549)" className={styles.p} />
          <defs>
            <filter id="filter0_b_1070_549" x={-29} y="21.1548" width={79} height="78.3655" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation={15} />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1070_549" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1070_549" result="shape" />
            </filter>
            <filter id="filter1_b_1070_549" x={216} y="-29.1089" width={79} height="78.3655" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation={15} />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1070_549" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1070_549" result="shape" />
            </filter>
            <filter id="filter2_b_1070_549" x={-23} y="-24.2759" width={312} height="118.963" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation={15} />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1070_549" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1070_549" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_1070_549" x1="10.5" y1="51.1548" x2="10.5" y2="69.5203" gradientUnits="userSpaceOnUse">
              <stop stopColor="#11D9EB" />
              <stop offset={1} stopColor="#11D9EB" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="paint1_linear_1070_549" x1="255.5" y1="19.2566" x2="255.5" y2="0.891039" gradientUnits="userSpaceOnUse">
              <stop stopColor="#11D9EB" />
              <stop offset={1} stopColor="#11D9EB" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="paint2_linear_1070_549" x1="6.18408" y1="56.9217" x2="261.145" y2="41.4436" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E42BC8" />
              <stop offset="0.52934" stopColor="#5670FD" />
              <stop offset={1} stopColor="#1DCEF4" />
            </linearGradient>
          </defs>
        </svg>
        <div className={styles.wrap1}>
          {/* <div className={styles.wrap2}> */}
          <div className={`${styles.wrap3} ${styles.bg} ${styles[`bg${variant}`]}`}>
            {children}
          </div>
          {/* </div> */}
        </div>
      </div>
    </a >
  );
};

export default Button1;
