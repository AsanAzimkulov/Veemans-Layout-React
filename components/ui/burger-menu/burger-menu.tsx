import Image from "next/image";
import { FunctionComponent, useContext, useState, useEffect } from "react";
import AppContext from "../../../contexts/AppContext";
import OutsideAlerter from "../../customs/OutsideAlerter";
import Link from "next/link";
import styles from "./burger-menu.module.css";
import { useWindowSize } from '../../customs/useWindowDimensions';

type PropsType = {
  cb?: (flag: boolean) => void
}


const BurgerMenu: FunctionComponent<PropsType> = ({ cb }) => {


  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (windowSize.width !== undefined) {
      setIsMobile(windowSize.width <= 991);
    }
  }, [windowSize])


  const { language } = useContext(AppContext);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const onCloseMenu = () => {
    setIsOpened(false);
    if (cb) {
      cb(false);
    }
  }
  const onOpenMenu = () => {
    setIsOpened(true);
    if (cb) {
      cb(true);
    }
  }


  const onClickLink = () => {
    if (isMobile) {
      setIsOpened(false);
    }
  }

  return (
    <OutsideAlerter cb={onCloseMenu} className={`${styles.containerBorder} ${styles.polygon} ${isOpened ? styles.containerBorder_opened : ''}`}>
      <div className={`${styles.container} ${isOpened ? styles.container_opened : ''} ${styles.polygon}`}>
        <div className={styles.menuIcon} onClick={onOpenMenu}>
          <img src="/icons/burger.svg" width={28} alt="" />
        </div>
        <div className={styles.menuArea}>
          <img src="/icons/crosshair-blue.svg" alt="Close menu" className={styles.close} onClick={onCloseMenu} />
          <a onClick={onClickLink} href="#about" className={styles.menuLink}>{(language === 'RUS') ? 'О компании' : 'About'}</a>
          <a onClick={onClickLink} href="#nft-veeman" className={styles.menuLink}>{(language === 'RUS') ? 'NFT Veeman' : 'NFT Veeman'}</a>
          <a onClick={onClickLink} href="#ecosystem" className={styles.menuLink}>{(language === 'RUS') ? 'Экосистема' : 'Ecosystem'}</a>
          <a onClick={onClickLink} href="#pvp-competition" className={styles.menuLink}>{(language === 'RUS') ? 'PVP соревнования' : 'PVP competition'}</a>
          <a onClick={onClickLink} href="#road-map" className={styles.menuLink}>{(language === 'RUS') ? 'Дорожная карта проекта' : 'Road Map'}</a>
        </div>
        <div className={styles["first__apps-block"]}>
          <a href="">
            <Image
              src="/icons/to-app-store.svg"
              width="157"
              height="46"
              alt=""
            ></Image>
          </a>
          <a href="">
            <Image
              src="/icons/to-google-play.svg"
              width="157"
              height="46"
              alt=""
            ></Image>
          </a>
        </div>
        <div className={styles.socials}>
          <ul className={styles.socialsList}>
            <li className={styles.socialsItem}>
              <a href="https://instagram.com/veemans.io" target={'_blank'} rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 28 28" fill="none">
                  <circle cx="13.5248" cy="13.5248" r="13.2748" fill="#6F92ED" fillOpacity="0.1" stroke="url(#paint0_linear_1098_2688)" strokeWidth="0.5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.8693 8.95652C19.1693 9.2564 19.4034 9.61561 19.5566 10.0112C19.7332 10.4804 19.8274 10.9767 19.8351 11.4781C19.8722 12.1113 19.8722 12.3164 19.8722 13.9328C19.8722 15.5492 19.8636 15.7511 19.8351 16.3876C19.8252 16.8825 19.7319 17.3708 19.5579 17.834C19.4045 18.2295 19.1704 18.5887 18.8704 18.8886C18.5704 19.1886 18.2112 19.4227 17.8157 19.5761C17.3527 19.7495 16.8637 19.8433 16.3694 19.8533C15.7375 19.8897 15.5304 19.8897 13.9146 19.8897C12.2988 19.8897 12.097 19.8811 11.4598 19.8533C10.9645 19.837 10.4756 19.7363 10.0141 19.5556C9.6185 19.4025 9.25916 19.1685 8.95907 18.8686C8.65898 18.5688 8.42474 18.2096 8.27132 17.8141C8.0973 17.3503 8.00401 16.862 7.99408 16.3671C7.95703 15.7338 7.95703 15.5281 7.95703 13.9123C7.95703 12.2959 7.96563 12.0941 7.99408 11.4575C8.00375 10.9632 8.0975 10.4741 8.27132 10.0112C8.42431 9.61551 8.65833 9.2562 8.95834 8.9563C9.25836 8.6564 9.61775 8.42252 10.0135 8.26968C10.4758 8.0954 10.9645 8.00142 11.4585 7.99178C12.0904 7.95605 12.2975 7.95605 13.9133 7.95605C15.529 7.95605 15.7309 7.96399 16.368 7.99178C16.8624 8.00193 17.3515 8.0959 17.8144 8.26968C18.21 8.4227 18.5693 8.65664 18.8693 8.95652ZM18.5449 17.435C18.6768 17.0772 18.7464 16.6994 18.7507 16.3181V16.3188H18.7579C18.7864 15.6862 18.7864 15.5129 18.7864 13.9012V13.9011C18.7864 12.2886 18.7791 12.1119 18.7507 11.4827C18.7445 11.1057 18.6749 10.7323 18.5449 10.3784C18.4455 10.121 18.2933 9.88734 18.0982 9.69227C17.9032 9.49719 17.6695 9.34506 17.4121 9.24563C17.0584 9.114 16.6846 9.04439 16.3072 9.03985C15.6673 9.00346 15.5019 9.00346 13.8895 9.00346C12.277 9.00346 12.1003 9.0114 11.4711 9.03985C11.094 9.04512 10.7205 9.11471 10.3668 9.24563C9.84474 9.44545 9.43121 9.85634 9.2294 10.3784C9.0975 10.736 9.0279 11.1135 9.02362 11.4946C8.98856 12.1357 8.98856 12.3005 8.98856 13.913C8.98856 15.5248 8.99517 15.7021 9.02362 16.3307C9.02979 16.7077 9.09935 17.081 9.2294 17.435C9.3292 17.6928 9.48201 17.9267 9.67793 18.1217C9.87386 18.3168 10.1085 18.4685 10.3668 18.5671C10.7203 18.6986 11.0939 18.7682 11.4711 18.7728C12.1116 18.8092 12.2763 18.8092 13.8895 18.8092C15.5013 18.8092 15.6786 18.802 16.3072 18.7728C16.6845 18.768 17.0583 18.6984 17.4121 18.5671C17.6695 18.4679 17.9032 18.3159 18.0983 18.1209C18.2934 17.9259 18.4455 17.6923 18.5449 17.435ZM17.0902 11.4492C17.4841 11.4492 17.8034 11.1299 17.8034 10.7359C17.8034 10.342 17.4841 10.0227 17.0902 10.0227C16.6962 10.0227 16.3769 10.342 16.3769 10.7359C16.3769 11.1299 16.6962 11.4492 17.0902 11.4492ZM13.9111 10.8486C13.0996 10.8486 12.3214 11.171 11.7477 11.7447C11.1739 12.3185 10.8516 13.0967 10.8516 13.9081C10.8516 14.7196 11.1739 15.4978 11.7477 16.0715C12.3214 16.6453 13.0996 16.9676 13.9111 16.9676C14.7225 16.9676 15.5007 16.6453 16.0745 16.0715C16.6482 15.4978 16.9706 14.7196 16.9706 13.9081C16.9706 13.0967 16.6482 12.3185 16.0745 11.7447C15.5007 11.171 14.7225 10.8486 13.9111 10.8486ZM13.9111 15.8951C13.3839 15.8951 12.8784 15.6857 12.5056 15.3129C12.1329 14.9402 11.9234 14.4346 11.9234 13.9075C11.9234 13.3803 12.1329 12.8748 12.5056 12.502C12.8784 12.1293 13.3839 11.9199 13.9111 11.9199C14.4382 11.9199 14.9438 12.1293 15.3165 12.502C15.6893 12.8748 15.8987 13.3803 15.8987 13.9075C15.8987 14.4346 15.6893 14.9402 15.3165 15.3129C14.9438 15.6857 14.4382 15.8951 13.9111 15.8951Z" fill="white" />
                  <defs>
                    <linearGradient id="paint0_linear_1098_2688" x1="2.06363e-07" y1="27.0497" x2="28.9644" y2="24.8147" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00124224" stopColor="#E42BC8" />
                      <stop offset="0.472448" stopColor="#4663FE" />
                      <stop offset="1" stopColor="#1DCEF4" />
                    </linearGradient>
                    <linearGradient xmlns="http://www.w3.org/2000/svg" id="paint0_linear_1098_2" x1="14.5072" y1="0" x2="14.5072" y2="27.0496" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#85208B" />
                      <stop offset="1" stopColor="#5B359C" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </li>
            <li className={styles.socialsItem}>
              <a href="https://twitter.com/VeemansDev" target={'_blank'} rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <circle cx="18.9269" cy="18.7844" r="18.5344" fill="#6F92ED" fillOpacity="0.1" stroke="url(#paint0_linear_1098_2759)" strokeWidth="0.5" />
                  <path d="M26.6643 13.7283C26.0548 13.9941 25.4 14.1737 24.7116 14.2549C25.4219 13.8367 25.9533 13.1784 26.2066 12.403C25.5393 12.7931 24.809 13.0676 24.0474 13.2147C23.5352 12.6766 22.8569 12.3199 22.1176 12.2C21.3784 12.0802 20.6196 12.2039 19.9591 12.5519C19.2985 12.8999 18.7733 13.4528 18.4648 14.1247C18.1563 14.7966 18.0818 15.5499 18.253 16.2677C16.9009 16.2009 15.5781 15.855 14.3706 15.2526C13.1631 14.6502 12.0978 13.8046 11.2439 12.7708C10.9519 13.2664 10.784 13.8411 10.784 14.4532C10.7837 15.0041 10.9216 15.5466 11.1854 16.0326C11.4493 16.5185 11.8309 16.9329 12.2965 17.2389C11.7565 17.222 11.2285 17.0784 10.7563 16.8201V16.8632C10.7562 17.6359 11.0279 18.3849 11.5251 18.983C12.0223 19.5811 12.7145 19.9915 13.4842 20.1446C12.9832 20.278 12.4581 20.2976 11.9483 20.2021C12.1655 20.867 12.5885 21.4484 13.1581 21.865C13.7278 22.2815 14.4155 22.5124 15.1251 22.5252C13.9205 23.4557 12.4329 23.9605 10.9016 23.9583C10.6303 23.9583 10.3593 23.9427 10.0898 23.9116C11.6443 24.8951 13.4537 25.4171 15.3017 25.4151C21.5575 25.4151 24.9774 20.3163 24.9774 15.8941C24.9774 15.7505 24.9737 15.6054 24.9671 15.4617C25.6323 14.9883 26.2065 14.4021 26.6628 13.7305L26.6643 13.7283Z" fill="white" />
                  <defs>
                    <linearGradient id="paint0_linear_1098_2759" x1="0.142578" y1="37.5687" x2="40.3706" y2="34.4647" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00124224" stopColor="#E42BC8" />
                      <stop offset="0.472448" stopColor="#4663FE" />
                      <stop offset="1" stopColor="#1DCEF4" />
                    </linearGradient>
                    <linearGradient xmlns="http://www.w3.org/2000/svg" id="paint0_linear_ff" x1="14.5072" y1="0" x2="14.5072" y2="27.0496" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#85208B" />
                      <stop offset="1" stopColor="#5B359C" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </li>
            <li className={styles.socialsItem}>
              <a href="https://t.me/veemans" target={'_blank'} rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <circle cx="19.0744" cy="18.7844" r="18.5344" fill="#6F92ED" fillOpacity="0.1" stroke="url(#paint0_linear_1098_2763)" strokeWidth="0.5" />
                  <path d="M26.7836 12.2071L23.765 24.6484C23.623 25.2343 22.966 25.5362 22.4274 25.258L18.6096 23.2871L16.8043 26.2405C16.3131 27.0455 15.0702 26.6963 15.0702 25.7551V22.4642C15.0702 22.2098 15.1767 21.9671 15.3602 21.7895L22.8003 14.6869C22.7943 14.5982 22.6996 14.5213 22.605 14.5863L13.7268 20.7655L10.7438 19.2266C10.0454 18.8655 10.075 17.8534 10.797 17.5398L25.5054 11.1299C26.2097 10.822 26.9674 11.4554 26.7839 12.207L26.7836 12.2071Z" fill="white" />
                  <defs>
                    <linearGradient id="paint0_linear_1098_2763" x1="0.290039" y1="37.5687" x2="40.5181" y2="34.4647" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00124224" stopColor="#E42BC8" />
                      <stop offset="0.472448" stopColor="#4663FE" />
                      <stop offset="1" stopColor="#1DCEF4" />
                    </linearGradient>
                  </defs>
                </svg>              </a>
            </li>
            <li className={styles.socialsItem}>
              <a href="https://discord.com/invite/Veemans" target={'_blank'} rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <circle cx="19.215" cy="18.8896" r="18.5344" fill="#6F92ED" fillOpacity="0.1" stroke="url(#paint0_linear_1098_2768)" strokeWidth="0.5" />
                  <path d="M25.8235 13.415C24.6604 12.8813 23.4131 12.4881 22.109 12.2629C22.0852 12.2586 22.0615 12.2694 22.0493 12.2911C21.8889 12.5764 21.7112 12.9487 21.5868 13.2412C20.1841 13.0312 18.7887 13.0312 17.4148 13.2412C17.2903 12.9421 17.1062 12.5764 16.945 12.2911C16.9328 12.2701 16.9091 12.2593 16.8853 12.2629C15.582 12.4874 14.3347 12.8806 13.1708 13.415C13.1608 13.4193 13.1521 13.4266 13.1464 13.436C10.7806 16.9705 10.1325 20.4181 10.4504 23.823C10.4519 23.8396 10.4612 23.8555 10.4742 23.8657C12.0351 25.012 13.547 25.7079 15.031 26.1691C15.0547 26.1764 15.0799 26.1677 15.095 26.1481C15.446 25.6688 15.7589 25.1633 16.0272 24.6318C16.043 24.6007 16.0279 24.5637 15.9956 24.5514C15.4992 24.3631 15.0267 24.1336 14.572 23.8729C14.5361 23.8519 14.5332 23.8005 14.5663 23.7759C14.662 23.7042 14.7576 23.6296 14.849 23.5543C14.8655 23.5405 14.8885 23.5376 14.908 23.5463C17.8945 24.9099 21.1278 24.9099 24.0791 23.5463C24.0986 23.5369 24.1216 23.5398 24.1389 23.5536C24.2302 23.6289 24.3259 23.7042 24.4223 23.7759C24.4554 23.8005 24.4532 23.8519 24.4172 23.8729C23.9626 24.1387 23.49 24.3631 22.993 24.5507C22.9606 24.563 22.9462 24.6007 22.9621 24.6318C23.2361 25.1626 23.549 25.668 23.8936 26.1474C23.908 26.1677 23.9338 26.1764 23.9576 26.1691C25.4487 25.7079 26.9607 25.012 28.5216 23.8657C28.5353 23.8555 28.5439 23.8403 28.5453 23.8237C28.9258 19.8873 27.908 16.4679 25.8472 13.4367C25.8422 13.4266 25.8336 13.4193 25.8235 13.415ZM16.4732 21.7497C15.574 21.7497 14.8332 20.9243 14.8332 19.9105C14.8332 18.8967 15.5597 18.0712 16.4732 18.0712C17.3939 18.0712 18.1276 18.9039 18.1132 19.9105C18.1132 20.9243 17.3867 21.7497 16.4732 21.7497ZM22.537 21.7497C21.6378 21.7497 20.8969 20.9243 20.8969 19.9105C20.8969 18.8967 21.6234 18.0712 22.537 18.0712C23.4577 18.0712 24.1914 18.9039 24.177 19.9105C24.177 20.9243 23.4577 21.7497 22.537 21.7497Z" fill="white" />
                  <defs>
                    <linearGradient id="paint0_linear_1098_2768" x1="0.430664" y1="37.674" x2="40.6587" y2="34.57" gradientUnits="userSpaceOnUse">
                      <stop offset="0.00124224" stopColor="#E42BC8" />
                      <stop offset="0.472448" stopColor="#4663FE" />
                      <stop offset="1" stopColor="#1DCEF4" />
                    </linearGradient>
                  </defs>
                </svg>              </a>
            </li>
          </ul>
        </div>
      </div>
    </OutsideAlerter>
  );
};

export default BurgerMenu;
